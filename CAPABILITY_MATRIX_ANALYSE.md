# 📊 ANALYSE: CAPABILITY MATRIX DOKUMENT
## Ekstraksjon for Nettside-struktur

**Dokument:** 2. FYRA B2B OPERATOR CAPABILITY MATRIX.docx
**Dato:** November 8, 2025
**Formål:** Identifisere relevant informasjon for nettside-implementering

---

## 🎯 EXECUTIVE SUMMARY

**Dokumenttype:** Beslutningsstøtte-verktøy for prosjektbasert leverandørvalg
**Omfang:** 1,589 linjer, 4 hoveddeler
**Primær verdi:** Scenario-basert veiledning + Gap-analyse + Partnerskap-strategier

### Overordnet vurdering av ekstraherbarhet:

| Kategori | Ekstraherbar? | Prioritet | Implementeringskompleksitet |
|----------|---------------|-----------|---------------------------|
| **Scenario-baserte anbefalinger** | ✅ JA | 🔴 HØY | 🟡 MEDIUM |
| **Gap-analyse detaljer** | ⚠️ DELVIS | 🟡 MEDIUM | 🔴 HØY |
| **Partnerskap-strategier** | ❌ NEI | 🟢 LAV | - |
| **Fire safety veiledning** | ✅ JA | 🔴 KRITISK | 🟡 MEDIUM |

---

## 📋 DEL 1: SCENARIO-BASERT SELEKSJONSMATRISE

### Struktur
Dokumentet inneholder **5 detaljerte prosjekt-scenarier**:

1. **Rush Project (Akutt/Fast-Track)**
2. **Large Hotel Renovation (100-200 rooms)**
3. **Cross-Border Project (Finland → Sweden)**
4. **Boutique High-End (Unike gjenstander)**
5. **Fire-Critical Spaces (Offentlige områder)**

### Ekstraherbarhet: ✅ HØY VERDI

#### Hva dokumentet gir:

**For hvert scenario:**
- ✅ Anbefalt primær leverandør
- ✅ Backup/sekundære leverandører
- ✅ Kritiske suksessfaktorer
- ✅ Gaps/risikoer med mitigering
- ✅ Prosjektstruktur (månedlig timeline)
- ✅ Kostnadsimplikasjoner
- ✅ Anbefalte kontraktstrukturer

#### Implementeringsforslag for nettside:

**Option A - Ny side: "Project Scenarios" / "Prosjekt-scenarier"**

```typescript
// Data structure eksempel
interface ProjectScenario {
  id: string;
  name: string;
  clientContext: string;
  recommendedPrimarySupplier: string;
  backupSuppliers: string[];
  criticalSuccessFactors: string[];
  gapsAndRisks: {
    risk: string;
    mitigation: string;
  }[];
  timeline: {
    phase: string;
    duration: string;
    tasks: string[];
  }[];
  costImplications: string;
  contractRecommendations: string[];
}
```

**Brukeropplevelse:**
1. Bruker velger prosjekttype (dropdown eller cards)
2. System viser anbefalt leverandør-kombinasjon
3. Ekspanderbare seksjoner for risikoer, timeline, kontrakter
4. Lenker til relevante leverandører i supplier directory

**Visualisering:**
- Scenario cards med ikoner (🔥 rush, 🏢 large, 🌍 cross-border, ✨ boutique, 🚨 fire-critical)
- Timeline visualisering (Gantt-lignende eller stepped progress)
- Risk matrix (severity vs. likelihood)

---

### SCENARIO 1: RUSH PROJECT - Detaljert innhold

**Anbefalt struktur for nettside:**

