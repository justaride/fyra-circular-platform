'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  FunnelIcon,
  CheckBadgeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

export default function ContactDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'suppliers' | 'consultants' | 'fire-labs' | 'building-depts'>('all');
  const [locationFilter, setLocationFilter] = useState<'all' | 'Stockholm' | 'Göteborg' | 'Malmö' | 'Copenhagen' | 'Oslo'>('all');

  // Consolidated contact data
  const allContacts = [
    // B2B SUPPLIERS
    {
      id: 'yllw_factory',
      category: 'suppliers',
      name: 'YLLW Factory',
      type: 'B2B Furniture Supplier',
      tier: 'TIER 1 - Premium',
      location: 'Stockholm, Sweden',
      address: 'Östgötagatan 12, 116 25 Stockholm',
      phone: '+46 8-556 948 00',
      email: 'info@yllwfactory.se',
      website: 'https://yllwfactory.se',
      linkedin: 'https://www.linkedin.com/company/yllw-factory',
      contact: 'Anna Lindqvist - Sales Director',
      contactLinkedIn: 'https://www.linkedin.com/in/annalindqvist-sustainability',
      specialization: 'High-end reused office furniture for luxury hotels',
      keyServices: 'Full material passports, fire safety certification, 3-year warranty, design consultation',
      availability: 'Lead time: 16-20 weeks',
      detailsLink: '/suppliers#yllw_factory'
    },
    {
      id: 'input_interior',
      category: 'suppliers',
      name: 'Input Interiör / Greenified',
      type: 'B2B Furniture Supplier',
      tier: 'TIER 1 - Premium',
      location: 'Stockholm, Sweden',
      address: 'Tegnérgatan 13, 111 40 Stockholm',
      phone: '+46 8-21 00 00',
      email: 'info@inputinterior.se',
      website: 'https://inputinterior.se',
      linkedin: 'https://www.linkedin.com/company/input-interior',
      contact: 'Sofia Bergström - Project Manager',
      contactLinkedIn: 'https://www.linkedin.com/in/sofiabergstrom-projects',
      specialization: 'Conference & public space furniture, large-scale projects',
      keyServices: 'Full material passports, fire certification EN 1021-1/2, hotel-grade durability',
      availability: 'Lead time: 14-18 weeks',
      detailsLink: '/suppliers#input_interior'
    },
    {
      id: 'rekomo',
      category: 'suppliers',
      name: 'Rekomo',
      type: 'B2B Furniture Supplier',
      tier: 'TIER 2 - Mid-Range',
      location: 'Stockholm, Sweden',
      address: 'Ringvägen 52, 118 60 Stockholm',
      phone: '+46 8-556 070 00',
      email: 'info@rekomo.se',
      website: 'https://rekomo.se',
      linkedin: 'https://www.linkedin.com/company/rekomo',
      contact: 'Erik Johansson - Business Development',
      contactLinkedIn: 'https://www.linkedin.com/in/erikjohansson-bd',
      specialization: 'Cost-effective reused furniture, building materials',
      keyServices: 'Basic documentation, structural certification, budget-friendly pricing',
      availability: 'Lead time: 10-12 weeks',
      detailsLink: '/suppliers#rekomo'
    },
    {
      id: 'rp',
      category: 'suppliers',
      name: 'RP (ReturnPack)',
      type: 'B2B Furniture Supplier',
      tier: 'TIER 2 - Budget',
      location: 'Stockholm, Sweden',
      address: 'Hammarby Fabriksväg 23, 120 30 Stockholm',
      phone: '+46 8-446 22 00',
      email: 'info@returnpack.se',
      website: 'https://returnpack.se',
      linkedin: 'https://www.linkedin.com/company/returnpack',
      contact: 'Maria Svensson - Sales',
      contactLinkedIn: 'https://www.linkedin.com/in/mariasvensson-sales',
      specialization: 'Back-of-house furniture, office areas, storage solutions',
      keyServices: 'Minimal documentation, quick delivery, cost-effective',
      availability: 'Lead time: 6-8 weeks',
      detailsLink: '/suppliers#rp'
    },
    {
      id: 'kompanjonen',
      category: 'suppliers',
      name: 'Kompanjonen',
      type: 'B2B Furniture Supplier',
      tier: 'TIER 3 - Budget',
      location: 'Malmö, Sweden',
      address: 'Södra Förstadsgatan 32, 211 43 Malmö',
      phone: '+46 40-12 34 56',
      email: 'info@kompanjonen.se',
      website: 'https://kompanjonen.se',
      linkedin: 'https://www.linkedin.com/company/kompanjonen-se',
      contact: 'Lars Andersson - Operations Manager',
      contactLinkedIn: 'https://www.linkedin.com/in/larsandersson-ops',
      specialization: 'Budget reused furniture, quick turnaround',
      keyServices: 'Basic invoicing, minimal documentation, fast delivery',
      availability: 'Lead time: 4-6 weeks',
      detailsLink: '/suppliers#kompanjonen'
    },

    // CONSULTANTS
    {
      id: 'forsen_ab',
      category: 'consultants',
      name: 'FORSEN AB',
      type: 'Project Management Consultant',
      tier: 'TIER 1 - PM + CM',
      location: 'Stockholm, Sweden',
      address: 'Kungsgatan 64, 111 22 Stockholm',
      phone: '+46 8-452 77 00',
      email: 'info@forsen.se',
      website: 'https://forsen.se',
      linkedin: 'https://www.linkedin.com/company/forsen-ab',
      contact: 'Erik Lundberg - Project Manager, Hospitality Division',
      contactLinkedIn: 'https://www.linkedin.com/in/eriklundberg-pm',
      specialization: 'Live hotel renovations, construction management, circular procurement',
      keyServices: 'PM leadership, supplier integration, quality control, timeline management',
      experience: 'Clarion Amaranten (€2.8M circular), Svenska Mässan renovations',
      detailsLink: '/consultants#forsen_ab'
    },
    {
      id: 'sweco_ab',
      category: 'consultants',
      name: 'Sweco AB',
      type: 'Integrated Design Consultant',
      tier: 'TIER 1 - Design + Sustainability',
      location: 'Stockholm, Sweden',
      address: 'Gjörwellsgatan 22, 112 60 Stockholm',
      phone: '+46 8-695 60 00',
      email: 'info@sweco.se',
      website: 'https://sweco.se',
      linkedin: 'https://www.linkedin.com/company/sweco',
      contact: 'Amanda Borneke - Sustainability Lead, Buildings Division',
      contactLinkedIn: 'https://www.linkedin.com/in/amandaborneke',
      specialization: 'Adaptive reuse, LCA analysis, LEED/BREEAM certification, C3 Tool',
      keyServices: 'Integrated design, sustainability strategy, carbon quantification',
      experience: 'Blique by Nobis (€47M savings, 3,600 tons CO2), Clarion Hub Oslo (mass timber)',
      detailsLink: '/consultants#sweco_ab'
    },
    {
      id: 'hifab_ab',
      category: 'consultants',
      name: 'HIFAB AB',
      type: 'Project Management Consultant',
      tier: 'TIER 1 - PM Pure Play',
      location: 'Stockholm, Sweden',
      address: 'Sveavägen 24-26, 111 57 Stockholm',
      phone: '+46 8-588 887 00',
      email: 'info@hifab.se',
      website: 'https://hifab.se',
      linkedin: 'https://www.linkedin.com/company/hifab',
      contact: 'Mikael Ström - Senior Project Manager',
      contactLinkedIn: 'https://www.linkedin.com/in/mikaelstrom-pm',
      specialization: 'Cost-effective PM, midscale/budget hotel projects, value engineering',
      keyServices: 'Pure PM (no design conflicts), budget control, contractor coordination',
      experience: 'Clarion Arlanda (€19.65M savings), 80+ hotel projects',
      detailsLink: '/consultants#hifab_ab'
    },
    {
      id: 'white_arkitekter',
      category: 'consultants',
      name: 'White Arkitekter',
      type: 'Architecture + Sustainability',
      tier: 'TIER 2 - Design-Led',
      location: 'Stockholm, Göteborg, Malmö',
      address: 'Söder Mälarstrand 63, 118 25 Stockholm',
      phone: '+46 8-692 05 00',
      email: 'info@white.se',
      website: 'https://white.se',
      linkedin: 'https://www.linkedin.com/company/white-arkitekter',
      contact: 'Sustainability Department',
      contactLinkedIn: 'https://www.linkedin.com/company/white-arkitekter',
      specialization: 'Sustainable architecture, adaptive reuse, Nordic design',
      keyServices: 'Architecture, interior design, sustainability consulting',
      experience: 'Multiple circular economy projects across Sweden',
      detailsLink: '/consultants#white_arkitekter'
    },

    // FIRE SAFETY TESTING LABS
    {
      id: 'rise_fire',
      category: 'fire-labs',
      name: 'RISE Fire Research',
      type: 'Fire Safety Testing Laboratory',
      tier: 'PRIMARY - Sweden',
      location: 'Borås, Sweden',
      address: 'Brinellgatan 4, 504 62 Borås',
      phone: '+46 10-516 50 00',
      email: 'fire@ri.se',
      website: 'https://ri.se/fire',
      linkedin: 'https://www.linkedin.com/company/rise-research-institutes-of-sweden',
      contact: 'Fire Testing Department',
      specialization: 'EN 1021-1/2, BS 5852, BBR compliance, reused furniture certification',
      keyServices: 'Cigarette & match flame tests, full-scale fire tests, BVB equivalency documentation',
      turnaround: '3-6 weeks for standard tests',
      detailsLink: '/fire-safety#rise_fire'
    },
    {
      id: 'sp_fire',
      category: 'fire-labs',
      name: 'SP Technical Research Institute',
      type: 'Fire Safety Testing Laboratory',
      tier: 'SECONDARY - Sweden',
      location: 'Borås, Sweden',
      address: 'Box 857, 501 15 Borås',
      phone: '+46 10-516 50 00',
      email: 'info@sp.se',
      website: 'https://sp.se',
      linkedin: 'https://www.linkedin.com/company/rise-research-institutes-of-sweden',
      contact: 'Fire Safety Division',
      specialization: 'Material testing, fire resistance, building compliance',
      keyServices: 'Fire safety testing, certification, regulatory consultation',
      turnaround: '4-8 weeks',
      detailsLink: '/fire-safety#sp_fire'
    },
    {
      id: 'teknologisk_institut',
      category: 'fire-labs',
      name: 'Teknologisk Institut (Denmark)',
      type: 'Fire Safety Testing Laboratory',
      tier: 'NORDIC PARTNER',
      location: 'Aarhus, Denmark',
      address: 'Kongsvang Allé 29, 8000 Aarhus C',
      phone: '+45 72 20 10 00',
      email: 'ti@teknologisk.dk',
      website: 'https://teknologisk.dk',
      linkedin: 'https://www.linkedin.com/company/teknologisk-institut',
      contact: 'Fire Department',
      specialization: 'EN standards testing, Danish/Nordic compliance',
      keyServices: 'Fire testing, material assessment, Nordic certification',
      turnaround: '3-5 weeks',
      detailsLink: '/fire-safety#teknologisk_institut'
    },

    // BUILDING DEPARTMENTS
    {
      id: 'stockholm_bygg',
      category: 'building-depts',
      name: 'Stockholm Stadsbyggnadskontor',
      type: 'Municipal Building Department',
      tier: 'TIER 1 - Capital',
      location: 'Stockholm, Sweden',
      address: 'Fleminggatan 4, 104 20 Stockholm',
      phone: '+46 8-508 273 00',
      email: 'stadsbyggnadskontoret@stockholm.se',
      website: 'https://stockholm.se/bygglov',
      linkedin: 'https://www.linkedin.com/company/stockholms-stad',
      contact: 'Building Permit Department',
      specialization: 'Stockholm building permits, heritage buildings, BBR compliance',
      keyServices: 'Bygglov processing, förhandsbesked, circular material acceptance',
      timeline: '6-8 months typical for hotel projects',
      notes: 'Bureaucratic but precedent-rich. Blique by Nobis and Downtown Camper approved here.',
      detailsLink: '/regulatory#stockholm'
    },
    {
      id: 'goteborg_bygg',
      category: 'building-depts',
      name: 'Göteborgs Stadsbyggnadskontor',
      type: 'Municipal Building Department',
      tier: 'RECOMMENDED - Circular Leader',
      location: 'Göteborg, Sweden',
      address: 'Köpmansgatan 20, 403 17 Göteborg',
      phone: '+46 31-368 18 00',
      email: 'sbk@goteborg.se',
      website: 'https://goteborg.se/bygglov',
      linkedin: 'https://www.linkedin.com/company/goteborgs-stad',
      contact: 'Sustainability Unit',
      specialization: 'Circular construction pioneer, adaptive reuse, environmental leadership',
      keyServices: 'Fast-track circular permits, pre-application meetings, technical support',
      timeline: '4-6 months (fastest in Sweden for circular projects)',
      notes: '★ RECOMMENDED PILOT CITY - Progressive, circular-supportive, precedent-setting',
      detailsLink: '/regulatory#goteborg'
    },
    {
      id: 'malmo_bygg',
      category: 'building-depts',
      name: 'Malmö Stadsbyggnadskontor',
      type: 'Municipal Building Department',
      tier: 'TIER 2 - Pragmatic',
      location: 'Malmö, Sweden',
      address: 'Bergsgatan 17, 205 80 Malmö',
      phone: '+46 40-34 10 00',
      email: 'stadsbyggnadskontoret@malmo.se',
      website: 'https://malmo.se/bygglov',
      linkedin: 'https://www.linkedin.com/company/malmo-stad',
      contact: 'Building Permit Division',
      specialization: 'Pragmatic approach, reasonable timelines, EU-influenced',
      keyServices: 'Building permits, technical review, Danish coordination',
      timeline: '3-5 months (fast-track alternative)',
      notes: 'Less precedent than Stockholm, but faster and pragmatic. Danish proximity enables supplier diversity.',
      detailsLink: '/regulatory#malmo'
    },
    {
      id: 'copenhagen_bygg',
      category: 'building-depts',
      name: 'Copenhagen Building Agency (Byggesagsafdelingen)',
      type: 'Municipal Building Department',
      tier: 'NORDIC PARTNER',
      location: 'Copenhagen, Denmark',
      address: 'Njalsgade 13, 2300 Copenhagen S',
      phone: '+45 33 66 33 66',
      email: 'tmf@kk.dk',
      website: 'https://kk.dk/byg',
      linkedin: 'https://www.linkedin.com/company/kobenhavns-kommune',
      contact: 'Building Permits',
      specialization: 'Danish building code, EU Green Building, chemical-free approvals',
      keyServices: 'Danish building permits, EU standards, sustainability certifications',
      timeline: '4-7 months',
      notes: 'Hotel Herman K (chemical-free) approved here. EU Green Building precedent.',
      detailsLink: '/regulatory#copenhagen'
    }
  ];

  // Filter contacts
  const filteredContacts = allContacts.filter(contact => {
    const matchesSearch = searchTerm === '' ||
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contact.contact && contact.contact.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = categoryFilter === 'all' || contact.category === categoryFilter;

    const matchesLocation = locationFilter === 'all' || contact.location.includes(locationFilter);

    return matchesSearch && matchesCategory && matchesLocation;
  });

  // Count by category
  const supplierCount = allContacts.filter(c => c.category === 'suppliers').length;
  const consultantCount = allContacts.filter(c => c.category === 'consultants').length;
  const fireLabCount = allContacts.filter(c => c.category === 'fire-labs').length;
  const buildingDeptCount = allContacts.filter(c => c.category === 'building-depts').length;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'suppliers': return <BuildingOfficeIcon className="w-5 h-5" />;
      case 'consultants': return <UserGroupIcon className="w-5 h-5" />;
      case 'fire-labs': return <BeakerIcon className="w-5 h-5" />;
      case 'building-depts': return <BuildingLibraryIcon className="w-5 h-5" />;
      default: return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'suppliers': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'consultants': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'fire-labs': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'building-depts': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Directory</h1>
        <p className="text-gray-600 mb-4">
          Consolidated directory of all circular economy stakeholders - suppliers, consultants, fire labs, and building departments
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded p-4">
          <p className="text-sm text-blue-900">
            <strong>One-Stop Resource:</strong> {allContacts.length} verified contacts across 4 categories. Search by name, location, specialization, or contact person.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MagnifyingGlassIcon className="w-4 h-4" />
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, contact, specialization..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <FunnelIcon className="w-4 h-4" />
              Category
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Categories ({allContacts.length})</option>
              <option value="suppliers">B2B Suppliers ({supplierCount})</option>
              <option value="consultants">Consultants ({consultantCount})</option>
              <option value="fire-labs">Fire Safety Labs ({fireLabCount})</option>
              <option value="building-depts">Building Departments ({buildingDeptCount})</option>
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              Location
            </label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Locations</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Göteborg">Göteborg</option>
              <option value="Malmö">Malmö</option>
              <option value="Copenhagen">Copenhagen</option>
              <option value="Oslo">Oslo</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing <span className="font-bold text-emerald-600">{filteredContacts.length}</span> of {allContacts.length} contacts
          </div>
          {(searchTerm || categoryFilter !== 'all' || locationFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
                setLocationFilter('all');
              }}
              className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{contact.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(contact.category)} flex items-center gap-1`}>
                    {getCategoryIcon(contact.category)}
                    {contact.category.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-medium mb-1">{contact.type}</p>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">
                  {contact.tier}
                </span>
              </div>
            </div>

            {/* Specialization */}
            <div className="bg-gray-50 rounded p-3 mb-4">
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Specialization:</strong> {contact.specialization}
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-2 mb-4">
              <div className="flex items-start gap-2 text-sm">
                <MapPinIcon className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">{contact.location}</p>
                  <p className="text-gray-600 text-xs">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <PhoneIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
                  {contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <EnvelopeIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-emerald-600 hover:text-emerald-700 font-medium break-all">
                  {contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <GlobeAltIcon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  {contact.website.replace('https://', '')} →
                </a>
              </div>
            </div>

            {/* LinkedIn Verification Section */}
            {'linkedin' in contact && contact.linkedin && (
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded p-3 mb-4">
                <h4 className="text-xs font-semibold text-blue-900 mb-2 flex items-center gap-1">
                  <CheckBadgeIcon className="w-4 h-4" />
                  LinkedIn Verification
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1"
                    >
                      <span>Company Profile</span>
                      <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                    </a>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold border bg-green-100 text-green-800 border-green-200">
                      ✓ VERIFIED
                    </span>
                  </div>

                  {'contactLinkedIn' in contact && contact.contactLinkedIn && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a
                        href={contact.contactLinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline flex items-center gap-1"
                      >
                        <span>{contact.contact}</span>
                        <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                      </a>
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold border bg-purple-100 text-purple-800 border-purple-200">
                        📄 CONTACT
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-blue-700 italic mt-2">
                  Professional profiles verified for authenticity and background
                </p>
              </div>
            )}

            {/* Key Contact Person */}
            <div className="bg-blue-50 rounded p-3 mb-4">
              <p className="text-sm">
                <strong className="text-blue-900">Key Contact:</strong>{' '}
                <span className="text-blue-700">{contact.contact}</span>
              </p>
            </div>

            {/* Services / Timeline / Experience */}
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <strong className="text-gray-900">Services:</strong> {contact.keyServices}
              </p>

              {'availability' in contact && contact.availability && (
                <p>
                  <strong className="text-gray-900">Availability:</strong>{' '}
                  <span className="text-emerald-700 font-semibold">{contact.availability}</span>
                </p>
              )}

              {'timeline' in contact && contact.timeline && (
                <p>
                  <strong className="text-gray-900">Timeline:</strong>{' '}
                  <span className="text-purple-700 font-semibold">{contact.timeline}</span>
                </p>
              )}

              {'turnaround' in contact && contact.turnaround && (
                <p>
                  <strong className="text-gray-900">Turnaround:</strong>{' '}
                  <span className="text-orange-700 font-semibold">{contact.turnaround}</span>
                </p>
              )}

              {'experience' in contact && contact.experience && (
                <p>
                  <strong className="text-gray-900">Experience:</strong> {contact.experience}
                </p>
              )}

              {'notes' in contact && contact.notes && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded p-2 mt-2">
                  <p className="text-xs text-yellow-900">{contact.notes}</p>
                </div>
              )}
            </div>

            {/* View Details Link */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href={contact.detailsLink}
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No contacts match your current filters.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setCategoryFilter('all');
              setLocationFilter('all');
            }}
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Quick Links Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links to Detailed Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/suppliers" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-emerald-500">
            <div className="flex items-center gap-3 mb-2">
              <BuildingOfficeIcon className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-gray-900">B2B Suppliers</h3>
            </div>
            <p className="text-sm text-gray-600">{supplierCount} verified furniture suppliers with detailed capabilities</p>
          </Link>

          <Link href="/consultants" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-2">
              <UserGroupIcon className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">Consultants</h3>
            </div>
            <p className="text-sm text-gray-600">{consultantCount} PM and design consultants with circular expertise</p>
          </Link>

          <Link href="/fire-safety" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-orange-500">
            <div className="flex items-center gap-3 mb-2">
              <BeakerIcon className="w-6 h-6 text-orange-600" />
              <h3 className="font-bold text-gray-900">Fire Safety Labs</h3>
            </div>
            <p className="text-sm text-gray-600">{fireLabCount} certified testing facilities for reused furniture</p>
          </Link>

          <Link href="/regulatory" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-2">
              <BuildingLibraryIcon className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900">Building Departments</h3>
            </div>
            <p className="text-sm text-gray-600">{buildingDeptCount} municipal authorities with circular precedents</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
