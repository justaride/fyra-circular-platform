'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PartnershipStrategyPage() {
  const [activeTab, setActiveTab] = useState<'decision' | 'gaps' | 'positioning' | 'action'>('decision');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Partnership Strategy</h1>
        <p className="text-gray-600">
          Strategic guidance for selecting and approaching Swedish technical consultants for circular economy hotel projects
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('decision')}
            className={`flex-1 px-6 py-4 font-semibold transition ${
              activeTab === 'decision'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Decision Framework
          </button>
          <button
            onClick={() => setActiveTab('gaps')}
            className={`flex-1 px-6 py-4 font-semibold transition ${
              activeTab === 'gaps'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Market Gaps
          </button>
          <button
            onClick={() => setActiveTab('positioning')}
            className={`flex-1 px-6 py-4 font-semibold transition ${
              activeTab === 'positioning'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Fyra's Opportunity
          </button>
          <button
            onClick={() => setActiveTab('action')}
            className={`flex-1 px-6 py-4 font-semibold transition ${
              activeTab === 'action'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Action Plan
          </button>
        </div>

        {/* Decision Framework Tab */}
        {activeTab === 'decision' && (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Choose Each Consultant</h2>

            {/* Forsen AB */}
            <div className="bg-emerald-50 rounded-lg p-6 mb-6 border-2 border-emerald-200">
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">⭐⭐⭐⭐⭐</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Use FORSEN AB when:</h3>
                  <p className="text-sm text-emerald-700 font-medium">Hospitality PM Specialist with CM Expertise</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  <span><strong>Client values Construction Management flexibility</strong> for circular material sourcing during construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  <span><strong>Live hotel renovation</strong> (operational hotel during construction) - Forsen's specialty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  <span><strong>Chain hotel relationships matter</strong> (Nordic Choice, Scandic) for credibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  <span><strong>50-150 room projects</strong> where hospitality expertise is critical</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  <span><strong>Pure PM needed</strong> - Forsen does NOT do design (no overlap with Fyra)</span>
                </li>
              </ul>
              <div className="mt-4 bg-white rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Contact Strategy:</strong> Email via forsen.com contact form. Reference Grow Hotel CM circular success.
                </p>
              </div>
            </div>

            {/* Sweco */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6 border-2 border-blue-200">
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">⭐⭐⭐⭐</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Use SWECO when:</h3>
                  <p className="text-sm text-blue-700 font-medium">Largest A&E with Proven Circular ROI</p>
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded p-4 mb-4">
                <p className="text-sm text-red-900 font-bold">
                  ⚠️ SCOPING CRITICAL: Sweco DOES architecture. Must clarify Sweco = PM+Engineering | Fyra = Interior Design to avoid overlap!
                </p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>Design hotels with ambitious sustainability</strong> (LEED, BREEAM, Nordic Swan certification)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>Client needs quantified ROI</strong> (Sweco's C3 tool: Blique by Nobis = €8.6M materials, 3,600 tons CO₂ saved)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>100-250 room luxury projects</strong> with high sustainability ambitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>Adaptive reuse projects</strong> where engineering complexity is high</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span><strong>One-stop-shop preference</strong> (architecture + engineering + sustainability + PM)</span>
                </li>
              </ul>
              <div className="mt-4 bg-white rounded p-4">
                <p className="text-sm text-gray-700">
                  <strong>Contact Strategy:</strong> Call +46 8 695 60 00. Ask for Amanda Borneke (Circular Economy Specialist) + Buildings Division. Mention Blique success (3,600 tons CO₂ saved).
                </p>
              </div>
            </div>

            {/* Hifab AB */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 border-2 border-gray-200">
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">⭐⭐⭐⭐</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Use HIFAB AB when:</h3>
                  <p className="text-sm text-gray-700 font-medium">70 Years PM Experience, Pure PM Focus</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2 font-bold">✓</span>
                  <span><strong>Budget-conscious clients</strong> (~6,000 SEK/day vs. Sweco's 6,000-8,000 SEK/day)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2 font-bold">✓</span>
                  <span><strong>Regional/rural projects</strong> (15 offices = best geographic coverage in Sweden)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2 font-bold">✓</span>
                  <span><strong>50-100 room projects</strong> where Fyra leads sustainability (Hifab follows)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2 font-bold">✓</span>
                  <span><strong>Public sector clients</strong> (Hifab has strong public sector relationships)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2 font-bold">✓</span>
                  <span><strong>Pure PM needed</strong> - Hifab does NOT do design (no overlap with Fyra)</span>
                </li>
              </ul>
              <div className="mt-4 bg-white rounded p-4 border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>Contact Strategy:</strong> Via hifab.se. Ask for Christian Horn (Head of PM Stockholm). Mention 70 years experience + growing sustainability focus.
                </p>
              </div>
            </div>

            {/* Tier 2 Consultants */}
            <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tier 2: Specialist Partners</h3>
              <p className="text-gray-700 mb-4">
                WSP, AFRY, and Ramboll are best used as <strong>sub-consultants for specialized needs</strong> rather than lead PM:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>WSP Sverige:</strong> Engineering-heavy projects (HVAC optimization, complex building physics, WELL Building Standard)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>AFRY AB:</strong> Office-to-hotel adaptive reuse, energy optimization, Nordic cross-border knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span><strong>Ramboll Sweden:</strong> Advanced circular economy credentials but very limited hospitality track record (1-2 projects)</span>
                </li>
              </ul>
              <div className="mt-4 bg-white rounded p-3 border border-yellow-300">
                <p className="text-sm text-gray-700">
                  <strong>Recommended Structure:</strong> Forsen (lead PM) + WSP (engineering) + Fyra (design) for complex projects
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Market Gaps Tab */}
        {activeTab === 'gaps' && (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Swedish Market Analysis: The Missing Piece</h2>

            <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <span className="mr-2">🚨</span>
                Critical Market Gap: No "Complete Package" Exists
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Finding:</strong> No Swedish consultant currently offers the complete package of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded p-4 border border-red-200">
                  <div className="font-bold text-red-900 mb-2">1. Hospitality PM Expertise</div>
                  <p className="text-sm text-gray-700">Deep hotel renovation experience (10+ projects)</p>
                </div>
                <div className="bg-white rounded p-4 border border-red-200">
                  <div className="font-bold text-red-900 mb-2">2. Advanced Circularity</div>
                  <p className="text-sm text-gray-700">Market-leading circular economy implementation</p>
                </div>
                <div className="bg-white rounded p-4 border border-red-200">
                  <div className="font-bold text-red-900 mb-2">3. Pure PM Focus</div>
                  <p className="text-sm text-gray-700">No design overlap with Fyra's services</p>
                </div>
              </div>
              <p className="text-red-900 font-bold">
                THIS IS FYRA'S MARKET ENTRY OPPORTUNITY! 👇
              </p>
            </div>

            {/* Consultant Capability Matrix */}
            <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Consultant</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Hospitality Expertise</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Circular Economy</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-900">Pure PM Focus</th>
                    <th className="px-4 py-3 text-left font-bold text-gray-900">Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">FORSEN AB</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-emerald-600 font-bold text-xl">✓</span>
                      <div className="text-xs text-gray-600">10+ hotels</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-yellow-600 font-bold">~</span>
                      <div className="text-xs text-gray-600">★★★☆☆ Emerging</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-emerald-600 font-bold text-xl">✓</span>
                      <div className="text-xs text-gray-600">Pure PM</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-orange-700">Not yet market-leading circular</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">SWECO</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-yellow-600 font-bold">~</span>
                      <div className="text-xs text-gray-600">3-5 hotels</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-emerald-600 font-bold text-xl">✓</span>
                      <div className="text-xs text-gray-600">★★★★☆ High</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-red-600 font-bold text-xl">✗</span>
                      <div className="text-xs text-gray-600">Does architecture</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-orange-700">Design overlap with Fyra</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">HIFAB AB</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-yellow-600 font-bold">~</span>
                      <div className="text-xs text-gray-600">5-10 hotels</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-red-600 font-bold text-xl">✗</span>
                      <div className="text-xs text-gray-600">★★☆☆☆ Emerging</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-emerald-600 font-bold text-xl">✓</span>
                      <div className="text-xs text-gray-600">Pure PM</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-orange-700">Not sustainability specialist</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Other Market Gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Geographic Coverage
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Most consultants concentrate in Stockholm-Göteborg-Malmö triangle. Limited coverage in:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Northern Sweden (Norrland)</li>
                  <li>• Smaller cities</li>
                  <li>• Regional/rural hotel projects</li>
                </ul>
                <div className="mt-3 bg-emerald-50 rounded p-3">
                  <p className="text-sm text-emerald-900">
                    <strong>Exception:</strong> Hifab AB (15 offices = best coverage)
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Supplier Network Integration
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Few consultants have established relationships with Swedish reuse operators:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• YLLW Factory</li>
                  <li>• Input Interiör / Greenified</li>
                  <li>• Rekomo AB</li>
                </ul>
                <div className="mt-3 bg-emerald-50 rounded p-3">
                  <p className="text-sm text-emerald-900">
                    <strong>Opportunity:</strong> Fyra can bring pre-established supplier relationships as value-add
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fyra's Opportunity Tab */}
        {activeTab === 'positioning' && (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fyra's Unique Market Position</h2>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Fyra Can Bridge the Gap: Interior Design + Circular Economy Leadership
              </h3>
              <p className="text-gray-700 mb-4">
                Swedish consultants have hospitality PM expertise <strong>or</strong> circular economy credentials, but rarely both at market-leading levels.
                Fyra can position as the <strong>circular economy design specialist</strong> that works with Swedish PMs to deliver complete solutions.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border-2 border-emerald-200">
                <h3 className="font-bold text-emerald-900 mb-3 text-lg">What Fyra Brings:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 font-bold">✓</span>
                    <span><strong>Interior design expertise</strong> (no overlap with PM consultants)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 font-bold">✓</span>
                    <span><strong>Circular economy leadership</strong> (fills market gap)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 font-bold">✓</span>
                    <span><strong>Pre-established reuse supplier network</strong> (YLLW, Input, Rekomo)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 font-bold">✓</span>
                    <span><strong>Fire safety compliance knowledge</strong> (Three-Tier system)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 font-bold">✓</span>
                    <span><strong>Nordic hospitality experience</strong> (Finnish market credibility)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">What Swedish PMs Bring:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span><strong>Swedish regulatory expertise</strong> (BBR, fire codes, municipal)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span><strong>Local contractor relationships</strong> (Stockholm region)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span><strong>Swedish hotel chain relationships</strong> (Nordic Choice, Scandic)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span><strong>Project management depth</strong> (10+ hotel projects)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    <span><strong>Live renovation expertise</strong> (operational hotels)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Partnership Models */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Partnership Models</h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-2 border-emerald-200">
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3">🎯</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Model 1: Project-Specific Alliance (RECOMMENDED START)</h4>
                      <p className="text-sm text-emerald-700 font-medium">Best for market entry - low commitment, high flexibility</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm ml-11">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Structure:</strong> Joint proposal for specific hotel project. Fyra = Interior Design + Circular Procurement. Forsen/Hifab = PM + Regulatory.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Target Project:</strong> 50-150 room renovation with sustainability goals (LEED/BREEAM).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Advantage:</strong> Test collaboration without exclusive commitment.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3">🤝</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Model 2: Dual-Track Partnership</h4>
                      <p className="text-sm text-blue-700 font-medium">After proving success with 1-2 projects</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm ml-11">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Primary Partner:</strong> Forsen AB (hospitality specialist, CM flexibility)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Premium Partner:</strong> Sweco (for high-ambition sustainability projects needing quantified ROI)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Advantage:</strong> Flexibility to match consultant to project type while building deep relationships.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5 border-2 border-gray-200">
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3">⚠️</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Model 3: Exclusive Partnership (NOT RECOMMENDED INITIALLY)</h4>
                      <p className="text-sm text-gray-700 font-medium">Too risky without market validation</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm ml-11">
                    <strong>Risk:</strong> Exclusive tie limits flexibility if consultant underperforms or market needs change. Consider only after 5+ successful projects together.
                  </p>
                </div>
              </div>
            </div>

            {/* Competitive Positioning */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fyra's Competitive Positioning Statement</h3>
              <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
                <p className="text-gray-800 text-lg leading-relaxed">
                  "Fyra partners with Sweden's leading hospitality project managers (Forsen, Hifab, Sweco) to bring
                  <strong className="text-emerald-700"> market-leading circular economy expertise</strong> to hotel renovations.
                  We bridge the gap between Swedish PM capabilities and international sustainability ambitions, delivering
                  <strong className="text-emerald-700"> quantified carbon reductions</strong> (modeled on Blique by Nobis: 3,600 tons CO₂ saved)
                  while maintaining <strong className="text-emerald-700">fire safety compliance</strong> and
                  <strong className="text-emerald-700"> hospitality design excellence</strong>."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Plan Tab */}
        {activeTab === 'action' && (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Immediate Action Plan: Week 1-2</h2>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">Strategic Priority</h3>
              <p className="text-gray-700">
                Contact <strong>Forsen AB</strong> first (★★★★★ priority) for project-specific alliance,
                then <strong>Hifab AB</strong> as backup/regional option. Save Sweco for high-ambition projects requiring quantified ROI.
              </p>
            </div>

            {/* Week 1 Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                Week 1: Initial Outreach
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border-2 border-emerald-200">
                  <h4 className="font-bold text-gray-900 mb-3">Day 1-2: FORSEN AB (Top Priority)</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-emerald-700">Contact Method:</strong>
                      <p className="text-gray-700 mt-1">Email via <a href="https://forsen.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">forsen.com</a> contact form</p>
                    </div>
                    <div>
                      <strong className="text-emerald-700">Subject Line:</strong>
                      <p className="text-gray-700 mt-1 bg-gray-50 p-2 rounded">"Finnish Interior Design Firm Seeking Partnership for Circular Economy Hotel Projects in Sweden"</p>
                    </div>
                    <div>
                      <strong className="text-emerald-700">Key Message Points:</strong>
                      <ul className="text-gray-700 mt-1 space-y-1 ml-4">
                        <li>• Reference: Grow Hotel CM circular success demonstrates Forsen's circular procurement capability</li>
                        <li>• Fyra brings: Interior design + established Swedish reuse supplier network (YLLW, Input, Rekomo)</li>
                        <li>• Proposal: Joint project-specific alliance for 50-150 room hotel renovation</li>
                        <li>• Ask: 30-minute call to discuss collaboration model</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-emerald-700">Questions to Ask:</strong>
                      <ul className="text-gray-700 mt-1 space-y-1 ml-4">
                        <li>• Can Forsen provide client reference for Grow Hotel CM circular procurement?</li>
                        <li>• Does Forsen have existing relationships with YLLW Factory, Input/Greenified?</li>
                        <li>• Interest in joint proposal for upcoming projects with sustainability requirements?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Day 3-4: HIFAB AB (Backup/Regional Option)</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-gray-700">Contact Method:</strong>
                      <p className="text-gray-700 mt-1">Email via <a href="https://hifab.se/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">hifab.se</a>. Ask for Christian Horn (Head of PM Stockholm)</p>
                    </div>
                    <div>
                      <strong className="text-gray-700">Key Message Points:</strong>
                      <ul className="text-gray-700 mt-1 space-y-1 ml-4">
                        <li>• Reference: 70 years experience + growing sustainability focus</li>
                        <li>• Fyra can lead circular economy implementation (Hifab follows, no overlap)</li>
                        <li>• Target: Budget-conscious or regional hotel projects (15 offices = best coverage)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 2 Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                Week 2: Follow-up & Positioning
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3">Day 5-7: Follow-up Calls</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• If no response by Day 5: Follow-up call referencing email</p>
                    <p>• If positive interest: Schedule 30-minute video call with decision-maker</p>
                    <p>• Prepare case study presentation: Finnish circular economy hotel project examples</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3">Day 8-10: SWECO Outreach (High-Ambition Track)</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-blue-700">Contact Method:</strong>
                      <p className="text-gray-700 mt-1">Call +46 8 695 60 00. Ask for Amanda Borneke (Circular Economy Specialist) + Buildings Division</p>
                    </div>
                    <div>
                      <strong className="text-blue-700">Key Message Points:</strong>
                      <ul className="text-gray-700 mt-1 space-y-1 ml-4">
                        <li>• Reference: Blique by Nobis success (3,600 tons CO₂ saved) demonstrates Sweco's circular leadership</li>
                        <li>• <span className="text-red-700 font-bold">CRITICAL:</span> Clarify scope: Sweco = PM + Engineering | Fyra = Interior Design (avoid overlap!)</li>
                        <li>• Target: 100-250 room luxury projects needing LEED/BREEAM + quantified ROI</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Week 1-2 Success Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">2-3</div>
                  <div className="text-sm text-gray-700">Consultant conversations completed</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">1</div>
                  <div className="text-sm text-gray-700">Project-specific alliance proposal drafted</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">1</div>
                  <div className="text-sm text-gray-700">Joint proposal opportunity identified</div>
                </div>
              </div>
            </div>

            {/* Materials Needed */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Materials to Prepare Before Outreach</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">□</span>
                  <span><strong>1-page Fyra company overview</strong> (Finnish market success, hospitality portfolio, circular economy credentials)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">□</span>
                  <span><strong>Swedish reuse supplier network summary</strong> (<Link href="/suppliers" className="text-emerald-600 underline">use this platform's supplier directory</Link>)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">□</span>
                  <span><strong>Fire safety compliance brief</strong> (<Link href="/fire-safety" className="text-emerald-600 underline">Three-Tier system from this platform</Link>)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">□</span>
                  <span><strong>Nordic hotel case study examples</strong> (<Link href="/case-studies" className="text-emerald-600 underline">reference this platform's case studies</Link>)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">□</span>
                  <span><strong>Partnership model proposal</strong> (project-specific alliance template from "Fyra's Opportunity" tab above)</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4">Related Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/consultants" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-emerald-300 transition">
            <div className="font-semibold text-emerald-600 mb-1">View All Consultants →</div>
            <div className="text-sm text-gray-600">Detailed profiles and contact info</div>
          </Link>
          <Link href="/suppliers" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-emerald-300 transition">
            <div className="font-semibold text-emerald-600 mb-1">Swedish Reuse Suppliers →</div>
            <div className="text-sm text-gray-600">B2B operators for circular materials</div>
          </Link>
          <Link href="/scenarios" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-emerald-300 transition">
            <div className="font-semibold text-emerald-600 mb-1">Project Scenarios →</div>
            <div className="text-sm text-gray-600">Strategic guidance for different project types</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
