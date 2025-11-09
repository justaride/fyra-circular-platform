'use client';

import { useState } from 'react';
import suppliersData from '@/data/suppliers.json';

type Supplier = typeof suppliersData[0];

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hospitalityFilter, setHospitalityFilter] = useState<'all' | 'tier1' | 'tier2' | 'tier3'>('all');

  // Filter and sort suppliers
  const filteredSuppliers = suppliersData
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
      return a.name.localeCompare(b.name);
    });

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
          <span className="mr-2">⚠️</span>
          Known Market Gaps & Limitations
        </h2>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border-2 border-red-400">
            <h3 className="font-bold text-red-900 mb-2 flex items-center">
              <span className="mr-2">🚨</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing {filteredSuppliers.length} of {suppliersData.length} suppliers
          </div>
        </div>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredSuppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{supplier.name}</h2>
                <p className="text-gray-600">📍 {supplier.location}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {supplier.hospitalityReadiness?.tier && (
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    supplier.hospitalityReadiness.tier === 'Tier 1'
                      ? 'bg-emerald-100 text-emerald-800'
                      : supplier.hospitalityReadiness.tier === 'Tier 2'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {supplier.hospitalityReadiness.tier === 'Tier 1' && '⭐⭐⭐ '}
                    {supplier.hospitalityReadiness.tier === 'Tier 2' && '⭐⭐ '}
                    {supplier.hospitalityReadiness.tier === 'Tier 3' && '⭐ '}
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

            {/* Services */}
            {supplier.services && supplier.services.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {supplier.services.map((service, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Fire Safety */}
            {supplier.fireSafety && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-600 rounded p-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-red-600 mr-2">🔥</span>
                  Fire Safety Compliance
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {supplier.fireSafety.tiers.map((tier) => (
                    <span key={tier} className={`px-3 py-1 rounded-md text-xs font-semibold ${
                      tier === 1 ? 'bg-emerald-100 text-emerald-800' :
                      tier === 2 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      Tier {tier} {tier === 1 ? '✅' : tier === 2 ? '⚠️' : '🚨'}
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

            {/* Hospitality Readiness Details */}
            {supplier.hospitalityReadiness && (supplier.hospitalityReadiness.strengths?.length > 0 || supplier.hospitalityReadiness.gaps?.length > 0) && (
              <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">🏨 Hospitality Readiness Assessment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {supplier.hospitalityReadiness.strengths && supplier.hospitalityReadiness.strengths.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-2 text-sm">✓ Hotel-Specific Strengths</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {supplier.hospitalityReadiness.strengths.map((strength, idx) => (
                          <li key={idx}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {supplier.hospitalityReadiness.gaps && supplier.hospitalityReadiness.gaps.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2 text-sm">⚠ Hotel Project Considerations</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {supplier.hospitalityReadiness.gaps.map((gap, idx) => (
                          <li key={idx}>• {gap}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Overall Strengths & Gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {supplier.strengths && supplier.strengths.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">✓ Overall Strengths</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {supplier.strengths.map((strength, idx) => (
                      <li key={idx}>• {strength}</li>
                    ))}
                  </ul>
                </div>
              )}
              {supplier.gaps && supplier.gaps.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">⚠ Overall Considerations</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {supplier.gaps.map((gap, idx) => (
                      <li key={idx}>• {gap}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Project Examples */}
            {supplier.projectExamples && supplier.projectExamples.length > 0 && (
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Project Examples</h3>
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
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">💰 Pricing Model</h3>
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
