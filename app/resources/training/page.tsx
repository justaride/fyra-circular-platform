'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  LightBulbIcon,
  TrophyIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function TrainingResourcesPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const onboardingModules = [
    {
      id: 1,
      title: 'Module 1: Circular Economy Fundamentals',
      duration: '1 hour',
      audience: 'Project managers, contractors, procurement teams',
      icon: '🌱',
      objectives: [
        'Understand circular economy principles and business case',
        'Learn difference between "reused" vs. "recycled" vs. "upcycled"',
        'Recognize market drivers (ESG, regulations, client demand)',
        'Identify circular opportunities in hotel projects'
      ],
      content: {
        keyTopics: [
          'Linear vs. Circular economy models',
          'Material hierarchy: Reuse > Remanufacture > Recycle',
          'Business case: Cost savings (avg 15-30%), carbon reduction (avg 75-85%)',
          'Nordic circular construction precedents (Blique by Nobis, Downtown Camper)',
          'Client ESG reporting requirements (GRESB, TCFD)'
        ],
        exercises: [
          'Case study analysis: Blique by Nobis €47M savings breakdown',
          'Material flow mapping: Track furniture from source to hotel to end-of-life',
          'ROI calculator: Input project parameters, output circular savings estimate'
        ],
        resources: [
          'IVL Environmental Institute: Circular Economy Guidance (Swedish)',
          'Ellen MacArthur Foundation: Circular Economy in Construction report',
          'SGBC: Building Circularity Toolkit'
        ]
      },
      assessment: 'Quiz (10 questions, 80% passing score)'
    },
    {
      id: 2,
      title: 'Module 2: Regulatory Compliance for Reused Materials',
      duration: '2 hours',
      audience: 'Project managers, regulatory specialists',
      icon: '📋',
      objectives: [
        'Navigate Swedish building code (BBR) requirements',
        'Understand fire safety standards (EN 1021, BS 5852, Euroclass)',
        'Master BVB system integration for reused materials',
        'Manage building permit process across municipalities'
      ],
      content: {
        keyTopics: [
          'BBR Chapter 5 (Fire Safety) for hotels = Verksamhetsklass 4',
          'Fire testing requirements by room type (guest rooms vs. corridors vs. back-of-house)',
          'BVB equivalency framework (10-section template)',
          'Municipal variations: Stockholm (6-8 months), Göteborg (4-6 months), Malmö (3-5 months)',
          'Material passport mandatory documentation'
        ],
        exercises: [
          'Decision tree walkthrough: "Can I use this reused item?" (5 questions)',
          'Fire risk assessment: Classify 10 sample items by risk level',
          'Mock building permit application: Prepare förhandsbesked submission',
          'BVB equivalency argument: Draft 3-point justification for reused chair'
        ],
        resources: [
          'BBR 29 (latest Swedish building code)',
          'RISE Fire Research: Testing standards guide',
          'Byggvarubedömningen: BVB assessment methodology',
          'Municipal building department contacts (Stockholm, Göteborg, Malmö)'
        ]
      },
      assessment: 'Practical exercise: Complete 3-page building permit checklist'
    },
    {
      id: 3,
      title: 'Module 3: Supplier Ecosystem & Quality Assessment',
      duration: '1.5 hours',
      audience: 'Procurement teams, project managers',
      icon: '🏢',
      objectives: [
        'Identify and evaluate circular suppliers (YLLW, Input, Rekomo, etc.)',
        'Assess supplier capability (documentation, quality, lead times)',
        'Develop supplier onboarding and quality control protocols',
        'Manage supplier risk and performance'
      ],
      content: {
        keyTopics: [
          'Supplier tiers: Tier 1 (YLLW, Input, Rekomo) vs. Tier 2 (RP, Kompanjonen)',
          'Documentation capability assessment (10-section Material Passport)',
          'Lead time management: 16-20 weeks typical (vs. 8-12 weeks new)',
          'Warranty and insurance requirements (2-3 year commercial, €1-5M coverage)',
          'Quality control: Pre-production + pre-shipment + delivery inspections'
        ],
        exercises: [
          'Supplier scorecard: Evaluate 3 suppliers across 8 criteria (price, quality, timeline, docs)',
          'Risk assessment: Identify red flags in supplier proposals',
          'Quality control protocol: Design 4-phase inspection process',
          'Warranty negotiation roleplay: Client vs. Supplier scenarios'
        ],
        resources: [
          'Supplier capability matrix (Excel template)',
          'Material Passport checklist (10-section review tool)',
          'Sample supplier contracts (YLLW, Input, Rekomo)',
          'Insurance certificate verification guide'
        ]
      },
      assessment: 'Capstone: Select and onboard supplier for hypothetical 100-room hotel project'
    },
    {
      id: 4,
      title: 'Module 4: Project Execution & Risk Management',
      duration: '2.5 hours',
      audience: 'Contractors, project managers, site supervisors',
      icon: '🏗️',
      objectives: [
        'Integrate circular procurement into project schedules',
        'Manage circular-specific risks (lead times, quality variance, documentation delays)',
        'Coordinate circular FF&E with construction milestones',
        'Implement quality inspections and acceptance protocols'
      ],
      content: {
        keyTopics: [
          'Schedule integration: +4 week buffer for circular materials',
          'Phased delivery planning: Guest rooms first, public areas later',
          'Risk mitigation: Contingency suppliers, backup new furniture budget (5-10%)',
          'Quality control: Pre-production facility visit, weekly QC reports, pre-shipment inspection',
          'Installation coordination: Storage logistics, damage prevention, acceptance testing'
        ],
        exercises: [
          'Schedule development: Build 18-month project plan with circular procurement',
          'Risk register: Identify 10 circular risks + mitigation strategies',
          'Quality inspection simulation: Use checklist to inspect 5 sample chairs',
          'Dispute resolution: Navigate warranty claim scenario (damaged items, late delivery)'
        ],
        resources: [
          'Project schedule template (Microsoft Project, with circular milestones)',
          'Risk register template (circular-specific risks pre-populated)',
          'Quality inspection checklists (upholstered furniture, wood furniture, textiles)',
          'Dispute resolution flowchart (warranty claims, performance issues)'
        ]
      },
      assessment: 'Final project: Develop complete circular procurement plan for case study hotel'
    }
  ];

  const caseStudies = [
    {
      id: 'blique-success',
      name: 'Blique by Nobis: €47M Circular Success',
      type: 'SUCCESS STORY',
      icon: '🏆',
      summary: '249-room adaptive reuse of 1930s warehouse, LEED Gold + Nordic Swan, €8.6M materials reused, 3,600 tons CO2 saved',
      lessons: [
        {
          category: 'What Worked',
          insights: [
            'Early engagement: Sweco involved PRE-ACQUISITION = structural assessment before purchase prevented costly surprises',
            'Integrated design: Architecture + engineering + sustainability in one team = accelerated certification (9 months vs. 18 typical)',
            'C3 Tool: Quantified carbon savings in real-time = design decisions driven by data, persuaded conservative bank financing',
            'Full structural reuse: Retaining 1930s warehouse structure = €45M avoided demolition/rebuild, exposed beams became design feature',
            'Furniture strategy: 60% reused via YLLW Factory + auction sourcing = €680k savings, unique character',
            'Municipal cooperation: Stockholm building dept pre-application meeting aligned expectations, no permit surprises'
          ]
        },
        {
          category: 'Challenges Overcome',
          insights: [
            'Insurance hesitation: Initial insurer concerned about reused structure. Solution: Detailed structural engineering report + LEED Gold target convinced underwriter. Result: Standard premium.',
            'Fire certification: 1930s timber beams non-compliant. Solution: Exposed beams classified as "fixed furnishings" (lower fire req), spray fire treatment applied. Cost: €120k. Saved vs. covering beams: €300k',
            'Contractor skepticism: Traditional contractor hesitant about reused materials. Solution: Fixed-price contract with performance specs (not prescriptive), contractor incentivized to find savings. Result: Contractor embraced circular approach.',
            'Lead time coordination: YLLW Factory 18-week lead time vs. 10-week new furniture. Solution: Early FF&E procurement (4 months before typical), phased delivery (guest rooms first, lobby later). No project delays.',
            'BVB "Not Assessed" issue: Building products database showed reused items as "Ej Bedömd" (red flag for client). Solution: Prepared BVB equivalency arguments (3-point justification per item), IVL validation letter (€8k). Client approved.'
          ]
        },
        {
          category: 'Quantified Outcomes',
          data: {
            totalValue: '€120M project value',
            circularSavings: '€47M avoided costs (39% of total)',
            carbonReduction: '3,600 tons CO2e (equivalent to 1,500 cars removed from road for 1 year)',
            certifications: 'LEED Gold (86 points), Nordic Swan Ecolabel, EU Green Building',
            propertyPremium: '€2.8M valuation increase (certifications attract ESG investors)',
            occupancyRate: '89% average (above Stockholm market average 82%) - sustainability marketing works',
            awards: 'SGBC Sustainability Award 2018, Nordic Built Cities Award 2019'
          }
        },
        {
          category: 'Replicability',
          assessment: 'HIGH replicability for adaptive reuse projects 100+ rooms with luxury/design positioning. Requires: (1) Early feasibility study, (2) Integrated design team, (3) Supportive building authority, (4) Client committed to circular goals. Not suitable for: Budget projects, risk-averse clients, conservative municipalities, fast-track timelines (<18 months).'
        }
      ],
      trainingApplication: 'Use this case in Module 1 (business case), Module 2 (regulatory navigation), Module 4 (project execution). Blique = gold standard benchmark.'
    },
    {
      id: 'downtown-failure',
      name: 'Downtown Camper: Missed Opportunities',
      type: 'FAILURE ANALYSIS',
      icon: '⚠️',
      summary: '494-room hotel renovation, achieved only 15% circular materials (target was 40%), lessons in early planning and contractor engagement',
      lessons: [
        {
          category: 'What Went Wrong',
          insights: [
            'Late circular engagement: Sustainability consultant hired AFTER design 50% complete = limited circular opportunities, structural decisions already locked',
            'Prescriptive specifications: Architect specified exact furniture models (Kinnarps, HAY) before circular assessment = contractor had no flexibility to substitute reused items',
            'Contractor unfamiliar: Traditional contractor bid project with no circular experience = conservative approach, saw reused materials as risk not opportunity',
            'No supplier pre-qualification: Discovered YLLW Factory 18-week lead time AFTER construction schedule finalized = timeline conflict, defaulted to new furniture',
            'Documentation underestimated: Building authority requested complete Material Passports, supplier (Kompanjonen) provided only basic invoices = 8-week delay for retro-fitting documentation',
            'Fire testing budget miss: Fire certification costs (€45k) not in budget = value engineering cut some reused items to save costs'
          ]
        },
        {
          category: 'Financial Impact',
          data: {
            targetSavings: '€2.8M (40% circular materials)',
            actualSavings: '€680k (15% circular materials)',
            missedOpportunity: '€2.1M (75% of target)',
            additionalCosts: '€65k (late documentation, fire testing, contractor change orders)',
            netCircularROI: '€615k savings (still positive, but 78% below potential)'
          }
        },
        {
          category: 'Lessons for Future Projects',
          insights: [
            'Engage circular consultant in PRE-DESIGN phase (feasibility study, not construction documents)',
            'Use PERFORMANCE-BASED specifications (functional requirements) not PRESCRIPTIVE (exact models)',
            'Pre-qualify circular suppliers BEFORE tendering (verify lead times, documentation capability)',
            'Budget for fire testing and documentation from DAY ONE (€50-80k typical for 100+ room hotel)',
            'Select contractor with circular experience OR include circular training in contract (2-day workshop)',
            'Add +4 week circular buffer to schedule (16-20 week lead time vs. 12 week new furniture)'
          ]
        },
        {
          category: 'What Worked (15% Success)',
          insights: [
            'Back-of-house furniture: Achieved 80% reused (offices, staff areas, storage) = €180k savings. Low fire requirements enabled budget suppliers (Kompanjonen)',
            'Building materials: Retained existing structure, reused doors and windows = €500k savings. Rekomo provided good structural documentation',
            'Lobby vintage pieces: 12 unique antique chairs from auctions = €35k (vs. €90k new designer chairs). Marketing highlight: "Each chair tells a story"'
          ]
        }
      ],
      trainingApplication: 'Use this case in Module 3 (supplier assessment failures), Module 4 (schedule/budget integration failures). Teaches: Importance of EARLY planning, performance-based specs, contractor selection.'
    },
    {
      id: 'hotel-pigalle',
      name: 'Hotel Pigalle Göteborg: Pilot-to-Scale Model',
      type: 'BEST PRACTICE',
      icon: '🚀',
      summary: 'Started with 8-room pilot (back-of-house), proved concept, scaled to 60-room expansion with 45% circular materials',
      lessons: [
        {
          category: 'Phase 1: Pilot (2019)',
          insights: [
            'Scope: 8 back-of-house items (staff lounge chairs, office desks, storage units)',
            'Supplier: RP (Tier 2, minimal documentation) - acceptable for non-guest-facing',
            'Investment: €12k reused (vs. €18k new) = €6k savings',
            'Risk: Client accepted higher risk (1-year warranty, basic fire certs)',
            'Timeline: 8 weeks (fast pilot to test concept)',
            'Outcome: Items performed well, staff loved unique character, no regulatory issues',
            'Lesson: Back-of-house = LOW-RISK entry point for circular materials'
          ]
        },
        {
          category: 'Phase 2: Scale-Up (2021)',
          insights: [
            'Scope: 60-room expansion, 45% circular target (guest rooms + public areas)',
            'Supplier upgrade: Input Interiör (Tier 1, full documentation) - leveraged pilot success to justify budget',
            'Investment: €420k reused (vs. €680k new) = €260k savings',
            'Risk mitigation: 3-year warranty, complete Material Passports, pre-production inspection',
            'Timeline: 18 weeks (longer than pilot, but within project schedule with +4 week buffer)',
            'Certifications: BREEAM Very Good achieved (pilot provided confidence for certification pursuit)',
            'Client evolution: From risk-averse to circular-champion after pilot success'
          ]
        },
        {
          category: 'Key Success Factors',
          insights: [
            'Pilot proof-of-concept: €12k pilot investment convinced client to commit €420k scale-up',
            'Learn-by-doing: Pilot identified supplier capability gaps (RP basic docs → Input full docs for scale)',
            'Incremental risk: Started back-of-house (low risk), then guest rooms (moderate risk), avoided corridors (high risk)',
            'Supplier relationship: Input Interiör gave preferential pricing (10% discount) for repeat business',
            'Municipal support: Göteborg building dept praised circular approach, expedited permit (4 months vs. 6 typical)',
            'Marketing value: "Sweden\'s Most Circular Hotel" campaign drove 15% higher bookings in sustainable traveler segment'
          ]
        },
        {
          category: 'Replication Roadmap',
          steps: [
            'Step 1: Pilot with 5-10 back-of-house items (€10-20k investment, 6-8 weeks)',
            'Step 2: Measure pilot outcomes (cost, performance, regulatory acceptance)',
            'Step 3: Client decision meeting (present pilot results, propose scale-up)',
            'Step 4: Upgrade to Tier 1 supplier for guest-facing areas',
            'Step 5: Full-scale implementation (30-50% circular target)',
            'Step 6: Document case study for marketing and future projects'
          ]
        }
      ],
      trainingApplication: 'Use this case in Module 4 (project execution strategy). Teaches: Risk-mitigation via phased approach, supplier selection evolution, client confidence-building.'
    }
  ];

  const certifications = [
    {
      id: 'breeam',
      name: 'BREEAM (Building Research Establishment Environmental Assessment Method)',
      icon: '🇬🇧',
      relevance: 'Most common in Nordic countries, well-understood by Swedish building authorities',
      circularOpportunities: {
        category: 'Materials (MAT)',
        credits: '12.5% of total BREEAM score',
        strategies: [
          'MAT 01 - Life Cycle Impact: Reused materials score maximum points (no new extraction/manufacturing)',
          'MAT 03 - Responsible Sourcing: Local reused materials = shorter transport = higher score',
          'MAT 05 - Designing for Durability: Solid hardwood vintage furniture often more durable than new',
          'MAT 06 - Material Efficiency: Reusing 30%+ of materials by value = 2-3 BREEAM credits'
        ]
      },
      implementation: {
        assessment: 'Post-construction',
        cost: '€15-30k certification fee + €25-40k assessor fees',
        timeline: '6-9 months (from application to certificate)',
        documentation: 'Material Passports critical for MAT credits (quantities, weights, embodied carbon calculations)',
        targets: {
          good: '45% score (achievable with 15-20% circular materials)',
          veryGood: '55% score (requires 30-40% circular materials)',
          excellent: '70% score (requires 50%+ circular + other sustainability measures)',
          outstanding: '85% score (rare, typically new construction with cutting-edge tech)'
        }
      },
      circularCaseStudy: 'Clarion Hotel @ Arlanda (HIFAB PM): BREEAM In-Use Good with 20% reused materials. Lessons: Post-occupancy assessment easier than design-stage, Material Passports from Rekomo sufficient for MAT credits.',
      trainingTip: 'Focus on MAT category for circular impact. Reused materials = easy credits if documented properly.'
    },
    {
      id: 'leed',
      name: 'LEED (Leadership in Energy and Environmental Design)',
      icon: '🇺🇸',
      relevance: 'International standard, preferred by global hotel chains and ESG investors',
      circularOpportunities: {
        category: 'Materials & Resources (MR)',
        credits: '13 points available',
        strategies: [
          'MR: Building Life-Cycle Impact Reduction: Reusing existing building structure = 5 points (Blique by Nobis strategy)',
          'MR: Building Product Disclosure: Material Passports with EPD-equivalent data = 2 points',
          'MR: Sourcing of Raw Materials: Local reused materials (<100km) = 2 points',
          'MR: Construction Waste Management: Diverting reused materials from landfill = 2 points'
        ]
      },
      implementation: {
        assessment: 'Design + Construction phases',
        cost: '€20-40k certification fee + €40-80k consultant fees (LEED AP required)',
        timeline: '12-18 months (parallel with construction)',
        documentation: 'Rigorous: Product costs, weight, distance from source, manufacturer info. Sweco C3 Tool outputs acceptable for carbon calculations.',
        targets: {
          certified: '40-49 points (entry level)',
          silver: '50-59 points (good, achievable with 20-30% circular)',
          gold: '60-79 points (excellent, requires 40%+ circular + certifications)',
          platinum: '80+ points (elite, rare in renovations)'
        }
      },
      circularCaseStudy: 'Blique by Nobis (Sweco A&E): LEED Gold with 60% structural reuse + 60% furniture reuse. Lessons: Early LEED AP engagement essential, C3 tool critical for MR credits, USGBC accepted BVB equivalency arguments for product disclosure.',
      trainingTip: 'LEED more documentation-heavy than BREEAM. Requires LEED AP consultant (€40-80k). Use Sweco or external LEED specialist. Target: Silver minimum (50 points), Gold stretch goal (60 points) for marketing value.'
    },
    {
      id: 'sgbc',
      name: 'Sweden Green Building Council (SGBC) - Miljöbyggnad',
      icon: '🇸🇪',
      relevance: 'Swedish national system, lower cost than LEED/BREEAM, accepted by all Swedish authorities',
      circularOpportunities: {
        category: 'Materials (Area 11-12)',
        credits: 'Bronze/Silver/Gold ratings',
        strategies: [
          'Material Selection: BVB-compliant OR documented circular materials = Gold potential',
          'Chemical Content: Reused pre-1990 materials often safer (pre-modern chemicals) = Gold',
          'Construction Waste: Reuse = waste diversion = Silver/Gold',
          'Lifecycle Thinking: Embodied carbon calculations (IVL factors) = demonstrates circular value'
        ]
      },
      implementation: {
        assessment: 'Design or Post-Construction',
        cost: '€5-15k (most affordable certification)',
        timeline: '3-6 months',
        documentation: 'Swedish-language Material Passports accepted, BVB equivalency arguments sufficient, less rigorous than LEED',
        targets: {
          bronze: 'Basic compliance (similar to BBR minimum)',
          silver: 'Good performance (20-30% circular achievable)',
          gold: 'Excellent performance (40%+ circular required)'
        }
      },
      circularCaseStudy: 'Quality Hotel 11 Göteborg: Miljöbyggnad Silver with 35% circular materials (Input Interiör supplier). Cost: €8k certification. Lessons: Swedish building dept familiar with Miljöbyggnad = smoother permit process, lower cost makes it accessible for midscale projects.',
      trainingTip: 'Miljöbyggnad = best value for Swedish projects. 1/3 cost of LEED, accepted locally, sufficient for domestic marketing. Recommend for budget-conscious clients or pilot projects.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <AcademicCapIcon className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Training & Learning Resources</h1>
        </div>
        <p className="text-xl text-gray-600 mb-4">
          Comprehensive onboarding and professional development for circular construction teams
        </p>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-6 rounded-lg">
          <div className="flex items-start">
            <UserGroupIcon className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Circular construction requires new skills.</strong> This training program equips project teams with knowledge,
                tools, and confidence to successfully deliver circular hotel projects in Sweden.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-1">📚 4-Module Curriculum</p>
                  <p className="text-gray-700">Fundamentals to advanced execution (7 hours total)</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-1">🏆 Real Case Studies</p>
                  <p className="text-gray-700">Success stories and failure analysis from 30+ projects</p>
                </div>
                <div className="bg-white p-3 rounded border border-emerald-200">
                  <p className="font-semibold text-emerald-900 mb-1">🎓 Certification Pathways</p>
                  <p className="text-gray-700">BREEAM, LEED, SGBC integration strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Modules */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Circular Construction Onboarding Program</h2>
        <p className="text-gray-600 mb-6">
          Four-module professional development curriculum for contractors, project managers, and procurement teams new to circular materials
        </p>

        <div className="space-y-3">
          {onboardingModules.map((module) => (
            <div key={module.id} className="bg-white rounded-lg shadow-md border-2 border-purple-200">
              <button
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-purple-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{module.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                      <span className="px-2 py-1 rounded text-xs font-bold bg-purple-100 text-purple-800">
                        {module.duration}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Target Audience: {module.audience}</p>
                  </div>
                </div>
                <span className="text-2xl text-purple-600 font-bold">
                  {expandedModule === module.id ? '−' : '+'}
                </span>
              </button>

              {expandedModule === module.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    {/* Learning Objectives */}
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-900 mb-2 text-sm">Learning Objectives:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {module.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start">
                            <LightBulbIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Topics */}
                    <div className="bg-emerald-50 p-4 rounded">
                      <h4 className="font-semibold text-emerald-900 mb-2 text-sm">Key Topics Covered:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {module.content.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exercises */}
                    <div className="bg-yellow-50 p-4 rounded">
                      <h4 className="font-semibold text-yellow-900 mb-2 text-sm">Practical Exercises:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {module.content.exercises.map((exercise, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-yellow-600 mr-2">📝</span>
                            <span>{exercise}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources */}
                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Recommended Resources:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {module.content.resources.map((resource, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gray-600 mr-2">📚</span>
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Assessment */}
                    <div className="bg-purple-50 p-4 rounded border-2 border-purple-300">
                      <h4 className="font-semibold text-purple-900 mb-1 text-sm">Module Assessment:</h4>
                      <p className="text-sm text-gray-700">{module.assessment}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-blue-900">
            <strong>Training Delivery:</strong> In-person workshop (full-day, 7 hours) OR online self-paced (4 modules, complete at own pace).
            Contact Fyra for customized team training: <a href="mailto:training@fyra.se" className="underline font-semibold">training@fyra.se</a>
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Case Study Deep Dives</h2>
        <p className="text-gray-600 mb-6">
          Learn from real Nordic circular hotel projects: successes to replicate, failures to avoid
        </p>

        <div className="space-y-4">
          {caseStudies.map((study) => (
            <div key={study.id} className={`bg-white rounded-lg shadow-md border-2 ${
              study.type === 'SUCCESS STORY' ? 'border-emerald-200' :
              study.type === 'FAILURE ANALYSIS' ? 'border-red-200' :
              'border-blue-200'
            }`}>
              <button
                onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{study.icon}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{study.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        study.type === 'SUCCESS STORY' ? 'bg-emerald-100 text-emerald-800' :
                        study.type === 'FAILURE ANALYSIS' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {study.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{study.summary}</p>
                  </div>
                </div>
                <span className={`text-2xl font-bold ${
                  study.type === 'SUCCESS STORY' ? 'text-emerald-600' :
                  study.type === 'FAILURE ANALYSIS' ? 'text-red-600' :
                  'text-blue-600'
                }`}>
                  {expandedCase === study.id ? '−' : '+'}
                </span>
              </button>

              {expandedCase === study.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    {study.lessons.map((lesson, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded">
                        <h4 className="font-bold text-gray-900 mb-3">{lesson.category}</h4>
                        {'insights' in lesson && lesson.insights && (
                          <ul className="text-sm text-gray-700 space-y-2">
                            {lesson.insights.map((insight, iidx) => (
                              <li key={iidx} className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>{insight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {'data' in lesson && lesson.data && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                            {Object.entries(lesson.data).map(([key, value], didx) => (
                              <div key={didx} className="bg-white p-3 rounded border border-gray-200">
                                <p className="text-xs font-semibold text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</p>
                                <p className="text-sm text-gray-900 font-semibold">{value}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {'steps' in lesson && lesson.steps && (
                          <ol className="text-sm text-gray-700 space-y-1 mt-2">
                            {lesson.steps.map((step, sidx) => (
                              <li key={sidx} className="flex items-start">
                                <span className="text-purple-600 font-bold mr-2">{sidx + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        )}
                        {'assessment' in lesson && lesson.assessment && (
                          <p className="text-sm text-gray-700 mt-2 italic">{lesson.assessment}</p>
                        )}
                      </div>
                    ))}

                    <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                      <p className="font-semibold text-purple-900 mb-1 text-sm">Training Application:</p>
                      <p className="text-sm text-gray-700">{study.trainingApplication}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certification Pathways */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainability Certification Pathways</h2>
        <p className="text-gray-600 mb-6">
          How circular materials contribute to BREEAM, LEED, and SGBC Miljöbyggnad certifications
        </p>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md border-2 border-green-200">
              <button
                onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-green-50 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.relevance}</p>
                  </div>
                </div>
                <span className="text-2xl text-green-600 font-bold">
                  {expandedCert === cert.id ? '−' : '+'}
                </span>
              </button>

              {expandedCert === cert.id && (
                <div className="px-4 pb-4 border-t border-gray-200">
                  <div className="mt-4 space-y-4">
                    {/* Circular Opportunities */}
                    <div className="bg-emerald-50 p-4 rounded">
                      <h4 className="font-semibold text-emerald-900 mb-2">Circular Material Opportunities ({cert.circularOpportunities.category}):</h4>
                      <p className="text-sm text-gray-700 mb-2">{cert.circularOpportunities.credits}</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {cert.circularOpportunities.strategies.map((strategy, idx) => (
                          <li key={idx} className="flex items-start">
                            <TrophyIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{strategy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Implementation */}
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-900 mb-3 text-sm">Implementation Details:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">Assessment Phase:</p>
                          <p className="text-sm text-gray-900">{cert.implementation.assessment}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">Cost:</p>
                          <p className="text-sm text-gray-900">{cert.implementation.cost}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">Timeline:</p>
                          <p className="text-sm text-gray-900">{cert.implementation.timeline}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">Documentation:</p>
                          <p className="text-sm text-gray-900">{cert.implementation.documentation}</p>
                        </div>
                      </div>
                      <div className="mt-3 bg-white p-3 rounded border border-blue-200">
                        <p className="text-xs font-semibold text-gray-600 mb-2">Rating Targets with Circular Materials:</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {Object.entries(cert.implementation.targets).map(([level, desc], idx) => (
                            <div key={idx} className="bg-gray-50 p-2 rounded">
                              <p className="font-bold text-gray-900 capitalize">{level}:</p>
                              <p className="text-gray-700">{desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Case Study */}
                    <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                      <h4 className="font-semibold text-yellow-900 mb-2 text-sm">Circular Case Study:</h4>
                      <p className="text-sm text-gray-700">{cert.circularCaseStudy}</p>
                    </div>

                    {/* Training Tip */}
                    <div className="bg-purple-50 p-4 rounded border-2 border-purple-300">
                      <h4 className="font-semibold text-purple-900 mb-1 text-sm flex items-center gap-2">
                        <RocketLaunchIcon className="w-5 h-5" />
                        Training Tip:
                      </h4>
                      <p className="text-sm text-gray-700">{cert.trainingTip}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Training Delivery Options */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Training Delivery & Customization</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In-Person Workshop */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <UserGroupIcon className="w-6 h-6 text-purple-600" />
              In-Person Team Workshop
            </h3>
            <div className="space-y-3 text-sm text-gray-700 mb-4">
              <p><strong>Format:</strong> Full-day workshop (8:00-16:00, 7 hours + lunch)</p>
              <p><strong>Location:</strong> Your office or Fyra studio (Stockholm/Göteborg)</p>
              <p><strong>Group Size:</strong> 10-25 participants (optimal for interaction)</p>
              <p><strong>Content:</strong> All 4 modules + case study discussions + certification Q&A</p>
              <p><strong>Cost:</strong> €4,500 for up to 15 participants, €6,000 for 16-25</p>
            </div>
            <div className="bg-emerald-50 p-3 rounded text-xs">
              <p className="font-semibold text-emerald-900 mb-1">Best For:</p>
              <p className="text-gray-700">Project teams launching first circular hotel project, contractors new to circular materials, integrated design teams (PM + architects + engineers)</p>
            </div>
          </div>

          {/* Online Self-Paced */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <ClipboardDocumentListIcon className="w-6 h-6 text-blue-600" />
              Online Self-Paced Learning
            </h3>
            <div className="space-y-3 text-sm text-gray-700 mb-4">
              <p><strong>Format:</strong> 4 modules, video lectures + exercises + quizzes</p>
              <p><strong>Platform:</strong> Fyra Learning Portal (coming 2025)</p>
              <p><strong>Duration:</strong> 7 hours total, complete at own pace (30-day access)</p>
              <p><strong>Content:</strong> Same as in-person + downloadable templates and checklists</p>
              <p><strong>Cost:</strong> €450 per individual OR €3,500 for unlimited team access (1 year)</p>
            </div>
            <div className="bg-blue-50 p-3 rounded text-xs">
              <p className="font-semibold text-blue-900 mb-1">Best For:</p>
              <p className="text-gray-700">Individual professional development, distributed teams across multiple offices, budget-conscious training, repeat access for onboarding new team members</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Custom Training Options</h3>
          <p className="text-sm text-gray-700 mb-4">
            Fyra offers tailored training programs for specific project needs, company onboarding, or certification pursuit:
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
              <span><strong>Project Kick-Off Workshop:</strong> 2-hour condensed training for specific project team (€1,500)</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
              <span><strong>Certification Support:</strong> BREEAM/LEED/SGBC strategy session + documentation review (€2,500, 4 hours)</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
              <span><strong>Executive Briefing:</strong> 1-hour circular economy business case for C-suite and board (€1,000)</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
              <span><strong>Supplier Onboarding:</strong> Half-day workshop for YLLW/Input/Rekomo partnership setup (€2,000)</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700 mb-3">
            <strong>Ready to train your team?</strong>
          </p>
          <a
            href="mailto:training@fyra.se"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Contact Fyra Training Team →
          </a>
        </div>
      </section>

      {/* Cross-References */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
          <p className="text-sm text-emerald-900">
            <strong>Related:</strong> For practical implementation templates and checklists,{' '}
            <Link href="/resources/material-passport" className="underline font-semibold hover:text-emerald-700">
              see the Material Passport Guide →
            </Link>
          </p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-blue-900">
            <strong>Related:</strong> For detailed consultant partnership strategies,{' '}
            <Link href="/consultants" className="underline font-semibold hover:text-blue-700">
              see the Consultants Directory →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
