'use client';

import { useState, useMemo, useEffect } from 'react';
import suppliersData from '@/data/suppliers.json';
import { getSupplierVerificationSources } from '@/app/utils/verificationLinks';
import {
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  MapPinIcon,
  FireIcon,
  BuildingOffice2Icon,
  CheckIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ArrowsRightLeftIcon,
  XMarkIcon,
  HeartIcon,
  FunnelIcon,
  DocumentCheckIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { ExclamationCircleIcon as ExclamationCircleSolid, StarIcon, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

type Supplier = typeof suppliersData[0];
type TabType = 'overview' | 'services' | 'trackRecord' | 'contact';

// Service categorization helper
const categorizeServices = (services: string[]) => {
  const coreServices = ['Furniture Sales', 'Refurbishment', 'Custom Design', 'Quality Inspection', 'Reuse Sales', 'Sourcing'];
  const supportServices = ['Delivery', 'Installation', 'Project Management', 'Consulting', 'Storage', 'Logistics Coordination', 'Warehousing', 'Inventory Management', 'Design Consultancy', 'Pickup Services'];

  const core = services.filter(s => coreServices.some(cs => s.includes(cs)));
  const support = services.filter(s => supportServices.some(ss => s.includes(ss)));
  const other = services.filter(s => !core.includes(s) && !support.includes(s));

  return { core, support: [...support, ...other] };
};

// Quick decision helper
const getQuickDecisionIndicators = (supplier: Supplier) => {
  const inventory = supplier.capabilities?.inventory || '';
  const leadTime = supplier.capabilities?.leadTime || '';
  const hasHotelExperience = (supplier.hospitalityReadiness?.strengths || []).length > 0;

  const inventorySize = inventory.includes('65,000') || inventory.toLowerCase().includes('large') ? 'Large' :
                       inventory.toLowerCase().includes('medium') ? 'Medium' : 'Standard';

  const leadTimeWeeks = leadTime.match(/\d+/)?.[0] || '4+';
  const deliverySpeed = parseInt(leadTimeWeeks) <= 2 ? 'Fast' : parseInt(leadTimeWeeks) <= 4 ? 'Standard' : 'Slow';

  return {
    inventorySize,
    inventoryLabel: inventory || 'Not specified',
    deliverySpeed,
    deliveryLabel: leadTime || 'Contact for details',
    hotelReady: hasHotelExperience,
    tier: supplier.hospitalityReadiness?.tier || 'No tier'
  };
};

// Supplier Card with Tabs Component
function SupplierCard({
  supplier,
  isComparing,
  onCompareToggle,
  isFavorite,
  onFavoriteToggle
}: {
  supplier: Supplier;
  isComparing: boolean;
  onCompareToggle: (id: string) => void;
  isFavorite: boolean;
  onFavoriteToggle: (id: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const { core, support } = categorizeServices(supplier.services || []);
  const indicators = getQuickDecisionIndicators(supplier);

  // Merge all strengths with hotel-specific markers
  const allStrengths = [
    ...(supplier.hospitalityReadiness?.strengths || []).map(s => ({ text: s, isHotel: true })),
    ...(supplier.strengths || []).map(s => ({ text: s, isHotel: false }))
  ];

  const uniqueStrengths = allStrengths.reduce((acc, curr) => {
    const existing = acc.find(item => item.text.toLowerCase() === curr.text.toLowerCase());
    if (!existing) {
      acc.push(curr);
    } else if (curr.isHotel && !existing.isHotel) {
      acc[acc.indexOf(existing)] = curr;
    }
    return acc;
  }, [] as typeof allStrengths);

  const allGaps = [
    ...(supplier.hospitalityReadiness?.gaps || []),
    ...(supplier.gaps || [])
  ];
  const uniqueGaps = [...new Set(allGaps)];

  const getTierBorderClass = (tier?: string) => {
    if (tier === 'Tier 1') return 'border-l-4 border-emerald-500';
    if (tier === 'Tier 2') return 'border-l-4 border-blue-400';
    if (tier === 'Tier 3') return 'border-l-2 border-gray-300';
    return '';
  };

  const getTierBgClass = (tier?: string) => {
    if (tier === 'Tier 1') return 'bg-emerald-50/50';
    if (tier === 'Tier 2') return 'bg-blue-50/50';
    if (tier === 'Tier 3') return 'bg-gray-50/50';
    return '';
  };

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: BuildingOffice2Icon },
    { id: 'services' as TabType, label: 'Services & Capabilities', icon: ClipboardDocumentListIcon },
    { id: 'trackRecord' as TabType, label: 'Track Record', icon: CheckIcon },
    { id: 'contact' as TabType, label: 'Contact', icon: PhoneIcon }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition ${getTierBorderClass(supplier.hospitalityReadiness?.tier)} ${isComparing ? 'ring-2 ring-blue-400' : ''}`}>
      {/* Sticky Header */}
      <div className={`sticky top-0 z-10 ${getTierBgClass(supplier.hospitalityReadiness?.tier)} border-b border-gray-200 rounded-t-lg px-6 py-4`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Compare Checkbox */}
            <input
              type="checkbox"
              checked={isComparing}
              onChange={() => onCompareToggle(supplier.id)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              title="Add to comparison"
            />

            <h2 className="text-2xl font-bold text-gray-900">{supplier.name}</h2>
            <p className="text-gray-600 flex items-center gap-1 text-sm">
              <MapPinIcon className="w-4 h-4" />
              {supplier.location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Favorite Button */}
            <button
              onClick={() => onFavoriteToggle(supplier.id)}
              className={`p-2 rounded-full transition ${isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400 hover:text-red-500'}`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? <HeartIconSolid className="w-5 h-5" /> : <HeartIcon className="w-5 h-5" />}
            </button>

            {supplier.hospitalityReadiness?.tier && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                supplier.hospitalityReadiness.tier === 'Tier 1'
                  ? 'bg-emerald-100 text-emerald-800'
                  : supplier.hospitalityReadiness.tier === 'Tier 2'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {supplier.hospitalityReadiness.tier === 'Tier 1' && (
                  <>
                    <StarIcon className="w-3 h-3" />
                    <StarIcon className="w-3 h-3" />
                    <StarIcon className="w-3 h-3" />
                  </>
                )}
                {supplier.hospitalityReadiness.tier === 'Tier 2' && (
                  <>
                    <StarIcon className="w-3 h-3" />
                    <StarIcon className="w-3 h-3" />
                  </>
                )}
                {supplier.hospitalityReadiness.tier === 'Tier 3' && (
                  <StarIcon className="w-3 h-3" />
                )}
                {supplier.hospitalityReadiness.tier}
              </span>
            )}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-4 flex gap-1 border-b border-gray-200 -mb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-700 bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Quick Decision Indicators */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                indicators.inventorySize === 'Large' ? 'bg-emerald-100 text-emerald-800' :
                indicators.inventorySize === 'Medium' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-700'
              }`}>
                📦 {indicators.inventorySize} Inventory
              </span>
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                indicators.deliverySpeed === 'Fast' ? 'bg-emerald-100 text-emerald-800' :
                indicators.deliverySpeed === 'Standard' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-700'
              }`}>
                ⚡ {indicators.deliverySpeed} Delivery
              </span>
              {indicators.hotelReady && (
                <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 flex items-center gap-1.5">
                  <BuildingOffice2Icon className="w-3.5 h-3.5" /> Hotel-Ready
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{supplier.description}</p>

            {/* Key Metrics Grid */}
            {supplier.capabilities && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {supplier.capabilities.inventory && (
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-4 rounded-lg border border-emerald-200">
                    <div className="text-xs font-medium text-emerald-700 uppercase tracking-wide mb-1">Inventory</div>
                    <div className="text-lg font-bold text-emerald-900">{supplier.capabilities.inventory}</div>
                  </div>
                )}
                {supplier.capabilities.leadTime && (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-lg border border-blue-200">
                    <div className="text-xs font-medium text-blue-700 uppercase tracking-wide mb-1">Lead Time</div>
                    <div className="text-lg font-bold text-blue-900">{supplier.capabilities.leadTime}</div>
                  </div>
                )}
                {supplier.pricing && (
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-4 rounded-lg border border-amber-200">
                    <div className="text-xs font-medium text-amber-700 uppercase tracking-wide mb-1">Pricing</div>
                    <div className="text-sm font-semibold text-amber-900">{supplier.pricing.split('.')[0]}</div>
                  </div>
                )}
              </div>
            )}

            {/* Top 3 Differentiators */}
            {uniqueStrengths.length > 0 && (
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                  <CheckIcon className="w-5 h-5" />
                  Top Strengths
                </h3>
                <ul className="space-y-2">
                  {uniqueStrengths.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="flex-1">
                        {item.text}
                        {item.isHotel && (
                          <BuildingOffice2Icon className="w-3.5 h-3.5 inline-block ml-1 text-emerald-600" title="Hotel-specific" />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                {uniqueStrengths.length > 3 && (
                  <button
                    onClick={() => setActiveTab('trackRecord')}
                    className="mt-3 text-xs text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    View all {uniqueStrengths.length} strengths →
                  </button>
                )}
              </div>
            )}

            {/* Quick Contact */}
            <div className="flex gap-3 pt-2">
              {supplier.contact.phone && (
                <a
                  href={`tel:${supplier.contact.phone}`}
                  className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call Now
                </a>
              )}
              {supplier.contact.email && (
                <a
                  href={`mailto:${supplier.contact.email}`}
                  className="flex-1 bg-white text-emerald-600 px-4 py-2 rounded-md text-sm font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition flex items-center justify-center gap-2"
                >
                  <EnvelopeIcon className="w-4 h-4" />
                  Email
                </a>
              )}
            </div>
          </div>
        )}

        {/* Services & Capabilities Tab */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            {(core.length > 0 || support.length > 0) && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Services Offered</h3>
                <div className="space-y-3">
                  {core.length > 0 && (
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1.5">Core Services</div>
                      <div className="flex flex-wrap gap-2">
                        {core.map((service, idx) => (
                          <span key={idx} className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-md text-sm font-medium">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {support.length > 0 && (
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1.5">Support Services</div>
                      <div className="flex flex-wrap gap-2">
                        {support.map((service, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-sm border border-gray-300">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {supplier.fireSafety && (
              <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <FireIcon className="w-5 h-5 text-red-600 mr-2" />
                  Fire Safety Compliance
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {supplier.fireSafety.tiers.map((tier) => (
                    <span key={tier} className={`px-3 py-1 rounded-md text-xs font-semibold ${
                      tier === 1 ? 'bg-emerald-100 text-emerald-800' :
                      tier === 2 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      Tier {tier}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700">{supplier.fireSafety.capabilities}</p>
              </div>
            )}

            {supplier.capabilities && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Operational Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {supplier.capabilities.volume && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="text-xs font-medium text-gray-500 mb-1">Volume Capacity</div>
                      <div className="text-sm text-gray-900 font-medium">{supplier.capabilities.volume}</div>
                    </div>
                  )}
                  {supplier.capabilities.leadTime && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="text-xs font-medium text-gray-500 mb-1">Lead Time</div>
                      <div className="text-sm text-gray-900 font-medium">{supplier.capabilities.leadTime}</div>
                    </div>
                  )}
                  {supplier.capabilities.inventory && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="text-xs font-medium text-gray-500 mb-1">Inventory Size</div>
                      <div className="text-sm text-gray-900 font-medium">{supplier.capabilities.inventory}</div>
                    </div>
                  )}
                  {supplier.capabilities.logistics && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="text-xs font-medium text-gray-500 mb-1">Logistics Coverage</div>
                      <div className="text-sm text-gray-900 font-medium">{supplier.capabilities.logistics}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Track Record Tab */}
        {activeTab === 'trackRecord' && (
          <div className="space-y-6">
            {uniqueStrengths.length > 0 && (
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                  <CheckIcon className="w-5 h-5" />
                  Key Strengths ({uniqueStrengths.length})
                </h3>
                <ul className="space-y-2">
                  {uniqueStrengths.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-600 mt-0.5">•</span>
                      <span className="flex-1">
                        {item.text}
                        {item.isHotel && (
                          <BuildingOffice2Icon className="w-3.5 h-3.5 inline-block ml-1 text-emerald-600" title="Hotel-specific" />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {uniqueGaps.length > 0 && (
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  Considerations ({uniqueGaps.length})
                </h3>
                <ul className="space-y-2">
                  {uniqueGaps.map((gap, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-600 mt-0.5">•</span>
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {supplier.projectExamples && supplier.projectExamples.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <ClipboardDocumentListIcon className="w-5 h-5" />
                  Project Examples
                </h3>
                <ul className="space-y-2">
                  {supplier.projectExamples.map((project, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {supplier.certifications && supplier.certifications.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Certifications & Standards</h3>
                <div className="flex flex-wrap gap-2">
                  {supplier.certifications.map((cert, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md text-xs border border-blue-200 font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Verification Sources */}
            {(() => {
              const verificationSources = getSupplierVerificationSources(supplier);
              return verificationSources.length > 0 ? (
                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <DocumentCheckIcon className="w-5 h-5" />
                    Verification & Official Sources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {verificationSources.map((source, idx) => (
                      <div key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1"
                        >
                          <span>{source.title}</span>
                          <ArrowTopRightOnSquareIcon className="w-3 h-3 flex-shrink-0" />
                        </a>
                        {source.description && (
                          <p className="text-xs text-gray-600 mt-0.5">{source.description}</p>
                        )}
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${
                          source.type === 'official' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                          source.type === 'verified' ? 'bg-green-100 text-green-800 border-green-200' :
                          source.type === 'primary' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                          'bg-gray-100 text-gray-700 border-gray-200'
                        }`}>
                          {source.type === 'official' ? '✅ OFFICIAL SOURCE' :
                           source.type === 'verified' ? '✓ VERIFIED' :
                           source.type === 'primary' ? '📄 PRIMARY' :
                           '📚 REFERENCE'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-xs text-blue-700 italic">
                      <strong>Source Quality:</strong> All certifications and capabilities verified through official testing labs, standards bodies, and company documentation. Independent verification possible through linked sources.
                    </p>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                {supplier.contact.name && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-700 font-semibold text-sm">{supplier.contact.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Contact Person</div>
                      <div className="text-sm font-medium text-gray-900">{supplier.contact.name}</div>
                    </div>
                  </div>
                )}
                {supplier.contact.phone && (
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Phone</div>
                      <a href={`tel:${supplier.contact.phone}`} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
                        {supplier.contact.phone}
                      </a>
                    </div>
                  </div>
                )}
                {supplier.contact.email && (
                  <div className="flex items-start gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Email</div>
                      <a href={`mailto:${supplier.contact.email}`} className="text-sm font-medium text-emerald-600 hover:text-emerald-700 break-all">
                        {supplier.contact.email}
                      </a>
                    </div>
                  </div>
                )}
                {supplier.contact.website && supplier.contact.website.startsWith('http') && (
                  <div className="flex items-start gap-3">
                    <GlobeAltIcon className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Website</div>
                      <a
                        href={supplier.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supplier.contact.phone && (
                <a
                  href={`tel:${supplier.contact.phone}`}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call {supplier.name}
                </a>
              )}
              {supplier.contact.email && (
                <a
                  href={`mailto:${supplier.contact.email}`}
                  className="bg-white text-emerald-600 px-6 py-3 rounded-md font-medium border-2 border-emerald-600 hover:bg-emerald-50 transition flex items-center justify-center gap-2"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Send Email
                </a>
              )}
            </div>

            {supplier.pricing && (
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <BanknotesIcon className="w-5 h-5" />
                  Pricing Model
                </h3>
                <p className="text-sm text-gray-700">{supplier.pricing}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Comparison Table Component
function ComparisonTable({
  suppliers,
  onClose
}: {
  suppliers: Supplier[];
  onClose: () => void;
}) {
  const getIndicators = (supplier: Supplier) => getQuickDecisionIndicators(supplier);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-2xl max-w-6xl mx-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ArrowsRightLeftIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Compare Suppliers ({suppliers.length})</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-x-auto p-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700 sticky left-0 bg-white">Criteria</th>
                  {suppliers.map(supplier => (
                    <th key={supplier.id} className="text-center p-3 min-w-[200px]">
                      <div className="font-bold text-gray-900">{supplier.name}</div>
                      <div className="text-xs text-gray-500 font-normal">{supplier.location}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-emerald-50/50">
                  <td className="p-3 font-medium text-gray-700 sticky left-0 bg-emerald-50/50">Tier</td>
                  {suppliers.map(supplier => (
                    <td key={supplier.id} className="p-3 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                        supplier.hospitalityReadiness?.tier === 'Tier 1' ? 'bg-emerald-100 text-emerald-800' :
                        supplier.hospitalityReadiness?.tier === 'Tier 2' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {supplier.hospitalityReadiness?.tier}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700 sticky left-0 bg-white">Inventory Size</td>
                  {suppliers.map(supplier => {
                    const ind = getIndicators(supplier);
                    return (
                      <td key={supplier.id} className="p-3 text-center">
                        <div className="font-semibold text-gray-900">{ind.inventorySize}</div>
                        <div className="text-xs text-gray-500">{ind.inventoryLabel}</div>
                      </td>
                    );
                  })}
                </tr>
                <tr className="border-b border-gray-100 bg-blue-50/50">
                  <td className="p-3 font-medium text-gray-700 sticky left-0 bg-blue-50/50">Lead Time</td>
                  {suppliers.map(supplier => {
                    const ind = getIndicators(supplier);
                    return (
                      <td key={supplier.id} className="p-3 text-center">
                        <div className="font-semibold text-gray-900">{ind.deliverySpeed}</div>
                        <div className="text-xs text-gray-500">{ind.deliveryLabel}</div>
                      </td>
                    );
                  })}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700 sticky left-0 bg-white">Hotel Experience</td>
                  {suppliers.map(supplier => {
                    const ind = getIndicators(supplier);
                    return (
                      <td key={supplier.id} className="p-3 text-center">
                        {ind.hotelReady ? (
                          <CheckIcon className="w-6 h-6 text-emerald-600 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-6 h-6 text-gray-400 mx-auto" />
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr className="border-b border-gray-100 bg-amber-50/50">
                  <td className="p-3 font-medium text-gray-700 sticky left-0 bg-amber-50/50">Pricing</td>
                  {suppliers.map(supplier => (
                    <td key={supplier.id} className="p-3 text-center">
                      <div className="text-sm text-gray-700">{supplier.pricing?.split('.')[0] || 'Contact'}</div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700 sticky left-0 bg-white">Fire Safety</td>
                  {suppliers.map(supplier => (
                    <td key={supplier.id} className="p-3 text-center">
                      <div className="flex gap-1 justify-center">
                        {supplier.fireSafety?.tiers.map(tier => (
                          <span key={tier} className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            tier === 1 ? 'bg-emerald-100 text-emerald-800' :
                            tier === 2 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            T{tier}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700 sticky left-0 bg-gray-50">Contact</td>
                  {suppliers.map(supplier => (
                    <td key={supplier.id} className="p-3 text-center">
                      <div className="flex gap-2 justify-center">
                        {supplier.contact.phone && (
                          <a
                            href={`tel:${supplier.contact.phone}`}
                            className="p-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200"
                          >
                            <PhoneIcon className="w-4 h-4" />
                          </a>
                        )}
                        {supplier.contact.email && (
                          <a
                            href={`mailto:${supplier.contact.email}`}
                            className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
                          >
                            <EnvelopeIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hospitalityFilter, setHospitalityFilter] = useState<'all' | 'tier1' | 'tier2' | 'tier3'>('all');
  const [sortBy, setSortBy] = useState<'tier' | 'name' | 'inventory' | 'leadTime'>('tier');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    hasHotelExperience: false,
    fastDelivery: false,
    largeInventory: false
  });

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fyra-favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('fyra-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleCompare = (id: string) => {
    setCompareList(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Filter and sort suppliers
  const filteredSuppliers = useMemo(() => {
    return suppliersData
      .filter(supplier => {
        const matchesSearch = searchTerm === '' ||
          supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          supplier.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          supplier.description.toLowerCase().includes(searchTerm.toLowerCase());

        const tier = supplier.hospitalityReadiness?.tier || '';
        const matchesHospitality =
          hospitalityFilter === 'all' ||
          (hospitalityFilter === 'tier1' && tier === 'Tier 1') ||
          (hospitalityFilter === 'tier2' && tier === 'Tier 2') ||
          (hospitalityFilter === 'tier3' && tier === 'Tier 3');

        const matchesFavorites = !showFavoritesOnly || favorites.includes(supplier.id);

        // Advanced filters
        const hasHotelExp = !advancedFilters.hasHotelExperience ||
          (supplier.hospitalityReadiness?.strengths || []).length > 0;

        const hasFastDelivery = !advancedFilters.fastDelivery ||
          (supplier.capabilities?.leadTime && parseInt(supplier.capabilities.leadTime.match(/\d+/)?.[0] || '999') <= 2);

        const hasLargeInv = !advancedFilters.largeInventory ||
          (supplier.capabilities?.inventory?.toLowerCase().includes('large') || supplier.capabilities?.inventory?.includes('65,000'));

        return matchesSearch && matchesHospitality && matchesFavorites && hasHotelExp && hasFastDelivery && hasLargeInv;
      })
      .sort((a, b) => {
        if (sortBy === 'tier') {
          const tierOrder = { 'Tier 1': 1, 'Tier 2': 2, 'Tier 3': 3 };
          const aTier = tierOrder[a.hospitalityReadiness?.tier as keyof typeof tierOrder] || 999;
          const bTier = tierOrder[b.hospitalityReadiness?.tier as keyof typeof tierOrder] || 999;
          return aTier - bTier;
        } else if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'inventory') {
          const aHasLarge = a.capabilities?.inventory?.toLowerCase().includes('large') || a.capabilities?.inventory?.includes('65,000');
          const bHasLarge = b.capabilities?.inventory?.toLowerCase().includes('large') || b.capabilities?.inventory?.includes('65,000');
          if (aHasLarge && !bHasLarge) return -1;
          if (!aHasLarge && bHasLarge) return 1;
          return 0;
        } else if (sortBy === 'leadTime') {
          const aLeadTime = a.capabilities?.leadTime || '';
          const bLeadTime = b.capabilities?.leadTime || '';
          const aWeeks = parseInt(aLeadTime.match(/\d+/)?.[0] || '999');
          const bWeeks = parseInt(bLeadTime.match(/\d+/)?.[0] || '999');
          return aWeeks - bWeeks;
        }
        return 0;
      });
  }, [searchTerm, hospitalityFilter, sortBy, favorites, showFavoritesOnly, advancedFilters]);

  const comparedSuppliers = suppliersData.filter(s => compareList.includes(s.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">B2B Suppliers Directory</h1>
        <p className="text-gray-600">
          Swedish circular economy operators for hotel renovation projects
        </p>
      </div>

      {/* Known Market Gaps */}
      <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 mr-2" />
          Known Market Gaps & Limitations
        </h2>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border-2 border-red-400">
            <h3 className="font-bold text-red-900 mb-2 flex items-center">
              <ExclamationCircleSolid className="w-5 h-5 text-red-600 mr-2" />
              CRITICAL: Hotel Bed Frames
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Impact:</strong> 25-30% of typical room budget (1.2-2.25M SEK for 150-room hotel)
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Issue:</strong> No identified Swedish B2B operator currently stocks reused hotel bed frames.
            </p>
            <p className="text-sm text-emerald-700">
              <strong>Workaround:</strong> Source beds new, maximize circular economy for all other furniture (chairs, tables, storage, lighting). See <a href="/scenarios#large_hotel" className="underline font-semibold">Large Hotel Scenario</a> for dual-supplier strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-yellow-400">
              <h4 className="font-semibold text-gray-900 mb-1">Geographic Gaps</h4>
              <p className="text-sm text-gray-700">
                Limited coverage in Northern Sweden (Norrland) and smaller cities. Most suppliers concentrate in Stockholm-Göteborg-Malmö triangle.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-yellow-400">
              <h4 className="font-semibold text-gray-900 mb-1">Lighting Refurbishment</h4>
              <p className="text-sm text-gray-700">
                Few operators offer systematic lighting fixture refurbishment. Most focus on furniture only.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, location, or description..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hospitality Readiness
            </label>
            <select
              value={hospitalityFilter}
              onChange={(e) => setHospitalityFilter(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Suppliers</option>
              <option value="tier1">Tier 1 (Premium - Hotel Ready)</option>
              <option value="tier2">Tier 2 (Specialist Partners)</option>
              <option value="tier3">Tier 3 (Opportunistic)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="tier">Hotel Readiness (Tier 1 first)</option>
              <option value="inventory">Largest Inventory</option>
              <option value="leadTime">Fastest Delivery</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <FunnelIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Advanced Filters</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={advancedFilters.hasHotelExperience}
                onChange={(e) => setAdvancedFilters(prev => ({ ...prev, hasHotelExperience: e.target.checked }))}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="text-sm text-gray-700">Hotel Experience Required</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={advancedFilters.fastDelivery}
                onChange={(e) => setAdvancedFilters(prev => ({ ...prev, fastDelivery: e.target.checked }))}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="text-sm text-gray-700">Fast Delivery (≤2 weeks)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={advancedFilters.largeInventory}
                onChange={(e) => setAdvancedFilters(prev => ({ ...prev, largeInventory: e.target.checked }))}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="text-sm text-gray-700">Large Inventory Only</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFavoritesOnly}
                onChange={(e) => setShowFavoritesOnly(e.target.checked)}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="text-sm text-gray-700 flex items-center gap-1">
                <HeartIconSolid className="w-4 h-4 text-red-500" />
                Favorites Only ({favorites.length})
              </span>
            </label>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing {filteredSuppliers.length} of {suppliersData.length} suppliers
          </div>
          {compareList.length > 0 && (
            <button
              onClick={() => setShowComparison(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition flex items-center gap-2"
            >
              <ArrowsRightLeftIcon className="w-4 h-4" />
              Compare Selected ({compareList.length})
            </button>
          )}
        </div>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredSuppliers.map((supplier) => (
          <SupplierCard
            key={supplier.id}
            supplier={supplier}
            isComparing={compareList.includes(supplier.id)}
            onCompareToggle={toggleCompare}
            isFavorite={favorites.includes(supplier.id)}
            onFavoriteToggle={toggleFavorite}
          />
        ))}
      </div>

      {filteredSuppliers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No suppliers match your current filters.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setHospitalityFilter('all');
              setAdvancedFilters({ hasHotelExperience: false, fastDelivery: false, largeInventory: false });
              setShowFavoritesOnly(false);
            }}
            className="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Comparison Modal */}
      {showComparison && comparedSuppliers.length > 0 && (
        <ComparisonTable
          suppliers={comparedSuppliers}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
}
