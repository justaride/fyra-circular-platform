'use client';

import { useState } from 'react';
import Link from 'next/link';
import consultantsData from '@/data/consultants.json';

type Consultant = typeof consultantsData[0];

export default function ConsultantsPage() {
  const [filterTier, setFilterTier] = useState<'all' | 'tier1' | 'tier2'>('all');
  const [filterHospitality, setFilterHospitality] = useState(false);
  const [filterCircular, setFilterCircular] = useState(false);

  // Separate Tier 1 and Tier 2 consultants
  const tier1Consultants = consultantsData.filter(c => c.tier === 1);
  const tier2Consultants = consultantsData.filter(c => c.tier === 2);

  const getFilteredConsultants = (tier: number) => {
    return consultantsData.filter(consultant => {
      if (filterTier !== 'all') {
        const tierMatch = filterTier === 'tier1' ? consultant.tier === 1 : consultant.tier === 2;
        if (!tierMatch) return false;
      }
      if (consultant.tier !== tier) return false;
      if (filterHospitality && !consultant.hospitalityExperience) return false;
      if (filterCircular && !consultant.circularEconomyExperience) return false;
      return true;
    });
  };

  const filteredTier1 = getFilteredConsultants(1);
  const filteredTier2 = getFilteredConsultants(2);
  const totalFiltered = filteredTier1.length + filteredTier2.length;

  const ConsultantCard = ({ consultant }: { consultant: Consultant }) => (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition ${
      consultant.tier === 1 ? 'border-2 border-emerald-200' : ''
    }`}>
      {/* Header with Name and Priority */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{consultant.name}</h2>
          {consultant.tagline && (
            <p className="text-emerald-700 font-medium text-sm mb-2">{consultant.tagline}</p>
          )}
          <p className="text-gray-600 text-sm">📍 {consultant.location}</p>
          {consultant.size && (
            <p className="text-gray-600 text-sm">👥 {consultant.size}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 ml-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            consultant.tier === 1
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {consultant.tier === 1 ? '⭐⭐⭐ TIER 1' : '⭐⭐ TIER 2'}
          </span>
          {consultant.priority && (
            <div className="text-right">
              <div className="text-lg font-bold text-amber-600">{consultant.priority}</div>
              <div className="text-xs text-gray-600">{consultant.priorityLabel}</div>
            </div>
          )}
        </div>
      </div>

      {/* Scoping Warning (for Sweco) */}
      {consultant.scopingCritical && (
        <div className="bg-red-50 border-l-4 border-red-600 rounded p-4 mb-4">
          <h3 className="font-bold text-red-900 mb-1 flex items-center text-sm">
            <span className="mr-2">⚠️</span>
            SCOPING CRITICAL
          </h3>
          <p className="text-sm text-red-800">{consultant.scopingCritical}</p>
        </div>
      )}

      <p className="text-gray-700 mb-4">{consultant.description}</p>

      {/* Experience Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {consultant.hospitalityExperience && (
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-xs font-semibold">
            🏨 {consultant.hospitalityProjects} Hotel Projects
          </span>
        )}
        {consultant.circularRating && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-xs font-semibold">
            ♻️ {consultant.circularRating}
          </span>
        )}
        {consultant.pricing && (
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-semibold">
            💰 {consultant.pricing}
          </span>
        )}
      </div>

      {/* Key Projects */}
      {consultant.keyProjects && consultant.keyProjects.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
            <span className="mr-2">🏗️</span>
            Key Projects
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            {consultant.keyProjects.map((project, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Best For */}
      {consultant.bestFor && consultant.bestFor.length > 0 && (
        <div className="bg-emerald-50 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
            <span className="mr-2">✓</span>
            Best For
          </h3>
          <div className="flex flex-wrap gap-2">
            {consultant.bestFor.map((item, idx) => (
              <span key={idx} className="bg-white border border-emerald-300 text-emerald-800 px-3 py-1 rounded-md text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Strengths & Concerns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {consultant.strengths && consultant.strengths.length > 0 && (
          <div>
            <h3 className="font-semibold text-emerald-800 mb-2 text-sm">✓ Strengths</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {consultant.strengths.slice(0, 4).map((strength, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-emerald-600 mr-1">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {consultant.concerns && consultant.concerns.length > 0 && (
          <div>
            <h3 className="font-semibold text-orange-800 mb-2 text-sm">⚠ Considerations</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {consultant.concerns.map((concern, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-orange-600 mr-1">•</span>
                  <span>{concern}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Key Contact */}
      {consultant.keyContact && (
        <div className="bg-gray-50 rounded p-3 mb-4">
          <div className="text-xs font-medium text-gray-500 mb-1">Key Contact</div>
          <div className="text-sm text-gray-900 font-semibold">{consultant.keyContact}</div>
        </div>
      )}

      {/* Contact Information */}
      <div className="border-t pt-4">
        <h3 className="font-semibold text-gray-900 mb-2 text-sm">Contact Strategy</h3>
        <div className="space-y-2 text-sm">
          {consultant.contact.website && (
            <div>
              <a
                href={consultant.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Visit Website →
              </a>
            </div>
          )}
          {consultant.contact.phone && (
            <div>
              <span className="text-gray-600">Phone:</span>{' '}
              <a href={`tel:${consultant.contact.phone}`} className="text-emerald-600 hover:underline">
                {consultant.contact.phone}
              </a>
            </div>
          )}
          {consultant.contact.method && (
            <div className="text-gray-700">
              <span className="font-semibold">Method:</span> {consultant.contact.method}
            </div>
          )}
          {consultant.contact.askFor && (
            <div className="text-gray-700">
              <span className="font-semibold">Ask for:</span> {consultant.contact.askFor}
            </div>
          )}
          {consultant.contact.reference && (
            <div className="bg-blue-50 rounded p-2 mt-2">
              <span className="font-semibold text-blue-900 text-xs">Reference to mention:</span>
              <p className="text-xs text-blue-800 mt-1">{consultant.contact.reference}</p>
            </div>
          )}
        </div>
      </div>

      {/* Recommended Use (for Tier 2) */}
      {consultant.recommendedUse && (
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 rounded p-3">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Recommended Use:</span> {consultant.recommendedUse}
          </p>
        </div>
      )}

      {/* Verdict (for lower priority) */}
      {consultant.verdict && (
        <div className="mt-4 bg-gray-50 border-l-4 border-gray-400 rounded p-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Assessment:</span> {consultant.verdict}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Project Partners & Consultants</h1>
        <p className="text-gray-600 mb-4">
          Swedish technical consultants and project managers for circular economy hotel renovations
        </p>
        <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded p-4">
          <p className="text-sm text-emerald-900">
            <strong>Strategic Guidance:</strong> For detailed partnership strategies, decision frameworks, and approach methods,{' '}
            <Link href="/partnership-strategy" className="underline font-semibold hover:text-emerald-700">
              view the Partnership Strategy page →
            </Link>
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tier Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Consultant Tier
            </label>
            <select
              value={filterTier}
              onChange={(e) => setFilterTier(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Tiers</option>
              <option value="tier1">Tier 1 - Premium Hotel-Ready ({tier1Consultants.length})</option>
              <option value="tier2">Tier 2 - Specialist Partners ({tier2Consultants.length})</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 justify-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterHospitality}
                onChange={(e) => setFilterHospitality(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <span className="text-sm font-medium text-gray-700">Hospitality Experience</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterCircular}
                onChange={(e) => setFilterCircular(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <span className="text-sm font-medium text-gray-700">Circular Economy Expertise</span>
            </label>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-end">
            <div className="text-sm text-gray-600">
              Showing <span className="font-bold text-emerald-600">{totalFiltered}</span> of {consultantsData.length} consultants
            </div>
          </div>
        </div>
      </div>

      {/* Tier 1: Premium Hotel-Ready */}
      {filteredTier1.length > 0 && (
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <span className="mr-3">⭐⭐⭐</span>
              Tier 1: Premium Hotel-Ready Consultants
            </h2>
            <p className="text-gray-600">
              Top 3 consultants with proven hospitality track record and circular economy capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {filteredTier1.map((consultant) => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
        </div>
      )}

      {/* Tier 2: Specialist Partners */}
      {filteredTier2.length > 0 && (
        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <span className="mr-3">⭐⭐</span>
              Tier 2: Specialist Partners
            </h2>
            <p className="text-gray-600">
              Capable consultants with specific strengths, best used as sub-consultants or for specialized needs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTier2.map((consultant) => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {totalFiltered === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No consultants match your current filters.</p>
          <button
            onClick={() => {
              setFilterTier('all');
              setFilterHospitality(false);
              setFilterCircular(false);
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