```json
{
  "scenario": "rush_project",
  "title": "Rush Project (Akutt renovering)",
  "context": "Hotell trenger rask møbelerstatning pga. uventet hendelse (brann, oppkjøp, rebranding deadline)",
  "primarySupplier": "YLLW Factory",
  "rationale": "Største lager, Stockholm tilstedeværelse, dokumentert hospitality erfaring, turnkey tjenester",
  "backupSuppliers": [
    {
      "name": "Rekomo AB",
      "condition": "Hvis budsjettbevisst"
    },
    {
      "name": "Input Interiör",
      "condition": "Hvis behov for ny+brukt mix"
    }
  ],
  "criticalSuccessFactors": [
    "Kontakt innen 48 timer etter behovsidentifisering",
    "Aksepter 'familie av stiler' vs. perfekt matching",
    "Budsjett for 10-20% premium på rush-ordrer",
    "Forhåndsgodkjenn kvalitetsgrader (B-grade akseptabel for hastighet)"
  ],
  "gaps": [
    {
      "gap": "Brannserti

fikasjon gap",
      "timeline": "3-8 uker",
      "mitigation": "Bruk gjenstander i lavrisiko-områder (backoffice, kontorer) eller gjesteværelser (lavere brannkrav enn offentlige rom)"
    },
    {
      "gap": "Volumsbegrensninger",
      "issue": "Selv store operatører har kanskje ikke 100+ matchende gjenstander umiddelbart",
      "mitigation": "Fasert levering (50 rom Uke 1, 50 rom Uke 4)"
    },
    {
      "gap": "Kvalitetsvariabilitet",
      "issue": "Hastighet = mindre selektiv sourcing",
      "mitigation": "Fyra site-inspeksjon av lager før valg"
    }
  ],
  "timeline": "2-4 uker typisk"
}
```

**Nettside-komponent:**
- **Scenario card** med 🔥 ikon
- **Supplier recommendation** med rationale
- **Expandable risk section** med mitigation strategies
- **Link** til YLLW Factory supplier profil

---

### SCENARIO 2: LARGE HOTEL RENOVATION - Kritisk informasjon

**Nøkkelinnsikt fra dokumentet:**

**Dual-Supplier Strategy:**
```
YLLW: Offentlige områder, restaurant, lobby (design-kritisk)
Input/Greenified: Gjesteværelsesmøbler (volum)
Rationale: Ingen enkelt operatør kan pålitelig levere 100+ senger
```

**KRITISK GAP - Hotel Bed Frames:**
- ❌ INGEN operatør har hotell-senger på lager
- 💰 25-30% av rom-budsjett
- 🎯 1.2-2.25M SEK for 150-roms hotell

**Implementeringsforslag:**

**Ny feature: "Project Type Wizard"**
```typescript
interface ProjectWizard {
  step1: {
    question: "Hvor mange rom skal renoveres?",
    options: ["1-30 rom", "30-100 rom", "100-200 rom", "200+ rom"]
  },
  step2: {
    question: "Hva er tidsrammen?",
    options: ["Akutt (<4 uker)", "Normal (2-6 måneder)", "Fleksibel (6-12 måneder)"]
  },
  step3: {
    question: "Hva er budsjett-prioritet?",
    options: ["Premium kvalitet", "Balansert", "Kostnadsoptimalisert"]
  },
  result: {
    recommendedStrategy: "Dual-supplier (YLLW + Input)",
    keyConsiderations: [...],
    timeline: {...},
    estimatedCost: "...",
    criticalGaps: [...]
  }
}
```

---

### SCENARIO 5: FIRE-CRITICAL SPACES - EKSTREM VIKTIG! 🚨

**Dette er KRITISK informasjon som MÅ på nettside!**

#### Three-Tier Fire Safety Approach

**TIER 1 - Lav-Risiko Gjenbruk (Minimal Testing):**
```json
{
  "tier": 1,
  "productTypes": [
    "Metall/glass møbler (iboende ikke-brennbare)",
    "Solid tre-møbler (tykk hardtre = naturlig brannsikker)",
    "Betong/stein dekor"
  ],
  "placement": "Alle brannkritiske områder (lobbyer, korridorer, restauranter)",
  "testing": "Kun Material Safety Data Sheets (MSDS) - ingen flammetesting",
  "operators": "YLLW, Input, Rekomo, RP (alle Tier 1-2)",
  "cost": "Minimal dokumentasjonsbyrde"
}
```

