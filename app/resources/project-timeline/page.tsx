'use client';

import { useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function ProjectTimelinePage() {
  const [selectedScenario, setSelectedScenario] = useState<'luxury' | 'midscale' | 'budget'>('luxury');

  // Timeline scenarios
  const timelineScenarios = {
    luxury: {
      name: 'Luxury Hotel (100+ rooms)',
      totalDuration: '24-30 months',
      circularProcurement: '18-24 weeks',
      supplier: 'YLLW Factory / Input Interiör (Tier 1)',
      certification: 'LEED Platinum / BREEAM Excellent',
      phases: [
        {
          name: 'Pre-Design & Feasibility',
          duration: '2-3 months',
          weeks: 10,
          critical: true,
          tasks: [
            'Circular feasibility study',
            'Supplier pre-qualification (YLLW, Input)',
            'Fire safety strategy session',
            'Municipal pre-application meeting (Förhandsbesked)',
            'Budget allocation (circular premium: 5-8%)',
            'Consultant selection (Sweco/Forsen)',
            'Project charter approval'
          ]
        },
        {
          name: 'Design Development',
          duration: '4-5 months',
          weeks: 18,
          critical: true,
          tasks: [
            'Performance-based specifications (NO prescriptive models)',
            'Material passport template development',
            'Fire safety pre-testing (sample items)',
            'BVB equivalency framework setup',
            'Circular procurement RFQ preparation',
            'LEED/BREEAM circular credit strategy',
            'Contractor pre-qualification (circular experience required)'
          ]
        },
        {
          name: 'Circular Supplier Tender',
          duration: '3-4 months',
          weeks: 14,
          critical: true,
          tasks: [
            'Issue RFQ to pre-qualified suppliers (3-5 suppliers)',
            'Site visits to supplier facilities',
            'Material passport sample review',
            'Fire certification verification (EN 1021-1/2)',
            'Lead time negotiation (+4 week buffer required)',
            'Warranty terms finalization (3-year minimum)',
            'Contract award (Week 14)'
          ]
        },
        {
          name: 'Building Permit',
          duration: '6-8 months',
          weeks: 28,
          critical: false,
          tasks: [
            'Submit Bygglov application with circular documentation',
            'BVB equivalency documentation submission',
            'Municipal review period',
            'Fire safety authority review',
            'Building inspector Q&A sessions (2-3 rounds)',
            'Permit approval',
            'Parallel: Begin supplier production (at-risk)'
          ]
        },
        {
          name: 'Circular Procurement & Production',
          duration: '18-24 weeks',
          weeks: 21,
          critical: true,
          tasks: [
            'Supplier production kickoff',
            'Material passport creation (ongoing)',
            'Quality control inspections (Week 8, 14, 18)',
            'Fire testing execution (Week 6-10)',
            'Pre-delivery inspection (Week 20)',
            'Logistics coordination',
            'Staged delivery schedule confirmation'
          ]
        },
        {
          name: 'Construction & Installation',
          duration: '12-16 months',
          weeks: 56,
          critical: false,
          tasks: [
            'Structural work (Months 1-8)',
            'MEP systems (Months 4-12)',
            'Circular furniture delivery (Months 10-14)',
            'Installation & staging (Months 12-16)',
            'Quality control inspections',
            'Punch list resolution',
            'Material passport final documentation'
          ]
        },
        {
          name: 'Commissioning & Opening',
          duration: '2-3 months',
          weeks: 10,
          critical: false,
          tasks: [
            'Final building inspection',
            'Fire safety final approval',
            'LEED/BREEAM final certification',
            'Material passport digital archive',
            'Staff training (circular story)',
            'Soft opening',
            'Grand opening'
          ]
        }
      ]
    },
    midscale: {
      name: 'Midscale Hotel (50-100 rooms)',
      totalDuration: '18-22 months',
      circularProcurement: '14-18 weeks',
      supplier: 'Input Interiör / Rekomo (Tier 1-2)',
      certification: 'LEED Gold / BREEAM Very Good',
      phases: [
        {
          name: 'Pre-Design & Feasibility',
          duration: '1.5-2 months',
          weeks: 7,
          critical: true,
          tasks: [
            'Circular feasibility study',
            'Supplier pre-qualification (Input, Rekomo)',
            'Budget allocation (circular premium: 3-5%)',
            'Municipal pre-application',
            'Consultant selection'
          ]
        },
        {
          name: 'Design Development',
          duration: '3-4 months',
          weeks: 14,
          critical: true,
          tasks: [
            'Performance-based specifications',
            'Material passport framework',
            'Fire safety strategy',
            'Circular RFQ preparation',
            'LEED/BREEAM strategy'
          ]
        },
        {
          name: 'Circular Supplier Tender',
          duration: '2-3 months',
          weeks: 10,
          critical: true,
          tasks: [
            'Issue RFQ (2-4 suppliers)',
            'Material passport review',
            'Fire cert verification',
            'Lead time negotiation',
            'Contract award (Week 10)'
          ]
        },
        {
          name: 'Building Permit',
          duration: '4-6 months',
          weeks: 20,
          critical: false,
          tasks: [
            'Bygglov submission',
            'BVB documentation',
            'Municipal review',
            'Permit approval',
            'Supplier production begins (at-risk)'
          ]
        },
        {
          name: 'Circular Procurement & Production',
          duration: '14-18 weeks',
          weeks: 16,
          critical: true,
          tasks: [
            'Supplier production',
            'Material passport creation',
            'Quality inspections (Week 6, 12)',
            'Fire testing',
            'Pre-delivery inspection',
            'Delivery coordination'
          ]
        },
        {
          name: 'Construction & Installation',
          duration: '8-12 months',
          weeks: 40,
          critical: false,
          tasks: [
            'Structural & MEP work',
            'Furniture delivery (Months 7-10)',
            'Installation (Months 9-12)',
            'Quality control',
            'Punch list'
          ]
        },
        {
          name: 'Commissioning & Opening',
          duration: '1-2 months',
          weeks: 6,
          critical: false,
          tasks: [
            'Final inspections',
            'Certification',
            'Material passport archive',
            'Staff training',
            'Opening'
          ]
        }
      ]
    },
    budget: {
      name: 'Budget Hotel (<50 rooms)',
      totalDuration: '12-16 months',
      circularProcurement: '10-12 weeks',
      supplier: 'Rekomo / RP / Kompanjonen (Tier 2-3)',
      certification: 'Nordic Swan / Green Key',
      phases: [
        {
          name: 'Pre-Design & Feasibility',
          duration: '1 month',
          weeks: 4,
          critical: true,
          tasks: [
            'Circular feasibility study',
            'Supplier pre-qualification (Rekomo, RP, Kompanjonen)',
            'Budget allocation (circular savings: 15-25%)',
            'Municipal pre-application'
          ]
        },
        {
          name: 'Design Development',
          duration: '2-3 months',
          weeks: 10,
          critical: true,
          tasks: [
            'Performance-based specifications',
            'Basic documentation framework',
            'Fire safety strategy',
            'RFQ preparation'
          ]
        },
        {
          name: 'Circular Supplier Tender',
          duration: '1.5-2 months',
          weeks: 7,
          critical: true,
          tasks: [
            'Issue RFQ (2-3 suppliers)',
            'Basic documentation review',
            'Fire cert verification (basic)',
            'Contract award (Week 7)'
          ]
        },
        {
          name: 'Building Permit',
          duration: '3-5 months',
          weeks: 16,
          critical: false,
          tasks: [
            'Bygglov submission',
            'Basic circular documentation',
            'Permit approval',
            'Supplier production begins'
          ]
        },
        {
          name: 'Circular Procurement & Production',
          duration: '10-12 weeks',
          weeks: 11,
          critical: true,
          tasks: [
            'Supplier production',
            'Basic documentation',
            'Quality inspection (Week 6)',
            'Fire testing (if required)',
            'Delivery coordination'
          ]
        },
        {
          name: 'Construction & Installation',
          duration: '6-8 months',
          weeks: 28,
          critical: false,
          tasks: [
            'Structural & MEP work',
            'Furniture delivery (Months 5-7)',
            'Installation (Months 6-8)',
            'Punch list'
          ]
        },
        {
          name: 'Commissioning & Opening',
          duration: '2-4 weeks',
          weeks: 3,
          critical: false,
          tasks: [
            'Final inspections',
            'Basic certification',
            'Staff training',
            'Opening'
          ]
        }
      ]
    }
  };

  const scenario = timelineScenarios[selectedScenario];

  // Calculate cumulative weeks for visualization
  let cumulativeWeeks = 0;
  const phasesWithPositions = scenario.phases.map(phase => {
    const startWeek = cumulativeWeeks;
    cumulativeWeeks += phase.weeks;
    return {
      ...phase,
      startWeek,
      endWeek: cumulativeWeeks
    };
  });

  const totalWeeks = cumulativeWeeks;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Project Timeline Templates</h1>
        <p className="text-gray-600 mb-4">
          Gantt chart templates with circular procurement milestones for hotel renovations
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded p-4">
          <p className="text-sm text-blue-900">
            <strong>Critical Path Focus:</strong> Templates highlight circular procurement critical path - supplier pre-qualification, material passport development, fire testing, and extended lead times (+4 weeks buffer).
          </p>
        </div>
      </div>

      {/* Scenario Selector */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ChartBarIcon className="w-6 h-6 text-emerald-600" />
          Select Project Scenario
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(Object.keys(timelineScenarios) as Array<keyof typeof timelineScenarios>).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedScenario(key)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedScenario === key
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 bg-white hover:border-emerald-300'
              }`}
            >
              <h3 className="font-bold text-gray-900 mb-2">{timelineScenarios[key].name}</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Duration:</strong> {timelineScenarios[key].totalDuration}</p>
                <p><strong>Circular Lead Time:</strong> {timelineScenarios[key].circularProcurement}</p>
                <p><strong>Supplier:</strong> {timelineScenarios[key].supplier}</p>
                <p><strong>Certification:</strong> {timelineScenarios[key].certification}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-emerald-600" />
            {scenario.name} - Timeline
          </h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-700">Critical Path</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-gray-700">Standard</span>
            </div>
          </div>
        </div>

        {/* Gantt Chart - Simplified Visual */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Time Scale */}
            <div className="flex mb-2 text-xs text-gray-600">
              <div className="w-48"></div>
              <div className="flex-1 flex">
                {Array.from({ length: Math.ceil(totalWeeks / 10) }).map((_, i) => (
                  <div key={i} className="flex-1 text-center border-l border-gray-200">
                    Week {i * 10 + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Phases */}
            {phasesWithPositions.map((phase, index) => (
              <div key={index} className="flex mb-3">
                {/* Phase Name */}
                <div className="w-48 pr-4">
                  <div className={`text-sm font-semibold ${phase.critical ? 'text-red-700' : 'text-gray-900'}`}>
                    {phase.name}
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    {phase.duration}
                  </div>
                </div>

                {/* Timeline Bar */}
                <div className="flex-1 relative h-10">
                  <div
                    className={`absolute h-8 rounded ${phase.critical ? 'bg-red-500' : 'bg-blue-500'} flex items-center justify-center text-white text-xs font-semibold shadow-md`}
                    style={{
                      left: `${(phase.startWeek / totalWeeks) * 100}%`,
                      width: `${(phase.weeks / totalWeeks) * 100}%`
                    }}
                  >
                    {phase.weeks}w
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Duration */}
        <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-600 rounded p-4">
          <p className="text-sm text-emerald-900">
            <strong>Total Project Duration:</strong> {scenario.totalDuration} ({totalWeeks} weeks) including circular procurement buffer
          </p>
        </div>
      </div>

      {/* Detailed Phase Breakdown */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Phase Breakdown</h2>
        {phasesWithPositions.map((phase, index) => (
          <div key={index} className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${phase.critical ? 'border-red-500' : 'border-blue-500'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{phase.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    Duration: <strong>{phase.duration}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    Week {phase.startWeek + 1} - {phase.endWeek}
                  </span>
                  {phase.critical && (
                    <span className="flex items-center gap-1 text-red-600">
                      <ExclamationTriangleIcon className="w-4 h-4" />
                      <strong>CRITICAL PATH</strong>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Tasks Checklist */}
            <div className="bg-gray-50 rounded p-4">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Tasks & Milestones:</h4>
              <ul className="space-y-2">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Critical Success Factors */}
      <div className="mt-12 bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
        <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
          <ExclamationTriangleIcon className="w-6 h-6" />
          Critical Success Factors for Circular Procurement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-900">
          <div>
            <h3 className="font-bold mb-2">Timeline Buffers:</h3>
            <ul className="space-y-1 text-red-800">
              <li>• +4 weeks supplier lead time buffer (vs. new furniture)</li>
              <li>• +2 weeks fire testing contingency</li>
              <li>• +2 weeks material passport documentation</li>
              <li>• Municipal permit: Use Göteborg (4-6 months) vs. Stockholm (6-8 months)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Pre-Qualification Requirements:</h3>
            <ul className="space-y-1 text-red-800">
              <li>• Supplier pre-qualification BEFORE design lock (Week 10)</li>
              <li>• Fire testing samples DURING design (Week 18-22)</li>
              <li>• Material passport templates ready (Week 24)</li>
              <li>• Contractor circular training BEFORE construction (Week 48)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Procurement Strategy:</h3>
            <ul className="space-y-1 text-red-800">
              <li>• Performance-based specs (NO prescriptive models)</li>
              <li>• Parallel permit + supplier production (at-risk)</li>
              <li>• Quality inspections: Weeks 6, 12, 18 (3 checkpoints)</li>
              <li>• Staged delivery aligned with construction schedule</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Risk Mitigation:</h3>
            <ul className="space-y-1 text-red-800">
              <li>• Pre-contract supplier facility visits</li>
              <li>• Warranty minimum: 3 years (Tier 1), 1 year (Tier 2-3)</li>
              <li>• Backup supplier identified (10% of budget)</li>
              <li>• Client education: Circular timeline vs. conventional (+6-8 weeks)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Download Templates */}
      <div className="mt-12 bg-emerald-50 border-l-4 border-emerald-600 rounded-lg p-6">
        <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <ArrowDownTrayIcon className="w-6 h-6" />
          Download Timeline Templates
        </h2>
        <p className="text-sm text-emerald-800 mb-4">
          Export detailed Gantt charts in multiple formats for project planning and client communication.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white border-2 border-emerald-500 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
            Excel Gantt Chart
          </button>
          <button className="bg-white border-2 border-emerald-500 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
            PDF Summary
          </button>
          <button className="bg-white border-2 border-emerald-500 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
            MS Project (.mpp)
          </button>
        </div>
        <p className="text-xs text-emerald-700 mt-3 italic">
          Coming Soon: Interactive timeline builder with customizable milestones
        </p>
      </div>

      {/* Municipal Timeline Comparison */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Municipal Permit Timeline Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Municipality</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Timeline</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Circular Experience</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">Stockholm</td>
                <td className="px-4 py-3 text-gray-700">6-8 months</td>
                <td className="px-4 py-3 text-gray-700">HIGH - Blique, Downtown Camper precedents</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">High Precedent</span></td>
              </tr>
              <tr className="hover:bg-gray-50 bg-emerald-50">
                <td className="px-4 py-3 font-semibold text-emerald-900">★ Göteborg</td>
                <td className="px-4 py-3 text-emerald-700 font-semibold">4-6 months</td>
                <td className="px-4 py-3 text-emerald-700 font-semibold">VERY HIGH - Circular leader, supportive</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-600 text-white rounded text-xs font-semibold">★ RECOMMENDED</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">Malmö</td>
                <td className="px-4 py-3 text-gray-700">3-5 months</td>
                <td className="px-4 py-3 text-gray-700">MEDIUM - Pragmatic, fast-track</td>
                <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold">Fast Alternative</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-4 italic">
          * Timelines assume complete circular documentation package. Missing material passports or fire certs can add 4-8 weeks.
        </p>
      </div>
    </div>
  );
}
