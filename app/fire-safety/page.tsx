'use client';

import { useState } from 'react';
import fireSafetyData from '@/data/fire_safety.json';
import { ExclamationTriangleIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function FireSafetyPage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [calculatorInputs, setCalculatorInputs] = useState({
    productCount: 1,
    selectedTier: 2
  });

  const calculateCost = () => {
    const tier = fireSafetyData.tiers.find(t => t.tier === calculatorInputs.selectedTier);
    if (!tier) return { min: 0, max: 0 };

    const costRange = tier.costRange.replace(' SEK', '').split('-');
    const min = parseInt(costRange[0].replace(',', ''));
    const max = costRange.length > 1 ? parseInt(costRange[1].replace(',', '')) : min;

    return {
      min: min * calculatorInputs.productCount,
      max: max * calculatorInputs.productCount
    };
  };

  const estimatedCost = calculateCost();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Fire Safety Guide</h1>
        <p className="text-xl text-gray-600">
          Swedish building code compliance for reused hotel furniture
        </p>
        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-600 rounded">
          <p className="text-sm text-red-800 flex items-start gap-2">
            <ExclamationTriangleIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span><strong>CRITICAL:</strong> Fire safety is a legal requirement for Swedish hotel projects.
            This guide helps you navigate BBR Chapter 5 compliance for circular furniture.</span>
          </p>
        </div>
      </div>

      {/* Three-Tier System */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Three-Tier Risk Assessment System</h2>
        <p className="text-gray-600 mb-6">
          Our systematic approach to fire safety compliance for reused furniture.
          Click each tier to learn more about requirements, costs, and suitable placements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fireSafetyData.tiers.map((tier) => (
            <div
              key={tier.tier}
              onClick={() => setSelectedTier(selectedTier === tier.tier ? null : tier.tier)}
              className={`cursor-pointer rounded-lg border-2 transition-all hover:shadow-lg ${
                tier.riskLevel === 'low'
                  ? 'border-emerald-200 bg-emerald-50 hover:border-emerald-400'
                  : tier.riskLevel === 'medium'
                  ? 'border-yellow-200 bg-yellow-50 hover:border-yellow-400'
                  : 'border-red-200 bg-red-50 hover:border-red-400'
              } ${selectedTier === tier.tier ? 'ring-4 ring-opacity-50 ' + (
                tier.riskLevel === 'low' ? 'ring-emerald-400' :
                tier.riskLevel === 'medium' ? 'ring-yellow-400' : 'ring-red-400'
              ) : ''}`}
            >
              <div className="p-6">
                <div className="text-4xl mb-3">{tier.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tier {tier.tier}: {tier.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{tier.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-semibold text-gray-900">{tier.costRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold text-gray-900">{tier.timeline}</span>
                  </div>
                </div>

                {selectedTier === tier.tier && (
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <h4 className="font-semibold text-gray-900 mb-2">Product Types:</h4>
                    <ul className="text-sm text-gray-700 space-y-1 mb-3">
                      {tier.productTypes.map((type, idx) => (
                        <li key={idx}>• {type}</li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-2">Placement:</h4>
                    <p className="text-sm text-gray-700 mb-3">{tier.placement}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Testing Required:</h4>
                    <p className="text-sm text-gray-700 mb-3">{tier.testingRequired}</p>

                    {tier.operators && tier.operators.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mb-2">Capable Suppliers:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tier.operators.map((op, idx) => (
                            <span key={idx} className="text-xs bg-white px-2 py-1 rounded border border-gray-300">
                              {op}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {tier.recommendation && (
                      <div className="mt-3 p-3 bg-white rounded border border-gray-300">
                        <p className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-1">
                          <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600" />
                          Recommendation:
                        </p>
                        <p className="text-sm text-gray-700">{tier.recommendation}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testing Cost Calculator */}
      <section className="mb-12 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing Cost Calculator</h2>
        <p className="text-gray-600 mb-6">
          Estimate fire safety testing costs for your project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Product Types to Test
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={calculatorInputs.productCount}
              onChange={(e) => setCalculatorInputs({...calculatorInputs, productCount: parseInt(e.target.value) || 1})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Each unique fabric/material combination requires separate testing
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Testing Tier
            </label>
            <select
              value={calculatorInputs.selectedTier}
              onChange={(e) => setCalculatorInputs({...calculatorInputs, selectedTier: parseInt(e.target.value)})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
            >
              <option value={1}>Tier 1 - Low Risk (Minimal testing)</option>
              <option value={2}>Tier 2 - Medium Risk (EN 1021 testing)</option>
              <option value={3}>Tier 3 - High Risk (Full Euroclass testing)</option>
            </select>
          </div>
        </div>

        <div className="mt-6 p-6 bg-white rounded-lg border-2 border-emerald-600">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Estimated Total Cost:</h3>
          <p className="text-3xl font-bold text-emerald-600">
            {estimatedCost.min.toLocaleString()} - {estimatedCost.max.toLocaleString()} SEK
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Based on {calculatorInputs.productCount} product type(s) requiring Tier {calculatorInputs.selectedTier} testing
          </p>
        </div>
      </section>

      {/* Testing Labs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Certified Testing Laboratories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fireSafetyData.testingLabs.map((lab, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{lab.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{lab.fullName}</p>

              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-sm text-gray-600">Location:</span>{' '}
                  <span className="text-sm font-semibold text-gray-900">{lab.location}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Cost Range:</span>{' '}
                  <span className="text-sm font-semibold text-gray-900">{lab.costRange}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Timeline:</span>{' '}
                  <span className="text-sm font-semibold text-gray-900">{lab.timeline}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {lab.services.map((service, sidx) => (
                    <li key={sidx}>• {service}</li>
                  ))}
                </ul>
              </div>

              {lab.website && (
                <a
                  href={lab.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
                >
                  Visit Website →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fire Consultants */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Fire Safety Consultants</h2>
        <p className="text-gray-600 mb-6">
          Specialist consultants for Swedish hotel fire safety strategy and compliance navigation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fireSafetyData.fireConsultants.map((consultant, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{consultant.name}</h3>
              <p className="text-sm text-emerald-600 font-semibold mb-4">{consultant.specialty}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {consultant.services.map((service, sidx) => (
                    <li key={sidx}>• {service}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Experience:</strong> {consultant.experience}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12 bg-emerald-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>
        <div className="space-y-4">
          {fireSafetyData.bestPractices.map((practice, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-emerald-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-emerald-600" />
                {practice.title}
              </h3>
              <p className="text-sm text-gray-700">{practice.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Precedents */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Successful Precedents</h2>
        <p className="text-gray-600 mb-6">
          Nordic hotels that have successfully integrated circular furniture with fire safety compliance
        </p>
        <div className="space-y-4">
          {fireSafetyData.precedents.map((precedent, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{precedent.project}</h3>
                  <p className="text-sm text-gray-600">{precedent.location}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full flex items-center gap-1">
                  <CheckIcon className="w-3 h-3" />
                  Approved
                </span>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-sm font-semibold text-gray-900">Approach:</span>{' '}
                  <span className="text-sm text-gray-700">{precedent.approach}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-900">Outcome:</span>{' '}
                  <span className="text-sm text-gray-700">{precedent.outcome}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm text-emerald-700">
                    <strong>Relevance:</strong> {precedent.relevance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Implications */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Implications</h2>
        <p className="text-gray-600 mb-6">
          How fire safety compliance affects project budgets
        </p>
        <div className="space-y-3">
          {fireSafetyData.costImplications.map((implication, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 flex justify-between items-center border border-gray-200">
              <div>
                <h4 className="font-semibold text-gray-900">{implication.scenario}</h4>
                <p className="text-sm text-gray-600">{implication.cost}</p>
                {implication.recommendation && (
                  <p className="text-xs text-red-600 mt-1 flex items-start gap-1">
                    <ExclamationTriangleIcon className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    {implication.recommendation}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span className={`text-2xl font-bold ${
                  implication.costIncrease === '0%' ? 'text-emerald-600' :
                  implication.costIncrease.includes('5-10') ? 'text-green-600' :
                  implication.costIncrease.includes('15-25') ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {implication.costIncrease}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-emerald-100 rounded border border-emerald-300">
          <p className="text-sm text-emerald-900">
            <strong>Recommendation:</strong> Design fire-critical spaces around Tier 1 & Tier 2 reuse;
            relocate Tier 3 items to guest rooms to minimize testing costs while maximizing circular furniture use.
          </p>
        </div>
      </section>
    </div>
  );
}
