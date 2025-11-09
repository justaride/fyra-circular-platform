'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  BeakerIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import RelatedResources from '@/app/components/RelatedResources';

export default function BVBEquivalencyPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const templateSections = [
    {
      id: 1,
      title: '1. Item Description',
      icon: '📋',
      purpose: 'Unique identification and basic specifications',
      fields: [
        'Item type (desk, chair, table, etc.)',
        'Manufacturer (if known; "Unknown" acceptable for vintage)',
        'Approximate era (1960s, 1970s, etc.)',
        'Dimensions (L × W × H)',
        'Weight',
        'Photos (minimum 3: overall, detail shots, condition close-ups)',
        'Supplier inventory ID',
        'Acquisition date',
        'Origin (e.g., "Bank of Sweden HQ renovation 2023")'
      ],
      example: {
        type: 'Desk, writing table',
        manufacturer: 'Unknown',
        era: '1960s',
        dimensions: '140cm L × 70cm W × 75cm H',
        materials: 'Solid oak frame, oak veneer top, steel drawer slides',
        origin: 'Sourced via YLLW Factory from Stockholm office liquidation'
      }
    },
    {
      id: 2,
      title: '2. Chemical Content (BVB Criterion 1)',
      icon: '⚗️',
      purpose: 'Demonstrate avoidance of hazardous substances (REACH Annex XVII compliance)',
      bvbIntent: 'Avoid hazardous substances (REACH restricted chemicals, CMR substances)',
      assessment: [
        'Material composition: Solid oak wood + oak veneer + steel hardware',
        'Age advantage: 1960s-era predates many modern chemical treatments',
        'No formaldehyde in glues (pre-formaldehyde era)',
        'No flame retardants common in newer furniture',
        'Refurbishment: YLLW Factory used water-based finish (zero VOC)',
        'Non-toxic wood treatment'
      ],
      conclusion: 'Meets/exceeds BVB chemical intent through material simplicity and age-based safety',
      supportingDocs: [
        'YLLW Factory refurbishment process documentation',
        'Material composition analysis',
        'No REACH Annex XVII substances identified'
      ]
    },
    {
      id: 3,
      title: '3. Lifecycle Impact (BVB Criterion 2)',
      icon: '♻️',
      purpose: 'Quantify embodied carbon savings and environmental benefits',
      bvbIntent: 'Minimize embodied carbon, resource depletion, environmental impact',
      metrics: {
        embodiedCarbonNew: '50-60 kg CO2e (typical new oak desk from EPD data)',
        embodiedCarbonReused: '5-10 kg CO2e (transport 50km + refurbishment energy)',
        savings: '45 kg CO2e per desk (~85% embodied carbon reduction)',
        wasteDiverted: '35 kg waste diverted from landfill',
        resourceConservation: 'No virgin timber harvested; no new steel mined/processed'
      },
      methodology: [
        'Embodied carbon new desk: Based on EPD data for comparable solid oak furniture',
        'Embodied carbon reuse: Transport (Stockholm → hotel: 50km) + refurbishment energy',
        'Waste diversion: Desk weight minus refurbishment waste'
      ],
      conclusion: '85% embodied carbon reduction vs. new manufacturing'
    },
    {
      id: 4,
      title: '4. Environmental Data (BVB Criterion 3)',
      icon: '📊',
      purpose: 'Document traceable supply chain and environmental performance',
      bvbIntent: 'Traceable supply chain, documented environmental performance',
      documentation: [
        'Origin: Office liquidation, Stockholm (verified)',
        'YLLW Factory material passport includes:',
        '  - Acquisition date',
        '  - Condition assessment',
        '  - Refurbishment processes applied',
        '  - New materials used (finish type, hardware specs)',
        'Transport distance: 50km (low transport impact)',
        'End-of-life plan: Solid wood = recyclable/biodegradable',
        'YLLW Factory buy-back program available'
      ],
      supportingDocs: [
        'YLLW Factory Material Passport',
        'Origin verification invoice',
        'Transport documentation'
      ]
    },
    {
      id: 5,
      title: '5. Equivalency Argument Summary',
      icon: '✅',
      purpose: 'Conclusive statement demonstrating BVB intent compliance',
      argument: 'While this refurbished 1960s oak desk does not have an official BVB rating (the BVB system evaluates new manufactured products), it meets or exceeds BVB intent through the following:',
      points: [
        {
          criterion: 'Chemical Safety',
          evidence: 'Solid wood + steel = inherently low-chemical composition; 1960s manufacturing predates problematic modern chemicals; water-based refurbishment finishes = zero VOC'
        },
        {
          criterion: 'Lifecycle Superiority',
          evidence: '85% embodied carbon reduction vs. new equivalent (45 kg CO2e saved); waste diverted from landfill; virgin resource conservation'
        },
        {
          criterion: 'Supply Chain Transparency',
          evidence: 'Complete documentation from origin through refurbishment to end-of-life plan; YLLW Factory material passport system'
        }
      ],
      conclusion: 'This reused desk represents a superior environmental choice compared to a BVB-Recommended new desk, achieving BVB\'s sustainability goals through reuse rather than new manufacturing.'
    },
    {
      id: 6,
      title: '6. Alternative Certifications',
      icon: '🏆',
      purpose: 'List any existing certifications that support equivalency claim',
      hierarchy: [
        'Cradle to Cradle (C2C) - Product designed for material health and circularity',
        'Nordic Swan - Meets Nordic environmental ecolabel standards',
        'OEKO-TEX - Textile tested for harmful substances',
        'EPD (Environmental Product Declaration) - Quantified impacts documented'
      ],
      note: 'For 1960s vintage furniture: N/A (predates modern certification systems)',
      whenAvailable: 'If reused item HAS certification, emphasize this strongly in documentation'
    },
    {
      id: 7,
      title: '7. Property Owner Acceptance Strategy',
      icon: '🤝',
      purpose: 'Tactical approach to securing property owner approval',
      steps: [
        {
          step: 'Week 1 of Design Phase',
          action: 'Submit documentation to property owner sustainability team for review',
          critical: true
        },
        {
          step: 'IVL Validation (Optional)',
          action: 'Request IVL Svenska Miljöinstitutet informal review confirming methodology',
          cost: '€2,000-3,000',
          timeline: '4-6 weeks',
          value: 'Third-party endorsement = higher acceptance rate'
        },
        {
          step: 'Pilot Approach',
          action: 'Start with 10-20% reused furniture in project',
          rationale: 'Once property owner sees documentation quality + IVL validation, expand percentage'
        },
        {
          step: 'Alternative Offer',
          action: 'If property owner uncomfortable despite documentation, substitute with BVB-Recommended new equivalent',
          note: 'Demonstrates flexibility while maintaining compliance'
        }
      ]
    },
    {
      id: 8,
      title: '8. Supporting Documentation',
      icon: '📎',
      purpose: 'Comprehensive evidence package',
      required: [
        'YLLW Factory Material Passport (origin, refurbishment, warranty)',
        'Embodied carbon calculation spreadsheet',
        'Comparable new furniture EPD references',
        'Refurbishment process documentation (finishes, treatments used)',
        'Origin verification (invoice from office liquidation)',
        'Transport documentation (distance, mode)',
        'Photos (before refurbishment, after, condition assessment)'
      ],
      optional: [
        'IVL validation letter (€2-3k, significantly increases acceptance)',
        'Fire safety test reports (if applicable to item placement)',
        'Warranty certificate from YLLW Factory'
      ]
    },
    {
      id: 9,
      title: '9. IVL Validation Process',
      icon: '🔬',
      purpose: 'Third-party endorsement from BVB technical administrator',
      whatIsIt: 'IVL Svenska Miljöinstitutet (BVB administrator) can provide informal review of your equivalency documentation methodology',
      process: [
        'Submit sample BVB equivalency docs for 3 reused items',
        'Request informal feedback letter',
        'Cost: ~€2,000-3,000',
        'Timeline: 4-6 weeks',
        'Deliverable: Letter confirming methodology is sound'
      ],
      value: 'IVL validation letter = third-party endorsement; property owners much more likely to accept',
      contact: {
        org: 'IVL Svenska Miljöinstitutet',
        website: 'ivl.se',
        approach: 'Via IVL website for BVB-specific inquiries'
      }
    },
    {
      id: 10,
      title: '10. Document Control',
      icon: '📝',
      purpose: 'Version tracking and approval workflow',
      fields: [
        'Document version (v1.0, v2.0, etc.)',
        'Prepared by: Fyra Interior Architecture',
        'Date prepared',
        'Reviewed by: [Project manager name]',
        'Approved by: [Client representative name]',
        'Distribution list: Project team, property owner, contractor, building inspector',
        'Revision history: Track changes between versions'
      ],
      note: 'Maintain digital + physical copies; provide to building inspector upon request'
    }
  ];

  // Related Resources for BVB page
  const bvbSources = [
    {
      title: 'BVB Official Resources',
      icon: 'document' as const,
      sources: [
        {
          title: 'BVB Product Database (30,000+ products)',
          url: 'https://byggvarubedomningen.se/',
          type: 'official' as const,
          description: 'Search for rated products and assessment methodology'
        },
        {
          title: 'IVL Svenska Miljöinstitutet (BVB Administrator)',
          url: 'https://www.ivl.se/english/ivl/about-us/business-areas/sustainable-production-and-consumption/buildings-and-products/byggvarubedomningen.html',
          type: 'official' as const,
          description: 'Technical support and validation services'
        },
        {
          title: 'BVB Assessment Criteria Documentation',
          url: 'https://byggvarubedomningen.se/saa-har-gaas-vaerdering/',
          type: 'official' as const,
          description: 'How products are assessed (Swedish)'
        }
      ]
    },
    {
      title: 'Property Owner Requirements',
      icon: 'building' as const,
      sources: [
        {
          title: 'Vasakronan Sustainability Requirements',
          url: 'https://www.vasakronan.se/hallbarhet/',
          type: 'primary' as const,
          description: 'Major property owner BVB requirements'
        },
        {
          title: 'Fabege Environmental Strategy',
          url: 'https://www.fabege.se/hallbarhet/',
          type: 'primary' as const,
          description: 'Stockholm property owner sustainability criteria'
        },
        {
          title: 'Wihlborgs Circular Construction',
          url: 'https://www.wihlborgs.se/hallbarhet/',
          type: 'primary' as const,
          description: 'Malmö-based property owner circular economy focus'
        }
      ]
    },
    {
      title: 'Supporting Standards',
      icon: 'verified' as const,
      sources: [
        {
          title: 'REACH Regulation (Chemical Safety)',
          url: 'https://echa.europa.eu/regulations/reach/',
          type: 'official' as const,
          description: 'EU chemical restriction framework (Annex XVII)'
        },
        {
          title: 'SGBC - Sweden Green Building Council',
          url: 'https://www.sgbc.se/',
          type: 'official' as const,
          description: 'BVB working groups and industry collaboration'
        }
      ]
    },
    {
      title: 'Related Resources',
      icon: 'link' as const,
      sources: [
        {
          title: 'Material Passport Template',
          url: '/resources/material-passport',
          type: 'primary' as const,
          description: 'Complete documentation framework',
          external: false
        },
        {
          title: 'Fire Safety Guide',
          url: '/fire-safety',
          type: 'primary' as const,
          description: 'Testing requirements for reused furniture',
          external: false
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <div className="mb-8">
            <Link href="/regulatory" className="text-emerald-600 hover:underline mb-4 inline-block">
              ← Back to Regulatory Guidance
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">BVB Equivalency Framework</h1>
            <p className="text-xl text-gray-600 mb-4">
              Navigate Sweden's building product assessment system with reused materials
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded p-4">
              <p className="text-sm text-emerald-900">
                <strong>For Property Owners Requiring BVB:</strong> Use this framework to demonstrate that reused materials meet or exceed BVB sustainability intent, even without official ratings. Visit the <a href="https://byggvarubedomningen.se/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">official BVB database</a> to search 30,000+ rated products.
              </p>
            </div>
          </div>

      {/* What is BVB? */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What is BVB?</h2>
        <p className="text-gray-700 mb-4">
          <strong>Byggvarubedömningen (BVB)</strong> is Sweden's building product assessment system that evaluates materials on chemical content, lifecycle impact, and environmental data. Think of it as "Sweden's Material Health & Sustainability Rating System."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Key Facts</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>30,000+ products</strong> rated in database</li>
              <li>• <strong>All major property owners</strong> use BVB (Vasakronan, Fabege, SBB, Wihlborgs)</li>
              <li>• <strong>Administrator:</strong> IVL Svenska Miljöinstitutet</li>
              <li>• <strong>Website:</strong> <a href="https://byggvarubedomningen.se" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">byggvarubedomningen.se</a></li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Rating Scale</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <strong>Recommended</strong> - Best environmental choice
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <strong>Accepted</strong> - Acceptable with conditions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <strong>Not Recommended</strong> - Use with caution
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <strong>Excluded</strong> - Do not use
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 rounded p-4">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <BeakerIcon className="w-5 h-5" />
            Assessment Criteria
          </h3>
          <ul className="text-sm text-blue-900 space-y-1">
            <li>1. <strong>Chemical Content:</strong> REACH Annex XVII compliance, hazardous substances</li>
            <li>2. <strong>Lifecycle Impact:</strong> Embodied carbon, resource depletion</li>
            <li>3. <strong>Environmental Data:</strong> EPDs, material origin documentation</li>
          </ul>
        </div>
      </section>

      {/* The Reuse Challenge */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ExclamationTriangleIcon className="w-8 h-8 text-orange-500" />
          The Reuse Challenge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
            <h3 className="font-semibold text-red-900 mb-2">BVB System Assumption</h3>
            <p className="text-sm text-red-800">
              Products are <strong>NEW</strong>, manufactured with controlled processes, documented supply chains, available EPDs (Environmental Product Declarations).
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600">
            <h3 className="font-semibold text-orange-900 mb-2">Reused Material Reality</h3>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• Unknown manufacturing date (could be 20-50 years old)</li>
              <li>• Unknown original manufacturer (many out of business)</li>
              <li>• No EPD available</li>
              <li>• Chemical content testing expensive/impractical for every piece</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold mb-2">Result:</p>
          <p className="text-xl">Reused products <strong>CANNOT</strong> get official BVB rating</p>
        </div>

        <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-600">
          <h3 className="font-bold text-emerald-900 mb-2 flex items-center gap-2 text-lg">
            <CheckCircleIcon className="w-6 h-6" />
            Solution: BVB Equivalency Documentation
          </h3>
          <p className="text-emerald-900 mb-3">
            Property owners care about BVB <strong>principles</strong> (health, sustainability) not just official ratings.
          </p>
          <p className="text-emerald-900 font-semibold">
            Fyra's Approach: Create "BVB Equivalency Documentation" demonstrating reused items align with BVB intent through alternative evidence.
          </p>
        </div>
      </section>

      {/* 10-Section Template */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">10-Section Equivalency Template</h2>
        <p className="text-gray-600 mb-6">
          Click each section to expand and see detailed guidance, example data, and required documentation.
        </p>

        <div className="space-y-4">
          {templateSections.map((section) => (
            <div
              key={section.id}
              className={`bg-white rounded-lg shadow-md border-2 transition-all ${
                expandedSection === section.id ? 'border-emerald-500' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{section.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{section.purpose}</p>
                  </div>
                </div>
                <span className="text-2xl text-emerald-600">
                  {expandedSection === section.id ? '−' : '+'}
                </span>
              </button>

              {expandedSection === section.id && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    {/* Section-specific content */}
                    {section.id === 1 && (
                      <>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Required Fields:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {section.fields?.map((field, idx) => (
                              <li key={idx}>• {field}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                          <h4 className="font-semibold text-blue-900 mb-2">Example: 1960s Oak Desk</h4>
                          <div className="text-sm text-blue-900 space-y-1">
                            <p><strong>Type:</strong> {section.example?.type}</p>
                            <p><strong>Manufacturer:</strong> {section.example?.manufacturer}</p>
                            <p><strong>Era:</strong> {section.example?.era}</p>
                            <p><strong>Dimensions:</strong> {section.example?.dimensions}</p>
                            <p><strong>Materials:</strong> {section.example?.materials}</p>
                            <p><strong>Origin:</strong> {section.example?.origin}</p>
                          </div>
                        </div>
                      </>
                    )}

                    {section.id === 2 && (
                      <>
                        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
                          <h4 className="font-semibold text-purple-900 mb-2">BVB Intent:</h4>
                          <p className="text-sm text-purple-800">{section.bvbIntent}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Reused Item Assessment:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {section.assessment?.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-emerald-900">{section.conclusion}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Supporting Documentation:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {section.supportingDocs?.map((doc, idx) => (
                              <li key={idx}>• {doc}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {section.id === 3 && (
                      <>
                        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
                          <h4 className="font-semibold text-purple-900 mb-2">BVB Intent:</h4>
                          <p className="text-sm text-purple-800">{section.bvbIntent}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Quantified Metrics:</h4>
                            <div className="text-sm text-gray-700 space-y-2">
                              <p><strong>New desk embodied carbon:</strong><br/>{section.metrics?.embodiedCarbonNew}</p>
                              <p><strong>Reused desk embodied carbon:</strong><br/>{section.metrics?.embodiedCarbonReused}</p>
                              <p className="text-emerald-700 font-bold"><strong>Savings:</strong><br/>{section.metrics?.savings}</p>
                              <p><strong>Waste diverted:</strong><br/>{section.metrics?.wasteDiverted}</p>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Calculation Methodology:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              {section.methodology?.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-emerald-900">
                            Conclusion: {section.conclusion}
                          </p>
                        </div>
                      </>
                    )}

                    {section.id === 4 && (
                      <>
                        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
                          <h4 className="font-semibold text-purple-900 mb-2">BVB Intent:</h4>
                          <p className="text-sm text-purple-800">{section.bvbIntent}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Documentation:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {section.documentation?.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Required Supporting Documents:</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            {section.supportingDocs?.map((doc, idx) => (
                              <li key={idx}>✓ {doc}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {section.id === 5 && (
                      <>
                        <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                          <p className="text-sm text-emerald-900 mb-3 font-semibold">{section.argument}</p>
                        </div>
                        <div className="space-y-3">
                          {section.points?.map((point, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {idx + 1}. {point.criterion}
                              </h4>
                              <p className="text-sm text-gray-700">{point.evidence}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-emerald-600 text-white rounded-lg p-4 mt-4">
                          <p className="font-semibold">{section.conclusion}</p>
                        </div>
                      </>
                    )}

                    {section.id === 6 && (
                      <>
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                          <h4 className="font-semibold text-blue-900 mb-2">Certification Hierarchy (Priority Order):</h4>
                          <ol className="text-sm text-blue-800 space-y-2">
                            {section.hierarchy?.map((cert, idx) => (
                              <li key={idx}><strong>{idx + 1}.</strong> {cert}</li>
                            ))}
                          </ol>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-4">
                          <p className="text-sm text-yellow-900">
                            <strong>Note:</strong> {section.note}
                          </p>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-4">
                          <p className="text-sm text-emerald-900 font-semibold">
                            {section.whenAvailable}
                          </p>
                        </div>
                      </>
                    )}

                    {section.id === 7 && (
                      <div className="space-y-3">
                        {section.steps?.map((step, idx) => (
                          <div
                            key={idx}
                            className={`rounded-lg p-4 ${
                              step.critical ? 'bg-red-50 border-l-4 border-red-600' : 'bg-gray-50'
                            }`}
                          >
                            <h4 className={`font-semibold mb-1 ${step.critical ? 'text-red-900' : 'text-gray-900'}`}>
                              {step.step} {step.critical && '⚠️ CRITICAL'}
                            </h4>
                            <p className="text-sm text-gray-700 mb-2">{step.action}</p>
                            {step.cost && (
                              <p className="text-xs text-gray-600">Cost: {step.cost} | Timeline: {step.timeline}</p>
                            )}
                            {step.value && (
                              <p className="text-xs text-emerald-700 font-semibold">Value: {step.value}</p>
                            )}
                            {step.rationale && (
                              <p className="text-xs text-gray-600 italic">{step.rationale}</p>
                            )}
                            {step.note && (
                              <p className="text-xs text-gray-600">{step.note}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.id === 8 && (
                      <>
                        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
                          <h4 className="font-semibold text-red-900 mb-2">Required Documentation:</h4>
                          <ul className="text-sm text-red-800 space-y-1">
                            {section.required?.map((doc, idx) => (
                              <li key={idx}>✓ {doc}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                          <h4 className="font-semibold text-blue-900 mb-2">Optional (But Highly Recommended):</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            {section.optional?.map((doc, idx) => (
                              <li key={idx}>• {doc}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {section.id === 9 && (
                      <>
                        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
                          <h4 className="font-semibold text-purple-900 mb-2">What is IVL Validation?</h4>
                          <p className="text-sm text-purple-800 mb-3">{section.whatIsIt}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Validation Process:</h4>
                          <ol className="text-sm text-gray-700 space-y-1">
                            {section.process?.map((step, idx) => (
                              <li key={idx}>{idx + 1}. {step}</li>
                            ))}
                          </ol>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-4">
                          <h4 className="font-semibold text-emerald-900 mb-2">Value Proposition:</h4>
                          <p className="text-sm text-emerald-800">{section.value}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Contact Information:</h4>
                          <p className="text-sm text-blue-800">
                            <strong>{section.contact?.org}</strong><br/>
                            Website: <a href={`https://${section.contact?.website}`} target="_blank" rel="noopener noreferrer" className="underline">{section.contact?.website}</a><br/>
                            {section.contact?.approach}
                          </p>
                        </div>
                      </>
                    )}

                    {section.id === 10 && (
                      <>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Document Control Fields:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {section.fields?.map((field, idx) => (
                              <li key={idx}>• {field}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-4">
                          <p className="text-sm text-yellow-900">
                            <strong>Note:</strong> {section.note}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Workflow */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Workflow</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Property Owner Alignment (Week 1 of Design Phase)</h3>
              <p className="text-sm text-gray-700">Schedule dedicated meeting with property owner sustainability team + project coordinator. Present BVB equivalency framework BEFORE design finalized. Secure buy-in on approach.</p>
              <div className="bg-red-50 rounded p-2 mt-2">
                <p className="text-xs text-red-800"><strong>Critical:</strong> Avoid situation where design complete but property owner rejects reuse approach</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Complete Equivalency Documentation (Week 2-3)</h3>
              <p className="text-sm text-gray-700">Fill 10-section template for each major reused item type. Gather supporting documentation (material passports, EPD references, embodied carbon calculations).</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">IVL Validation Letter (Optional, Week 4-10)</h3>
              <p className="text-sm text-gray-700 mb-2">Submit sample documentation to IVL for informal review. Cost: €2,000-3,000. Timeline: 4-6 weeks.</p>
              <div className="bg-emerald-50 rounded p-2">
                <p className="text-xs text-emerald-800"><strong>High ROI:</strong> IVL validation letter significantly increases property owner acceptance rate</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Submit to Property Owner</h3>
              <p className="text-sm text-gray-700">Provide complete equivalency documentation package (with IVL letter if obtained). Request review within 2 weeks.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Pilot Approach (10-20% Reused)</h3>
              <p className="text-sm text-gray-700">Start conservatively with 10-20% reused furniture. Once property owner sees documentation quality and outcomes, expand percentage in future phases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Practices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
            <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5" />
              When to Use BVB Equivalency
            </h3>
            <ul className="text-sm text-emerald-800 space-y-1">
              <li>✓ Property owner explicitly requires BVB compliance</li>
              <li>✓ Major Swedish property owners (Vasakronan, Fabege, SBB)</li>
              <li>✓ Certified projects (Miljöbyggnad, BREEAM-SE)</li>
              <li>✓ When IVL validation available (€2-3k investment worthwhile)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-600">
            <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
              <ExclamationTriangleIcon className="w-5 h-5" />
              When to Avoid BVB-Strict Clients
            </h3>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Year 1 Strategy: Target independent hotel owners without rigid BVB requirements</li>
              <li>• Build precedent library: 5-10 successful equivalency submissions</li>
              <li>• Year 2+: Approach major property owners with proven track record</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
          <h3 className="font-semibold text-purple-900 mb-2">Alternative Certification Priority</h3>
          <p className="text-sm text-purple-800 mb-2">When reused items HAVE existing certifications, emphasize in this order:</p>
          <ol className="text-sm text-purple-800 space-y-1">
            <li>1. <strong>Cradle to Cradle (C2C)</strong> → Best for circular economy</li>
            <li>2. <strong>Nordic Swan</strong> → Nordic recognition</li>
            <li>3. <strong>OEKO-TEX</strong> → Textile safety</li>
            <li>4. <strong>EPDs</strong> → Quantified data</li>
            <li>5. <strong>BVB Equivalency</strong> → When no other certification available</li>
          </ol>
        </div>

        <div className="mt-6 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
          <h3 className="font-semibold text-blue-900 mb-2">Long-Term: SGBC Advocacy</h3>
          <p className="text-sm text-blue-800">
            <strong>Join SGBC</strong> (Sweden Green Building Council, €3,000-5,000/year) to participate in BVB working groups.
            Advocate for "reused products pathway" in BVB system updates. Build case study library documenting successful BVB equivalency submissions.
            Share with SGBC to influence system evolution (multi-year effort).
          </p>
          <div className="mt-2">
            <a href="https://www.sgbc.se" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-semibold">
              Learn more about SGBC membership →
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Contacts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
              IVL Svenska Miljöinstitutet
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Role:</strong> BVB Administrator</p>
              <p><strong>Website:</strong> <a href="https://ivl.se" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">ivl.se</a></p>
              <p><strong>BVB Database:</strong> <a href="https://byggvarubedomningen.se" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">byggvarubedomningen.se</a></p>
              <p><strong>Services:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• BVB database search (free)</li>
                <li>• Product assessment (for manufacturers)</li>
                <li>• Informal equivalency review (~€2-3k)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
              SGBC (Sweden Green Building Council)
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Website:</strong> <a href="https://sgbc.se" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">sgbc.se</a></p>
              <p><strong>Membership:</strong> €3,000-5,000/year corporate</p>
              <p><strong>Benefits:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Access to BVB working groups</li>
                <li>• Certification training</li>
                <li>• Member directory listing</li>
                <li>• Policy advocacy platform</li>
              </ul>
              <p className="text-emerald-700 font-semibold">Recommendation: Join in Month 7 once first Swedish project secured</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Related Resources on This Platform:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link href="/resources/material-passport" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              <DocumentTextIcon className="w-4 h-4" />
              Material Passport Template →
            </Link>
            <Link href="/resources/supplier-contracts" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              <DocumentTextIcon className="w-4 h-4" />
              Supplier Contract Clauses →
            </Link>
            <Link href="/fire-safety" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              <DocumentTextIcon className="w-4 h-4" />
              Fire Safety Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ArrowDownTrayIcon className="w-8 h-8 text-emerald-600" />
          Download Templates
        </h2>
        <p className="text-gray-700 mb-6">
          Ready-to-use templates for BVB equivalency documentation (coming soon)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-emerald-500 transition">
            <DocumentTextIcon className="w-10 h-10 text-emerald-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">BVB Equivalency Template</h3>
            <p className="text-xs text-gray-600 mb-3">Complete 10-section template (Word format)</p>
            <button className="text-sm bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed" disabled>
              Coming Soon
            </button>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-emerald-500 transition">
            <DocumentTextIcon className="w-10 h-10 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Example: Oak Desk 1960s</h3>
            <p className="text-xs text-gray-600 mb-3">Filled example documentation (PDF)</p>
            <button className="text-sm bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed" disabled>
              Coming Soon
            </button>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-emerald-500 transition">
            <DocumentTextIcon className="w-10 h-10 text-purple-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">IVL Validation Request</h3>
            <p className="text-xs text-gray-600 mb-3">Letter template for IVL review (Word)</p>
            <button className="text-sm bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed" disabled>
              Coming Soon
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Templates will be available for download once finalized.
            <Link href="/about" className="text-emerald-600 hover:underline ml-1">
              Contact us for early access →
            </Link>
          </p>
        </div>
      </section>
        </div>

        {/* Sidebar - Related Resources */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <RelatedResources sections={bvbSources} />
          </div>
        </div>
      </div>
    </div>
  );
}