**TIER 2 - Medium-Risiko (Strategisk Testing):**
```json
{
  "tier": 2,
  "productTypes": [
    "Remobler med NY brannsikker tekstil",
    "Kasse-møbler med minimal tekstil",
    "Hard seating (tre-stoler med tynne puter)"
  ],
  "placement": "Restauranter, konferanserom, lobbyer (IKKE korridorer)",
  "testing": "EN 1021-1 (sigaretttest) + potensielt EN 1021-2 (fyrstikktest)",
  "cost": "18,000-30,000 SEK per tekstiltype",
  "strategy": "YLLW remøblerer med Kvadrat/Gabriel/Maharam brannsikre tekstiler",
  "timeline": "8-12 uker"
}
```

**TIER 3 - Høy-Risiko (UNNGÅ i fluktveier!):**
```json
{
  "tier": 3,
  "productTypes": [
    "Fullt polstret møbler (sofaer, lenestol, tykke puter)",
    "Vintage tekstiler (gardiner, tapisserier)",
    "Ukjent opprinnelse"
  ],
  "placement": "❌ IKKE korridorer - bruk i gjesteværelser isteden",
  "testing": "Full Euroclass BS 5852 Crib 5",
  "cost": "45,000-70,000 SEK per produkt; 6-8 uker",
  "recommendation": "UNNGÅ i fluktveier; bruk i gjesteværelser"
}
```

#### Implementeringsforslag:

**NY SIDE: "Fire Safety Guide" / "Brannsikkerhets-guide"**

**Komponenter:**
1. **Interactive Fire Risk Calculator**
   - Bruker velger produkttype
   - System viser Tier, testing requirements, cost
   - Anbefaler placement (korridorer vs. gjesteværelser)

2. **Testing Cost Calculator**
   ```
   Antall produkttyper: [___]
   Testing nivå: [Tier 1 / Tier 2 / Tier 3]
   → Estimert kostnad: XX,XXX SEK
   → Estimert tid: X-X uker
   ```

3. **Compliance Flowchart**
   ```
   START: Hvilket rom?
   → Korridor → Kun Tier 1-2
   → Gjesteværelse → Alle tiers OK (med sprinkler)
   → Restaurant → Tier 1-2 anbefalt
   ```

4. **Testing Lab Directory**
   - RISE (Borås)
   - SP (Stockholm)
   - Kontaktinfo, priser, lead times

---

## 📋 DEL 2: COMPREHENSIVE GAP ANALYSIS

### Struktur
Dokumentet identifiserer **12 kritiske gaps** i markedet:

#### Capability Gaps (Operational):
1. **Hotel Bed Frames** 🔴 KRITISK
2. **Lighting Fixture Refurbishment** 🟡 MEDIUM
3. **Textile Refurbishment** 🟡 MEDIUM
4. **Installation Services (Mixed-Source)** 🟢 LAV-MEDIUM

#### Geographic Gaps:
5. **Northern Sweden (Norrland)** 🔴 HØY
6. **Small Cities (Örebro, Linköping, etc.)** 🟡 MEDIUM

### Ekstraherbarhet: ⚠️ DELVIS

**Hva er nyttig for nettside:**
- ✅ Gap-beskrivelser (hva mangler i markedet)
- ✅ Impact severity (kritisk vs. medium vs. lav)
- ✅ Mitigerings-strategier
- ❌ Fyra-spesifikke partnership strategier (interne)

#### Implementeringsforslag:

**Option A - Integrer i Supplier Profiles**

Legg til "Known Gaps" seksjoner i leverandør-profiler:

```json
{
  "supplierId": "yllw_factory",
  "knownGaps": [
    {
      "category": "Hotel Bed Frames",
      "severity": "CRITICAL",
      "description": "YLLW har ikke hotell-senger på lager i volum",
      "workarounds": [
        "Fokus på headboards (ny seng-ramme, brukt headboard)",
        "Mix 20% brukte senger (suiter), 80% nye (standard rom)",
        "Co-development partnership (pilot program)"
      ],
      "impactOnBudget": "Kan ikke gjenbruke 25-30% av rom-budsjett (senger)"
    }
  ]
}
```

