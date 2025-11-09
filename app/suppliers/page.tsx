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
  BanknotesIcon
} from '@heroicons/react/24/outline';
import { ExclamationCircleIcon as ExclamationCircleSolid, StarIcon } from '@heroicons/react/24/solid';

type Supplier = typeof suppliersData[0];

// Service categorization helper
const categorizeServices = (services: string[]) => {
  const coreServices = ['Furniture Sales', 'Refurbishment', 'Custom Design', 'Quality Inspection', 'Reuse Sales', 'Sourcing'];
  const supportServices = ['Delivery', 'Installation', 'Project Management', 'Consulting', 'Storage', 'Logistics Coordination', 'Warehousing', 'Inventory Management', 'Design Consultancy', 'Pickup Services'];

  const core = services.filter(s => coreServices.some(cs => s.includes(cs)));
  const support = services.filter(s => supportServices.some(ss => s.includes(ss)));
  const other = services.filter(s => !core.includes(s) && !support.includes(s));

  return { core, support: [...support, ...other] };
};

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
          // Priority to suppliers with large inventory
          const aHasLarge = a.capabilities?.inventory?.toLowerCase().includes('large') || a.capabilities?.inventory?.includes('65,000');
          const bHasLarge = b.capabilities?.inventory?.toLowerCase().includes('large') || b.capabilities?.inventory?.includes('65,000');
          if (aHasLarge && !bHasLarge) return -1;
          if (!aHasLarge && bHasLarge) return 1;
          return 0;
        } else if (sortBy === 'leadTime') {
          // Shorter lead times first
          const aLeadTime = a.capabilities?.leadTime || '';
          const bLeadTime = b.capabilities?.leadTime || '';
          const aWeeks = parseInt(aLeadTime.match(/\d+/)?.[0] || '999');
          const bWeeks = parseInt(bLeadTime.match(/\d+/)?.[0] || '999');
          return aWeeks - bWeeks;
        }
        return 0;
      });
  }, [searchTerm, hospitalityFilter, sortBy]);

  const getTierBorderClass = (tier?: string) => {
    if (tier === 'Tier 1') return 'border-l-4 border-emerald-500';
    if (tier === 'Tier 2') return 'border-l-4 border-blue-400';
    if (tier === 'Tier 3') return 'border-l-2 border-gray-300';
    return '';
  };

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
        {filteredSuppliers.map((supplier) => {
          const { core, support } = categorizeServices(supplier.services || []);

          // Merge all strengths with hotel-specific markers
          const allStrengths = [
            ...(supplier.hospitalityReadiness?.strengths || []).map(s => ({ text: s, isHotel: true })),
            ...(supplier.strengths || []).map(s => ({ text: s, isHotel: false }))
          ];

          // Remove duplicates (keep hotel-specific version if exists)
          const uniqueStrengths = allStrengths.reduce((acc, curr) => {
            const existing = acc.find(item => item.text.toLowerCase() === curr.text.toLowerCase());
            if (!existing) {
              acc.push(curr);
            } else if (curr.isHotel && !existing.isHotel) {
              // Replace with hotel-specific version
              acc[acc.indexOf(existing)] = curr;
            }
            return acc;
          }, [] as typeof allStrengths);

          // Merge all gaps/considerations
          const allGaps = [
            ...(supplier.hospitalityReadiness?.gaps || []),
            ...(supplier.gaps || [])
          ];
          const uniqueGaps = [...new Set(allGaps)];

          return (
            <div
              key={supplier.id}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition ${getTierBorderClass(supplier.hospitalityReadiness?.tier)}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{supplier.name}</h2>
                  <p className="text-gray-600 flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4" />
                    {supplier.location}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
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
                  {supplier.hospitalityReadiness?.score && (
                    <div className="text-xs text-gray-600 text-right max-w-xs">
                      {supplier.hospitalityReadiness.score}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{supplier.description}</p>

              {/* Services - Categorized */}
              {(core.length > 0 || support.length > 0) && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
                  <div className="space-y-3">
                    {core.length > 0 && (
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1.5">Core Services</div>
                        <div className="flex flex-wrap gap-2">
                          {core.map((service, idx) => (
                            <span key={idx} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-sm font-medium">
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
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-300">
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
                <div className="mb-4 bg-red-50 border-l-4 border-red-600 rounded p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FireIcon className="w-5 h-5 text-red-600 mr-2" />
                    Fire Safety Compliance
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
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

              {/* Capabilities */}
              {supplier.capabilities && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {supplier.capabilities.volume && (
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-xs font-medium text-gray-500 mb-1">Volume Capacity</div>
                      <div className="text-sm text-gray-900">{supplier.capabilities.volume}</div>
                    </div>
                  )}
                  {supplier.capabilities.leadTime && (
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-xs font-medium text-gray-500 mb-1">Lead Time</div>
                      <div className="text-sm text-gray-900">{supplier.capabilities.leadTime}</div>
                    </div>
                  )}
                  {supplier.capabilities.inventory && (
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-xs font-medium text-gray-500 mb-1">Inventory</div>
                      <div className="text-sm text-gray-900">{supplier.capabilities.inventory}</div>
                    </div>
                  )}
                  {supplier.capabilities.logistics && (
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-xs font-medium text-gray-500 mb-1">Logistics</div>
                      <div className="text-sm text-gray-900">{supplier.capabilities.logistics}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Unified Strengths & Considerations */}
              {(uniqueStrengths.length > 0 || uniqueGaps.length > 0) && (
                <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BuildingOffice2Icon className="w-5 h-5 text-emerald-600" />
                    Key Strengths & Considerations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {uniqueStrengths.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-2 text-sm flex items-center gap-1">
                          <CheckIcon className="w-4 h-4" />
                          Strengths
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {uniqueStrengths.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span>•</span>
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
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2 text-sm flex items-center gap-1">
                          <ExclamationTriangleIcon className="w-4 h-4" />
                          Considerations
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {uniqueGaps.map((gap, idx) => (
                            <li key={idx}>• {gap}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Project Examples */}
              {supplier.projectExamples && supplier.projectExamples.length > 0 && (
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <ClipboardDocumentListIcon className="w-5 h-5 text-blue-600" />
                    Project Examples
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {supplier.projectExamples.map((project, idx) => (
                      <li key={idx}>• {project}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pricing */}
              {supplier.pricing && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                    <BanknotesIcon className="w-5 h-5 text-emerald-600" />
                    Pricing Model
                  </h3>
                  <p className="text-sm text-gray-700">{supplier.pricing}</p>
                </div>
              )}

              {/* Certifications */}
              {supplier.certifications && supplier.certifications.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {supplier.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs border border-blue-200">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact */}
              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  {supplier.contact.name && (
                    <div>
                      <span className="text-gray-600">Contact:</span>{' '}
                      <span className="text-gray-900">{supplier.contact.name}</span>
                    </div>
                  )}
                  {supplier.contact.phone && (
                    <div>
                      <span className="text-gray-600">Phone:</span>{' '}
                      <a href={`tel:${supplier.contact.phone}`} className="text-emerald-600 hover:underline">
                        {supplier.contact.phone}
                      </a>
                    </div>
                  )}
                  {supplier.contact.email && (
                    <div>
                      <span className="text-gray-600">Email:</span>{' '}
                      <a href={`mailto:${supplier.contact.email}`} className="text-emerald-600 hover:underline">
                        {supplier.contact.email}
                      </a>
                    </div>
                  )}
                  {supplier.contact.website && supplier.contact.website.startsWith('http') && (
                    <div>
                      <span className="text-gray-600">Website:</span>{' '}
                      <a
                        href={supplier.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        Visit →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
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
