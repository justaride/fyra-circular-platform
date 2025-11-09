// Verification URL helpers for Phase 2 source documentation

// Testing Laboratory URLs
export function getTestingLabURL(labName: string): string | null {
  const labLower = labName.toLowerCase();
  if (labLower.includes('rise')) return 'https://www.ri.se/en/fire-research';
  if (labLower.includes('sp')) return 'https://www.ri.se/en'; // SP merged into RISE
  if (labLower.includes('intertek')) return 'https://www.intertek.com/testing/fire/';
  if (labLower.includes('warringtonfire')) return 'https://www.element.com/services/disciplines/fire-testing';
  return null;
}

// Fire Safety Standard URLs
export function getFireStandardURL(standard: string): string | null {
  const stdUpper = standard.toUpperCase().replace(/\s/g, '');
  if (stdUpper.includes('EN1021')) return 'https://www.en-standard.eu/bs-en-1021-1-2014-furniture-assessment-of-the-ignitability-of-upholstered-furniture-ignition-source-smouldering-cigarette/';
  if (stdUpper.includes('BS5852')) return 'https://www.en-standard.eu/bs-5852-2006-methods-of-test-for-assessment-of-the-ignitability-of-upholstered-seating-by-smouldering-and-flaming-ignition-sources/';
  if (stdUpper.includes('EN13501')) return 'https://www.en-standard.eu/bs-en-13501-1-2018-fire-classification-of-construction-products-and-building-elements-classification-using-data-from-reaction-to-fire-tests/';
  if (stdUpper.includes('ISO9705')) return 'https://www.iso.org/standard/41069.html';
  return null;
}

// Framework Agreement URLs
export function getFrameworkAgreementURL(framework: string): string | null {
  const fwLower = framework.toLowerCase();
  if (fwLower.includes('kammarkollegiet')) return 'https://www.kammarkollegiet.se/english';
  if (fwLower.includes('skl')) return 'https://www.skr.se/skr/englishpages.411.html';
  if (fwLower.includes('statens inköpscentral')) return 'https://www.kammarkollegiet.se/';
  return null;
}

// Professional Certification URLs
export function getProfessionalCertURL(certification: string): string | null {
  const certLower = certification.toLowerCase();
  if (certLower.includes('breeam ap') || certLower.includes('breeam assessor')) {
    return 'https://www.breeam.com/';
  }
  if (certLower.includes('leed ap')) {
    return 'https://www.usgbc.org/credentials';
  }
  if (certLower.includes('well ap')) {
    return 'https://www.wellcertified.com/certification/ap';
  }
  if (certLower.includes('miljöbyggnad')) {
    return 'https://www.sgbc.se/certifiering/miljobyggnad/';
  }
  return null;
}

// Professional Association URLs
export function getProfessionalAssociationURL(association: string): string | null {
  const assocLower = association.toLowerCase();
  if (assocLower.includes('sveriges arkitekter')) {
    return 'https://www.arkitekt.se/';
  }
  if (assocLower.includes('svenska konsultföretagen') || assocLower.includes('skf')) {
    return 'https://www.konsultforetagen.se/';
  }
  if (assocLower.includes('svensk byggtjänst')) {
    return 'https://byggtjanst.se/';
  }
  if (assocLower.includes('sgbc') || assocLower.includes('sweden green building council')) {
    return 'https://www.sgbc.se/';
  }
  return null;
}

// Company Registry URLs
export function getCompanyRegistryURL(country: string): string {
  const countryLower = country.toLowerCase();
  if (countryLower.includes('sweden') || countryLower === 'se') {
    return 'https://www.allabolag.se/';
  }
  if (countryLower.includes('denmark') || countryLower === 'dk') {
    return 'https://datacvr.virk.dk/';
  }
  if (countryLower.includes('norway') || countryLower === 'no') {
    return 'https://www.brreg.no/';
  }
  return 'https://www.allabolag.se/'; // Default to Sweden
}

// Extract testing labs mentioned in text
export function extractTestingLabs(text: string): string[] {
  const labs: string[] = [];
  if (/\bRISE\b/i.test(text)) labs.push('RISE');
  if (/\bSP\b/i.test(text)) labs.push('SP');
  if (/\bIntertek\b/i.test(text)) labs.push('Intertek');
  if (/\bWarrington\s*Fire\b/i.test(text)) labs.push('WarringtonFire');
  return labs;
}

// Extract fire standards mentioned in text
export function extractFireStandards(text: string): string[] {
  const standards: string[] = [];
  if (/EN\s*1021/i.test(text)) standards.push('EN 1021');
  if (/BS\s*5852/i.test(text)) standards.push('BS 5852');
  if (/EN\s*13501/i.test(text)) standards.push('EN 13501');
  if (/ISO\s*9705/i.test(text)) standards.push('ISO 9705');
  return standards;
}

