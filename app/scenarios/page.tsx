'use client';

import { useState } from 'react';
import Link from 'next/link';
import scenariosData from '@/data/scenarios.json';

export default function ScenariosPage() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const getScenarioColor = (id: string) => {
    switch (id) {
      case 'rush_project':
        return 'red';
      case 'large_hotel':
        return 'blue';
      case 'boutique_hotel':
        return 'purple';
      case 'cross_border':
        return 'emerald';
      case 'fire_critical':
        return 'orange';
      default:
        return 'gray';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Project Scenarios</h1>
        <p className="text-xl text-gray-600">
          Strategic guidance for different hotel renovation project types
        </p>
        <div className="mt-4 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded">
          <p className="text-sm text-emerald-800">
            <strong>Decision Support:</strong> Each scenario provides recommended suppliers, timelines, risks, and mitigation strategies based on Nordic circular economy hotel renovations.
          </p>
        </div>
      </div>

      {/* Scenario Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {scenariosData.map((scenario) => {
          const color = getScenarioColor(scenario.id);
          const isSelected = selectedScenario === scenario.id;

          return (
            <div
              key={scenario.id}
              onClick={() => setSelectedScenario(isSelected ? null : scenario.id)}
              className={`cursor-pointer rounded-lg border-2 transition-all hover:shadow-lg ${
                isSelected
                  ? `border-${color}-600 ring-4 ring-${color}-200`
                  : `border-${color}-200 bg-${color}-50 hover:border-${color}-400`
              }`}
            >
              <div className="p-6">
                <div className="text-5xl mb-3">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{scenario.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold text-gray-900">{scenario.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-semibold text-gray-900 text-xs">{scenario.estimatedCost}</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  {isSelected ? 'Hide Details ↑' : 'View Details →'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scenario Details */}
      {selectedScenario && scenariosData.map((scenario) => {
        if (scenario.id !== selectedScenario) return null;

        const color = getScenarioColor(scenario.id);

        return (
          <div key={scenario.id} className="bg-white rounded-lg shadow-xl border-2 border-gray-200 mb-12">
            <div className={`bg-${color}-600 text-white p-6 rounded-t-lg`}>
              <div className="flex items-center gap-4">
                <span className="text-6xl">{scenario.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold">{scenario.title}</h2>
                  <p className="text-${color}-100 mt-1">{scenario.context}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Recommended Suppliers */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommended Suppliers</h3>

                {scenario.recommendedSuppliers.primary && (
                  <div className="bg-emerald-50 border-2 border-emerald-600 rounded-lg p-6 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900">Primary Supplier</h4>
                      <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                        RECOMMENDED
                      </span>
                    </div>
                    <Link
                      href={`/suppliers#${scenario.recommendedSuppliers.primary.id}`}
                      className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 block mb-2"
                    >
                      {scenario.recommendedSuppliers.primary.name} →
                    </Link>
                    <p className="text-sm text-gray-700">
                      <strong>Rationale:</strong> {scenario.recommendedSuppliers.primary.rationale}
                    </p>
                  </div>
                )}

                {scenario.recommendedSuppliers.secondary && (
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6 mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Secondary Supplier</h4>
                    <Link
                      href={`/suppliers#${scenario.recommendedSuppliers.secondary.id}`}
                      className="text-xl font-bold text-blue-700 hover:text-blue-800 block mb-2"
                    >
                      {scenario.recommendedSuppliers.secondary.name} →
                    </Link>
                    <p className="text-sm text-gray-700">
                      <strong>Rationale:</strong> {scenario.recommendedSuppliers.secondary.rationale}
                    </p>
                  </div>
                )}

                {scenario.recommendedSuppliers.backup && Array.isArray(scenario.recommendedSuppliers.backup) && (
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Backup Options</h4>
                    <div className="space-y-2">
                      {scenario.recommendedSuppliers.backup.map((backup, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <Link
                            href={`/suppliers#${backup.id}`}
                            className="font-semibold text-blue-600 hover:text-blue-700"
                          >
                            {backup.name} →
                          </Link>
                          <span className="text-xs text-gray-600">{backup.condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {scenario.recommendedSuppliers.tier1and2 && (
                  <div className="space-y-3">
                    {scenario.recommendedSuppliers.tier1and2.map((supplier, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                        <Link
                          href={`/suppliers#${supplier.id}`}
                          className="text-lg font-bold text-blue-600 hover:text-blue-700 block mb-2"
                        >
                          {supplier.name} →
                        </Link>
                        <p className="text-sm text-gray-700">{supplier.capability}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Critical Success Factors */}
              <section className="mb-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Success Factors</h3>
                <ul className="space-y-2">
                  {scenario.criticalSuccessFactors.map((factor, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Risks & Mitigations */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Risks & Mitigations</h3>
                <div className="space-y-4">
                  {scenario.risks.map((risk, idx) => (
                    <div key={idx} className="bg-red-50 border-l-4 border-red-600 rounded p-4">
                      <div className="flex items-start mb-2">
                        <span className="text-red-600 mr-2 mt-1">⚠</span>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">{risk.risk}</p>
                          {risk.timeline && (
                            <p className="text-xs text-gray-600 mb-2">Timeline impact: {risk.timeline}</p>
                          )}
                          {risk.cost && (
                            <p className="text-xs text-gray-600 mb-2">Cost: {risk.cost}</p>
                          )}
                          <div className="bg-white rounded p-3 mt-2">
                            <p className="text-sm text-gray-700">
                              <strong className="text-emerald-700">Mitigation:</strong> {risk.mitigation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Critical Gap (Large Hotel only) */}
              {scenario.criticalGap && (
                <section className="mb-8 bg-yellow-50 border-2 border-yellow-600 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">🚨</span>
                    Critical Gap: {scenario.criticalGap.item}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded p-3">
                      <div className="text-xs text-gray-600">Budget Impact</div>
                      <div className="text-lg font-bold text-gray-900">{scenario.criticalGap.budgetImpact}</div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="text-xs text-gray-600">Estimated Cost</div>
                      <div className="text-lg font-bold text-gray-900">{scenario.criticalGap.estimatedCost}</div>
                    </div>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-700">Workaround:</strong> {scenario.criticalGap.workaround}
                    </p>
                  </div>
                </section>
              )}

              {/* Fire Safety Approach (Fire-Critical scenario) */}
              {scenario.recommendedApproach && (
                <section className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{scenario.recommendedApproach.strategy}</h3>

                  <div className="space-y-4">
                    {/* Tier 1 */}
                    <div className="bg-emerald-50 border-2 border-emerald-600 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-emerald-900 mb-3">Tier 1: Low-Risk ✅</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Use:</strong> {scenario.recommendedApproach.tier1.use}</p>
                        <p><strong>Furniture:</strong> {scenario.recommendedApproach.tier1.furniture}</p>
                        <p><strong>Testing:</strong> {scenario.recommendedApproach.tier1.testing}</p>
                        <p><strong>Cost:</strong> <span className="text-emerald-700 font-semibold">{scenario.recommendedApproach.tier1.cost}</span></p>
                      </div>
                    </div>

                    {/* Tier 2 */}
                    <div className="bg-yellow-50 border-2 border-yellow-600 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-yellow-900 mb-3">Tier 2: Medium-Risk ⚠️</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Use:</strong> {scenario.recommendedApproach.tier2.use}</p>
                        <p><strong>Furniture:</strong> {scenario.recommendedApproach.tier2.furniture}</p>
                        <p><strong>Testing:</strong> {scenario.recommendedApproach.tier2.testing}</p>
                        <p><strong>Cost:</strong> <span className="text-yellow-700 font-semibold">{scenario.recommendedApproach.tier2.cost}</span></p>
                        <p><strong>Timeline:</strong> {scenario.recommendedApproach.tier2.timeline}</p>
                      </div>
                    </div>

                    {/* Tier 3 */}
                    <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-red-900 mb-3">Tier 3: High-Risk 🚨</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Use:</strong> <span className="text-red-700 font-semibold">{scenario.recommendedApproach.tier3.use}</span></p>
                        <p><strong>Furniture:</strong> {scenario.recommendedApproach.tier3.furniture}</p>
                        <p><strong>Testing:</strong> {scenario.recommendedApproach.tier3.testing}</p>
                        <p><strong>Cost:</strong> <span className="text-red-700 font-semibold">{scenario.recommendedApproach.tier3.cost}</span></p>
                        <p className="mt-3 p-3 bg-white rounded border border-red-300">
                          <strong className="text-red-700">Recommendation:</strong> {scenario.recommendedApproach.tier3.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-300">
                    <Link href="/fire-safety" className="text-blue-700 font-semibold hover:text-blue-800">
                      → View Full Fire Safety Guide for detailed testing requirements and cost calculator
                    </Link>
                  </div>
                </section>
              )}

              {/* Precedents (Fire-Critical scenario) */}
              {scenario.precedents && scenario.precedents.length > 0 && (
                <section className="mb-8 bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Successful Precedents</h3>
                  <div className="space-y-3">
                    {scenario.precedents.map((precedent, idx) => (
                      <div key={idx} className="bg-white rounded p-4 border border-emerald-300">
                        <p className="font-semibold text-gray-900 mb-1">{precedent.project}</p>
                        <p className="text-sm text-gray-700 mb-1"><strong>Approach:</strong> {precedent.approach}</p>
                        <p className="text-sm text-emerald-700"><strong>Outcome:</strong> {precedent.outcome}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Key Considerations */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations</h3>
                <ul className="space-y-2">
                  {scenario.keyConsiderations.map((consideration, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-600 mr-2 mt-1">→</span>
                      <span className="text-gray-700">{consideration}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        );
      })}

      {/* Call to Action */}
      {!selectedScenario && (
        <div className="bg-emerald-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Select a Scenario to Get Started</h2>
          <p className="text-emerald-100 mb-6">
            Click any scenario above to view detailed supplier recommendations, timelines, risks, and strategic guidance.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/suppliers"
              className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
            >
              Browse All Suppliers
            </Link>
            <Link
              href="/fire-safety"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition border-2 border-white"
            >
              Fire Safety Guide
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
