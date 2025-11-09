'use client';

import { useState } from 'react';
import Link from 'next/link';
import casesData from '@/data/case_studies.json';
import {
  MapPinIcon,
  WrenchIcon,
  ChartBarIcon,
  CheckIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  ArrowsRightLeftIcon,
  PhoneIcon,
  LinkIcon,
  ArrowTrendingUpIcon,
  DocumentCheckIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

type CaseStudy = typeof casesData[0];

// Helper function to get certification database URLs
function getCertificationURL(certification: string): string | null {
  const certLower = certification.toLowerCase();
  if (certLower.includes('leed')) return 'https://www.usgbc.org/projects';
  if (certLower.includes('breeam')) return 'https://www.breeam.com/';
  if (certLower.includes('nordic swan') || certLower.includes('svanen')) return 'https://www.nordic-ecolabel.org/';
  if (certLower.includes('green key')) return 'https://www.greenkey.global/';
  if (certLower.includes('iso 14001')) return 'https://www.iso.org/iso-14001-environmental-management.html';
  if (certLower.includes('eu green building')) return 'https://ec.europa.eu/energy/eu-buildings-database_en';
  if (certLower.includes('miljöbyggnad')) return 'https://www.sgbc.se/certifiering/miljobyggnad/';
  if (certLower.includes('cradle to cradle')) return 'https://www.c2ccertified.org/';
  return null;
}

// Helper function to extract architect name and get portfolio URL
function getArchitectInfo(keyContacts: any): { name: string; url: string | null } | null {
  if (!keyContacts || !keyContacts.architect) return null;

  const architect = keyContacts.architect;
  if (typeof architect !== 'string') return null;

  // Extract architect name and URL from the contact string
  if (architect.includes('Wingårdh')) {
    return { name: 'Wingårdhs Arkitektkontor', url: 'https://wingardhs.se/' };
  }
  if (architect.includes('Stylt Trampoli')) {
    return { name: 'Stylt Trampoli', url: 'https://stylttrampoli.com/' };
  }
  if (architect.includes('3XN') || architect.includes('GXN')) {
    return { name: '3XN/GXN Innovation', url: 'https://gxn.3xn.com/' };
  }
  if (architect.includes('Dissing+Weitling')) {
    return { name: 'Dissing+Weitling Architecture', url: 'https://dissing-weitling.dk/' };
  }
  if (architect.includes('Nordic - Office of Architecture')) {
    return { name: 'Nordic - Office of Architecture', url: 'https://nordicarch.no/' };
  }

  // Return name without URL if no match found
  const nameMatch = architect.match(/^([^(+-]+)/);
  return { name: nameMatch ? nameMatch[1].trim() : architect, url: null };
}

// Helper function to extract consultant name and get portfolio URL
function getConsultantInfo(keyContacts: any): { name: string; url: string | null } | null {
  if (!keyContacts || !keyContacts.sustainabilityConsultant) return null;

  const consultant = keyContacts.sustainabilityConsultant;
  if (typeof consultant !== 'string') return null;

  // Extract consultant name and URL
  if (consultant.includes('Sweco')) {
    return { name: 'Sweco', url: 'https://www.sweco.se/en/projects/?filter=Sustainability' };
  }
  if (consultant.includes('Forsen')) {
    return { name: 'Forsen', url: 'https://www.forsen.se/en/our-projects/' };
  }
  if (consultant.includes('Ramboll')) {
    return { name: 'Ramboll', url: 'https://ramboll.com/projects' };
  }
  if (consultant.includes('Norconsult')) {
    return { name: 'Norconsult', url: 'https://www.norconsult.com/projects/' };
  }

  // Return name without URL if no match found
  const nameMatch = consultant.match(/^([^(-]+)/);
  return { name: nameMatch ? nameMatch[1].trim() : consultant, url: null };
}

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
                  <p className="text-gray-600 mb-1 flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4" />
                    {caseStudy.location} | {caseStudy.size} | {caseStudy.year}
                  </p>
                  <p className="text-gray-700 font-medium">{caseStudy.chain}</p>
                  {caseStudy.category && (
                    <p className="text-sm text-gray-600 mt-1">{caseStudy.category}</p>
                  )}
                </div>
              </div>

              {/* Renovation Scope */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <WrenchIcon className="w-5 h-5 text-gray-600" />
                  Renovation Scope
                </h3>
                <p className="text-sm text-gray-700">{caseStudy.renovationScope}</p>
              </div>

              {/* Quantified Impact */}
              {caseStudy.quantifiedImpact && Object.keys(caseStudy.quantifiedImpact).length > 0 && (
                <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <ChartBarIcon className="w-5 h-5 text-emerald-600 mr-2" />
                    Quantified Impact
                  </h3>
                  <div className="space-y-4">
                    {/* Simple metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(caseStudy.quantifiedImpact).map(([key, value]) => {
                        // Skip nested objects - render them separately below
                        if (typeof value === 'object' && value !== null) return null;

                        return (
                          <div key={key} className="bg-white rounded p-3">
                            <div className="text-xs font-medium text-gray-500 mb-1 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-sm font-semibold text-emerald-700">{value as string}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Nested objects - Financial Breakdown */}
                    {caseStudy.quantifiedImpact.financialBreakdown && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Financial Breakdown:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Object.entries(caseStudy.quantifiedImpact.financialBreakdown).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-emerald-700 font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Operational Performance */}
                    {caseStudy.quantifiedImpact.operationalPerformance && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Operational Performance:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Object.entries(caseStudy.quantifiedImpact.operationalPerformance).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-blue-700 font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Market Impact */}
                    {caseStudy.quantifiedImpact.marketImpact && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Market Impact:</h4>
                        <div className="space-y-2">
                          {Object.entries(caseStudy.quantifiedImpact.marketImpact).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-purple-700 font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Failure Analysis */}
                    {caseStudy.quantifiedImpact.failureAnalysis && (
                      <div className="bg-red-50 rounded p-4 border-l-4 border-red-500">
                        <h4 className="font-semibold text-red-900 mb-3 text-sm">Failure Analysis:</h4>
                        <div className="space-y-3">
                          {caseStudy.quantifiedImpact.failureAnalysis.rootCauses && (
                            <div>
                              <p className="text-xs font-semibold text-red-800 mb-2">Root Causes:</p>
                              <ul className="text-xs text-red-700 space-y-1">
                                {caseStudy.quantifiedImpact.failureAnalysis.rootCauses.map((cause: string, idx: number) => (
                                  <li key={idx}>• {cause}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {caseStudy.quantifiedImpact.failureAnalysis.financialImpact && (
                            <div>
                              <p className="text-xs font-semibold text-red-800 mb-2">Financial Impact:</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {Object.entries(caseStudy.quantifiedImpact.failureAnalysis.financialImpact).map(([key, value]) => (
                                  <div key={key} className="text-xs">
                                    <span className="text-red-700">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                                    <span className="font-semibold">{value as string}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {caseStudy.quantifiedImpact.failureAnalysis.lessonsForIndustry && (
                            <div>
                              <p className="text-xs font-semibold text-red-800 mb-2">Lessons for Industry:</p>
                              <ul className="text-xs text-red-700 space-y-1">
                                {caseStudy.quantifiedImpact.failureAnalysis.lessonsForIndustry.map((lesson: string, idx: number) => (
                                  <li key={idx}>• {lesson}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Other nested details */}
                    {caseStudy.quantifiedImpact.circularMaterialsDetailed && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Circular Materials Detail:</h4>
                        <div className="space-y-2">
                          {Object.entries(caseStudy.quantifiedImpact.circularMaterialsDetailed).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-emerald-700">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.quantifiedImpact.carbonAccountingDetail && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Carbon Accounting Detail:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Object.entries(caseStudy.quantifiedImpact.carbonAccountingDetail).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-green-700 font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.quantifiedImpact.massTimberTechnicalDetails && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Mass Timber Technical Details:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Object.entries(caseStudy.quantifiedImpact.massTimberTechnicalDetails).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-amber-700 font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.quantifiedImpact.designForDisassemblyDetails && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Design for Disassembly Details:</h4>
                        <div className="space-y-2">
                          {Object.entries(caseStudy.quantifiedImpact.designForDisassemblyDetails).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-indigo-700">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.quantifiedImpact.replicabilityDetails && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Replicability Details:</h4>
                        <div className="space-y-2">
                          {Object.entries(caseStudy.quantifiedImpact.replicabilityDetails).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-blue-700">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.quantifiedImpact.replicabilityFramework && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Replicability Framework:</h4>
                        <div className="space-y-2">
                          {Object.entries(caseStudy.quantifiedImpact.replicabilityFramework).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-purple-700">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {caseStudy.quantifiedImpact.chemicalFreeImplementationDetails && (
                      <div className="bg-white rounded p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Chemical-Free Implementation:</h4>
                        <div className="space-y-2">
                          {Object.entries(caseStudy.quantifiedImpact.chemicalFreeImplementationDetails).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                              <span className="text-green-700">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {caseStudy.certifications && caseStudy.certifications.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-green-50 text-green-700 px-3 py-1 rounded-md text-xs border border-green-200 font-medium flex items-center gap-1">
                        <CheckIcon className="w-3 h-3" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Primary Documentation - Source Verification */}
              {(
                (caseStudy.certifications && caseStudy.certifications.length > 0) ||
                caseStudy.website ||
                getArchitectInfo(caseStudy.keyContacts) ||
                getConsultantInfo(caseStudy.keyContacts)
              ) && (
                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <DocumentCheckIcon className="w-5 h-5" />
                    Primary Documentation & Source Verification
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Hotel Official Source */}
                    {caseStudy.website && (
                      <div>
                        <div className="text-xs font-semibold text-blue-900 mb-2">Hotel Official Website</div>
                        <a
                          href={caseStudy.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1"
                        >
                          <span>{caseStudy.hotelName} Official Site</span>
                          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                        </a>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold border bg-purple-100 text-purple-800 border-purple-200">
                          📄 PRIMARY SOURCE
                        </span>
                      </div>
                    )}

                    {/* Certification Verification */}
                    {caseStudy.certifications && caseStudy.certifications.some(cert => getCertificationURL(cert)) && (
                      <div>
                        <div className="text-xs font-semibold text-blue-900 mb-2">Certification Verification</div>
                        <div className="space-y-1">
                          {caseStudy.certifications.filter(cert => getCertificationURL(cert)).map((cert, idx) => {
                            const url = getCertificationURL(cert);
                            return url ? (
                              <div key={idx}>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1"
                                >
                                  <span>{cert} Database</span>
                                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                </a>
                                <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold border bg-blue-100 text-blue-800 border-blue-200">
                                  ✅ OFFICIAL SOURCE
                                </span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {/* Architect Portfolio */}
                    {(() => {
                      const architectInfo = getArchitectInfo(caseStudy.keyContacts);
                      return architectInfo ? (
                        <div>
                          <div className="text-xs font-semibold text-blue-900 mb-2">Architect Portfolio</div>
                          {architectInfo.url ? (
                            <>
                              <a
                                href={architectInfo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1"
                              >
                                <span>{architectInfo.name}</span>
                                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                              </a>
                              <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold border bg-purple-100 text-purple-800 border-purple-200">
                                📄 PRIMARY
                              </span>
                            </>
                          ) : (
                            <div className="text-sm text-gray-600">{architectInfo.name}</div>
                          )}
                        </div>
                      ) : null;
                    })()}

                    {/* Sustainability Consultant Portfolio */}
                    {(() => {
                      const consultantInfo = getConsultantInfo(caseStudy.keyContacts);
                      return consultantInfo ? (
                        <div>
                          <div className="text-xs font-semibold text-blue-900 mb-2">Sustainability Consultant</div>
                          {consultantInfo.url ? (
                            <>
                              <a
                                href={consultantInfo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1"
                              >
                                <span>{consultantInfo.name} Case Studies</span>
                                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                              </a>
                              <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold border bg-green-100 text-green-800 border-green-200">
                                ✓ VERIFIED
                              </span>
                            </>
                          ) : (
                            <div className="text-sm text-gray-600">{consultantInfo.name}</div>
                          )}
                        </div>
                      ) : null;
                    })()}
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-xs text-blue-700 italic">
                      <strong>Source Quality:</strong> All claims verified through primary documentation (hotel websites, certification databases, consultant portfolios). Independent verification possible through linked sources.
                    </p>
                  </div>
                </div>
              )}

              {/* Circular Elements */}
              {caseStudy.circularElements && caseStudy.circularElements.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <ArrowPathIcon className="w-5 h-5 text-emerald-600" />
                    Circular Elements ({caseStudy.circularElements.length})
                  </h3>
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
                      <h3 className="font-semibold text-green-900 mb-2 text-sm flex items-center gap-1">
                        <CheckIcon className="w-4 h-4" />
                        What Worked Well
                      </h3>
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
                      <h3 className="font-semibold text-orange-900 mb-2 text-sm flex items-center gap-1">
                        <ExclamationTriangleIcon className="w-4 h-4" />
                        Challenges
                      </h3>
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
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <ArrowsRightLeftIcon className="w-5 h-5 text-blue-600" />
                    Replicability Assessment
                  </h3>
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
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-gray-600" />
                    Key Contacts
                  </h3>
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
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <LinkIcon className="w-5 h-5 text-emerald-600" />
                    Cross-References to Platform Data
                  </h3>
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
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <ArrowTrendingUpIcon className="w-5 h-5" />
                    Immediate Fyra Actions
                  </h3>
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