**Option B - Dedikert "Market Gaps" Side**

**Ny side: "Known Limitations" / "Markedsbegrensninger"**

Transparens-fokusert side som viser:
- ❌ Hva som IKKE er tilgjengelig i svensk gjenbruk-markedet
- 🔧 Workarounds og alternativer
- 📈 Fremtidige utviklingsmuligheter

**Brukerverdi:**
- Realistiske forventninger
- Proaktiv problemløsning
- Viser ekspertise og ærlighet

---

### GAP 1.1: HOTEL BED FRAMES - Detaljert analyse

**Fra dokumentet:**

```
Evidence:
- YLLW, Input, Rekomo, RP fokuserer ALLE på kontormøbler (ingen senger)
- Kontor-likvidasjoner inkluderer ikke boligmøbler
- Hotellsenger = custom hospitality-grade (forsterket, 200kg+ load, attachment systems)

Impact: KRITISK
- Senger = største enkelt møbel-utgift (8,000-15,000 SEK/enhet ny)
- 150-roms hotell = 1.2-2.25M SEK seng-budsjett
- Manglende evne til å gjenbruke senger begrenser total sirkulær % til 60-75%

Root Causes:
- Hygiene Perception Barrier (hoteller/gjester motstår "brukte senger")
- Ingen inspeksjons-standarder
- Logistikk-utfordring (store/tunge)
- Begrenset likvidasjons-pipeline
```

**Proposed Solution - Fyra + YLLW Co-Development:**

**Phase 1 - Pilot (Months 1-6):**
- Utvikle inspeksjonsprotokoll
- Skaffe 20-30 seng-rammer (premium brands: Hästens, Duxiana)
- Refurbishment process development
- Load testing (200kg+)

**Phase 2 - Market Validation (Months 7-12):**
- Pilot project: 50% brukte senger, 50% nye (kontroll)
- Track complaints, structural failures
- Cost savings: 40-50% vs. nye

**Phase 3 - Scale-Up (Year 2+):**
- YLLW Product Launch: "Hotel Bed Reuse Program"
- Target: 200-500 senger/år

#### Nettside-implementering:

**På YLLW Factory supplier page:**

```markdown
### 🚧 Development Opportunity: Hotel Bed Frames

**Current Status:** Not available
**Timeline:** Pilot program planned 2025-2026
**Alternative Solutions:**
- ✅ Focus on headboard reuse (new frame + reused/custom headboard)
- ✅ Mix: 20% reused beds (suites), 80% new (standard rooms)
- ✅ Cost savings on headboard portion: 60% vs. new

**Partner with Fyra:** Co-development opportunity for first-mover advantage
```

---

## 📋 DEL 3 & 4: PARTNERSHIP STRATEGIES & PRIORITY MATRIX

### Struktur
- **Part 3:** Detaljerte partnerskap-utviklings-strategier for hver leverandør
- **Part 4:** Priority matrix for partnerskap-utvikling

### Ekstraherbarhet: ❌ LAV (Intern Fyra-strategi)

**Hvorfor ikke ekstrahere:**
- Dette er **Fyra's interne forretningsstrategi**
- Inneholder proprietær informasjon om partnerskap-planer
- Ikke relevant for eksterne brukere av nettsiden

**Hva som KAN brukes:**
- ✅ Operator capability assessments (hva leverandører er gode/dårlige på)
- ✅ Future development areas (som "market opportunities")

#### Mulig implementering (filtrert):

**I supplier profiles - legg til "Future Development" seksjoner:**

```json
{
  "supplierId": "input_interior",
  "futureDevelopment": [
    {
      "area": "Hospitality Market Entry",
      "status": "Planned",
      "description": "Expanding from office focus to hotel projects",
      "expectedTimeline": "2025-2026"
    },
    {
      "area": "Fire Safety Systematization",
      "status": "In Development",
      "description": "Building certificate library for common product categories"
    }
  ]
}
```

