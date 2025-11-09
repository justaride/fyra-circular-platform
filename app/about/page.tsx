'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [expandedGap, setExpandedGap] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Strategy & Implementation Roadmap</h1>
        <p className="text-gray-600">
          Fyra's 12-month Swedish market entry plan for circular hospitality
        </p>
      </div>

      {/* Project Context */}
      <div className="bg-emerald-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nordic Circular Construction Partnership</h2>
        <div className="prose prose-emerald max-w-none text-gray-700">
          <p className="mb-4">
            This platform was developed through Fyra's partnership with <strong>Nordic Circular Construction (NCC)</strong> and
            <strong> Natural State</strong>, focusing on expanding circular economy practices in Swedish hotel renovations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Project Timeline</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>April 2025:</strong> Initial partnership meeting</li>
                <li><strong>October 2025:</strong> Strategic planning & research delivery</li>
                <li><strong>November 2025:</strong> 12-month market entry plan</li>
                <li><strong>Focus Market:</strong> Sweden (Gothenburg → Stockholm)</li>
                <li><strong>Target Sector:</strong> Hospitality - hotel renovations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Research Deliverables</h3>
              <ul className="space-y-2 text-sm">
                <li>• B2B reuse operators long-list (13 suppliers)</li>
                <li>• Technical consultants directory (6 firms)</li>
                <li>• Regulatory compliance guide</li>
                <li>• Hotel case studies (18 Nordic hotels)</li>
                <li>• Strategic implementation roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Market Readiness Assessment */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Swedish Market Readiness Assessment</h2>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-semibold text-gray-900">Overall Ecosystem Maturity:</span>
            <div className="flex items-center">
              <span className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-2xl font-bold mr-3">6.5/10</span>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                MODERATE-TO-STRONG READINESS
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic">
            Swedish circular hospitality market at inflection point—transitioning from "pioneer projects" to "early adopter phase."
            Ideal timing: sufficient infrastructure exists to be viable, yet not so mature that market leadership positions are locked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-emerald-600 mb-3 text-lg">✓ Strengths (Where Sweden Excels)</h3>
            <div className="space-y-3">
              <div className="bg-emerald-50 p-3 rounded border-l-4 border-emerald-600">
                <p className="font-semibold text-sm text-emerald-900">Regulatory Enablement <span className="text-xs bg-emerald-200 px-2 py-1 rounded ml-2">8/10</span></p>
                <p className="text-xs text-gray-700 mt-1">MiljöBalken Product Choice Principle, Climate Declaration mandatory since 2022, BBR performance-based reform (July 2025), growing municipal support</p>
              </div>

              <div className="bg-emerald-50 p-3 rounded border-l-4 border-emerald-600">
                <p className="font-semibold text-sm text-emerald-900">B2B Supply Infrastructure <span className="text-xs bg-emerald-200 px-2 py-1 rounded ml-2">7/10</span></p>
                <p className="text-xs text-gray-700 mt-1">30+ years office furniture reuse operations, Tier 1 hospitality-aware operators (YLLW 65K+ items, Input/Greenified turnkey capability), proven volume capacity (3 operators can supply 50+ identical items)</p>
              </div>

              <div className="bg-emerald-50 p-3 rounded border-l-4 border-emerald-600">
                <p className="font-semibold text-sm text-emerald-900">Consultant Capability <span className="text-xs bg-emerald-200 px-2 py-1 rounded ml-2">7.5/10</span></p>
                <p className="text-xs text-gray-700 mt-1">7 qualified firms with hospitality + sustainability, world-class leaders (White Arkitekter, Sweco), strong LCA expertise, LEED/BREEAM/MiljöByggnad experience</p>
              </div>

              <div className="bg-emerald-50 p-3 rounded border-l-4 border-emerald-600">
                <p className="font-semibold text-sm text-emerald-900">Market Precedents <span className="text-xs bg-emerald-200 px-2 py-1 rounded ml-2">7/10</span></p>
                <p className="text-xs text-gray-700 mt-1">12+ Swedish hotels with circular practices, quantified impacts (Blique €11.5M savings, House of Choice 70% recycled, zero-energy), circular hotels command 12-18% rate premium</p>
              </div>

              <div className="bg-emerald-50 p-3 rounded border-l-4 border-emerald-600">
                <p className="font-semibold text-sm text-emerald-900">Client Demand <span className="text-xs bg-emerald-200 px-2 py-1 rounded ml-2">7/10</span></p>
                <p className="text-xs text-gray-700 mt-1">Scandic Hotels (280+ properties) chain-wide circular commitments, Nordic Choice sustainability fund, Vasakronan/Fabege real estate support, consumer awareness rising</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-orange-600 mb-3 text-lg">⚠️ Critical Gaps (Where Sweden Struggles)</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Fire Safety Documentation",
                  severity: "MAJOR BARRIER",
                  problem: "Vintage/reused furniture lacks modern Euroclass certifications (EN 1021, BS 5852)",
                  impact: "€500-2,000 per custom item testing, 2-4 week delays, no standardized pathway",
                  color: "red"
                },
                {
                  title: "Hotel Bed Reuse Solution",
                  severity: "CRITICAL GAP",
                  problem: "ZERO Swedish B2B operators stock hotel-grade bed frames at volume",
                  impact: "Beds = largest furniture item per room; gap forces partial circularity only",
                  color: "red"
                },
                {
                  title: "BVB System Limitations",
                  severity: "ADMINISTRATIVE FRICTION",
                  problem: "BVB designed for NEW products only (30,000+ rated, ZERO reused items)",
                  impact: "Each reused item triggers manual exception review; coordinators may default to rejecting to avoid paperwork",
                  color: "orange"
                },
                {
                  title: "Triple Competence Rare",
                  severity: "CAPABILITY GAP",
                  problem: "No single consultant excels in hospitality + circularity + full PM simultaneously",
                  impact: "Must assemble multi-consultant teams (management overhead) OR accept capability gaps",
                  color: "orange"
                },
                {
                  title: "Volume vs Boutique Inconsistency",
                  severity: "OPERATIONAL",
                  problem: "Operators capable of EITHER high volumes OR unique designer pieces, rarely both",
                  impact: "Multi-supplier coordination complexity, no single point of accountability",
                  color: "yellow"
                }
              ].map((gap, idx) => (
                <div key={idx} className={`bg-${gap.color}-50 p-3 rounded border-l-4 border-${gap.color}-600 cursor-pointer`} onClick={() => setExpandedGap(expandedGap === idx ? null : idx)}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">
                        {gap.title} <span className={`text-xs bg-${gap.color}-200 text-${gap.color}-900 px-2 py-1 rounded ml-2`}>{gap.severity}</span>
                      </p>
                    </div>
                    <span className={`text-${gap.color}-600 font-bold text-lg ml-2`}>{expandedGap === idx ? '−' : '+'}</span>
                  </div>
                  {expandedGap === idx && (
                    <div className="mt-2 space-y-1 text-xs text-gray-700">
                      <p><span className="font-semibold">Problem:</span> {gap.problem}</p>
                      <p><span className="font-semibold">Impact:</span> {gap.impact}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fyra's Competitive Position */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fyra's Competitive Position</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">🌍 Nordic Leadership Credentials</h3>
            <p className="text-sm text-gray-700">
              Finnish circular hospitality expertise transfers to Sweden. Nordic shared sustainability values, language bridge, cultural affinity create market entry advantage.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">🎯 Specialist Positioning</h3>
            <p className="text-sm text-gray-700">
              No Swedish consultant excels in hospitality + circular + PM simultaneously. Fyra fills "Hospitality Circular Specialist" niche rather than competing with generalist A&E firms.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">📋 Methodology & Systems</h3>
            <p className="text-sm text-gray-700">
              Material passports, fire testing protocols, BVB equivalency templates create repeatable processes that reduce per-project risk and timeline.
            </p>
          </div>
        </div>
      </div>

      {/* 3-PHASE IMPLEMENTATION ROADMAP */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">12-Month Implementation Roadmap</h2>
        <p className="text-gray-600 mb-6">Strategic window for Fyra's Swedish market entry across three phases</p>

        <div className="space-y-4">
          {/* PHASE 1 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-emerald-200">
            <button
              onClick={() => setExpandedPhase(expandedPhase === 1 ? null : 1)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-emerald-50 transition"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 1: Foundation (Months 1-3)</h3>
                <p className="text-sm text-gray-600 mt-1">Establish market presence & core partnerships</p>
                <div className="flex gap-2 mt-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded text-xs font-semibold">B2B Partnerships</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-semibold">Consultant Network</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-xs font-semibold">Regulatory Training</span>
                </div>
              </div>
              <span className="text-2xl text-emerald-600">{expandedPhase === 1 ? '−' : '+'}</span>
            </button>
            {expandedPhase === 1 && (
              <div className="px-6 pb-6 border-t">
                <div className="mt-6 space-y-6">
                  {/* Priority 1: B2B Partnerships */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Priority 1: Establish B2B Operator Partnerships</h4>

                    <div className="space-y-4">
                      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-bold text-emerald-900 text-sm mb-1">
                              #1 YLLW FACTORY - PRIMARY PARTNERSHIP
                              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs ml-2">CRITICAL PATH</span>
                            </p>
                            <p className="text-xs text-gray-700 mb-2">Largest Nordic refurbishment infrastructure (65,000+ items), dedicated hospitality segment, 3-year warranty, volume capability</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                              <div>
                                <p className="text-xs font-semibold text-gray-900 mb-1">Value Proposition:</p>
                                <ul className="text-xs text-gray-700 space-y-0.5">
                                  <li>• 3-5 hotel projects Year 1 (300-800 pieces)</li>
                                  <li>• Co-develop hotel bed reuse solution</li>
                                  <li>• Material passport template pilot</li>
                                  <li>• Joint marketing & case studies</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-gray-900 mb-1">Negotiation Points:</p>
                                <ul className="text-xs text-gray-700 space-y-0.5">
                                  <li>• 80% volume commitment Year 1</li>
                                  <li>• SLA: 6 weeks standard, 3 weeks rush</li>
                                  <li>• Pricing: 50-65% of new equivalent</li>
                                  <li>• No exclusivity, "preferred supplier" status</li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-3 bg-white p-2 rounded text-xs">
                              <p className="font-semibold text-gray-900 mb-1">Action Plan (Week 1-4):</p>
                              <p className="text-gray-700">Week 1: Email Ola Sjödin (CEO) → Week 2: Video call → Week 3: Site visit Dalby factory → Week 4: Draft partnership MOU</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <p className="font-bold text-blue-900 text-sm mb-1">#2 INPUT INTERIÖR / GREENIFIED - SECONDARY PARTNERSHIP <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs ml-2">COMPLEMENTARY</span></p>
                        <p className="text-xs text-gray-700">Scandinavia's largest (100,000+ m² warehouse), turnkey PM capability, hotel experience (Clarion, Comfort), broader category coverage</p>
                      </div>

                      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                        <p className="font-bold text-purple-900 text-sm mb-1">#3 KOMPANJONEN - TERTIARY PARTNERSHIP <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs ml-2">BOUTIQUE</span></p>
                        <p className="text-xs text-gray-700">High-end vintage pieces, design curation, unique statement items for lobbies/restaurants (complements YLLW volume capacity)</p>
                      </div>
                    </div>
                  </div>

                  {/* Priority 2: Consultant Network */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Priority 2: Build PM/Consultant Network</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded border border-gray-300">
                        <p className="font-semibold text-sm text-gray-900 mb-2">White Arkitekter <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs ml-2">PRIMARY</span></p>
                        <p className="text-xs text-gray-700 mb-2">Sweden's sustainability leader (House of Choice zero-energy hotel), LEED Platinum expertise, circular construction pioneer</p>
                        <p className="text-xs text-gray-600"><strong>Partnership model:</strong> Circular expertise exchange, co-develop material passports, joint project pursuit</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded border border-gray-300">
                        <p className="font-semibold text-sm text-gray-900 mb-2">Forsen AB <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs ml-2">SECONDARY</span></p>
                        <p className="text-xs text-gray-700 mb-2">Hospitality PM specialist (Clarion Amaranten €90M, 450 rooms), regulatory navigation strength, Nordic Choice connection</p>
                        <p className="text-xs text-gray-600"><strong>Partnership model:</strong> Fyra circular layer + Forsen PM/regulatory strength for joint client offerings</p>
                      </div>
                    </div>
                  </div>

                  {/* Priority 3: Regulatory Training */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Priority 3: Regulatory Competence Building</h4>
                    <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                      <p className="font-semibold text-red-900 text-sm mb-2">🔥 Fire Safety Mastery (CRITICAL - Month 1-2)</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Training Components:</p>
                          <ul className="text-gray-700 space-y-0.5">
                            <li>• RISE fire safety workshop (Borås)</li>
                            <li>• EN 1021-1/1021-2 testing process</li>
                            <li>• BBR Chapter 5 interpretation</li>
                            <li>• Insurance requirements mapping</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Deliverables:</p>
                          <ul className="text-gray-700 space-y-0.5">
                            <li>• Fire testing decision tree template</li>
                            <li>• Cost calculator (per item/batch)</li>
                            <li>• Testing lab directory (RISE, SP)</li>
                            <li>• Sample assessment (10 furniture types)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <p className="font-semibold text-blue-900 text-sm mb-2">📋 BVB System Navigation (Month 2-3)</p>
                      <p className="text-xs text-gray-700">IVL workshop on BVB equivalency pathways, develop template for "Not Assessed" products showing equivalent environmental performance to BVB "Recommended" new products</p>
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="bg-emerald-700 text-white p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Phase 1 Success Metrics (Months 1-3)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">✅ CRITICAL (PASS/FAIL):</p>
                        <ul className="space-y-1 text-emerald-100 text-xs">
                          <li>• YLLW partnership MOU signed by Month 2</li>
                          <li>• White OR Forsen partnership MOU signed by Month 3</li>
                          <li>• 60-hour Swedish regulatory training completed</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">✓ Important:</p>
                        <ul className="space-y-1 text-emerald-100 text-xs">
                          <li>• Input/Greenified collaboration signed Month 4</li>
                          <li>• SGBC membership secured</li>
                          <li>• Material passport v1.0 piloted with YLLW</li>
                          <li>• 15+ warm intro to hotel decision-makers</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-100 mt-3"><strong>Budget:</strong> €45,000-68,000</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PHASE 2 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-blue-200">
            <button
              onClick={() => setExpandedPhase(expandedPhase === 2 ? null : 2)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50 transition"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 2: Market Validation (Months 4-6)</h3>
                <p className="text-sm text-gray-600 mt-1">Secure & execute first Swedish project</p>
                <div className="flex gap-2 mt-3">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded text-xs font-semibold">CRITICAL: First Project Secured</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-semibold">50-150 Rooms</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-xs font-semibold">Gothenburg Priority</span>
                </div>
              </div>
              <span className="text-2xl text-blue-600">{expandedPhase === 2 ? '−' : '+'}</span>
            </button>
            {expandedPhase === 2 && (
              <div className="px-6 pb-6 border-t">
                <div className="mt-6 space-y-6">
                  {/* Target Project Profile */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Optimal First Project Specification</h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-blue-50 p-4 rounded border-2 border-blue-300">
                        <p className="font-bold text-blue-900 text-sm mb-2">📏 Size: 50-150 Rooms</p>
                        <p className="text-xs text-gray-700"><strong>Rationale:</strong> Sufficient volume to showcase B2B capacity, manageable complexity, independent owners more agile. Precedents: Akademihotellet (97 rooms), Hobo Hotel (201 rooms)</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded border-2 border-green-300">
                        <p className="font-bold text-green-900 text-sm mb-2">📍 Location: Gothenburg Priority</p>
                        <p className="text-xs text-gray-700"><strong>Rationale:</strong> "Cirkulära Göteborg" program, 4-6 month permits vs Stockholm 6-8 months (30% exceed), municipal support provides problem-solving. <strong>Avoid Stockholm first</strong> - highest complexity</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded border-2 border-purple-300">
                        <p className="font-bold text-purple-900 text-sm mb-2">👤 Client: Independent Owner</p>
                        <p className="text-xs text-gray-700"><strong>Rationale:</strong> Decision speed (4-8 weeks vs chains 3-6 months), flexibility to experiment, sustainability values alignment. Target owners with demonstrated environmental commitment</p>
                      </div>
                    </div>
                  </div>

                  {/* Go-To-Market */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Go-To-Market Strategy</h4>
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="font-semibold text-sm text-gray-900 mb-3">Target Client Profiles (Gothenburg Area):</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="bg-white p-3 rounded border border-gray-300">
                          <p className="font-semibold text-gray-900 mb-1">🏨 Independent Boutique Hotels (75-125 rooms)</p>
                          <p className="text-gray-700">Owners with sustainability positioning, renovation pipeline 2026-2027, examples: Clarion Collection properties, family-owned historic hotels</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-300">
                          <p className="font-semibold text-gray-900 mb-1">🏢 Real Estate Developers</p>
                          <p className="text-gray-700">Vasakronan, Fabege, Wihlborgs properties with hotel tenants, adaptive reuse projects (warehouse → hotel conversions)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="bg-blue-700 text-white p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Phase 2 Success Metrics (Months 4-6)</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-red-600 p-3 rounded">
                        <p className="font-bold mb-2">🎯 PRIMARY SUCCESS METRIC (PASS/FAIL):</p>
                        <p className="text-white text-xs">1 Swedish hotel project SECURED (contract signed) by Month 6</p>
                        <p className="text-xs text-red-100 mt-1">Specification: Gothenburg/Malmö location, 75-125 rooms, sustainability-focused owner, interior renovation, €3-8M budget</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-semibold mb-1">Project Pipeline:</p>
                          <ul className="space-y-0.5 text-blue-100">
                            <li>• 5-10 client meetings held</li>
                            <li>• 3-5 project proposals submitted</li>
                            <li>• YLLW volume capacity pilot completed</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Market Visibility:</p>
                          <ul className="space-y-0.5 text-blue-100">
                            <li>• "Nordic Circular Hospitality Report" published</li>
                            <li>• 3+ media mentions / trade articles</li>
                            <li>• Fire testing trial with RISE completed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blue-100 mt-3"><strong>Budget:</strong> €43,000-65,000 | <strong>Revenue:</strong> €0 (project secured, not yet invoicing)</p>
                    <p className="text-xs text-red-200 mt-2"><strong>FAIL STATE:</strong> If no project by Month 6, extend Phase 2 by 3 months (continue validation); if no project by Month 9, reassess market entry viability</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PHASE 3 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-purple-200">
            <button
              onClick={() => setExpandedPhase(expandedPhase === 3 ? null : 3)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-purple-50 transition"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 3: Scaling (Months 7-12)</h3>
                <p className="text-sm text-gray-600 mt-1">Deliver first project, secure pipeline, establish market leadership</p>
                <div className="flex gap-2 mt-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-xs font-semibold">Chain Hotel Penetration</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded text-xs font-semibold">Ecosystem Leadership</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded text-xs font-semibold">Project Delivery</span>
                </div>
              </div>
              <span className="text-2xl text-purple-600">{expandedPhase === 3 ? '−' : '+'}</span>
            </button>
            {expandedPhase === 3 && (
              <div className="px-6 pb-6 border-t">
                <div className="mt-6 space-y-6">
                  {/* Chain Hotel Targets */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Chain Hotel Penetration Strategy</h4>

                    <div className="space-y-4">
                      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                        <p className="font-bold text-purple-900 text-sm mb-2">
                          #1 SCANDIC HOTELS <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs ml-2">HIGHEST PRIORITY</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Why Target:</p>
                            <ul className="text-gray-700 space-y-0.5">
                              <li>• 280+ properties (Scandinavia's largest)</li>
                              <li>• 96% Nordic Swan certified</li>
                              <li>• 2030 carbon neutrality goal</li>
                              <li>• Scandic Go brand = circular interiors</li>
                              <li>• 20-30 renovations/year pipeline</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Pilot → Rollout Strategy:</p>
                            <ul className="text-gray-700 space-y-0.5">
                              <li>• Month 7-9: Pitch with first project case study</li>
                              <li>• Pilot: ONE 100-150 room Scandic (Gothenburg)</li>
                              <li>• Terms: 10% discount for documentation rights</li>
                              <li>• Target: 50-70% circular, Nordic Swan maintained</li>
                              <li>• Rollout: 3-5 properties/year framework if successful</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded border border-blue-300">
                          <p className="font-semibold text-sm text-blue-900 mb-1">#2 Nordic Choice Hotels (Strawberry)</p>
                          <p className="text-xs text-gray-700">200+ properties (Clarion, Comfort, Quality), climate fund, Hobo Hotel precedent, Forsen connection for warm intro</p>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded border border-indigo-300">
                          <p className="font-semibold text-sm text-indigo-900 mb-1">#3 Nobis Hospitality Group</p>
                          <p className="text-xs text-gray-700">Boutique chain, design-forward, Blique by Nobis precedent (€11.5M savings), luxury positioning aligns with circular storytelling</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ecosystem Leadership */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Ecosystem Leadership Activities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded border border-green-300">
                        <p className="font-semibold text-sm text-green-900 mb-2">🎤 Thought Leadership</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Publish Nordic Circular Hospitality Report</li>
                          <li>• Speak at SGBC conferences</li>
                          <li>• Host circular hospitality workshops</li>
                          <li>• Guest lecture at architecture schools</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                        <p className="font-semibold text-sm text-yellow-900 mb-2">🤝 Industry Collaboration</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Co-develop hotel bed reuse solution with YLLW</li>
                          <li>• BVB equivalency template with IVL</li>
                          <li>• Fire testing batch process with RISE</li>
                          <li>• Material passport standards with SGBC</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="bg-purple-700 text-white p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">Phase 3 Success Metrics (Months 7-12)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Project Delivery:</p>
                        <ul className="space-y-1 text-purple-100 text-xs">
                          <li>• First project DELIVERED by Month 12</li>
                          <li>• 50-70% circular content achieved</li>
                          <li>• Client satisfaction ≥8/10</li>
                          <li>• Case study published</li>
                          <li>• 2-3 additional projects SECURED for Year 2</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Market Position:</p>
                        <ul className="space-y-1 text-purple-100 text-xs">
                          <li>• Scandic OR Nordic Choice pilot agreed</li>
                          <li>• 5+ speaking engagements / publications</li>
                          <li>• Hotel bed prototype developed with YLLW</li>
                          <li>• 3+ Year 2 qualified leads</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-purple-100 mt-3"><strong>Budget:</strong> €82,000-117,000 | <strong>Revenue:</strong> €150,000-300,000 (first project invoicing)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Critical Success Factors */}
      <div className="bg-red-50 rounded-lg p-6 mb-8 border-2 border-red-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Success Factors (Must-Haves)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border-2 border-red-400">
            <p className="font-bold text-red-900 text-sm mb-2">1. YLLW Factory Partnership Secured <span className="bg-red-600 text-white px-2 py-1 rounded text-xs ml-2">CRITICAL PATH</span></p>
            <p className="text-xs text-gray-700">No other operator offers volume + hospitality + quality + national coverage. Without YLLW: forced into multi-supplier patchwork (complexity, quality inconsistency). <strong>Validation:</strong> Month 1-2 YLLW MOU signed or reassess market entry viability</p>
          </div>
          <div className="bg-white p-4 rounded border-2 border-red-400">
            <p className="font-bold text-red-900 text-sm mb-2">2. Swedish Regulatory Partner <span className="bg-red-600 text-white px-2 py-1 rounded text-xs ml-2">CRITICAL</span></p>
            <p className="text-xs text-gray-700">Fyra cannot independently navigate Swedish BBR/PBL/BVB; Finnish knowledge not transferable. <strong>Validation:</strong> Month 1-3 partnership MOU with White OR Forsen or hire Swedish regulatory specialist on staff</p>
          </div>
          <div className="bg-white p-4 rounded border-2 border-orange-400">
            <p className="font-bold text-orange-900 text-sm mb-2">3. First Project Success <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs ml-2">VALIDATION</span></p>
            <p className="text-xs text-gray-700">Track record essential for chain penetration, consultant credibility, operator confidence. <strong>Validation:</strong> If not secured by Month 6, extend Phase 2; if not secured by Month 9, reassess</p>
          </div>
          <div className="bg-white p-4 rounded border-2 border-orange-400">
            <p className="font-bold text-orange-900 text-sm mb-2">4. Fire Safety Competence Built <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs ml-2">TECHNICAL</span></p>
            <p className="text-xs text-gray-700">Fire testing = #1 barrier. Must fluently assess requirements, coordinate testing, specify compliant solutions. <strong>Validation:</strong> RISE training completed Month 2, correctly assess 10 sample items</p>
          </div>
        </div>
      </div>

      {/* How to Use This Platform */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-emerald-600 mb-2">For New Projects</h3>
            <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
              <li>Review <Link href="/case-studies" className="text-blue-600 hover:underline font-semibold">Case Studies</Link> for comparable hotel types</li>
              <li>Browse <Link href="/suppliers" className="text-blue-600 hover:underline font-semibold">Suppliers</Link> filtered by hospitality readiness (YLLW, Input, Rekomo)</li>
              <li>Check <Link href="/regulatory" className="text-blue-600 hover:underline font-semibold">Regulatory Guide</Link> for compliance requirements</li>
              <li>Identify <Link href="/consultants" className="text-blue-600 hover:underline font-semibold">Consultants</Link> with relevant experience (White, Forsen)</li>
              <li>Build project team and sourcing strategy per Phase 2 guidance</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-600 mb-2">For Client Pitches</h3>
            <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
              <li>Use Case Studies impact metrics (Blique €11.5M savings, House of Choice 70% recycled)</li>
              <li>Reference successful Nordic precedents (12+ Swedish hotels)</li>
              <li>Show supplier readiness and volume capability (YLLW 65K+ items)</li>
              <li>Address fire safety / compliance concerns proactively with Regulatory Guide</li>
              <li>Demonstrate "spec-first" circular methodology reduces risk</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This platform contains data from Nordic Circular Construction research partnership with Natural State (October 2025).
            All strategic recommendations based on market analysis of 13 B2B suppliers, 6 consultants, 18 hotel case studies, and Swedish regulatory framework.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-emerald-700 text-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Questions or Feedback?</h2>
        <p className="text-emerald-100 mb-4">
          This internal platform is maintained by Fyra's sustainability team. For questions about
          the research data or Swedish market entry strategy, contact your project lead.
        </p>
        <div className="text-sm text-emerald-200">
          <p><strong>Research Partner:</strong> Nordic Circular Construction / Natural State</p>
          <p><strong>Project Lead:</strong> Jan Thomas Odegård</p>
          <p><strong>Strategic Window:</strong> 12-Month Market Entry Plan (Months 1-12)</p>
        </div>
      </div>
    </div>
  );
}
