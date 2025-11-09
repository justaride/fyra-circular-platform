'use client';

import { useState } from 'react';
import Link from 'next/link';
import casesData from '@/data/case_studies.json';

type CaseStudy = typeof casesData[0];

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState<'all' | '5star' | '4star' | '3star' | '2star'>('all');
  const [countryFilter, setCountryFilter] = useState<'all' | 'Sweden' | 'Denmark' | 'Norway'>('all');

  // Filter cases
  const filteredCases = casesData.filter(caseStudy => {
    const hotelName = caseStudy.hotelName || '';
    const matchesSearch = searchTerm === '' ||
      hotelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (caseStudy.location || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (caseStudy.chain || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTier = tierFilter === 'all' ||
      (tierFilter === '5star' && caseStudy.tier === '★★★★★') ||
      (tierFilter === '4star' && caseStudy.tier === '★★★★') ||
      (tierFilter === '3star' && caseStudy.tier === '★★★') ||
      (tierFilter === '2star' && caseStudy.tier === '★★');

    const matchesCountry = countryFilter === 'all' || caseStudy.country === countryFilter;

    return matchesSearch && matchesTier && matchesCountry;
  });

  const tier5Count = casesData.filter(c => c.tier === '★★★★★').length;
  const tier4Count = casesData.filter(c => c.tier === '★★★★').length;
  const tier3Count = casesData.filter(c => c.tier === '★★★').length;
  const tier2Count = casesData.filter(c => c.tier === '★★').length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Hotel Case Studies</h1>
        <p className="text-gray-600 mb-4">
          18 circular economy hotel renovations across the Nordic region
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded p-4">
          <p className="text-sm text-blue-900">
            <strong>Complete Dataset:</strong> All documented Nordic frontrunner hotels from ★★★★★ flagship cases to ★★ chain-wide standards, with verified impacts, key contacts, and supplier/consultant cross-references.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by hotel name, location, or chain..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Tier Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority Tier</label>
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Tiers</option>
              <option value="5star">★★★★★ Flagship Cases ({tier5Count})</option>
              <option value="4star">★★★★ High Priority ({tier4Count})</option>
              <option value="3star">★★★ Medium-High ({tier3Count})</option>
              <option value="2star">★★ Chain Standards ({tier2Count})</option>
            </select>
          </div>

          {/* Country Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Countries</option>
              <option value="Sweden">Sweden (9)</option>
              <option value="Denmark">Denmark (5)</option>
              <option value="Norway">Norway (4)</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing <span className="font-bold text-emerald-600">{filteredCases.length}</span> of {casesData.length} case studies
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-8">
        {filteredCases.map((caseStudy) => (
          <div key={caseStudy.id} className={`bg-white rounded-lg shadow-md overflow-hidden border-2 ${
            caseStudy.tier === '★★★★★' ? 'border-amber-200' :
            caseStudy.tier === '★★★★' ? 'border-blue-200' :
            'border-gray-200'
          }`}>
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-gray-900">{caseStudy.hotelName}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      caseStudy.tier === '★★★★★'
                        ? 'bg-amber-100 text-amber-800'
                        : caseStudy.tier === '★★★★'
                        ? 'bg-blue-100 text-blue-800'
                        : caseStudy.tier === '★★★'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {caseStudy.tier}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">
                    📍 {caseStudy.location} | {caseStudy.size} | {caseStudy.year}
                  </p>
                  <p className="text-gray-700 font-medium">{caseStudy.chain}</p>
                  {caseStudy.category && (
                    <p className="text-sm text-gray-600 mt-1">{caseStudy.category}</p>
                  )}
                </div>
              </div>

              {/* Renovation Scope */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">🔧 Renovation Scope</h3>
                <p className="text-sm text-gray-700">{caseStudy.renovationScope}</p>
              </div>

              {/* Quantified Impact */}
              {caseStudy.quantifiedImpact && Object.keys(caseStudy.quantifiedImpact).length > 0 && (
                <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-2">📊</span>
                    Quantified Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(caseStudy.quantifiedImpact).map(([key, value]) => (
                      <div key={key} className="bg-white rounded p-3">
                        <div className="text-xs font-medium text-gray-500 mb-1 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-sm font-semibold text-emerald-700">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {caseStudy.certifications && caseStudy.certifications.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-xs border border-green-200 font-medium">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Circular Elements */}
              {caseStudy.circularElements && caseStudy.circularElements.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">♻️ Circular Elements ({caseStudy.circularElements.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {caseStudy.circularElements.slice(0, 10).map((element, idx) => (
                      <div key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        <span>{element}</span>
                      </div>
                    ))}
                  </div>
                  {caseStudy.circularElements.length > 10 && (
                    <div className="text-sm text-gray-500 italic mt-2">
                      + {caseStudy.circularElements.length - 10} more circular elements...
                    </div>
                  )}
                </div>
              )}

              {/* Lessons Learned */}
              {caseStudy.lessons && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {caseStudy.lessons.whatWorked && caseStudy.lessons.whatWorked.length > 0 && (
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-900 mb-2 text-sm">✓ What Worked Well</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {caseStudy.lessons.whatWorked.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {caseStudy.lessons.challenges && caseStudy.lessons.challenges.length > 0 && (
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h3 className="font-semibold text-orange-900 mb-2 text-sm">⚠️ Challenges</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {caseStudy.lessons.challenges.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-600 mr-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Replicability */}
              {caseStudy.replicability && (
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">🔄 Replicability Assessment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    {caseStudy.replicability.scalability && (
                      <div>
                        <div className="font-semibold text-blue-900 mb-1">Scalability</div>
                        <div className="text-gray-700">{caseStudy.replicability.scalability}</div>
                      </div>
                    )}
                    {caseStudy.replicability.chainPotential && (
                      <div>
                        <div className="font-semibold text-blue-900 mb-1">Chain Potential</div>
                        <div className="text-gray-700">{caseStudy.replicability.chainPotential}</div>
                      </div>
                    )}
                    {caseStudy.replicability.economicViability && (
                      <div>
                        <div className="font-semibold text-blue-900 mb-1">Economic Viability</div>
                        <div className="text-gray-700">{caseStudy.replicability.economicViability}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Key Contacts */}
              {caseStudy.keyContacts && Object.keys(caseStudy.keyContacts).length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">📞 Key Contacts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {Object.entries(caseStudy.keyContacts).map(([role, contact]) => (
                      <div key={role}>
                        <div className="font-semibold text-gray-700 capitalize mb-1">
                          {role.replace(/([A-Z])/g, ' $1').trim()}:
                        </div>
                        <div className="text-gray-600">{contact}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cross-References */}
              {caseStudy.crossReferences && (caseStudy.crossReferences.suppliers.length > 0 || caseStudy.crossReferences.consultants.length > 0) && (
                <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">🔗 Cross-References to Platform Data</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.crossReferences.suppliers.length > 0 && (
                      <div>
                        <div className="font-semibold text-emerald-900 mb-2 text-sm">B2B Suppliers</div>
                        <div className="space-y-1">
                          {caseStudy.crossReferences.suppliers.map((supplierId) => (
                            <Link
                              key={supplierId}
                              href="/suppliers"
                              className="block text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
                            >
                              → View in Suppliers Directory
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {caseStudy.crossReferences.consultants.length > 0 && (
                      <div>
                        <div className="font-semibold text-emerald-900 mb-2 text-sm">Consultants</div>
                        <div className="space-y-1">
                          {caseStudy.crossReferences.consultants.map((consultantId) => (
                            <Link
                              key={consultantId}
                              href="/consultants"
                              className="block text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
                            >
                              → View in Consultants Directory
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Fyra Actions */}
              {caseStudy.fyraActions && caseStudy.fyraActions.length > 0 && (
                <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-purple-900 mb-2">🎯 Immediate Fyra Actions</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {caseStudy.fyraActions.map((action, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer: Website and Confidence Level */}
              <div className="border-t pt-4 flex justify-between items-center">
                <div className="flex gap-4">
                  {caseStudy.website && (
                    <a
                      href={caseStudy.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
                    >
                      Visit Hotel Website →
                    </a>
                  )}
                  {caseStudy.email && (
                    <a
                      href={`mailto:${caseStudy.email}`}
                      className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
                    >
                      Email Hotel →
                    </a>
                  )}
                </div>
                {caseStudy.confidenceLevel && (
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Confidence Level</div>
                    <div className="text-sm font-semibold text-gray-700">{caseStudy.confidenceLevel}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No case studies match your current filters.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setTierFilter('all');
              setCountryFilter('all');
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