---

## 🎯 PRIORITERTE IMPLEMENTERINGER

### Tier 1 - KRITISK (Implementer først)

**1. Fire Safety Guide Side** 🚨
- **Hvorfor:** Safety-critical; legal requirement; største risiko
- **Innhold:**
  - Three-Tier approach (Tier 1/2/3)
  - Testing cost calculator
  - Lab directory (RISE, SP)
  - Placement recommendations
- **Kompleksitet:** Medium
- **Verdi:** EKSTREM HØY

**2. Scenario-Based Recommendations** 🎯
- **Hvorfor:** Decision support; immediate user value
- **Innhold:**
  - 5 project scenarios
  - Supplier recommendations per scenario
  - Risk/mitigation strategies
- **Kompleksitet:** Medium-High
- **Verdi:** HØY

---

### Tier 2 - HØYT ANBEFALT (Implementer etter Tier 1)

**3. Project Timeline Visualizations** 📅
- **Hvorfor:** Helps planning; manages expectations
- **Innhold:**
  - Gantt-style timelines for each scenario
  - Critical path highlighting
  - Testing timeline overlays
- **Kompleksitet:** High (visualization)
- **Verdi:** MEDIUM-HIGH

**4. Known Gaps / Limitations Page** ⚠️
- **Hvorfor:** Transparency; realistic expectations
- **Innhold:**
  - Hotel bed frames gap
  - Geographic gaps (Northern Sweden)
  - Workarounds and alternatives
- **Kompleksitet:** Low-Medium
- **Verdi:** MEDIUM

---

### Tier 3 - NICE-TO-HAVE (Fremtidig utvikling)

**5. Interactive Project Wizard** 🧙
- **Hvorfor:** User-friendly; automated recommendations
- **Innhold:**
  - Step-by-step questions
  - Dynamic supplier recommendations
  - Cost/timeline estimates
- **Kompleksitet:** VERY HIGH
- **Verdi:** HIGH (men krever betydelig dev time)

**6. Testing Cost Calculator** 💰
- **Hvorfor:** Budget planning; transparency
- **Innhold:**
  - Product type selection
  - Quantity inputs
  - Testing tier selection
  - Estimated cost output
- **Kompleksitet:** Medium
- **Verdi:** MEDIUM

---

## 📊 DATA EXTRACTION MATRIX

### Hva KAN ekstraheres direkte:

| Data Type | Extractable | Format | Priority |
|-----------|-------------|--------|----------|
| **Scenario descriptions** | ✅ YES | JSON | 🔴 HIGH |
| **Supplier recommendations per scenario** | ✅ YES | JSON | 🔴 HIGH |
| **Fire safety tier system** | ✅ YES | JSON | 🔴 CRITICAL |
| **Testing labs (RISE, SP)** | ✅ YES | JSON | 🟡 MEDIUM |
| **Gap descriptions** | ✅ YES | Markdown | 🟡 MEDIUM |
| **Cost ranges (testing, furniture)** | ✅ YES | Numbers | 🟡 MEDIUM |
| **Timeline estimates** | ✅ YES | Durations | 🟡 MEDIUM |
| **Contract recommendations** | ⚠️ PARTIAL | Markdown | 🟢 LOW |
| **Partnership strategies** | ❌ NO | - | - |

---

## 🚀 ANBEFALT IMPLEMENTERINGSPLAN

### Phase 1 (Uke 1-2): Fire Safety Guide 🚨

**Oppgave 1.1:** Ekstraher fire safety data
```bash
# Create fire_safety_data.json
{
  "tiers": [
    {
      "tier": 1,
      "name": "Low-Risk Reuse",
      "productTypes": [...],
      "testingRequired": "MSDS only",
      "cost": "Minimal",
      "placement": "All fire-critical areas",
      "suppliers": ["YLLW", "Input", "Rekomo", "RP"]
    },
    # ... Tier 2 & 3
  ],
  "testingLabs": [...]
}
```

