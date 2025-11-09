'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function MaterialPassportPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [expandedSupplier, setExpandedSupplier] = useState<string | null>(null);
  const [expandedProjectType, setExpandedProjectType] = useState<string | null>(null);

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const passportSections = [
    {
      id: 1,
      title: '1. Product Identification',
      icon: '🏷️',
      purpose: 'Unique identification enabling traceability throughout project lifecycle',
      required: [
        'Category (chair, table, desk, etc.)',
        'Quantity',
        'Manufacturer (if known)',
        'Model/SKU (if applicable)',
        'Approximate age/era',
        'Unique identifier (supplier item code)'
      ],
      example: {
        category: 'Lounge Chair, upholstered',
        quantity: '50 units',
        manufacturer: 'Unknown (Scandinavian, likely Danish)',
        model: 'N/A',
        age: '1960s-1970s (mid-century modern)',
        identifier: 'YLLW-LC-1960-001'
      },
      commonMistakes: [
        'Vague category ("furniture" instead of "upholstered lounge chair")',
        'No unique identifier (prevents tracking in multi-supplier projects)',
        'Missing quantity (critical for procurement planning)'
      ]
    },
    {
      id: 2,
      title: '2. Provenance & Source',
      icon: '📍',
      purpose: 'Establishes legitimacy, legal ownership, and circular narrative for marketing',
      required: [
        'Original source (hotel, office, residential)',
        'Source location (city, country)',
        'Acquisition date',
        'Previous use context',
        'Chain of custody documentation'
      ],
      example: {
        source: 'Office liquidation',
        location: 'Stockholm, Sweden',
        date: 'March 2023',
        context: 'Executive office furniture from 1970s Swedish bank headquarters, building demolished for redevelopment',
        custody: 'YLLW Factory purchase invoice #2023-0342'
      },
      commonMistakes: [
        '"Source unknown" (red flag for authorities, suggests waste stream not product stream)',
        'No acquisition documentation (legal requirement to prove commercial transaction)',
        'Vague location (prevents lifecycle carbon calculation accuracy)'
      ]
    },
    {
      id: 3,
      title: '3. Material Composition',
      icon: '🧬',
      purpose: 'Chemical safety assessment, fire risk evaluation, end-of-life recyclability',
      required: [
        'Frame material (wood species, metal type)',
        'Padding/cushioning material',
        'Upholstery fabric (fiber content)',
        'Hardware (screws, springs, legs)',
        'Surface finishes/coatings',
        'Estimated material weights'
      ],
      example: {
        frame: 'Solid beech hardwood, ~8 kg',
        padding: 'Polyurethane foam (density unknown, good condition), ~1.2 kg',
        upholstery: '100% wool fabric, cognac leather armrests, ~0.8 kg',
        hardware: 'Steel springs and screws, ~0.3 kg',
        finish: 'Oil-based wood stain (legs), water-based leather treatment',
        totalWeight: '~10.3 kg per unit'
      },
      commonMistakes: [
        'Generic materials list ("wood, fabric") without specifics',
        'No weight estimates (needed for carbon calculations)',
        'Ignoring surface finishes (can contain hazardous chemicals)'
      ]
    },
    {
      id: 4,
      title: '4. Fire Safety Certification',
      icon: '🔥',
      purpose: 'BBR compliance, insurance approval, authority acceptance',
      required: [
        'Fire test standard (EN 1021-1/2, EN 13501-1, BS 5852)',
        'Test result/classification',
        'Testing laboratory (RISE, SP, accredited lab)',
        'Certificate number and date',
        'Treatment method (if applicable)',
        'Treatment certificate validity period'
      ],
      example: {
        standard: 'EN 1021-2 (match test)',
        result: 'PASS - no sustained ignition',
        lab: 'RISE Fire Research, Borås, Sweden',
        certificate: 'RISE-FS-2023-8847',
        date: 'Tested June 15, 2023',
        treatment: 'Bio-based fire retardant spray applied by YLLW Factory',
        validity: '5-10 years per manufacturer spec (Flameguard Nordic AB)'
      },
      commonMistakes: [
        'Claiming "fire safe" without test report (unacceptable to authorities)',
        'No treatment validity period (inspector question: "How long does it last?")',
        'Missing lab accreditation verification (must be ISO 17025 accredited)'
      ]
    },
    {
      id: 5,
      title: '5. Chemical Safety',
      icon: '⚗️',
      purpose: 'REACH compliance, indoor air quality, health and safety',
      required: [
        'REACH Annex XVII compliance declaration',
        'Hazardous substance screening (lead, asbestos, PCBs, formaldehyde)',
        'VOC emission data (if available)',
        'Heavy metal screening (for pre-1980 items)',
        'Treatment chemical safety data sheets (if treated)'
      ],
      example: {
        reach: 'COMPLIANT - No Annex XVII substances detected',
        screening: 'Lead paint: NEGATIVE (XRF test), Asbestos: N/A (no textile insulation), PCBs: N/A (no electrical components)',
        voc: 'Not tested (1960s furniture with natural materials, low VOC risk)',
        heavyMetals: 'Surface finish tested: No lead, chromium VI, or cadmium detected',
        treatment: 'Fire retardant SDS: Flameguard Nordic AB, bio-based formula, zero VOC, non-toxic'
      },
      commonMistakes: [
        'No hazardous screening for pre-1980 items (regulatory risk)',
        '"Assumed safe because old" (not acceptable without testing)',
        'Missing treatment chemical SDS (required for installer safety)'
      ]
    },
    {
      id: 6,
      title: '6. Structural Durability & Warranty',
      icon: '🔧',
      purpose: 'Performance assurance, contractor confidence, client risk mitigation',
      required: [
        'Visual inspection report (condition grading)',
        'Frame integrity assessment',
        'Estimated remaining lifespan',
        'Refurbishment performed (if any)',
        'Warranty type and duration',
        'Warranty coverage details'
      ],
      example: {
        inspection: 'Grade B+ (Very Good) - minor wear, professionally refurbished',
        frame: 'Excellent - solid beech, no cracks/loose joints, re-glued and reinforced',
        lifespan: '10-15 years remaining (commercial hospitality use)',
        refurbishment: 'YLLW Factory professional refurbishment: Frame repair, new foam padding, reupholstered in new wool fabric, legs refinished',
        warranty: '3-year commercial warranty',
        coverage: 'Frame structural integrity, upholstery durability (normal hospitality wear), fabric colorfastness. Excludes: misuse, non-approved cleaners, modifications.'
      },
      commonMistakes: [
        'No condition grading (subjective "good condition" insufficient)',
        'Warranty <2 years (red flag for quality)',
        'Vague warranty terms (must specify what is/isn\'t covered)'
      ]
    },
    {
      id: 7,
      title: '7. Refurbishment Process',
      icon: '🛠️',
      purpose: 'Quality assurance, demonstrates professional handling, adds value narrative',
      required: [
        'Cleaning method and products',
        'Frame repairs performed',
        'Upholstery/padding replacement (if applicable)',
        'Refinishing methods and materials',
        'Quality control checks',
        'Before/after photos'
      ],
      example: {
        cleaning: 'Steam cleaning + mild pH-neutral detergent, OEKO-TEX certified cleaning agents',
        frameRepair: 'Joints re-glued with D3 wood glue, corner blocks reinforced, legs stabilized',
        upholstery: 'Original foam replaced with new CertiPUR-certified polyurethane foam (35 kg/m³ density), reupholstered in Kvadrat Steelcut Trio wool (100% wool, OEKO-TEX Standard 100)',
        refinishing: 'Legs sanded and refinished with Rubio Monocoat Zero VOC oil (natural hardwax oil)',
        qc: '5-point inspection: frame stability, upholstery tension, fire treatment verification, finish quality, final dimensions',
        photos: 'Available in project documentation folder'
      },
      commonMistakes: [
        '"Professionally refurbished" without details (insufficient for quality assessment)',
        'No specification of replacement materials (can introduce non-compliant components)',
        'Missing QC process (suggests inconsistent quality)'
      ]
    },
    {
      id: 8,
      title: '8. Sustainability & Lifecycle Data',
      icon: '🌱',
      purpose: 'Environmental certification support, client ESG reporting, marketing narrative',
      required: [
        'Embodied carbon savings vs. new (calculation)',
        'Total weight (for transport emissions)',
        'Expected lifespan extension (years)',
        'End-of-life plan (recyclability)',
        'Circular economy contribution metrics',
        'LCA data (if available from supplier)'
      ],
      example: {
        carbonSavings: '85% reduction = 47 kg CO2e saved per chair (52 kg new production - 5 kg refurbishment)',
        weight: '10.3 kg per unit',
        lifespanExtension: '+15 years (avoided landfill 2023, usable until ~2038)',
        endOfLife: 'Beech frame: recyclable/compostable, Steel hardware: recyclable, Wool fabric: biodegradable, Foam: thermal recycling',
        metrics: '515 kg CO2e saved (50 chairs), 1 ton material kept in use, local supply chain (200 km vs. 2,000 km for Asian new)',
        lca: 'Not available (YLLW Factory uses simplified carbon calculator based on IVL Environmental Institute factors)'
      },
      commonMistakes: [
        'No carbon calculation (missed marketing opportunity)',
        'Exaggerated savings without methodology (greenwashing risk)',
        'Ignoring transport emissions (can offset savings if long-distance sourcing)'
      ]
    },
    {
      id: 9,
      title: '9. Supplier Information & Insurance',
      icon: '🏢',
      purpose: 'Legal compliance, liability clarity, contractor confidence',
      required: [
        'Supplier company name and organization number',
        'Contact person and details',
        'Business registration verification',
        'Professional liability insurance details',
        'Product liability insurance coverage',
        'Certifications/memberships (if any)'
      ],
      example: {
        company: 'YLLW Factory AB',
        orgNumber: '559284-1234 (Swedish Companies Registration Office)',
        contact: 'Johan Andersson, Procurement Manager - johan@yllwfactory.se - +46 70 123 4567',
        businessReg: 'VAT registered, active status verified 2024',
        liability: 'Professional liability: Trygg-Hansa, policy #PL-2024-8847, coverage €2M',
        productLiability: 'Product liability: included in professional policy, €1M per incident',
        certifications: 'Member: Sweden Green Building Council (SGBC), RE:Source circular network'
      },
      commonMistakes: [
        'Private seller (not business entity - regulatory red flag)',
        'No insurance verification (liability risk for contractor/client)',
        'Missing contact details (delays during project if questions arise)'
      ]
    },
    {
      id: 10,
      title: '10. Pricing, Delivery & Project Details',
      icon: '💰',
      purpose: 'Commercial terms, logistics planning, contract integration',
      required: [
        'Unit price (excluding VAT)',
        'Total price for quantity',
        'Lead time from order to delivery',
        'Delivery terms (Incoterms)',
        'Payment terms',
        'Minimum order quantity (if applicable)'
      ],
      example: {
        unitPrice: '3,200 SEK per chair (excluding 25% Swedish VAT)',
        totalPrice: '160,000 SEK for 50 chairs',
        leadTime: '16 weeks from order confirmation (sourcing: 6 weeks, refurbishment: 8 weeks, QC & delivery: 2 weeks)',
        delivery: 'DDP (Delivered Duty Paid) to Stockholm project site, ground floor delivery included',
        payment: '30% deposit at order, 40% at production completion (photos provided), 30% net 14 days after delivery',
        moq: '20 chairs minimum (batch consistency for fire testing)',
        notes: 'Price includes: Fire retardant treatment, EN 1021-2 testing (batch test for 50 units), 3-year warranty, material passport documentation'
      },
      commonMistakes: [
        'No lead time clarity (can delay entire project)',
        'Hidden costs (testing, treatment, documentation fees)',
        'Vague delivery terms (who pays for transport and insurance?)'
      ]
    }
  ];

  const supplierCapabilities = [
    {
      id: 'yllw',
      name: 'YLLW Factory',
      logo: '🟡',
      tier: 'TIER 1',
      rating: 'FULL PASSPORTS',
      score: '10/10 sections',
      description: 'Gold standard for circular hotel furniture in Sweden. Complete documentation, professional refurbishment, hotel-grade quality.',
      strengths: [
        'Complete 10-section material passports for all products',
        'In-house fire testing coordination (EN 1021-1/2)',
        'Professional photo documentation',
        'Embodied carbon calculations using IVL factors',
        '3-year commercial warranty standard',
        'Project-specific batch sourcing'
      ],
      weaknesses: [
        'Higher pricing (justified by quality and documentation)',
        '16-20 week lead times (thorough refurbishment process)',
        'Minimum order quantities (20+ units for batch consistency)'
      ],
      bestFor: 'Luxury and upper-midscale hotels requiring full BBR compliance and building authority approval',
      contact: 'johan@yllwfactory.se',
      website: 'https://yllwfactory.se'
    },
    {
      id: 'input',
      name: 'Input Interiör',
      logo: '🔵',
      tier: 'TIER 1',
      rating: 'FULL PASSPORTS',
      score: '10/10 sections',
      description: 'Contract-grade reused furniture specialist. Strong documentation, faster lead times than YLLW.',
      strengths: [
        'Complete material passports (matches YLLW quality)',
        'Faster lead times (10-14 weeks typical)',
        'Strong fire certification coordination',
        'Göteborg-based (good for west coast projects)',
        'Competitive pricing',
        'Flexible MOQs (as low as 10 units)'
      ],
      weaknesses: [
        'Smaller inventory than YLLW (less variety)',
        'Slightly less established hotel track record',
        'Fire retardant treatment outsourced (vs. YLLW in-house)'
      ],
      bestFor: 'Midscale hotels and faster-timeline projects in Göteborg region',
      contact: 'info@inputinterior.se',
      website: 'https://inputinterior.se'
    },
    {
      id: 'rekomo',
      name: 'Rekomo',
      logo: '🟢',
      tier: 'TIER 1',
      rating: 'GOOD PASSPORTS',
      score: '8/10 sections',
      description: 'Building materials and furniture hybrid. Strong on structural items, weaker on sustainability data.',
      strengths: [
        'Excellent provenance documentation (known source buildings)',
        'Strong structural/engineering assessments',
        'Complete fire and chemical safety documentation',
        'Best-in-class for building materials (doors, windows, fixtures)',
        'Fast delivery (local Stockholm inventory)'
      ],
      weaknesses: [
        'Limited embodied carbon calculations (missing Section 8 detail)',
        'No formal LCA data',
        'Furniture warranty only 2 years (vs. 3 for YLLW/Input)'
      ],
      bestFor: 'Building materials and structural reuse; furniture for budget projects where LCA data not critical',
      contact: 'info@rekomo.se',
      website: 'https://rekomo.se'
    },
    {
      id: 'rp',
      name: 'RP (Resource Preservers)',
      logo: '🟣',
      tier: 'TIER 2',
      rating: 'PARTIAL PASSPORTS',
      score: '5/10 sections',
      description: 'Project-specific sourcing specialists. Can deliver documentation if required but not standard practice.',
      strengths: [
        'Flexible sourcing (can find unique/vintage items)',
        'Good provenance storytelling (marketing value)',
        'Competitive pricing',
        'Works with designers on custom refurbishment'
      ],
      weaknesses: [
        'Incomplete fire certification (often "can get it" but not proactive)',
        'No chemical safety screening unless requested',
        'Minimal sustainability data (no carbon calculations)',
        'Documentation quality inconsistent project-to-project'
      ],
      bestFor: 'Boutique hotels with design focus, back-of-house furniture, projects where client accepts documentation gaps',
      contact: 'kontakt@rp.se',
      website: 'https://resourcepreservers.se'
    },
    {
      id: 'kompanjonen',
      name: 'Kompanjonen',
      logo: '🟠',
      tier: 'TIER 2',
      rating: 'MINIMAL PASSPORTS',
      score: '3/10 sections',
      description: 'Volume seller, minimal documentation. Suitable for low-risk applications only.',
      strengths: [
        'Large inventory (immediate availability)',
        'Lowest pricing',
        'Good for back-of-house/staff areas',
        'No MOQs (can buy 1-2 pieces)'
      ],
      weaknesses: [
        'Minimal documentation (basic invoice + photos)',
        'No fire certification coordination',
        'No chemical screening',
        'No warranty or warranty <1 year',
        'Quality inconsistent (no formal QC process)'
      ],
      bestFor: 'Back-of-house furniture, budget projects, pilot/testing reuse concept before full commitment',
      contact: 'info@kompanjonen.se',
      website: 'https://kompanjonen.se'
    }
  ];

  const projectTypes = [
    {
      id: 'luxury',
      name: 'Luxury Hotel (100+ rooms)',
      icon: '⭐',
      requirement: 'COMPLETE 10-SECTION PASSPORTS REQUIRED',
      description: 'High-end properties with strict quality standards, full BBR compliance, conservative building authorities.',
      sections: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      suppliers: ['YLLW Factory (primary)', 'Input Interiör (alternative)'],
      rationale: [
        'Building authorities require complete documentation for high-profile projects',
        'Insurance companies enforce strict fire/safety requirements',
        'Client ESG reporting needs robust sustainability data',
        'Brand reputation risk demands quality assurance (warranties, certifications)',
        'Contractor liability concerns = need full supplier insurance/documentation'
      ],
      example: 'Blique by Nobis Stockholm - YLLW Factory provided complete 10-section passports for all 249 furniture pieces, enabled €120k savings and 3.6 tons CO2e reduction'
    },
    {
      id: 'boutique',
      name: 'Boutique Hotel (50-100 rooms)',
      icon: '✨',
      requirement: 'SIMPLIFIED 6-SECTION ACCEPTABLE',
      description: 'Design-focused midscale properties, moderate documentation requirements, some flexibility from authorities.',
      sections: [1, 3, 4, 5, 6, 9],
      suppliers: ['Input Interiör (recommended)', 'YLLW Factory', 'Rekomo (building materials)'],
      rationale: [
        'Sections 1, 3, 4, 5 = MANDATORY (product ID, materials, fire safety, chemical safety)',
        'Section 6 = STRONGLY RECOMMENDED (durability/warranty for client confidence)',
        'Section 9 = MANDATORY (supplier legal info)',
        'Sections 2, 7, 8, 10 = NICE TO HAVE but can be simplified:',
        '  - Provenance: Brief story sufficient (not full chain of custody)',
        '  - Refurbishment: Summary sufficient (not detailed process)',
        '  - Sustainability: Simple carbon estimate (not full LCA)',
        '  - Pricing: Can be in separate commercial proposal'
      ],
      example: 'Downtown Camper Stockholm - Used simplified passports for back-of-house, full passports only for guest-facing areas'
    },
    {
      id: 'budget',
      name: 'Budget/Pilot Project',
      icon: '🚀',
      requirement: 'MINIMUM 3-SECTION (FIRE, CHEMICAL, SUPPLIER)',
      description: 'Testing circular concept, tight budget, accepting higher risk, back-of-house focus.',
      sections: [4, 5, 9],
      suppliers: ['Rekomo', 'RP', 'Input Interiör (if budget allows)'],
      rationale: [
        'Section 4 (Fire Safety) = ABSOLUTELY MANDATORY (legal requirement for hotels)',
        'Section 5 (Chemical Safety) = MANDATORY (health/safety liability)',
        'Section 9 (Supplier Info) = MANDATORY (legal/insurance requirement)',
        'Acceptable ONLY for:',
        '  - Back-of-house furniture (offices, staff areas, storage)',
        '  - Pilot projects (5-10 rooms to test concept)',
        '  - Properties with high risk tolerance and supportive building inspector',
        'NOT ACCEPTABLE for:',
        '  - Guest rooms or public areas',
        '  - Projects seeking green certifications',
        '  - Conservative property owners or strict municipalities'
      ],
      example: 'Hotel Pigalle Göteborg pilot (2019) - Used minimal passports for 8 back-of-house items, proved concept, then upgraded to full passports for 60-room expansion (2021)'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <ClipboardDocumentCheckIcon className="w-10 h-10 text-emerald-600" />
          <h1 className="text-4xl font-bold text-gray-900">Material Passport Guide</h1>
        </div>
        <p className="text-xl text-gray-600 mb-4">
          Complete documentation framework for reused furniture and materials in Swedish hotel projects
        </p>
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border-l-4 border-emerald-600 p-6 rounded-lg">
          <div className="flex items-start">
            <SparklesIcon className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>The material passport is your single most important tool</strong> for securing building authority approval,
                satisfying insurance requirements, and enabling contractor confidence in circular furniture projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded border border-emerald-200">
                  <p className="font-semibold text-emerald-900 mb-1">🏛️ For Authorities</p>
                  <p className="text-gray-700">Demonstrates BBR compliance, fire safety, and chemical safety</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-1">🛡️ For Insurance</p>
                  <p className="text-gray-700">Proves product legitimacy, safety testing, and supplier liability coverage</p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-1">🤝 For Contractors</p>
                  <p className="text-gray-700">Provides warranty assurance, installation specifications, and risk clarity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is a Material Passport? */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Material Passport?</h2>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-700 mb-4">
            A <strong>Material Passport</strong> is a comprehensive documentation package that travels with a reused product
            throughout its lifecycle, providing all information needed for regulatory approval, installation, maintenance, and
            end-of-life management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
              <h3 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                What It Includes
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Product identification & provenance</li>
                <li>• Material composition & weight</li>
                <li>• Fire safety & chemical safety certification</li>
                <li>• Structural integrity & warranty</li>
                <li>• Refurbishment process documentation</li>
                <li>• Sustainability/embodied carbon data</li>
                <li>• Supplier legal information & insurance</li>
                <li>• Commercial terms & delivery details</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">Why It Matters</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Legal Requirement:</strong> Swedish building code (BBR) requires documentation for all building products</li>
                <li>• <strong>Insurance Approval:</strong> Insurers demand proof of fire safety and supplier liability</li>
                <li>• <strong>Warranty Protection:</strong> Clear documentation of condition and coverage prevents disputes</li>
                <li>• <strong>ESG Reporting:</strong> Enables calculation of carbon savings and circular metrics for client sustainability reporting</li>
                <li>• <strong>Marketing Value:</strong> Provenance storytelling and environmental impact data for guest communication</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <p className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
              <ExclamationTriangleIcon className="w-5 h-5" />
              The Reused Materials Documentation Gap
            </p>
            <p className="text-sm text-gray-700">
              New furniture comes with automatic documentation (manufacturer specs, fire certificates, warranties). Reused furniture
              <strong> has none of this by default</strong>. The material passport <strong>recreates</strong> this documentation layer,
              making reused products <strong>equivalent to new</strong> in the eyes of authorities, insurers, and contractors.
            </p>
          </div>
        </div>
      </section>

      {/* 10-Section Template */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">10-Section Template (Industry Standard)</h2>
        <p className="text-gray-600 mb-6">
          The following template is used by leading Swedish circular suppliers (YLLW Factory, Input Interiör, Rekomo).
          Click each section to see required fields, examples, and common mistakes.
        </p>

        <div className="space-y-3">
          {passportSections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-md border-2 border-gray-200 hover:border-emerald-300 transition">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{section.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{section.purpose}</p>
                  </div>
                </div>
                <span className="text-2xl text-emerald-600 font-bold">{expandedSection === section.id ? '−' : '+'}</span>
              </button>

              {expandedSection === section.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    {/* Required Fields */}
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-900 mb-2 text-sm">Required Fields:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {section.required.map((field, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircleIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{field}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example */}
                    <div className="bg-emerald-50 p-4 rounded border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3 text-sm">Example: 1960s Lounge Chair from YLLW Factory</h4>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        {Object.entries(section.example).map(([key, value], idx) => (
                          <div key={idx} className="bg-white p-2 rounded">
                            <span className="font-semibold text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>{' '}
                            <span className="text-gray-700">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Common Mistakes */}
                    <div className="bg-red-50 p-4 rounded border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2 text-sm flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        Common Mistakes to Avoid:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {section.commonMistakes.map((mistake, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-600 mr-2">✗</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Supplier Capability Assessment */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Supplier Capability Assessment</h2>
        <p className="text-gray-600 mb-6">
          Not all circular suppliers provide equal documentation quality. This assessment helps you select the right supplier
          for your project's documentation requirements.
        </p>

        <div className="space-y-4">
          {supplierCapabilities.map((supplier) => (
            <div key={supplier.id} className={`bg-white rounded-lg shadow-md border-2 ${
              supplier.tier === 'TIER 1' ? 'border-emerald-200' : 'border-blue-200'
            }`}>
              <button
                onClick={() => setExpandedSupplier(expandedSupplier === supplier.id ? null : supplier.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{supplier.logo}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{supplier.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        supplier.tier === 'TIER 1' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {supplier.tier}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        supplier.rating.includes('FULL') ? 'bg-green-100 text-green-800' :
                        supplier.rating.includes('GOOD') ? 'bg-yellow-100 text-yellow-800' :
                        supplier.rating.includes('PARTIAL') ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {supplier.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{supplier.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Documentation Score: {supplier.score}</p>
                  </div>
                </div>
                <span className={`text-2xl font-bold ${
                  supplier.tier === 'TIER 1' ? 'text-emerald-600' : 'text-blue-600'
                }`}>
                  {expandedSupplier === supplier.id ? '−' : '+'}
                </span>
              </button>

              {expandedSupplier === supplier.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
                      <h4 className="font-semibold text-emerald-900 mb-2 text-sm flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5" />
                        Strengths
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {supplier.strengths.map((strength, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-600 mr-2">•</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                      <h4 className="font-semibold text-orange-900 mb-2 text-sm flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        Considerations
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {supplier.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-600 mr-2">•</span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-blue-900 mb-1 text-sm">Best For:</p>
                    <p className="text-sm text-gray-700">{supplier.bestFor}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between bg-gray-50 p-3 rounded">
                    <div>
                      <p className="text-xs text-gray-600">Contact</p>
                      <p className="text-sm font-semibold text-gray-900">{supplier.contact}</p>
                    </div>
                    {supplier.website && (
                      <a
                        href={supplier.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-l-4 border-emerald-600 p-6 rounded">
          <p className="font-bold text-emerald-900 mb-2">Supplier Selection Strategy:</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Luxury/High-Profile Projects:</strong> YLLW Factory or Input Interiör only (complete documentation non-negotiable)</li>
            <li>• <strong>Midscale Projects:</strong> Input Interiör (best value/quality balance) or Rekomo (if building materials focus)</li>
            <li>• <strong>Back-of-House/Pilot:</strong> Rekomo, RP, or Kompanjonen acceptable (lower documentation requirements)</li>
            <li>• <strong>Mixed Strategy:</strong> Use YLLW/Input for guest areas, Rekomo/RP for back-of-house = optimize cost while maintaining compliance where critical</li>
          </ul>
        </div>
      </section>

      {/* Use Cases by Project Type */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases by Project Type</h2>
        <p className="text-gray-600 mb-6">
          Documentation requirements scale with project complexity, authority scrutiny, and client risk tolerance.
        </p>

        <div className="space-y-4">
          {projectTypes.map((project) => (
            <div key={project.id} className={`bg-white rounded-lg shadow-md border-2 ${
              project.id === 'luxury' ? 'border-purple-200' :
              project.id === 'boutique' ? 'border-blue-200' :
              'border-green-200'
            }`}>
              <button
                onClick={() => setExpandedProjectType(expandedProjectType === project.id ? null : project.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h3>
                    <p className={`text-sm font-semibold ${
                      project.id === 'luxury' ? 'text-purple-700' :
                      project.id === 'boutique' ? 'text-blue-700' :
                      'text-green-700'
                    }`}>
                      {project.requirement}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                  </div>
                </div>
                <span className={`text-2xl font-bold ${
                  project.id === 'luxury' ? 'text-purple-600' :
                  project.id === 'boutique' ? 'text-blue-600' :
                  'text-green-600'
                }`}>
                  {expandedProjectType === project.id ? '−' : '+'}
                </span>
              </button>

              {expandedProjectType === project.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Required Sections:</h4>
                      <div className="flex flex-wrap gap-2">
                        {passportSections.map((section) => (
                          <span
                            key={section.id}
                            className={`px-3 py-1 rounded text-xs font-semibold ${
                              project.sections.includes(section.id)
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-gray-200 text-gray-500'
                            }`}
                          >
                            {section.icon} {section.title}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-900 mb-2 text-sm">Recommended Suppliers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.suppliers.map((supplier, idx) => (
                          <span key={idx} className="bg-white border border-blue-300 text-blue-800 px-3 py-1 rounded text-sm">
                            {supplier}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
                      <h4 className="font-semibold text-emerald-900 mb-2 text-sm">Rationale:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {project.rationale.map((reason, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-600 mr-2">•</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded border border-purple-200">
                      <p className="font-semibold text-purple-900 mb-1 text-sm">Real-World Example:</p>
                      <p className="text-sm text-gray-700">{project.example}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Workflow */}
      <section className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Workflow</h2>
        <p className="text-gray-600 mb-6">
          Step-by-step process for requesting, reviewing, and integrating material passports into your project
        </p>

        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'Supplier Selection & RFQ',
              description: 'Include material passport requirement in RFQ',
              details: [
                'Specify required sections (use project type guide above)',
                'Request sample passports from previous projects',
                'Clarify timeline for documentation delivery (should match furniture delivery)',
                'Confirm documentation included in price or separate fee'
              ]
            },
            {
              step: 2,
              title: 'Initial Documentation Review',
              description: 'Evaluate completeness before placing order',
              details: [
                'Check all required sections present',
                'Verify fire certification is current (<5 years old)',
                'Confirm supplier insurance coverage amounts',
                'Identify any gaps requiring clarification'
              ]
            },
            {
              step: 3,
              title: 'Building Authority Pre-Review',
              description: 'Submit sample passports during förhandsbesked phase',
              details: [
                'Include 2-3 representative material passports in pre-application',
                'Use to demonstrate documentation quality to building inspector',
                'Address any inspector questions/concerns before full order',
                'Revise passport template based on inspector feedback'
              ]
            },
            {
              step: 4,
              title: 'Order Confirmation & Documentation Finalization',
              description: 'Lock in documentation requirements in purchase agreement',
              details: [
                'Incorporate material passport delivery as contractual requirement',
                'Specify format (PDF, Excel, both)',
                'Set deadline (typically 2 weeks before furniture delivery for review)',
                'Define acceptance criteria (what constitutes "complete" passport)'
              ]
            },
            {
              step: 5,
              title: 'Delivery & Quality Control',
              description: 'Verify delivered items match documentation',
              details: [
                'Physical inspection against passport specifications',
                'Photo documentation of delivered condition',
                'Fire treatment certificate verification (if applicable)',
                'Archive passports with project building permit documentation'
              ]
            }
          ].map((workflow, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold flex-shrink-0">
                  {workflow.step}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{workflow.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{workflow.description}</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {workflow.details.map((detail, didx) => (
                      <li key={didx} className="flex items-start">
                        <CheckCircleIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Center */}
      <section className="bg-white rounded-lg shadow-md p-8 border-2 border-emerald-300">
        <div className="flex items-center gap-3 mb-6">
          <ArrowDownTrayIcon className="w-8 h-8 text-emerald-600" />
          <h2 className="text-3xl font-bold text-gray-900">Download Center</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Downloadable templates and resources for implementing material passports in your projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Material Passport Template (Excel)', format: 'XLSX', description: '10-section template with formulas and validation' },
            { name: 'Material Passport Template (Word)', format: 'DOCX', description: 'Formatted document template for PDF export' },
            { name: 'Supplier RFQ Language', format: 'DOCX', description: 'Copy-paste text for requesting passports in RFQs' },
            { name: 'Quick Reference Checklist', format: 'PDF', description: '1-page checklist for reviewing passport completeness' }
          ].map((template, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-300 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DocumentTextIcon className="w-8 h-8 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{template.name}</p>
                  <p className="text-xs text-gray-600">{template.description}</p>
                </div>
              </div>
              <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded font-semibold text-sm cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> Downloadable templates are currently in development. For immediate needs, contact Fyra at{' '}
            <a href="mailto:hello@fyra.se" className="underline font-semibold hover:text-blue-700">hello@fyra.se</a> for
            sample material passports from completed projects.
          </p>
        </div>
      </section>

      {/* Cross-References */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
          <p className="text-sm text-emerald-900">
            <strong>Related:</strong> For BVB equivalency documentation for reused materials,{' '}
            <Link href="/bvb-equivalency" className="underline font-semibold hover:text-emerald-700">
              see the BVB Equivalency Guide →
            </Link>
          </p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-blue-900">
            <strong>Related:</strong> For fire safety certification requirements,{' '}
            <Link href="/fire-safety" className="underline font-semibold hover:text-blue-700">
              see the Fire Safety Guide →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