// Extract framework agreements mentioned in text
export function extractFrameworks(text: string): string[] {
  const frameworks: string[] = [];
  if (/Kammarkollegiet/i.test(text)) frameworks.push('Kammarkollegiet');
  if (/SKL/i.test(text)) frameworks.push('SKL');
  if (/Statens\s*inköpscentral/i.test(text)) frameworks.push('Statens inköpscentral');
  return frameworks;
}

// Helper to get all verification sources from supplier data
export interface VerificationSource {
  title: string;
  url: string;
  type: 'official' | 'verified' | 'primary' | 'secondary';
  description?: string;
}

export function getSupplierVerificationSources(supplier: any): VerificationSource[] {
  const sources: VerificationSource[] = [];

  // Company website as primary source
  if (supplier.contact?.website) {
    sources.push({
      title: `${supplier.name} Official Website`,
      url: supplier.contact.website,
      type: 'primary',
      description: 'Company website and portfolio'
    });
  }

  // Testing lab partnerships
  const fireSafetyText = supplier.fireSafety?.capabilities || '';
  const certText = (supplier.certifications || []).join(' ');
  const combinedText = `${fireSafetyText} ${certText}`;

  const labs = extractTestingLabs(combinedText);
  labs.forEach(lab => {
    const url = getTestingLabURL(lab);
    if (url) {
      sources.push({
        title: `${lab} Fire Testing Laboratory`,
        url,
        type: 'official',
        description: 'Independent fire safety testing'
      });
    }
  });

  // Fire safety standards
  const standards = extractFireStandards(combinedText);
  standards.forEach(std => {
    const url = getFireStandardURL(std);
    if (url) {
      sources.push({
        title: `${std} Fire Safety Standard`,
        url,
        type: 'official',
        description: 'European/International fire standard'
      });
    }
  });

  // Framework agreements
  const frameworks = extractFrameworks(certText);
  frameworks.forEach(fw => {
    const url = getFrameworkAgreementURL(fw);
    if (url) {
      sources.push({
        title: `${fw} Framework Agreement`,
        url,
        type: 'official',
        description: 'Swedish public procurement framework'
      });
    }
  });

  // Nordic Swan / ISO certifications
  if (certText.toLowerCase().includes('nordic swan') || certText.toLowerCase().includes('svanen')) {
    sources.push({
      title: 'Nordic Swan Ecolabel',
      url: 'https://www.nordic-ecolabel.org/',
      type: 'official',
      description: 'Official Nordic environmental certification'
    });
  }

  if (/ISO\s*14001/i.test(certText)) {
    sources.push({
      title: 'ISO 14001 Environmental Management',
      url: 'https://www.iso.org/iso-14001-environmental-management.html',
      type: 'official',
      description: 'International environmental standard'
    });
  }

  // Company registry
  if (supplier.location) {
    const country = supplier.location.includes('Sweden') ? 'Sweden' :
                   supplier.location.includes('Denmark') ? 'Denmark' :
                   supplier.location.includes('Norway') ? 'Norway' : 'Sweden';
    sources.push({
      title: `${country} Company Registry`,
      url: getCompanyRegistryURL(country),
      type: 'verified',
      description: 'Verify company registration and status'
    });
  }

  return sources;
}

// Helper to get consultant verification sources
export function getConsultantVerificationSources(consultant: any): VerificationSource[] {
  const sources: VerificationSource[] = [];

  // Company website
  if (consultant.website) {
    sources.push({
      title: `${consultant.name} Official Website`,
      url: consultant.website,
      type: 'primary',
      description: 'Company portfolio and case studies'
    });
  }

  // BREEAM projects (if they have BREEAM experience)
  const certText = (consultant.certifications || []).join(' ');
  if (/BREEAM/i.test(certText) || consultant.circularEconomyExperience) {
    sources.push({
      title: 'BREEAM Certified Projects Database',
      url: 'https://www.breeam.com/projects/explore/',
      type: 'official',
      description: 'Search for verified BREEAM certified projects'
    });
  }

  // LEED projects
  if (/LEED/i.test(certText)) {
    sources.push({
      title: 'LEED Certified Projects',
      url: 'https://www.usgbc.org/projects',
      type: 'official',
      description: 'USGBC official project database'
    });
  }

  // Professional associations
  if (/Sveriges Arkitekter/i.test(certText) || consultant.name.toLowerCase().includes('arkitekt')) {
    sources.push({
      title: 'Sveriges Arkitekter',
      url: 'https://www.arkitekt.se/',
      type: 'verified',
      description: 'Swedish architectural association'
    });
  }

  if (/Konsultföretagen/i.test(certText) || consultant.tier === 1) {
    sources.push({
      title: 'Konsultföretagen (Swedish Association of Consulting Companies)',
      url: 'https://www.konsultforetagen.se/',
      type: 'verified',
      description: 'Professional association for consultants'
    });
  }

  // SGBC for Swedish consultants with green building focus
  if (consultant.circularEconomyExperience && consultant.location?.includes('Sweden')) {
    sources.push({
      title: 'Sweden Green Building Council',
      url: 'https://www.sgbc.se/',
      type: 'verified',
      description: 'Swedish green building certification body'
    });
  }

  return sources;
}
