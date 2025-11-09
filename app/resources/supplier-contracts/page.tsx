'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  DocumentTextIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  BanknotesIcon,
  TruckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function SupplierContractPage() {
  const [expandedClause, setExpandedClause] = useState<number | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const contractClauses = [
    {
      id: 1,
      title: 'Performance-Based Warranty',
      icon: '🛡️',
      category: 'WARRANTY & LIABILITY',
      criticality: 'CRITICAL',
      purpose: 'Shifts focus from product age to performance standards, enabling reused materials with equivalent warranties to new',
      standardLanguage: `"Supplier warrants that Products shall:
(a) Meet specified performance requirements for minimum [2-3] years from installation
(b) Be free from defects in materials and workmanship
(c) Comply with all applicable BBR fire safety and chemical safety standards
(d) Perform equivalently to new products of similar specification

Supplier liability extends to:
- Structural integrity (frames, joints, load-bearing components)
- Fire safety treatment effectiveness (minimum 5 years)
- Fabric/upholstery durability under normal hotel use
- Compliance with documentation provided in Material Passport

Warranty EXCLUDES:
- Misuse, unauthorized modifications, or cleaning with non-approved products
- Normal wear and tear (fading, minor scratching)
- Damage from Client's contractors during installation
- Acts of God, vandalism, or accidents"`,
      keyProvisions: [
        'Duration: Minimum 2 years commercial warranty (3 years preferred for Tier 1 projects)',
        'Performance-based standard (not age-based) = reused items judged same as new',
        'Fire treatment longevity explicitly covered (5 years minimum)',
        'Clear exclusions prevent warranty disputes',
        'Remedies: Repair, replacement, or pro-rata refund at Supplier discretion'
      ],
      negotiationTips: [
        'Request 3-year warranty for luxury projects (YLLW Factory standard)',
        'Clarify "normal hotel use" definition (200+ nights/year occupancy)',
        'Specify response time for warranty claims (48-hour acknowledgment, 2-week resolution)',
        'Include warranty transfer clause if Client sells property'
      ],
      redFlags: [
        'Warranty <2 years (insufficient for hotel lifecycle)',
        'No fire treatment coverage (critical risk)',
        '"As-is" or "no warranty" clauses (unacceptable for guest-facing items)',
        'Supplier caps total liability below product cost (inadequate protection)'
      ]
    },
    {
      id: 2,
      title: 'Risk Allocation & Liability',
      icon: '⚖️',
      category: 'RISK & LIABILITY',
      criticality: 'CRITICAL',
      purpose: 'Clearly defines who bears risk if reused materials fail, preventing disputes and ensuring insurance coverage',
      standardLanguage: `"SUPPLIER LIABILITY:
Supplier shall be liable for:
(a) Product quality defects and performance failures
(b) Documentation accuracy (Material Passport, test reports, certifications)
(c) Compliance with specified standards (BBR, REACH, fire safety)
(d) Delivery delays beyond agreed lead times
(e) Product liability claims arising from supplier-caused defects

Supplier maintains minimum insurance:
- Product liability: €1M per incident, €5M aggregate
- Professional liability: €2M (for documentation/certification claims)

CLIENT RISK:
Client accepts risk for:
(a) Design suitability (item selection for intended use)
(b) Installation quality by Client's contractors
(c) Changes to building use or occupancy type post-installation

SHARED RISK (Mitigated via Quality Control Protocol):
(a) Premature performance degradation beyond reasonable prediction
(b) Unforeseen regulatory changes affecting already-installed products

LIMITATION OF LIABILITY:
Except for gross negligence or willful misconduct, Supplier's total liability shall not exceed [100-150%] of Product purchase price.

Third-party claims (guest injury, property damage) covered by Supplier's product liability insurance per Exhibit B."`,
      keyProvisions: [
        'Supplier product liability insurance mandatory (€1M minimum)',
        'Clear delineation: Supplier = product quality, Client = design/installation',
        'Shared risk limited to unforeseeable events (mitigated via QC)',
        'Liability cap reasonable (100-150% of price) but not below product cost',
        'Third-party claims covered by insurance (guest safety critical)'
      ],
      negotiationTips: [
        'Verify insurance coverage with certificate (not just supplier statement)',
        'Request Client named as additional insured on policy',
        'For luxury projects, negotiate higher liability cap (200% of price)',
        'Include force majeure clause for pandemic/war (exclude supplier performance issues)',
        'Specify arbitration vs. litigation (arbitration typically faster/cheaper in Sweden)'
      ],
      redFlags: [
        'No product liability insurance (deal-breaker)',
        'Liability cap below product cost (insufficient)',
        '"Client assumes all risk" clauses (unacceptable)',
        'Supplier disclaims responsibility for documentation accuracy (defeats material passport purpose)'
      ]
    },
    {
      id: 3,
      title: 'Quality Control Protocol',
      icon: '✅',
      category: 'QUALITY & INSPECTION',
      criticality: 'HIGH',
      purpose: 'Structured inspection process ensures delivered items match documentation and meet quality standards',
      standardLanguage: `"QUALITY CONTROL CHECKPOINTS:

Phase 1: Pre-Production Inspection (Supplier facility visit)
- Timing: Within 2 weeks of order confirmation
- Scope: Review sample items, assess refurbishment process, verify fire treatment capability
- Attendees: Client/Fyra representative + Supplier PM
- Outcome: Approval to proceed OR corrective action required

Phase 2: Production QC (Supplier internal)
- Frequency: Weekly during refurbishment period
- Activities: Frame integrity checks, upholstery tension tests, finish quality assessment
- Documentation: Photo documentation of all items, QC checklist completion
- Reporting: Weekly QC reports submitted to Client

Phase 3: Pre-Shipment Inspection (Final approval)
- Timing: 1 week before delivery
- Scope: 100% visual inspection of all items, random detailed inspection (10% of units)
- Criteria: Match material passport specifications, no visible defects, fire treatment verified
- Outcome: Approval to ship OR rejection with corrective timeline

Phase 4: Delivery Inspection (On-site)
- Timing: At delivery
- Scope: Condition check (shipping damage), quantity verification, spot-check against pre-ship photos
- Process: Client signs acceptance OR notes defects for Supplier remedy (5-business-day turnaround)

ACCEPTANCE CRITERIA:
- Visual: No cracks, tears, stains, or structural damage
- Functional: Chairs stable, drawers slide smoothly, all hardware intact
- Documentation: Material passport matches delivered items
- Fire: Certificate present and current

REJECTION PROTOCOL:
- Minor defects (<5% of order): Supplier provides discount OR replaces within 2 weeks
- Major defects (>5% of order): Client may reject entire shipment, Supplier bears return costs"`,
      keyProvisions: [
        'Four-phase inspection ensures quality at every stage',
        'Pre-production visit prevents surprises (critical for reused materials)',
        'Weekly QC reports provide transparency during refurbishment',
        'Pre-shipment inspection enables rejection before delivery costs incurred',
        'On-site inspection focuses on shipping damage + quantity verification',
        'Clear acceptance criteria prevent subjective disputes'
      ],
      negotiationTips: [
        'Request photo documentation at all QC phases (5-10 photos per item type)',
        'Include travel costs for pre-production inspection in contract (€500-1,500)',
        'Specify rejection timeline (5 business days post-delivery for on-site inspection)',
        'Add random detailed inspection clause (10% of units fully examined)',
        'Define "minor" vs. "major" defects quantitatively (e.g., cosmetic vs. structural)'
      ],
      redFlags: [
        'No pre-production inspection allowed (high risk)',
        'Acceptance deemed upon delivery (prevents quality verification)',
        'Supplier refuses photo documentation (transparency concern)',
        'No rejection protocol (forces acceptance of defective items)'
      ]
    },
    {
      id: 4,
      title: 'Material Passport Delivery',
      icon: '📋',
      category: 'DOCUMENTATION',
      criticality: 'CRITICAL',
      purpose: 'Ensures complete documentation for building authority approval and insurance acceptance',
      standardLanguage: `"MATERIAL PASSPORT REQUIREMENTS:

Supplier shall deliver complete Material Passport for each product type, including:
1. Product Identification (category, quantity, unique ID, manufacturer, age)
2. Provenance & Source (origin, acquisition date, chain of custody)
3. Material Composition (frame, padding, upholstery, hardware, weights)
4. Fire Safety Certification (test standard, result, lab, certificate number, treatment validity)
5. Chemical Safety (REACH compliance, hazardous screening, VOC data if applicable)
6. Structural Durability (inspection report, estimated lifespan, warranty)
7. Refurbishment Process (cleaning, repairs, QC, before/after photos)
8. Sustainability Data (carbon savings calculation, weight, end-of-life plan)
9. Supplier Information (company details, insurance certificates)
10. Pricing & Delivery (unit price, lead time, delivery terms)

DELIVERY TIMELINE:
- Draft Material Passports: 2 weeks after order confirmation (for Client review)
- Final Material Passports: 2 weeks before product delivery (allows building permit submission)

FORMAT:
- Digital: PDF + Excel (editable)
- Physical: Printed binder delivered with products
- Language: English + Swedish (Swedish for building authority submission)

ACCEPTANCE CRITERIA:
Material Passports must include:
- All 10 sections completed (no "N/A" or blank fields without justification)
- Current fire certificates (<5 years old)
- Supplier insurance certificates attached
- Photos of actual items (not stock photos)

REMEDIES FOR NON-COMPLIANCE:
- Missing documentation: Payment withheld until delivered (pro-rata)
- Inaccurate documentation: Supplier liable for re-testing costs (€5-15k)
- Late delivery: [€500-1,000] per week late penalty OR Client may source elsewhere"`,
      keyProvisions: [
        '10-section Material Passport required (industry standard)',
        'Delivery 2 weeks before products enables building permit coordination',
        'Both digital and physical formats ensure accessibility',
        'Swedish language version required for authorities',
        'Clear acceptance criteria prevent incomplete documentation',
        'Financial penalties for non-compliance ensure timely delivery'
      ],
      negotiationTips: [
        'Request sample Material Passport from previous project (verify quality)',
        'Specify photo requirements (minimum 5 photos per product type: front, back, detail, label, installed)',
        'Include "review and approve" cycle (Client reviews draft, Supplier revises based on feedback)',
        'For multi-product orders, stagger delivery (e.g., guest room furniture passports first, then public areas)',
        'Link payment milestone to passport delivery (e.g., 30% upon draft, 40% upon final approval)'
      ],
      redFlags: [
        'Supplier has never provided Material Passport before (high risk)',
        'Delivery timeline "upon request" or "with products" (too late for permits)',
        'No revision cycle (forces acceptance of incomplete documentation)',
        'Supplier refuses Swedish translation (building authority requirement)'
      ]
    },
    {
      id: 5,
      title: 'Payment Structure',
      icon: '💳',
      category: 'COMMERCIAL TERMS',
      criticality: 'MEDIUM',
      purpose: 'Balances Client cash flow with Supplier working capital needs, aligns incentives with performance milestones',
      standardLanguage: `"PAYMENT TERMS:

Total Contract Value: [€X] for [Y] units

Payment Schedule:
1. Deposit (30%): Upon order confirmation
   - Triggers: Signed contract, approved Material Passport draft outline
   - Amount: €[0.3X]
   - Purpose: Secures Supplier sourcing and production slot

2. Production Completion (40%): Upon pre-shipment inspection approval
   - Triggers: QC Phase 3 passed, photo documentation delivered, products ready to ship
   - Amount: €[0.4X]
   - Purpose: Funds Supplier labor and refurbishment costs

3. Final Payment (30%): Net 14 days after delivery
   - Triggers: Products delivered, on-site inspection passed, final Material Passports received
   - Amount: €[0.3X]
   - Purpose: Retainage ensures Supplier addresses any punch-list items

RETENTION:
- 5% retained for 30 days post-installation (€[0.05X])
- Released upon: No warranty claims filed, installation complete, Client acceptance letter

LATE PAYMENT:
- Interest: Swedish Central Bank rate + 8% per annum (standard Swedish B2B)
- Grace period: 5 business days

EARLY PAYMENT DISCOUNT:
- 2% discount if final payment within 7 days of delivery (optional incentive)

CURRENCY & TAXES:
- All amounts in SEK or EUR (specify)
- Prices exclude 25% Swedish VAT (added to invoice)
- Client responsible for customs/import duties (if applicable)"`,
      keyProvisions: [
        '30-40-30 structure balances risk (Supplier gets 70% before delivery, Client retains 30% for leverage)',
        'Milestones tied to performance (not calendar dates) ensures Supplier incentive',
        'Retention (5% for 30 days) covers punch-list items and early warranty period',
        'Late payment interest standard Swedish rate (discourages Client delays)',
        'Early payment discount incentivizes Client cash flow if available'
      ],
      negotiationTips: [
        'For established suppliers (YLLW, Input), accept 30-40-30',
        'For new suppliers, negotiate 20-40-40 (less upfront risk)',
        'For luxury projects with long lead times, add milestone: 20-20-40-20 (adds mid-production payment)',
        'Link deposit to draft Material Passport approval (prevents payment before documentation started)',
        'Negotiate retention amount: 5% standard, 10% for new suppliers or high-risk projects'
      ],
      redFlags: [
        '100% payment upfront (unacceptable risk)',
        'Payment before delivery with no QC (no leverage for quality)',
        'No retention (removes Client leverage for post-delivery issues)',
        'Late payment penalties excessive (>Swedish standard rate + 8%)'
      ]
    },
    {
      id: 6,
      title: 'Delivery & Lead Time',
      icon: '🚚',
      category: 'LOGISTICS',
      criticality: 'HIGH',
      purpose: 'Manages expectations for circular materials (longer lead times than new), defines delivery responsibilities',
      standardLanguage: `"LEAD TIME & DELIVERY:

Estimated Lead Time: [16-20 weeks] from order confirmation
- Sourcing phase: 6-8 weeks (identification and acquisition of reused items)
- Refurbishment phase: 8-10 weeks (cleaning, repair, reupholstery, fire treatment)
- QC & logistics: 2 weeks (quality inspection, packaging, delivery coordination)

LEAD TIME BUFFER:
- Client project schedule shall include +4 week buffer for circular materials
- Rationale: Reused item availability unpredictable vs. new (factory production on-demand)
- Communication: Supplier provides weekly status updates during sourcing phase

DELIVERY TERMS (Incoterms 2020):
- DDP (Delivered Duty Paid) to: [Project site address, specific floor/location]
- Supplier responsibility: Transportation, insurance, unloading to ground floor
- Client responsibility: Moving from ground floor to final location, installation

DELIVERY SCHEDULE:
- Phased delivery (if applicable): Guest rooms first, public areas 2 weeks later
- Delivery window: [Specific dates, e.g., Week of March 15-19, 2025]
- Notification: 5 business days advance notice of exact delivery date/time
- Access: Client ensures site access, loading dock availability, elevator reservation

LATE DELIVERY PENALTY:
- Liquidated damages: [€50-100] per calendar day late (after agreed delivery date)
- Cap: Maximum penalty [5-10%] of contract value
- Exclusions: Force majeure, Client-caused delays (site not ready), agreed schedule changes

PACKAGING & PROTECTION:
- Shrink-wrap individual items
- Corner protection for wood/upholstery
- Furniture blankets for transport
- Palletized where possible (facilitates handling)
- Labeling: Clear identification matching Material Passport IDs

SITE CONDITIONS:
- Ground floor delivery standard (included in price)
- Additional services (if needed, at additional cost):
  - Upper floor delivery via elevator: +[€20-40] per item
  - Crane/hoist delivery: Quote upon request
  - Weekend/after-hours delivery: +20% premium"`,
      keyProvisions: [
        '16-20 week lead time typical (vs. 8-12 weeks new furniture) = plan accordingly',
        '+4 week buffer recommendation prevents project delays',
        'DDP delivery clear (Supplier delivers to ground floor, Client moves to final location)',
        'Phased delivery option reduces site storage requirements',
        'Late delivery penalties incentivize Supplier timeliness (but capped reasonably)',
        'Packaging standards prevent shipping damage',
        'Ground floor delivery standard, additional services available at cost'
      ],
      negotiationTips: [
        'For large orders (>100 items), negotiate upper floor delivery inclusion (vs. additional cost)',
        'Request delivery time window (e.g., 8am-12pm vs. "anytime") to coordinate labor',
        'Specify acceptable storage period on-site (e.g., max 2 weeks) to pressure Client readiness',
        'Include "early delivery bonus" (e.g., -€50/day) to incentivize Supplier if ahead of schedule',
        'Clarify "force majeure" definition (pandemic yes, supplier labor shortage no)'
      ],
      redFlags: [
        'Lead time <12 weeks for refurbished items (likely cutting corners)',
        'No delivery penalties (no incentive for Supplier timeliness)',
        'Client bears all delivery costs after factory (shifts risk excessively)',
        'Delivery "when ready" with no committed date (project planning impossible)'
      ]
    }
  ];

  const riskAllocationScenarios = [
    {
      id: 'hotel-luxury',
      name: 'Luxury Hotel (100+ rooms)',
      icon: '⭐',
      description: 'High-end property, conservative client, risk-averse insurance, strict building authority',
      recommendedApproach: 'SUPPLIER BACKSTOP MODEL',
      framework: {
        supplier: [
          'Full product liability insurance (€5M coverage)',
          '3-year commercial warranty',
          'Complete Material Passports (10 sections)',
          'Pre-production + pre-shipment inspections',
          'Performance guarantees (equivalent to new)'
        ],
        client: [
          'Design suitability responsibility',
          'Installation quality via qualified contractor',
          'Site readiness and access',
          'Final acceptance within 5 business days'
        ],
        shared: [
          'Building authority approval strategy (joint meetings)',
          'Insurance pre-approval coordination',
          'Value engineering opportunities'
        ]
      },
      contractLanguage: `"Supplier warrants Products shall perform equivalently to new products of similar specification for minimum 3 years. Supplier maintains product liability insurance of €5M aggregate. Client accepts risk only for design suitability and installation quality by Client's contractors. All product quality risk remains with Supplier, mitigated via comprehensive quality control protocol (Section 3)."`,
      cost: 'Premium pricing (+10-15% vs. lower-tier projects) due to comprehensive documentation and insurance requirements',
      suppliers: ['YLLW Factory', 'Input Interiör (both provide this level)']
    },
    {
      id: 'hotel-midscale',
      name: 'Boutique/Midscale Hotel (50-100 rooms)',
      icon: '✨',
      description: 'Design-focused property, moderate budget, balanced risk tolerance',
      recommendedApproach: 'SHARED RISK WITH PROTECTIONS',
      framework: {
        supplier: [
          'Product liability insurance (€2M coverage)',
          '2-year commercial warranty',
          'Material Passports (6 core sections: ID, materials, fire, chemical, durability, supplier)',
          'Pre-shipment inspection',
          'Performance commitment (commercial-grade durability)'
        ],
        client: [
          'Accepts slightly higher risk (shorter warranty acceptable)',
          'Design and installation responsibility',
          'Reasonable expectations for "character" of reused items (minor imperfections OK)',
          'Active participation in QC inspections'
        ],
        shared: [
          'Circular procurement timeline management (joint scheduling)',
          'Cost-benefit optimization (balance circular % with budget)',
          'Supplier selection and vetting'
        ]
      },
      contractLanguage: `"Supplier warrants Products shall meet specified performance requirements for minimum 2 years. Client acknowledges reused materials may exhibit minor cosmetic variations characteristic of their history. Supplier maintains €2M product liability insurance. Supplier provides core documentation (fire safety, chemical safety, durability assessment). Client accepts shared risk for performance outcomes, mitigated via 2-year warranty and insurance coverage."`,
      cost: 'Standard pricing (market rate)',
      suppliers: ['Input Interiör', 'Rekomo', 'YLLW Factory']
    },
    {
      id: 'budget-pilot',
      name: 'Budget Hotel / Pilot Project',
      icon: '🚀',
      description: 'Testing circular concept, tight budget, high risk tolerance, back-of-house focus',
      recommendedApproach: 'CLIENT ASSUMES HIGHER RISK',
      framework: {
        supplier: [
          'Product liability insurance (€1M minimum)',
          '1-2 year warranty',
          'Basic Material Passports (3 mandatory sections: fire, chemical, supplier)',
          'Visual inspection report',
          'Reasonable quality assurance (but not hotel-grade refurbishment)'
        ],
        client: [
          'Accepts higher risk (limited warranty, basic documentation)',
          'Responsible for performance outcomes beyond Supplier warranty',
          'May need to replace items sooner than anticipated',
          'Active role in supplier vetting and item selection',
          'Accepts "as-is" condition for back-of-house items'
        ],
        shared: [
          'Transparent communication about limitations',
          'Focus on low-risk applications (back-of-house, staff areas)',
          'Learn-by-doing approach (pilot informs future projects)'
        ]
      },
      contractLanguage: `"Supplier provides Products in refurbished condition with 1-year warranty covering major defects only. Client acknowledges budget constraints and accepts higher risk inherent in circular procurement. Supplier provides basic documentation (fire certification, chemical safety screening, supplier insurance) sufficient for back-of-house use. Client waives claims beyond Supplier warranty period. This contract serves as pilot for potential larger-scale circular projects."`,
      cost: 'Below-market pricing (-20-30% vs. standard) due to limited documentation and warranty',
      suppliers: ['Rekomo', 'RP', 'Kompanjonen (back-of-house only)']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <ScaleIcon className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">B2B Supplier Contract Guide</h1>
        </div>
        <p className="text-xl text-gray-600 mb-4">
          Legal frameworks and commercial terms for circular furniture procurement in Swedish hotel projects
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <div className="flex items-start">
            <ShieldCheckIcon className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Circular procurement requires different contracts than new furniture.</strong> Reused materials lack manufacturer warranties,
                have variable quality, and longer lead times. This guide provides legally sound, commercially balanced contract language for
                Swedish B2B circular furniture transactions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-1">⚖️ For Legal Clarity</p>
                  <p className="text-gray-700">Performance-based warranties, clear liability allocation, dispute resolution</p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-1">🛡️ For Risk Management</p>
                  <p className="text-gray-700">Insurance requirements, quality control protocols, acceptance criteria</p>
                </div>
                <div className="bg-white p-3 rounded border border-emerald-200">
                  <p className="font-semibold text-emerald-900 mb-1">💼 For Commercial Balance</p>
                  <p className="text-gray-700">Payment terms, delivery schedules, late penalties, early incentives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Clauses */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Contract Clauses</h2>
        <p className="text-gray-600 mb-6">
          Six critical clauses for circular procurement contracts, with standard language, key provisions, negotiation tips, and red flags
        </p>

        <div className="space-y-3">
          {contractClauses.map((clause) => (
            <div key={clause.id} className={`bg-white rounded-lg shadow-md border-2 ${
              clause.criticality === 'CRITICAL' ? 'border-red-200' : 'border-blue-200'
            }`}>
              <button
                onClick={() => setExpandedClause(expandedClause === clause.id ? null : clause.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{clause.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{clause.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        clause.criticality === 'CRITICAL' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {clause.criticality}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{clause.category}</p>
                    <p className="text-sm text-gray-700">{clause.purpose}</p>
                  </div>
                </div>
                <span className={`text-2xl font-bold ${
                  clause.criticality === 'CRITICAL' ? 'text-red-600' : 'text-blue-600'
                }`}>
                  {expandedClause === clause.id ? '−' : '+'}
                </span>
              </button>

              {expandedClause === clause.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    {/* Standard Language */}
                    <div className="bg-gray-50 p-4 rounded border border-gray-300">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                        <DocumentTextIcon className="w-5 h-5 text-gray-600" />
                        Standard Contract Language (Copy-Paste Ready)
                      </h4>
                      <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-gray-200 overflow-x-auto">
{clause.standardLanguage}
                      </pre>
                    </div>

                    {/* Key Provisions */}
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-900 mb-2 text-sm">Key Provisions:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {clause.keyProvisions.map((provision, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircleIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{provision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Negotiation Tips */}
                    <div className="bg-emerald-50 p-4 rounded">
                      <h4 className="font-semibold text-emerald-900 mb-2 text-sm">Negotiation Tips:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {clause.negotiationTips.map((tip, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-600 mr-2">💡</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Red Flags */}
                    <div className="bg-red-50 p-4 rounded border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2 text-sm flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        Red Flags (Reject These Terms):
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {clause.redFlags.map((flag, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-600 mr-2">🚩</span>
                            <span>{flag}</span>
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

      {/* Risk Allocation by Project Type */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Allocation by Project Type</h2>
        <p className="text-gray-600 mb-6">
          Different project types require different risk allocation frameworks. Match your contract approach to your project scale,
          budget, and risk tolerance.
        </p>

        <div className="space-y-4">
          {riskAllocationScenarios.map((scenario) => (
            <div key={scenario.id} className="bg-white rounded-lg shadow-md border-2 border-purple-200">
              <button
                onClick={() => setExpandedRisk(expandedRisk === scenario.id ? null : scenario.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-purple-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{scenario.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{scenario.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{scenario.description}</p>
                    <p className="text-sm font-semibold text-purple-700">
                      Recommended: {scenario.recommendedApproach}
                    </p>
                  </div>
                </div>
                <span className="text-2xl text-purple-600 font-bold">
                  {expandedRisk === scenario.id ? '−' : '+'}
                </span>
              </button>

              {expandedRisk === scenario.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    {/* Framework */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-semibold text-blue-900 mb-2 text-sm">Supplier Responsibility:</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          {scenario.framework.supplier.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircleIcon className="w-3 h-3 text-blue-600 mr-1 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-emerald-50 p-4 rounded">
                        <h4 className="font-semibold text-emerald-900 mb-2 text-sm">Client Responsibility:</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          {scenario.framework.client.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircleIcon className="w-3 h-3 text-emerald-600 mr-1 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded">
                        <h4 className="font-semibold text-purple-900 mb-2 text-sm">Shared Responsibility:</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          {scenario.framework.shared.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircleIcon className="w-3 h-3 text-purple-600 mr-1 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Contract Language */}
                    <div className="bg-gray-50 p-4 rounded border border-gray-300">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Recommended Contract Language:</h4>
                      <p className="text-sm text-gray-800 italic bg-white p-3 rounded border border-gray-200">
                        {scenario.contractLanguage}
                      </p>
                    </div>

                    {/* Cost & Suppliers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                        <h4 className="font-semibold text-yellow-900 mb-2 text-sm flex items-center gap-2">
                          <BanknotesIcon className="w-5 h-5" />
                          Cost Implications:
                        </h4>
                        <p className="text-sm text-gray-700">{scenario.cost}</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded border border-green-300">
                        <h4 className="font-semibold text-green-900 mb-2 text-sm">Suitable Suppliers:</h4>
                        <div className="flex flex-wrap gap-2">
                          {scenario.suppliers.map((supplier, idx) => (
                            <span key={idx} className="bg-white border border-green-300 text-green-800 px-2 py-1 rounded text-xs">
                              {supplier}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Checklist */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contract Negotiation Checklist</h2>
        <p className="text-gray-600 mb-6">
          Step-by-step process for negotiating and finalizing supplier contracts
        </p>

        <div className="space-y-4">
          {[
            {
              phase: 'Pre-RFQ Preparation',
              tasks: [
                'Define project requirements (quantity, timeline, quality standards)',
                'Determine risk tolerance (luxury vs. midscale vs. budget)',
                'Select contract framework (Supplier Backstop, Shared Risk, or Client Assumes Risk)',
                'Identify must-have clauses (warranty duration, insurance minimums, documentation requirements)',
                'Prepare Material Passport requirement specification'
              ]
            },
            {
              phase: 'RFQ & Supplier Selection',
              tasks: [
                'Issue RFQ with draft contract terms (enables apples-to-apples comparison)',
                'Request sample Material Passports from previous projects',
                'Verify supplier insurance coverage (request certificates)',
                'Check supplier references (minimum 2 hotel projects)',
                'Score suppliers on: price (30%), quality/documentation (40%), timeline (20%), warranty (10%)'
              ]
            },
            {
              phase: 'Contract Negotiation',
              tasks: [
                'Start with standard language from this guide (customize as needed)',
                'Negotiate warranty duration (2-3 years target)',
                'Clarify Material Passport delivery timeline (2 weeks before products)',
                'Define QC inspection process (who attends, who pays travel)',
                'Agree on payment structure (30-40-30 or 20-40-40)',
                'Set delivery schedule with +4 week buffer',
                'Finalize late penalties and early incentives'
              ]
            },
            {
              phase: 'Contract Execution',
              tasks: [
                'Legal review by Swedish commercial lawyer (8-12 hours, €2-4k)',
                'Client approval (present to steering committee if required)',
                'Signatures (electronic via BankID acceptable in Sweden)',
                '30% deposit payment triggers project start',
                'Schedule kick-off meeting (Supplier + Client/Fyra + PM)'
              ]
            }
          ].map((checklist, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{checklist.phase}</h3>
                  <ul className="space-y-2">
                    {checklist.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-start text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Resources */}
      <section className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Resources & Expert Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Recommended Legal Review:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>For contracts &gt;€100k:</strong> Full legal review by Swedish commercial lawyer specializing in
                  construction/procurement (8-12 hours, €2-4k)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>For contracts €50-100k:</strong> Spot-check review of key clauses (warranty, liability, payment) (3-4 hours, €800-1,200)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>For contracts &lt;€50k:</strong> Use standard language from this guide, internal review sufficient
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Swedish Law Firms with Construction Expertise:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Vinge:</strong> Leading Swedish commercial law firm, construction practice</li>
              <li>• <strong>Mannheimer Swartling:</strong> Real estate & construction specialists</li>
              <li>• <strong>Setterwalls:</strong> Mid-sized firm, cost-effective, construction focus</li>
              <li>• <strong>Lindahl:</strong> Boutique construction law specialists</li>
            </ul>
            <p className="text-xs text-gray-600 mt-3 italic">
              Note: Legal review recommended but not mandatory for standard circular procurement contracts under Swedish law.
              Consult lawyer if: (1) contract value &gt;€100k, (2) novel or unusual terms, (3) cross-border supplier, or (4) client requires.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-References */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
          <p className="text-sm text-emerald-900">
            <strong>Related:</strong> For Material Passport documentation requirements referenced in contracts,{' '}
            <Link href="/resources/material-passport" className="underline font-semibold hover:text-emerald-700">
              see the Material Passport Guide →
            </Link>
          </p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-blue-900">
            <strong>Related:</strong> For supplier capability assessment and selection criteria,{' '}
            <Link href="/suppliers" className="underline font-semibold hover:text-blue-700">
              see the Suppliers Directory →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
