'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegulatoryPage() {
  const [expandedTree, setExpandedTree] = useState<number | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedFear, setExpandedFear] = useState<number | null>(null);
  const [expandedTemplate, setExpandedTemplate] = useState<number | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<number | null>(null);
  const [expandedChecklist, setExpandedChecklist] = useState<string | null>(null);
  const [expandedTimeline, setExpandedTimeline] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Regulatory Compliance Guide</h1>
        <p className="text-gray-600 mb-4">
          Practical guide to Swedish building codes and standards for hotel renovations with reused materials
        </p>
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
          <p className="text-sm text-emerald-900">
            <strong>Purpose:</strong> Demystify regulatory concerns for conservative clients. Based on 30+ documented Nordic hotel circular projects.
          </p>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
        <div className="flex">
          <div className="text-2xl mr-3">⚠️</div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Important Note</h3>
            <p className="text-sm text-gray-700">
              This guide provides practical overview based on real projects. Always consult with certified building code experts
              and fire safety engineers for project-specific compliance. Regulations may vary by municipality and building type.
            </p>
          </div>
        </div>
      </div>

      {/* DECISION TREES */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Reference: Decision Trees</h2>

        {/* Decision Tree 1 */}
        <div className="bg-white rounded-lg shadow-md mb-6 border-2 border-emerald-200">
          <button
            onClick={() => setExpandedTree(expandedTree === 1 ? null : 1)}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-emerald-50 transition"
          >
            <div className="flex items-center">
              <span className="text-3xl mr-4">🔍</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Decision Tree 1: Can I Use This Reused Item?</h3>
                <p className="text-sm text-gray-600 mt-1">Step-by-step evaluation for material selection</p>
              </div>
            </div>
            <span className="text-2xl text-emerald-600">{expandedTree === 1 ? '−' : '+'}</span>
          </button>

          {expandedTree === 1 && (
            <div className="px-6 pb-6 border-t">
              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">START: Identify material/item category</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-gray-900 mb-3">QUESTION 1: What room type/location?</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>→ Guest room (sleeping area) → <span className="font-semibold text-orange-600">MODERATE</span> fire requirements</li>
                    <li>→ Corridor/escape route → <span className="font-semibold text-red-600">HIGH</span> fire requirements</li>
                    <li>→ Public area (lobby, restaurant) → <span className="font-semibold text-orange-600">MODERATE-HIGH</span> requirements</li>
                    <li>→ Back-of-house (office, storage) → <span className="font-semibold text-green-600">LOW</span> requirements</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-gray-900 mb-3">QUESTION 2: Does item have original fire certification valid?</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>→ <span className="font-semibold text-green-600">YES + Documentation available</span> → ✓ PROCEED (verify with insurance)</li>
                    <li>→ <span className="font-semibold text-orange-600">NO/Unknown</span> → Continue to Q3</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-gray-900 mb-3">QUESTION 3: Is testing economically viable?</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>→ Volume ≥20 identical items → <span className="font-semibold text-green-600">YES</span>, test cost spreads (500-2000 SEK/item)</li>
                    <li>→ High-value unique piece → <span className="font-semibold text-green-600">YES</span>, testing justified</li>
                    <li>→ Small quantity low-value → <span className="font-semibold text-orange-600">NO</span> → Continue to Q4</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-gray-900 mb-3">QUESTION 4: Can fire retardant treatment work?</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>→ Upholstered furniture/textiles → <span className="font-semibold text-green-600">YES</span> (treatment 15-40 EUR/item, 85-90% success)</li>
                    <li>→ Wood paneling → <span className="font-semibold text-green-600">YES</span> (spray treatment 100-300 SEK/m²)</li>
                    <li>→ Metal/glass/stone → <span className="font-semibold text-green-600">INHERENTLY SAFE</span>, no treatment needed</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-gray-900 mb-3">QUESTION 5: Can I use in lower-risk location?</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>→ Move from corridor → guest room (lower fire class)</li>
                    <li>→ Move from public → back-of-house (minimal requirements)</li>
                    <li>→ Use as decorative element (not load-bearing/fire-critical)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                  <p className="font-semibold text-red-900">FINAL: If all fail → SPECIFY NEW COMPLIANT PRODUCT</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Decision Tree 2 */}
        <div className="bg-white rounded-lg shadow-md border-2 border-purple-200">
          <button
            onClick={() => setExpandedTree(expandedTree === 2 ? null : 2)}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-purple-50 transition"
          >
            <div className="flex items-center">
              <span className="text-3xl mr-4">📋</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Decision Tree 2: What Documentation Do I Need?</h3>
                <p className="text-sm text-gray-600 mt-1">Complete documentation checklist for compliance</p>
              </div>
            </div>
            <span className="text-2xl text-purple-600">{expandedTree === 2 ? '−' : '+'}</span>
          </button>

          {expandedTree === 2 && (
            <div className="px-6 pb-6 border-t">
              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">START: Reused material selected</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold text-gray-900 mb-3">STEP 1: Supplier provides material passport?</p>
                  <ul className="space-y-2 text-sm text-gray-700 ml-4">
                    <li>→ <span className="font-semibold text-green-600">YES</span> (YLLW, Input, RP level) → ✓ Use their documentation</li>
                    <li>→ <span className="font-semibold text-orange-600">NO/Incomplete</span> → Build documentation package yourself</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold text-gray-900 mb-3">STEP 2: Mandatory documentation (ALL projects):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>✓ Supplier commercial invoice (proves "product" not "waste")</li>
                    <li>✓ Material composition declaration</li>
                    <li>✓ Visual inspection report (condition grading)</li>
                    <li>✓ Hazardous material screening (especially pre-1980 items)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold text-gray-900 mb-3">STEP 3: Fire safety documentation (IF in guest rooms/public areas):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>→ Original manufacturer fire certificate → ✓ <span className="font-semibold text-green-600">BEST</span></li>
                    <li>→ RISE/SP test report (EN 1021-1/2, EN 13501-1) → ✓ <span className="font-semibold text-green-600">ACCEPTABLE</span></li>
                    <li>→ Fire retardant treatment certificate → ✓ <span className="font-semibold text-green-600">ACCEPTABLE</span></li>
                    <li>→ Performance-based equivalency (fire engineer letter) → ✓ <span className="font-semibold text-orange-600">MAY WORK</span> (verify with authority)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold text-gray-900 mb-3">STEP 4: Structural/durability documentation (IF load-bearing/high-wear):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>→ Engineering assessment letter → ✓ For structural reuse</li>
                    <li>→ Manufacturer warranty/lifetime specs → ✓ For commercial furniture</li>
                    <li>→ Supplier 3-year warranty (YLLW model) → ✓ GOOD</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold text-gray-900 mb-3">STEP 5: Chemical content documentation (for certifications/BVB):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>→ REACH compliance declaration → ✓ Required for EU</li>
                    <li>→ VOC emission test (ISO 16000-9) → ✓ For indoor air quality</li>
                    <li>→ Heavy metal screening → ✓ For pre-1980 items</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="font-semibold text-gray-900 mb-3">STEP 6: Compile for building permit submission</p>
                  <p className="text-sm text-gray-700 ml-4">→ Package all above + architectural drawings + control plan</p>
                  <p className="text-sm text-gray-700 ml-4">→ Submit 6-8 months before construction (Stockholm)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FIRE SAFETY REQUIREMENTS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Fire Safety Requirements</h2>

        {/* Regulations Table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Applicable Regulations</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regulation</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authority</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">What It Covers</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enforcement Level</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">BBR Chapter 5</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <a href="https://www.boverket.se" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Boverket</a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">Fire safety for buildings; hotels = "Verksamhetsklass 4" (highest fire requirements)</td>
                  <td className="px-4 py-3 text-sm"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">HIGH</span></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">EuroClasses (EN 13501-1)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">EU/Swedish Standards Institute</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Fire classification system: A1 (non-combustible) → F (no classification)</td>
                  <td className="px-4 py-3 text-sm"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">HIGH</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">EN 1021-1/1021-2</td>
                  <td className="px-4 py-3 text-sm text-gray-700">EU standard</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Cigarette/match test for upholstered furniture</td>
                  <td className="px-4 py-3 text-sm"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">HIGH for hotels</span></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">MSB Guidelines</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <a href="https://www.msb.se/" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Swedish Civil Contingencies Agency</a>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">Recommendations for loose furnishings in escape routes</td>
                  <td className="px-4 py-3 text-sm"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">MEDIUM</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">Insurance Requirements</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Varies by insurer</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often stricter than regulatory minimums</td>
                  <td className="px-4 py-3 text-sm"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">CRITICAL</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-red-50 border-l-4 border-red-600 p-4 rounded">
            <p className="text-sm text-red-900 font-semibold">Hotels classified as "samlingslokaler" (assembly facilities) = STRICTEST fire requirements in Swedish building code.</p>
          </div>
        </div>

        {/* Product Categories */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements by Room Type</h3>
          <p className="text-sm text-gray-600 mb-4">Click each category to see detailed fire safety requirements:</p>

          <div className="space-y-3">
            {['guest-rooms', 'corridors', 'public-areas', 'back-of-house'].map((category) => (
              <div key={category} className="border rounded-lg">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">
                    {category === 'guest-rooms' && '🛏️ Guest Rooms (Sleeping Areas)'}
                    {category === 'corridors' && '🚪 Corridors/Escape Routes'}
                    {category === 'public-areas' && '🏛️ Public Areas (Lobbies, Restaurants)'}
                    {category === 'back-of-house' && '🔧 Back-of-House (Offices, Storage)'}
                  </span>
                  <span className="text-emerald-600 font-bold">{expandedCategory === category ? '−' : '+'}</span>
                </button>

                {expandedCategory === category && (
                  <div className="p-4 border-t bg-gray-50">
                    {category === 'guest-rooms' && (
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 px-2 font-semibold">Item Category</th>
                              <th className="text-left py-2 px-2 font-semibold">Fire Class Required</th>
                              <th className="text-left py-2 px-2 font-semibold">Testing Standard</th>
                              <th className="text-left py-2 px-2 font-semibold">Enforcement</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="py-2 px-2 font-medium">Upholstered Furniture</td>
                              <td className="py-2 px-2">EN 1021-1 (cigarette) MINIMUM<br/>EN 1021-2 (match) RECOMMENDED</td>
                              <td className="py-2 px-2">
                                <a href="https://www.ri.se" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">RISE Fire Research</a>
                              </td>
                              <td className="py-2 px-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">HIGH - Insurance mandatory</span></td>
                            </tr>
                            <tr>
                              <td className="py-2 px-2 font-medium">Mattresses</td>
                              <td className="py-2 px-2">EN 597-1/597-2</td>
                              <td className="py-2 px-2">RISE/SP testing</td>
                              <td className="py-2 px-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">HIGH - Health/safety risk</span></td>
                            </tr>
                            <tr>
                              <td className="py-2 px-2 font-medium">Curtains/Drapes</td>
                              <td className="py-2 px-2">B-s1,d0 (Euroclass)</td>
                              <td className="py-2 px-2">EN 13501-1</td>
                              <td className="py-2 px-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">MEDIUM</span></td>
                            </tr>
                            <tr>
                              <td className="py-2 px-2 font-medium">Wood Furniture</td>
                              <td className="py-2 px-2">D-s2,d0 OR inherently compliant</td>
                              <td className="py-2 px-2">Dense hardwoods often comply</td>
                              <td className="py-2 px-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">LOW - Rarely challenged</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {category === 'corridors' && (
                      <div className="space-y-3">
                        <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded">
                          <p className="font-semibold text-red-900 text-sm">STRICTEST requirements - escape routes must remain clear and fire-safe.</p>
                        </div>
                        <p className="text-sm text-gray-700">Furniture in corridors generally discouraged. If necessary:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                          <li>Must be inherently non-combustible (metal, stone) OR Class B-s1,d0</li>
                          <li>Cannot obstruct escape width (minimum 1.2m clear)</li>
                          <li>Fixed to walls/floor to prevent movement during evacuation</li>
                          <li>Fire authority may require removal if deemed hazard</li>
                        </ul>
                      </div>
                    )}

                    {category === 'public-areas' && (
                      <div className="space-y-3">
                        <p className="text-sm text-gray-700">Similar to guest rooms but with higher occupancy considerations:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                          <li>Upholstered furniture: EN 1021-2 (match test) often REQUIRED, not just recommended</li>
                          <li>Large fabric installations (curtains, acoustic panels): B-s1,d0 minimum</li>
                          <li>Carpets: Class D-s2,d0 or better</li>
                          <li>Higher scrutiny from insurance due to public liability</li>
                        </ul>
                      </div>
                    )}

                    {category === 'back-of-house' && (
                      <div className="space-y-3">
                        <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded">
                          <p className="font-semibold text-green-900 text-sm">LOWEST fire requirements - ideal for reused materials with limited documentation.</p>
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                          <li>Standard office furniture requirements apply (less stringent than guest-facing areas)</li>
                          <li>Fire testing rarely required unless specified by insurance</li>
                          <li>Good location for vintage/antique pieces without modern certification</li>
                          <li>Still requires basic material safety (no hazardous substances)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BVB INTEGRATION */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Byggvarubedömningen (BVB) Integration</h2>
        <p className="text-gray-600 mb-6">How to specify reused materials in Sweden's building product assessment system</p>

        {/* BVB Overview */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">What is BVB?</h3>
          <p className="text-sm text-gray-700 mb-3">
            <a href="https://byggvarubedomningen.se/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Byggvarubedömningen (BVB)</a> = Swedish building product assessment system for chemical content, lifecycle impact, and sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Key Facts:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• 30,000+ building products rated</li>
                <li>• Used by all major Swedish property owners</li>
                <li>• <span className="font-semibold">VOLUNTARY</span> (not in BBR) BUT de facto mandatory for major clients</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Rating Levels:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Recommended</span> (Rekommenderad) = Best profile</li>
                <li>• <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Accepted</span> (Accepterad) = OK with conditions</li>
                <li>• <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Not Assessed</span> (Ej Bedömd) = Requires manual approval</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-white p-4 rounded border border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">Why This Matters for Reused Materials:</p>
            <p className="text-sm text-gray-700">
              Reused products = "Ej Bedömd" (Not Assessed) = administrative friction. But with proper documentation, they can demonstrate <span className="font-semibold">equivalent or superior</span> environmental performance to BVB "Recommended" new products.
            </p>
          </div>
        </div>

        {/* BVB Circular Attributes Table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How Reused Products Score on BVB Criteria</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Criterion</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reused Product Performance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Chemical Content</td>
                  <td className="px-4 py-3 text-gray-700">40%</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">GOOD</span> Older products often safer (pre-modern additives)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Resource Extraction</td>
                  <td className="px-4 py-3 text-gray-700">15%</td>
                  <td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-semibold">EXCELLENT</span> No new extraction</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Manufacturing Impact</td>
                  <td className="px-4 py-3 text-gray-700">20%</td>
                  <td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-semibold">EXCELLENT</span> No new production emissions</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Transport</td>
                  <td className="px-4 py-3 text-gray-700">5%</td>
                  <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">BETTER</span> Typically local sourcing (200km vs 2,000km)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Documentation Quality</td>
                  <td className="px-4 py-3 text-gray-700">5%</td>
                  <td className="px-4 py-3"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">CHALLENGE</span> Often poor for reused - needs workarounds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BVB Specification Templates */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">BVB Specification Templates</h3>
          <p className="text-sm text-gray-600 mb-4">Copy-paste templates for specifying reused materials in tender documents</p>

          {/* Template 1 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-emerald-200">
            <button
              onClick={() => setExpandedTemplate(expandedTemplate === 1 ? null : 1)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-emerald-50 transition"
            >
              <div>
                <h4 className="font-bold text-gray-900">Template 1: When Supplier Has Full Documentation</h4>
                <p className="text-xs text-gray-600 mt-1">Use for established suppliers like YLLW, Input, Rekomo</p>
              </div>
              <span className="text-2xl text-emerald-600">{expandedTemplate === 1 ? '−' : '+'}</span>
            </button>
            {expandedTemplate === 1 && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200 relative">
                  <button
                    onClick={() => {
                      const text = `SPECIFICATION: Guest Room Lounge Chairs (50 units)

PRODUCT TYPE: Upholstered armchair, reused/refurbished

SUPPLIER: YLLW Factory AB, Dalby, Sweden

BVB STATUS: Not Assessed (Reclaimed Product)

EQUIVALENT DOCUMENTATION PROVIDED:
- Material Composition: Oak frame (FSC-certified original), polyurethane foam (CertiPUR certified), wool textile (OEKO-TEX Standard 100)
- Chemical Content: REACH Annex XVII compliant per supplier declaration
- Fire Safety: EN 1021-1 and EN 1021-2 certified (RISE test report R-2024-12345 attached)
- Durability: YLLW 3-year commercial warranty
- Lifecycle Impact: Estimated 75% embodied carbon reduction vs. new equivalent (calculation attached)
- Provenance: Sourced from Swedish office liquidations 2022-2024

ENVIRONMENTAL JUSTIFICATION:
This specification achieves equivalent or superior environmental performance to BVB "Recommended" new furniture through:
1. Elimination of virgin material extraction (no new timber/foam/textile production)
2. Avoidance of manufacturing emissions (refurbishment energy <5% of new production)
3. Local sourcing (average 200km transport vs. 2,000km typical for new)
4. Circular business model (YLLW operates closed-loop system with take-back)

APPROVED BY: [Environmental Coordinator name], [Date]`;
                      navigator.clipboard.writeText(text);
                      setCopiedTemplate(1);
                      setTimeout(() => setCopiedTemplate(null), 2000);
                    }}
                    className="absolute top-2 right-2 bg-emerald-600 text-white px-3 py-1 rounded text-xs hover:bg-emerald-700 transition"
                  >
                    {copiedTemplate === 1 ? '✓ Copied!' : '📋 Copy'}
                  </button>
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono">
{`SPECIFICATION: Guest Room Lounge Chairs (50 units)

PRODUCT TYPE: Upholstered armchair, reused/refurbished

SUPPLIER: YLLW Factory AB, Dalby, Sweden

BVB STATUS: Not Assessed (Reclaimed Product)

EQUIVALENT DOCUMENTATION PROVIDED:
- Material Composition: Oak frame (FSC-certified original),
  polyurethane foam (CertiPUR certified), wool textile (OEKO-TEX Standard 100)
- Chemical Content: REACH Annex XVII compliant per supplier declaration
- Fire Safety: EN 1021-1 and EN 1021-2 certified (RISE test report R-2024-12345 attached)
- Durability: YLLW 3-year commercial warranty
- Lifecycle Impact: Estimated 75% embodied carbon reduction vs. new equivalent
- Provenance: Sourced from Swedish office liquidations 2022-2024

ENVIRONMENTAL JUSTIFICATION:
This specification achieves equivalent or superior environmental
performance to BVB "Recommended" new furniture through:
1. Elimination of virgin material extraction
2. Avoidance of manufacturing emissions (refurbishment energy <5% of new)
3. Local sourcing (average 200km transport vs. 2,000km typical for new)
4. Circular business model (YLLW operates closed-loop system with take-back)

APPROVED BY: [Environmental Coordinator name], [Date]`}
                  </pre>
                </div>
                <div className="mt-3 bg-blue-50 p-3 rounded text-xs">
                  <p className="font-semibold text-blue-900 mb-1">Key Elements:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Acknowledge "Not Assessed" status upfront</li>
                    <li>• Provide equivalent documentation matching BVB criteria</li>
                    <li>• Environmental justification paragraph (critical for approval)</li>
                    <li>• Name-specific approval (creates accountability)</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Template 2 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-yellow-200">
            <button
              onClick={() => setExpandedTemplate(expandedTemplate === 2 ? null : 2)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-yellow-50 transition"
            >
              <div>
                <h4 className="font-bold text-gray-900">Template 2: When Documentation is Limited</h4>
                <p className="text-xs text-gray-600 mt-1">Risk-based assessment for vintage items or individual sourcing</p>
              </div>
              <span className="text-2xl text-yellow-600">{expandedTemplate === 2 ? '−' : '+'}</span>
            </button>
            {expandedTemplate === 2 && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200 relative">
                  <button
                    onClick={() => {
                      const text = `SPECIFICATION: Vintage Oak Dining Tables (15 units)

PRODUCT TYPE: Solid oak tables, circa 1960-1980, reclaimed

SUPPLIER: Place2Place AB / Individual sourcing

BVB STATUS: Not Assessed (Reclaimed Product)

COMPLIANCE APPROACH: Risk-Based Assessment

ASSESSMENT COMPLETED:
✓ Visual Inspection (2025-10-15): Structural integrity confirmed, no visible damage
✓ Chemical Screening: Pre-1980 items screened for lead paint (XRF testing), asbestos (lab analysis) - NEGATIVE results attached
✓ VOC Emissions: Aged solid wood has negligible off-gassing (inherently safe, no testing required per Boverket guidance)
✓ Fire Classification: Solid oak ≥40mm thickness = Euroclass D-s2,d0 inherent performance (acceptable for guest room use per BBR 5:223)

ENVIRONMENTAL BENEFITS:
- Zero virgin timber harvest
- Carbon sequestration maintained (wood continues storing CO2)
- Heritage preservation (1960s Scandinavian design maintains cultural value)
- Local sourcing (all tables sourced within 100km radius)

RISK MITIGATION:
- Supplier provides commercial invoice (demonstrates legitimate product status, not waste)
- Fyra visual inspection protocol applied (checklist attached)
- Professional cleaning/refinishing by [Supplier name] (process documentation attached)
- Client acceptance: Sample table approved by hotel management 2025-10-01

APPROVED BY: [Environmental Coordinator], with notation "Risk-Based Approval - Limited Documentation"`;
                      navigator.clipboard.writeText(text);
                      setCopiedTemplate(2);
                      setTimeout(() => setCopiedTemplate(null), 2000);
                    }}
                    className="absolute top-2 right-2 bg-yellow-600 text-white px-3 py-1 rounded text-xs hover:bg-yellow-700 transition"
                  >
                    {copiedTemplate === 2 ? '✓ Copied!' : '📋 Copy'}
                  </button>
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono">
{`SPECIFICATION: Vintage Oak Dining Tables (15 units)

PRODUCT TYPE: Solid oak tables, circa 1960-1980, reclaimed

SUPPLIER: Place2Place AB / Individual sourcing

BVB STATUS: Not Assessed (Reclaimed Product)

COMPLIANCE APPROACH: Risk-Based Assessment

ASSESSMENT COMPLETED:
✓ Visual Inspection: Structural integrity confirmed
✓ Chemical Screening: Pre-1980 items screened for lead paint (XRF),
  asbestos (lab) - NEGATIVE results attached
✓ VOC Emissions: Aged solid wood has negligible off-gassing
✓ Fire Classification: Solid oak ≥40mm = Euroclass D-s2,d0

ENVIRONMENTAL BENEFITS:
- Zero virgin timber harvest
- Carbon sequestration maintained
- Heritage preservation (1960s Scandinavian design)
- Local sourcing (all tables sourced within 100km)

RISK MITIGATION:
- Commercial invoice (legitimate product status)
- Fyra visual inspection protocol (checklist attached)
- Professional cleaning/refinishing documentation
- Client acceptance: Sample approved 2025-10-01

APPROVED BY: [Environmental Coordinator],
notation "Risk-Based Approval - Limited Documentation"`}
                  </pre>
                </div>
                <div className="mt-3 bg-blue-50 p-3 rounded text-xs">
                  <p className="font-semibold text-blue-900 mb-1">Key Elements:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Acknowledge documentation limitations</li>
                    <li>• Demonstrate risk assessment process (not blind acceptance)</li>
                    <li>• Emphasize inherent material safety (solid wood = low-risk)</li>
                    <li>• Get client buy-in documented</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Template 3 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-purple-200">
            <button
              onClick={() => setExpandedTemplate(expandedTemplate === 3 ? null : 3)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-purple-50 transition"
            >
              <div>
                <h4 className="font-bold text-gray-900">Template 3: RFQ/Tender Language</h4>
                <p className="text-xs text-gray-600 mt-1">Opens door for circular procurement without defaulting to "new only"</p>
              </div>
              <span className="text-2xl text-purple-600">{expandedTemplate === 3 ? '−' : '+'}</span>
            </button>
            {expandedTemplate === 3 && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 space-y-4">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <p className="text-xs font-semibold text-red-900 mb-1">❌ INSTEAD OF (Blocks Reuse):</p>
                    <p className="text-xs text-gray-700 italic">"All furniture must be BVB Recommended"</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border border-green-200 relative">
                    <p className="text-xs font-semibold text-green-900 mb-2">✓ USE THIS (Enables Reuse):</p>
                    <button
                      onClick={() => {
                        const text = `Furniture shall be BVB Recommended OR provide equivalent environmental documentation per Project Environmental Plan. Reclaimed/reused furniture is encouraged and will be evaluated on equivalent basis considering:

- Chemical content compliance (REACH Annex XVII)
- Fire safety certification (EN 1021 or equivalent)
- Lifecycle carbon impact (LCA data or simplified calculation)
- Supplier quality assurance (warranty, documentation)
- Precedent projects demonstrating successful performance

This language:
✓ Opens door for circular procurement
✓ Maintains environmental standards
✓ Doesn't default to "new only"`;
                        navigator.clipboard.writeText(text);
                        setCopiedTemplate(3);
                        setTimeout(() => setCopiedTemplate(null), 2000);
                      }}
                      className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700 transition"
                    >
                      {copiedTemplate === 3 ? '✓ Copied!' : '📋 Copy'}
                    </button>
                    <pre className="text-xs text-gray-800 whitespace-pre-wrap">
{`"Furniture shall be BVB Recommended OR provide equivalent
environmental documentation per Project Environmental Plan.
Reclaimed/reused furniture is encouraged and will be evaluated
on equivalent basis considering:

- Chemical content compliance (REACH Annex XVII)
- Fire safety certification (EN 1021 or equivalent)
- Lifecycle carbon impact (LCA data or simplified calculation)
- Supplier quality assurance (warranty, documentation)
- Precedent projects demonstrating successful performance"`}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PROCUREMENT & CONTRACT LANGUAGE */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Procurement & Contract Language</h2>
        <p className="text-gray-600 mb-6">How to write specifications and allocate risk in contracts for reused materials</p>

        {/* Performance-Based vs Prescriptive */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Performance-Based vs Prescriptive Specifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prescriptive (Bad) */}
            <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">❌</span>
                <h4 className="font-bold text-red-900">PRESCRIPTIVE (Blocks Reuse)</h4>
              </div>
              <div className="bg-white p-3 rounded text-xs text-gray-700 italic mb-3">
                "Guest room lounge chairs shall be Kinnarps Model 6231, new, with BVB Recommended rating, delivered with full manufacturer warranty and CE marking."
              </div>
              <p className="text-xs text-red-800 font-semibold">Problem: Zero flexibility, contractor must specify exact new product</p>
            </div>

            {/* Performance-Based (Good) */}
            <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">✓</span>
                <h4 className="font-bold text-green-900">PERFORMANCE-BASED (Enables Reuse)</h4>
              </div>
              <div className="bg-white p-3 rounded text-xs text-gray-700 mb-3">
                <p className="font-semibold mb-2">"Guest room lounge chairs shall meet the following requirements:</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Fire safety: EN 1021-2 certified (test report required)</li>
                  <li>Durability: Minimum 2-year commercial warranty</li>
                  <li>Dimensions: Width 700-800mm, depth 750-850mm, height 900-1000mm</li>
                  <li>Style: Mid-century Scandinavian design</li>
                  <li>Chemical safety: REACH compliant</li>
                  <li>Sustainability: Preference for reused/refurbished items</li>
                </ul>
                <p className="mt-2 font-semibold">Contractor may propose:</p>
                <p>a) New furniture meeting BVB Recommended, OR</p>
                <p>b) Reused/refurbished with equivalent documentation</p>
                <p className="mt-2">Selection: 70% performance, 20% sustainability, 10% cost"</p>
              </div>
              <p className="text-xs text-green-800 font-semibold">✓ Clear requirements, allows contractor creativity, transparent criteria</p>
            </div>
          </div>
        </div>

        {/* Sample Language from Successful Projects */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Sample Language from Successful Projects</h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2 text-sm">From Blique by Nobis Tender (Sweco, 2017):</p>
              <p className="text-xs text-gray-700 italic">
                "The project prioritizes reuse of existing building materials and adaptive reuse of the 1930s warehouse structure. Contractor shall: 1) Maximize retention of existing structural elements, 2) Propose opportunities for material reuse during demolition phase, 3) Source reclaimed materials where performance-equivalent to new, 4) Provide BBR compliance documentation, 5) Engage with approved circular economy suppliers (YLLW, Input, RP, Kompanjonen)"
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2 text-sm">From Akademihotellet Uppsala Furniture Spec (2023):</p>
              <p className="text-xs text-gray-700 italic">
                "Guest suites shall feature antique furniture sourced from Gustavianum Museum collections, circa 1750-1850. Contractor responsibilities: Coordinate with museum for item selection, arrange professional conservation/restoration per museum standards, provide structural safety assessment by certified furniture conservator, obtain fire safety equivalency approval from Uppsala building department, document provenance for guest information materials."
              </p>
              <p className="text-xs text-gray-600 mt-2">Note: Boutique project showing EXTREME flexibility possible with right framing</p>
            </div>
          </div>
        </div>

        {/* Risk Allocation Options */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Contractor Liability & Risk Allocation</h3>
          <p className="text-sm text-gray-600 mb-4">Key Question: "Who takes responsibility if reused material fails?"</p>

          {/* Standard Contract Reference */}
          <div className="bg-gray-50 border border-gray-300 p-4 rounded-lg text-sm">
            <p className="font-semibold text-gray-900 mb-2">Standard New Materials Contract:</p>
            <ul className="space-y-1 text-gray-700 text-xs ml-4 list-disc">
              <li>Manufacturer liable (product defects)</li>
              <li>Contractor liable (installation defects)</li>
              <li>Designer liable (specification errors)</li>
              <li>Clear chain of accountability ✓</li>
            </ul>
          </div>

          {/* Option 1 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-orange-200">
            <button
              onClick={() => setExpandedRisk(expandedRisk === 1 ? null : 1)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-orange-50 transition"
            >
              <div>
                <h4 className="font-bold text-gray-900">Option 1: Client Bears Risk</h4>
                <p className="text-xs text-gray-600 mt-1">For budget/boutique projects with sophisticated owners</p>
              </div>
              <span className="text-2xl text-orange-600">{expandedRisk === 1 ? '−' : '+'}</span>
            </button>
            {expandedRisk === 1 && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">
{`"Client acknowledges reused materials carry inherent uncertainty
regarding remaining lifespan and performance. Contractor's liability
limited to:

a) Compliance with specified standards at time of installation
b) Professional workmanship in refurbishment/installation
c) Accurate representation of item condition

Client accepts risk of premature failure or performance degradation
beyond contractor's reasonable control."`}
                  </pre>
                </div>
                <div className="mt-3 bg-orange-50 p-3 rounded text-xs">
                  <p className="font-semibold text-orange-900 mb-1">When to Use:</p>
                  <p className="text-gray-700">Client-driven circular agenda, sophisticated owner, tight budget</p>
                </div>
              </div>
            )}
          </div>

          {/* Option 2 - RECOMMENDED */}
          <div className="bg-white rounded-lg shadow-md border-2 border-emerald-200">
            <button
              onClick={() => setExpandedRisk(expandedRisk === 2 ? null : 2)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-emerald-50 transition"
            >
              <div className="flex items-center">
                <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs font-semibold mr-3">RECOMMENDED</span>
                <div>
                  <h4 className="font-bold text-gray-900">Option 2: Shared Risk with Supplier Backstop</h4>
                  <p className="text-xs text-gray-600 mt-1">Use approved suppliers with warranties and insurance</p>
                </div>
              </div>
              <span className="text-2xl text-emerald-600">{expandedRisk === 2 ? '−' : '+'}</span>
            </button>
            {expandedRisk === 2 && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">
{`"Contractor shall source reused materials ONLY from Approved Suppliers
(list attached: YLLW Factory, Input Interior, RP) who provide:

a) Minimum 2-year commercial warranty
b) Fire safety and structural documentation
c) Professional liability insurance covering supplied products

Contractor liability: Installation and project coordination only
Supplier liability: Product quality, performance, documentation accuracy
Client liability: Design changes or unforeseen site conditions

Contractor shall include in bid price allowance of 5% for replacement
of reused items that fail quality inspection upon delivery."`}
                  </pre>
                </div>
                <div className="mt-3 bg-emerald-50 p-3 rounded text-xs">
                  <p className="font-semibold text-emerald-900 mb-1">When to Use:</p>
                  <p className="text-gray-700">Professional project, established suppliers, moderate risk tolerance</p>
                  <p className="text-emerald-800 font-semibold mt-2">✓ Best balance of risk and cost</p>
                </div>
              </div>
            )}
          </div>

          {/* Option 3 */}
          <div className="bg-white rounded-lg shadow-md border-2 border-purple-200">
            <button
              onClick={() => setExpandedRisk(expandedRisk === 3 ? null : 3)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-purple-50 transition"
            >
              <div>
                <h4 className="font-bold text-gray-900">Option 3: Contractor Full Responsibility</h4>
                <p className="text-xs text-gray-600 mt-1">For luxury/premium hotels with risk-averse clients</p>
              </div>
              <span className="text-2xl text-purple-600">{expandedRisk === 3 ? '−' : '+'}</span>
            </button>
            {expandedRisk === 3 && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">
{`"Contractor warrants all materials, whether new or reused, shall:

a) Meet all specified performance requirements
b) Comply with BBR technical standards
c) Perform equivalently to new materials for minimum 3 years
   post-installation

Contractor shall conduct all necessary testing, provide all
documentation, and replace any reused items that fail to meet
requirements at no cost to Client.

Contractor fee structure shall reflect testing, documentation,
and risk premium (estimated 10-15% markup on reused item costs)."`}
                  </pre>
                </div>
                <div className="mt-3 bg-purple-50 p-3 rounded text-xs">
                  <p className="font-semibold text-purple-900 mb-1">When to Use:</p>
                  <p className="text-gray-700">Luxury hotels, risk-averse clients, contractors with circular expertise</p>
                  <p className="text-purple-800 font-semibold mt-2">Note: Highest cost but lowest client risk</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* IMPLEMENTATION CHECKLISTS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Checklists</h2>
        <p className="text-gray-600 mb-6">Pre-project assessment checklists by material category</p>

        <div className="space-y-4">
          {/* Upholstered Furniture */}
          <div className="bg-white rounded-lg shadow-md border-2 border-blue-200">
            <button
              onClick={() => setExpandedChecklist(expandedChecklist === 'upholstered' ? null : 'upholstered')}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-blue-50 transition"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">🛋️ Upholstered Furniture (Chairs, Sofas)</h3>
                <p className="text-xs text-gray-600 mt-1">Fire certification, durability, volume availability</p>
              </div>
              <span className="text-2xl text-blue-600">{expandedChecklist === 'upholstered' ? '−' : '+'}</span>
            </button>
            {expandedChecklist === 'upholstered' && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Fire Certification Path:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Original fire certificate available? (Contact manufacturer)</li>
                      <li>• Budget for testing? (15,000-25,000 SEK per type)</li>
                      <li>• Treatment option viable? (15-40 EUR/item for spray)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Durability Assessment:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Fabric condition ≥70% lifespan remaining?</li>
                      <li>• Frame structurally sound? (No cracks/loose joints)</li>
                      <li>• Foam in good condition? (No breakdown/odors)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Volume Availability:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Supplier can provide ≥20 identical units? (For batch consistency)</li>
                      <li>• Lead time acceptable? (4-6 months typical)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Supplier Capability:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Supplier provides warranty? (Min. 2 years)</li>
                      <li>• Professional refurbishment? (Not DIY quality)</li>
                      <li>• Documentation package? (Material comp, test reports)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-red-50 p-4 rounded border border-gray-300">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">VERDICT:</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-center"><span className="text-green-600 font-bold mr-2">✓ PROCEED</span> if ≥75% boxes checked</li>
                      <li className="flex items-center"><span className="text-yellow-600 font-bold mr-2">⚠️ CAUTION</span> if 50-75% (increased risk/cost)</li>
                      <li className="flex items-center"><span className="text-red-600 font-bold mr-2">❌ SPECIFY NEW</span> if &lt;50%</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Wood Furniture */}
          <div className="bg-white rounded-lg shadow-md border-2 border-amber-200">
            <button
              onClick={() => setExpandedChecklist(expandedChecklist === 'wood' ? null : 'wood')}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-amber-50 transition"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">🪵 Wood Furniture (Tables, Desks, Cabinets)</h3>
                <p className="text-xs text-gray-600 mt-1">Low-risk category - structural integrity and chemical safety</p>
              </div>
              <span className="text-2xl text-amber-600">{expandedChecklist === 'wood' ? '−' : '+'}</span>
            </button>
            {expandedChecklist === 'wood' && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Fire Classification:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Solid wood ≥20mm thickness? (Inherently compliant for guest rooms)</li>
                      <li>• Surface treatment safe? (No lead paint, toxic finishes)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Structural Integrity:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• No rot, insect damage, or deep cracks?</li>
                      <li>• Joints tight? (Tables don't wobble)</li>
                      <li>• Professional refinishing possible? (Budget 1,500-3,000 SEK/item)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Chemical Safety:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Post-1990 manufacture? (Lower chemical risk)</li>
                      <li>• If pre-1980: Lead paint screening done? (XRF test)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Provenance:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Known source? (Not salvaged from unknown building)</li>
                      <li>• Supplier legitimate? (Business entity, not private seller)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-red-50 p-4 rounded border border-gray-300">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">VERDICT:</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-center"><span className="text-green-600 font-bold mr-2">✓ PROCEED</span> if ≥80% boxes checked (wood furniture = low-risk)</li>
                      <li className="flex items-center"><span className="text-yellow-600 font-bold mr-2">⚠️ CAUTION</span> if 60-80%</li>
                      <li className="flex items-center"><span className="text-red-600 font-bold mr-2">❌ SPECIFY NEW</span> if &lt;60% OR any lead paint detected</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Textiles */}
          <div className="bg-white rounded-lg shadow-md border-2 border-orange-200">
            <button
              onClick={() => setExpandedChecklist(expandedChecklist === 'textiles' ? null : 'textiles')}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-orange-50 transition"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">🧵 Textiles (Curtains, Carpets)</h3>
                <p className="text-xs text-gray-600 mt-1">HIGH-RISK category - hygiene concerns and fire requirements</p>
              </div>
              <span className="text-2xl text-orange-600">{expandedChecklist === 'textiles' ? '−' : '+'}</span>
            </button>
            {expandedChecklist === 'textiles' && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 space-y-4">
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-3 rounded">
                    <p className="font-semibold text-orange-900 text-sm">⚠️ WARNING: Textiles are HIGH-RISK for hotel guest areas</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Fire Certification:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Original fire certificate? (Curtains need B-s1,d0 for corridors)</li>
                      <li>• Budget for treatment? (100-300 SEK/m² spray treatment)</li>
                      <li>• Alternative flame-retardant fabric available? (For replacement)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Condition:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Minimal fading/wear? (Textiles show age quickly)</li>
                      <li>• No stains/odors? (Often disqualifying)</li>
                      <li>• Fabric weight/quality hotel-grade? (Not residential quality)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Hygiene:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Professional cleaning possible? (Hotel-grade standards)</li>
                      <li>• No mold/mildew? (Common in stored textiles)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-600">
                    <p className="font-semibold text-yellow-900 mb-2 text-sm">RECOMMENDATION:</p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• <span className="font-semibold">Back-of-house use:</span> Reuse for offices, staff areas where lower scrutiny</li>
                      <li>• <span className="font-semibold">Guest areas:</span> Specify new OR use hybrid (reused decorative elements, new functional textiles)</li>
                      <li>• <span className="font-semibold">Risk level:</span> Hygiene concerns + fire requirements + visible wear = HIGH-RISK</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Building Materials */}
          <div className="bg-white rounded-lg shadow-md border-2 border-purple-200">
            <button
              onClick={() => setExpandedChecklist(expandedChecklist === 'building' ? null : 'building')}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-purple-50 transition"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">🚪 Building Materials (Doors, Windows, Flooring)</h3>
                <p className="text-xs text-gray-600 mt-1">Requires engineering assessment and fire certification</p>
              </div>
              <span className="text-2xl text-purple-600">{expandedChecklist === 'building' ? '−' : '+'}</span>
            </button>
            {expandedChecklist === 'building' && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Fire Rating (Doors):</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Original EI₂ 30 certificate available? (Guest room doors)</li>
                      <li>• Door + frame intact as tested unit?</li>
                      <li>• Self-closing mechanism functional?</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Structural Performance:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Engineering assessment completed? (For load-bearing reuse)</li>
                      <li>• Dimensions match code requirements? (Doorway widths, window sizes)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Chemical Safety:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Pre-1980 building source: Asbestos/lead screening done?</li>
                      <li>• VOC emissions acceptable? (Wood, if finished)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">☐ Installation Complexity:</p>
                    <ul className="space-y-1 text-xs text-gray-700 ml-4">
                      <li>• Contractor experienced with adaptive reuse?</li>
                      <li>• Dimensional variations manageable? (Old buildings = irregular dimensions)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-red-50 p-4 rounded border border-gray-300">
                    <p className="font-semibold text-gray-900 mb-2 text-sm">VERDICT:</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-center"><span className="text-green-600 font-bold mr-2">✓ PROCEED</span> if ≥70% checked AND engineering assessment positive</li>
                      <li className="flex items-center"><span className="text-red-600 font-bold mr-2">❌ SPECIFY NEW</span> for fire-rated doors without certification (testing €2,000-3,000 per door)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DOCUMENTATION PACKAGE TEMPLATE */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentation Package Template</h2>
        <p className="text-gray-600 mb-6">Required documentation from B2B suppliers for Fyra projects</p>

        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
          <div className="flex items-start">
            <span className="text-3xl mr-4">📋</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">10-Section Comprehensive Documentation Package</h3>
              <p className="text-sm text-gray-700 mb-3">
                This template ensures suppliers (YLLW, Input, Rekomo, RP, Kompanjonen) provide complete information for project approval and building authority submission.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-1">Sections 1-5: Product Details</p>
                  <ul className="space-y-0.5 text-gray-700">
                    <li>• Product identification & provenance</li>
                    <li>• Material composition</li>
                    <li>• Fire safety certification ⚠️ CRITICAL</li>
                    <li>• Chemical safety (REACH, hazardous substances)</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-emerald-200">
                  <p className="font-semibold text-emerald-900 mb-1">Sections 6-10: Quality & Business</p>
                  <ul className="space-y-0.5 text-gray-700">
                    <li>• Structural durability & warranty</li>
                    <li>• Refurbishment performed</li>
                    <li>• Sustainability data (LCA, embodied carbon)</li>
                    <li>• Supplier information & insurance</li>
                    <li>• Pricing & delivery terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Template Sections Overview</h3>
          <div className="space-y-3 text-sm">
            {[
              { num: 1, title: "Product Identification", items: ["Category, quantity, manufacturer, age, condition grade"] },
              { num: 2, title: "Provenance", items: ["Original source, acquisition date, use context, known history"] },
              { num: 3, title: "Material Composition", items: ["Frame, padding, upholstery, hardware, finish materials"] },
              { num: 4, title: "Fire Safety Certification ⚠️ CRITICAL", items: ["Test standard (EN 1021), test result, lab, certificate number & date"] },
              { num: 5, title: "Chemical Safety", items: ["REACH compliance, lead/asbestos/PCB/VOC screening"] },
              { num: 6, title: "Structural Durability", items: ["Visual inspection, frame condition, estimated lifespan, warranty (min 2-3 years)"] },
              { num: 7, title: "Refurbishment Performed", items: ["Frame repair, upholstery/foam replacement, refinishing, cleaning"] },
              { num: 8, title: "Sustainability Data", items: ["Embodied carbon savings (~75% typical), weight, recyclability, take-back program"] },
              { num: 9, title: "Supplier Information", items: ["Company name, org number, contact, product liability insurance"] },
              { num: 10, title: "Pricing & Delivery", items: ["Unit price, lead time (4-6 months typical), delivery terms, payment"] }
            ].map((section) => (
              <div key={section.num} className="bg-gray-50 p-3 rounded border border-gray-200">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold mr-3">{section.num}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">{section.title}</p>
                    <p className="text-xs text-gray-600">{section.items.join(" • ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
            <p className="font-semibold text-emerald-900 mb-2">Implementation Guidance:</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• <span className="font-semibold">Tier 1 projects (100+ rooms, luxury):</span> Require complete documentation</li>
              <li>• <span className="font-semibold">Smaller projects (50-100 rooms):</span> Accept partial documentation with risk assessment</li>
              <li>• <span className="font-semibold">Negotiation tool:</span> "Suppliers providing complete documentation preferred"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AUTHORITY APPROVAL PROCESS & TIMELINES */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Authority Approval Process & Timelines</h2>
        <p className="text-gray-600 mb-6">Building permit timelines and fire safety inspection requirements by municipality</p>

        {/* When Permits Required */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">When is Building Permit (Bygglov) Required?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
              <p className="font-bold text-red-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✓</span> YES - Permit Required
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Interior alterations affecting fire compartmentation</li>
                <li>• Changes to escape routes</li>
                <li>• MEP system changes</li>
                <li>• Bathroom renovations</li>
                <li>• <span className="font-semibold">ALWAYS for hotels</span> (high occupancy classification)</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
              <p className="font-bold text-green-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✗</span> NO - Permit Not Required
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Surface finishes (paint, wallpaper) IF not affecting fire safety</li>
                <li>• Furniture replacement (loose furnishings)</li>
                <li>• Minor fixture replacement</li>
              </ul>
              <p className="text-xs text-green-800 mt-3 font-semibold">
                RECOMMENDATION: Contact byggnadsnämnd ALWAYS for hotel projects, even if legally unclear
              </p>
            </div>
          </div>
        </div>

        {/* Fire Safety Inspections */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Fire Safety Inspections (Räddningstjänsten)</h3>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hotel Size</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Inspection Frequency</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Focus Areas</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Small (&lt;50 rooms)</td>
                  <td className="px-4 py-3 text-gray-700">Every 3-4 years</td>
                  <td className="px-4 py-3 text-xs text-gray-700">Fire alarm, escape routes, door closers</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Medium (50-150 rooms)</td>
                  <td className="px-4 py-3 text-gray-700">Every 2-3 years</td>
                  <td className="px-4 py-3 text-xs text-gray-700">Above + sprinkler system, fire compartmentation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Large (&gt;150 rooms)</td>
                  <td className="px-4 py-3 text-gray-700">Annually or biannually</td>
                  <td className="px-4 py-3 text-xs text-gray-700">Comprehensive fire safety audit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="font-semibold text-blue-900 mb-2 text-sm">What Räddningstjänsten Inspects:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <p className="font-semibold text-gray-900 mb-1">✓ HIGHLY ENFORCED:</p>
                <ul className="space-y-0.5 text-gray-700">
                  <li>• Fire alarm and detection systems</li>
                  <li>• Sprinkler systems</li>
                  <li>• Fire extinguishers</li>
                  <li>• Escape route signage and lighting</li>
                  <li>• Fire doors (self-closing, no obstructions)</li>
                  <li>• Corridor width clearances</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-orange-900 mb-1">⚠️ LIGHTLY ENFORCED:</p>
                <ul className="space-y-0.5 text-gray-700">
                  <li>• Loose furnishings: Rarely inspected UNLESS complaint or after incident</li>
                  <li>• Upholstery fire ratings: Virtually NEVER inspected proactively</li>
                </ul>
                <p className="text-yellow-800 font-semibold mt-2">
                  Fire safety for STRUCTURE highly enforced; furniture compliance LIGHTLY enforced by authorities BUT heavily enforced by insurance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Timelines */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Practical Timelines by Municipality</h3>

          {/* Gothenburg Timeline */}
          <div className="bg-white rounded-lg shadow-md border-2 border-green-200">
            <button
              onClick={() => setExpandedTimeline(expandedTimeline === 'gothenburg' ? null : 'gothenburg')}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-green-50 transition"
            >
              <div>
                <h4 className="font-bold text-gray-900 text-lg">🏙️ Gothenburg Example (Shortest Path)</h4>
                <p className="text-sm text-green-700 font-semibold mt-1">TOTAL: 7-8 months from initiation to construction start</p>
              </div>
              <span className="text-2xl text-green-600">{expandedTimeline === 'gothenburg' ? '−' : '+'}</span>
            </button>
            {expandedTimeline === 'gothenburg' && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 space-y-3">
                  {[
                    { week: "Month 0", task: "Project initiation" },
                    { week: "Week 2", task: "Contact Göteborg byggnadsnämnd for pre-application meeting" },
                    { week: "Week 6", task: "Pre-application meeting held - present concept, reuse strategy, sample documentation, receive preliminary guidance" },
                    { week: "Week 14", task: "Finalize design, compile documentation package" },
                    { week: "Week 16", task: "Submit complete bygglov application" },
                    { week: "Week 28-30", task: "Bygglov decision (10-12 weeks statutory + extensions)" },
                    { week: "Week 31-33", task: "Startbesked (start clearance) issued (3 weeks appeals period)" },
                    { week: "✓", task: "CONSTRUCTION CAN BEGIN", highlight: true }
                  ].map((step, idx) => (
                    <div key={idx} className={`flex items-start ${step.highlight ? 'bg-green-100 p-3 rounded border-2 border-green-600' : ''}`}>
                      <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-bold mr-3 mt-0.5 whitespace-nowrap">{step.week}</span>
                      <p className={`text-sm ${step.highlight ? 'font-bold text-green-900' : 'text-gray-700'}`}>{step.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Stockholm Timeline */}
          <div className="bg-white rounded-lg shadow-md border-2 border-orange-200">
            <button
              onClick={() => setExpandedTimeline(expandedTimeline === 'stockholm' ? null : 'stockholm')}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-orange-50 transition"
            >
              <div>
                <h4 className="font-bold text-gray-900 text-lg">🏛️ Stockholm Example (Complex)</h4>
                <p className="text-sm text-orange-700 font-semibold mt-1">TOTAL: 12-14 months from initiation to construction start</p>
              </div>
              <span className="text-2xl text-orange-600">{expandedTimeline === 'stockholm' ? '−' : '+'}</span>
            </button>
            {expandedTimeline === 'stockholm' && (
              <div className="px-4 pb-4 border-t">
                <div className="mt-4 space-y-3">
                  {[
                    { week: "Month 0", task: "Project initiation" },
                    { week: "Week 4", task: "Pre-application meeting booked (Stockholm backlog - longer wait)" },
                    { week: "Week 10", task: "Pre-application meeting held - inspector raises concerns about reused materials, requests fire engineer assessment" },
                    { week: "Week 22", task: "Engage fire safety consultant, complete additional studies (12 weeks)" },
                    { week: "Week 26", task: "Second pre-application meeting - resolve concerns" },
                    { week: "Week 32", task: "Finalize application, submit" },
                    { week: "Week 48-52", task: "Bygglov decision (16-20 weeks - Stockholm often exceeds statutory timeline, may require revisions)" },
                    { week: "Week 51-55", task: "Startbesked issued (3 weeks appeals period)" },
                    { week: "✓", task: "CONSTRUCTION CAN BEGIN", highlight: true }
                  ].map((step, idx) => (
                    <div key={idx} className={`flex items-start ${step.highlight ? 'bg-orange-100 p-3 rounded border-2 border-orange-600' : ''}`}>
                      <span className="bg-orange-600 text-white px-3 py-1 rounded text-xs font-bold mr-3 mt-0.5 whitespace-nowrap">{step.week}</span>
                      <p className={`text-sm ${step.highlight ? 'font-bold text-orange-900' : 'text-gray-700'}`}>{step.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Critical Success Factors */}
        <div className="mt-6 bg-emerald-700 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Critical Success Factors for Approval</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-2">✓ Process Optimization:</p>
              <ul className="space-y-1 text-emerald-100">
                <li>• Early engagement (pre-application meetings MANDATORY)</li>
                <li>• Complete documentation (reduces back-and-forth)</li>
                <li>• Fire consultant (for complex/large projects)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">✓ Strategic Positioning:</p>
              <ul className="space-y-1 text-emerald-100">
                <li>• Precedent references (cite approved similar projects)</li>
                <li>• Flexibility (be ready to modify specifications if needed)</li>
                <li>• Budget 12+ months for Stockholm, 7-8 months for other cities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CLIENT CONFIDENCE BUILDERS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Confidence Builders</h2>
        <p className="text-gray-600 mb-6">Addressing common fears with real-world evidence from 30+ Nordic hotel projects</p>

        <div className="space-y-4">
          {[
            {
              fear: '"We\'ll fail inspections"',
              reality: [
                'Structural/building systems inspections: Highly enforced, BUT reused interiors rarely structural',
                'Fire authority inspections: Focus on systems (alarms, sprinklers, doors), NOT furniture',
                'Loose furnishings: Virtually NEVER inspected by authorities (insurance is real concern)'
              ],
              builder: 'In 30+ documented Nordic hotel circular projects, NOT ONE was prevented from opening due to reused furniture compliance. Fire system failures yes, furniture no.',
              precedents: ['Blique by Nobis', 'Akademihotellet', 'Scandic GO']
            },
            {
              fear: '"Insurance will reject us"',
              reality: [
                'Standard hospitality policies cover furniture meeting fire standards (new OR reused)',
                'NO premium increase if properly certified',
                'Key = DOCUMENTATION, not material age'
              ],
              builder: 'Blique by Nobis (€120M project, major Swedish insurer): Zero coverage issues, zero premium increase. Key = fire certification plan from day one.',
              precedents: ['Blique by Nobis']
            },
            {
              fear: '"It costs more to comply"',
              reality: [
                'Fire testing = 15,000-25,000 SEK per furniture type',
                'For 50+ identical items = 300-500 SEK/item',
                'Reused furniture typically 30-50% cheaper than new',
                'NET: Still 20-40% cost savings even with testing'
              ],
              builder: 'Yes, testing costs exist. But YLLW Factory provides certified furniture at 40% discount vs. new. Testing adds 10%, still 30% net savings.',
              precedents: []
            },
            {
              fear: '"No one has done this successfully"',
              reality: [
                '15+ Swedish hotels document circular interiors',
                'Blique by Nobis: LEED Gold + Nordic Swan',
                'Akademihotellet: 100% antique furniture, zero issues',
                'Scandic: 280 hotels, 96% waste recycled, extensive reuse programs'
              ],
              builder: 'This isn\'t experimental. It\'s proven in luxury (Blique), mid-scale (Scandic Go), and boutique (Akademihotellet) contexts. Fyra brings this expertise to YOUR project.',
              precedents: ['Blique by Nobis', 'Akademihotellet', 'Scandic GO', 'Hotel Skeppsholmen']
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md border-2 border-blue-200">
              <button
                onClick={() => setExpandedFear(expandedFear === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50 transition"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">CLIENT FEAR: {item.fear}</h3>
                </div>
                <span className="text-2xl text-blue-600">{expandedFear === idx ? '−' : '+'}</span>
              </button>

              {expandedFear === idx && (
                <div className="px-6 pb-6 border-t">
                  <div className="mt-4 space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">REALITY:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {item.reality.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <p className="font-semibold text-blue-900 mb-2">CONFIDENCE BUILDER:</p>
                      <p className="text-sm text-gray-700 italic">"{item.builder}"</p>
                    </div>

                    {item.precedents.length > 0 && (
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="font-semibold text-emerald-900 mb-2">See Case Studies:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.precedents.map((hotel, i) => (
                            <Link
                              key={i}
                              href="/case-studies"
                              className="bg-emerald-600 text-white px-3 py-1 rounded text-sm hover:bg-emerald-700 transition"
                            >
                              {hotel} →
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-emerald-700 text-white p-6 rounded-lg">
          <p className="font-semibold text-lg mb-2">FINAL MESSAGE TO CLIENTS:</p>
          <p className="text-emerald-100">
            "Swedish regulations DON'T block circular construction - they just require different documentation.
            Fyra navigates this daily. With proper planning (12 months advance), established suppliers (YLLW, Input),
            and fire testing timeline (6-8 months), compliance is straightforward.
          </p>
          <p className="text-emerald-100 mt-3">
            The perceived barrier is documentation hassle, not legal impossibility. We handle the hassle.
            You get the sustainability story + cost savings."
          </p>
        </div>
      </div>

      {/* Key Resources */}
      <div className="bg-emerald-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Resources & Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Regulatory Authorities</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.boverket.se" className="text-emerald-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  Boverket (Swedish National Board of Housing)
                </a>
                <p className="text-gray-600 text-xs mt-1">BBR (Building Regulations) authority</p>
              </li>
              <li>
                <a href="https://www.ri.se" className="text-emerald-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  RISE (Research Institutes of Sweden)
                </a>
                <p className="text-gray-600 text-xs mt-1">Fire testing services</p>
              </li>
              <li>
                <a href="https://www.msb.se/" className="text-emerald-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  MSB (Swedish Civil Contingencies Agency)
                </a>
                <p className="text-gray-600 text-xs mt-1">Fire safety guidelines</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Suppliers with Fire Certification</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/suppliers" className="text-emerald-600 hover:underline font-medium">
                  YLLW Factory
                </Link>
                <p className="text-gray-600 text-xs mt-1">Tier 1 - Full fire certification for hotel furniture</p>
              </li>
              <li>
                <Link href="/suppliers" className="text-emerald-600 hover:underline font-medium">
                  Input Interiör
                </Link>
                <p className="text-gray-600 text-xs mt-1">Tier 1 - Contract-grade reused furniture</p>
              </li>
              <li>
                <Link href="/suppliers" className="text-emerald-600 hover:underline font-medium">
                  Rekomo
                </Link>
                <p className="text-gray-600 text-xs mt-1">Tier 1 - Building materials with documentation</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project Compliance Checklist */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Compliance Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Pre-Design Phase</h3>
            <ul className="space-y-1 text-gray-700">
              <li>☐ Identify building classification and applicable BBR chapters</li>
              <li>☐ Engage fire safety consultant</li>
              <li>☐ Review municipal-specific requirements</li>
              <li>☐ Establish documentation standards</li>
              <li>☐ Schedule pre-application meeting with building inspector</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Design Phase</h3>
            <ul className="space-y-1 text-gray-700">
              <li>☐ Specify fire safety requirements in tender documents</li>
              <li>☐ Request material passports from suppliers</li>
              <li>☐ Plan for testing timeline (6-8 months) and budget</li>
              <li>☐ Coordinate with insurance company</li>
              <li>☐ Identify low-risk areas for materials with limited documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Procurement Phase</h3>
            <ul className="space-y-1 text-gray-700">
              <li>☐ Verify supplier documentation capabilities</li>
              <li>☐ Arrange fire testing for non-certified items</li>
              <li>☐ Collect CE marks or exemption documentation</li>
              <li>☐ Create project-specific material library</li>
              <li>☐ Obtain hazardous material screening for pre-1980 items</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Installation & Closeout</h3>
            <ul className="space-y-1 text-gray-700">
              <li>☐ Maintain installation documentation</li>
              <li>☐ Compile final compliance package</li>
              <li>☐ Schedule building inspector final review</li>
              <li>☐ Archive all certifications for client handover</li>
              <li>☐ Provide insurance company with final fire safety documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
