'use client';

import { useState, useMemo } from 'react';
import suppliersData from '@/data/suppliers.json';
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
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { ExclamationCircleIcon as ExclamationCircleSolid, StarIcon } from '@heroicons/react/24/solid';

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

// Supplier Card with Tabs Component
function SupplierCard({ supplier }: { supplier: Supplier }) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const { core, support } = categorizeServices(supplier.services || []);

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
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition ${getTierBorderClass(supplier.hospitalityReadiness?.tier)}`}>
      {/* Sticky Header */}
      <div className={`sticky top-0 z-10 ${getTierBgClass(supplier.hospitalityReadiness?.tier)} border-b border-gray-200 rounded-t-lg px-6 py-4`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">{supplier.name}</h2>
            <p className="text-gray-600 flex items-center gap-1 text-sm">
              <MapPinIcon className="w-4 h-4" />
              {supplier.location}
            </p>
          </div>
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
            {/* Categorized Services */}
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

            {/* Fire Safety */}
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

            {/* Capabilities Grid */}
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
            {/* All Strengths */}
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

            {/* Considerations */}
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

            {/* Project Examples */}
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

            {/* Certifications */}
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
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            {/* Contact Information */}
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

            {/* Quick Actions */}
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

            {/* Pricing Info */}
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

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hospitalityFilter, setHospitalityFilter] = useState<'all' | 'tier1' | 'tier2' | 'tier3'>('all');
  const [sortBy, setSortBy] = useState<'tier' | 'name' | 'inventory' | 'leadTime'>('tier');

  // Filter and sort suppliers
  const filteredSuppliers = useMemo(() => {
    return suppliersData
      .filter(supplier => {
        // Search filter
        const matchesSearch = searchTerm === '' ||
          supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          supplier.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          supplier.description.toLowerCase().includes(searchTerm.toLowerCase());

        // Hospitality readiness filter
        const tier = supplier.hospitalityReadiness?.tier || '';
        const matchesHospitality =
          hospitalityFilter === 'all' ||
          (hospitalityFilter === 'tier1' && tier === 'Tier 1') ||
          (hospitalityFilter === 'tier2' && tier === 'Tier 2') ||
          (hospitalityFilter === 'tier3' && tier === 'Tier 3');

        return matchesSearch && matchesHospitality;
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
  }, [searchTerm, hospitalityFilter, sortBy]);

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
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

          {/* Hospitality Ready Filter */}
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

          {/* Sort By */}
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

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing {filteredSuppliers.length} of {suppliersData.length} suppliers
          </div>
          {sortBy !== 'tier' && (
            <div className="text-xs text-gray-500">
              Sorted by: {sortBy === 'inventory' ? 'Inventory Size' : sortBy === 'leadTime' ? 'Lead Time' : 'Name'}
            </div>
          )}
        </div>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredSuppliers.map((supplier) => (
          <SupplierCard key={supplier.id} supplier={supplier} />
        ))}
      </div>

      {filteredSuppliers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No suppliers match your current filters.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setHospitalityFilter('all');
            }}
            className="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