**Oppgave 1.2:** Bygg Fire Safety page
- `/app/fire-safety/page.tsx`
- Interactive tier selector
- Testing cost estimator
- Lab directory

**Oppgave 1.3:** Oppdater supplier profiles
- Legg til "Fire Safety Capability" badges
- Link til Fire Safety Guide

---

### Phase 2 (Uke 3-4): Scenario-Based Recommendations 🎯

**Oppgave 2.1:** Ekstraher scenario data
```bash
# Create scenarios.json
{
  "scenarios": [
    {
      "id": "rush_project",
      "name": "Rush Project (Akutt)",
      "primarySupplier": "yllw_factory",
      "backupSuppliers": [...],
      "successFactors": [...],
      "gaps": [...],
      "timeline": "2-4 weeks"
    },
    # ... 4 more scenarios
  ]
}
```

**Oppgave 2.2:** Bygg Scenarios page
- `/app/scenarios/page.tsx`
- Scenario cards
- Supplier recommendation links
- Expandable risk sections

---

### Phase 3 (Uke 5-6): Market Gaps & Enhancements ⚠️

**Oppgave 3.1:** Legg til "Known Gaps" i supplier profiles
```typescript
interface Supplier {
  // ... existing fields
  knownGaps: {
    category: string;
    severity: "CRITICAL" | "MEDIUM" | "LOW";
    description: string;
    workarounds: string[];
  }[];
}
```

**Oppgave 3.2:** Oppdater homepage
- Legg til "Project Scenarios" quick access card
- Legg til "Fire Safety Guide" quick access card

---

## 📝 KONKLUSJON & ANBEFALINGER

### Hoved-innsikter:

1. **Capability Matrix er primært et DECISION SUPPORT TOOL**
   - Scenario-based selection = immediate user value
   - Fire safety guidance = critical compliance information
   - Partnership strategies = internal Fyra strategy (ikke for nettside)

2. **Høyest verdi for nettside:**
   - 🔴 **KRITISK:** Fire Safety Three-Tier System
   - 🔴 **HØY:** 5 Project Scenarios med supplier recommendations
   - 🟡 **MEDIUM:** Known gaps/limitations (transparency)
   - 🟢 **LAV:** Partnership development plans (intern info)

3. **Implementeringskompleksitet vs. Verdi:**
   - Fire Safety Guide: Medium kompleksitet, EKSTREM verdi
   - Scenarios page: Medium-High kompleksitet, HØY verdi
   - Interactive wizard: VERY HIGH kompleksitet, HIGH verdi (future)

### Anbefalt tilnærming:

**Gjør IKKE:**
- ❌ Ekstraher Fyra's interne partnership strategier
- ❌ Bygg kompleks interactive wizard i første versjon
- ❌ Dupliser supplier data som allerede eksisterer

**Gjør:**
- ✅ Fokuser på fire safety (CRITICAL compliance info)
- ✅ Implementer scenario-based recommendations (decision support)
- ✅ Vær transparent om gaps (hotel beds, geographic limitations)
- ✅ Lenk scenarios til eksisterende supplier profiles

---

## 🎯 NESTE STEG

1. **Diskusjon med bruker:**
   - Godkjenn implementerings-prioriteter
   - Avklar scope (Phase 1 only? Phase 1-3?)
   - Bekreft data extraction approach

2. **Data extraction:**
   - Lag `fire_safety_data.json`
   - Lag `scenarios.json`
   - Oppdater `suppliers.json` med gaps

3. **Page development:**
   - `/app/fire-safety/page.tsx`
   - `/app/scenarios/page.tsx`
   - Oppdater `/app/page.tsx` (homepage links)

4. **Testing & refinement:**
   - User testing av fire safety calculator
   - Verify scenario recommendations accuracy
   - Ensure cross-page navigation flows

---

**Analyse utført:** November 8, 2025
**Dokument analysert:** 2. FYRA B2B OPERATOR CAPABILITY MATRIX.docx (1,589 linjer)
**Neste steg:** Avvent bruker feedback før implementering
