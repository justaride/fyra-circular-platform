import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Fyra Circular Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your internal knowledge hub for circular economy hotel renovations in Sweden
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/suppliers"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Browse Suppliers
          </Link>
          <Link
            href="/case-studies"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">13</div>
              <div className="text-gray-600">B2B Suppliers</div>
              <div className="text-xs text-gray-500 mt-1">Tier 1-3 + SENAB</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-gray-600">Technical Consultants</div>
              <div className="text-xs text-gray-500 mt-1">3 Tier 1 + 3 Tier 2</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">18</div>
              <div className="text-gray-600">Hotel Case Studies</div>
              <div className="text-xs text-gray-500 mt-1">Complete Dataset</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3</div>
              <div className="text-gray-600">Tier 1 Hotel-Ready</div>
              <div className="text-xs text-gray-500 mt-1">YLLW, Input, Rekomo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Resources */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Suppliers Card */}
          <Link href="/suppliers" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="text-emerald-600 text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-2">B2B Suppliers</h3>
            <p className="text-gray-600 mb-4">
              Searchable directory of Swedish reuse operators with capabilities, contact info, and readiness for hospitality projects.
            </p>
            <span className="text-emerald-600 font-semibold">Browse →</span>
          </Link>

          {/* Consultants Card */}
          <Link href="/consultants" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="text-emerald-600 text-4xl mb-4">👷</div>
            <h3 className="text-xl font-bold mb-2">Project Partners</h3>
            <p className="text-gray-600 mb-4">
              Technical consultants and PMs with experience in Swedish hotel renovations and circular economy integration.
            </p>
            <span className="text-emerald-600 font-semibold">Explore →</span>
          </Link>

          {/* Partnership Strategy Card */}
          <Link href="/partnership-strategy" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-2 border-emerald-200">
            <div className="text-emerald-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Partnership Strategy</h3>
            <p className="text-gray-600 mb-4">
              Decision frameworks, market gap analysis, and immediate action plans for selecting and approaching Swedish consultants.
            </p>
            <span className="text-emerald-600 font-semibold">Strategic Guide →</span>
          </Link>

          {/* Case Studies Card */}
          <Link href="/case-studies" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="text-emerald-600 text-4xl mb-4">🏨</div>
            <h3 className="text-xl font-bold mb-2">Case Studies</h3>
            <p className="text-gray-600 mb-4">
              Real hotel renovation projects across the Nordics showcasing successful circular economy implementations.
            </p>
            <span className="text-emerald-600 font-semibold">View Projects →</span>
          </Link>

          {/* Regulatory Card */}
          <Link href="/regulatory" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="text-emerald-600 text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2">Regulatory Guide</h3>
            <p className="text-gray-600 mb-4">
              Swedish building codes, fire safety requirements, and BVB standards for hotel renovations with reused materials.
            </p>
            <span className="text-emerald-600 font-semibold">Read Guide →</span>
          </Link>

          {/* Scenarios Card */}
          <Link href="/scenarios" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-2 border-blue-200">
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Project Scenarios</h3>
            <p className="text-gray-600 mb-4">
              Strategic guidance for 5 project types: rush projects, large hotels, boutique renovations, cross-border, and fire-critical spaces.
            </p>
            <span className="text-blue-600 font-semibold">View Scenarios →</span>
          </Link>

          {/* Fire Safety Card */}
          <Link href="/fire-safety" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-2 border-red-200">
            <div className="text-red-600 text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-2">Fire Safety Guide</h3>
            <p className="text-gray-600 mb-4">
              Three-tier risk assessment system for reused furniture, BBR compliance, testing costs, and certified labs.
            </p>
            <span className="text-red-600 font-semibold">Critical Info →</span>
          </Link>

          {/* Implementation Card */}
          <Link href="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="text-emerald-600 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Strategy & Roadmap</h3>
            <p className="text-gray-600 mb-4">
              Market analysis, implementation roadmap, and strategic recommendations for Fyra's Swedish expansion.
            </p>
            <span className="text-emerald-600 font-semibold">Learn More →</span>
          </Link>

          {/* Data Source Card */}
          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
            <div className="text-emerald-600 text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">About This Platform</h3>
            <p className="text-gray-600 mb-4">
              Data compiled from Nordic Circular Construction (NCC) research partnership with Natural State, October 2025.
            </p>
            <span className="text-emerald-600 font-semibold">Internal Use Only</span>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="bg-emerald-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Fyra's Swedish Market Entry</h2>
          <p className="max-w-3xl mx-auto text-emerald-100">
            This platform supports Fyra's expansion into the Swedish hospitality market with circular economy
            expertise. All data is curated specifically for hotel renovation projects in Stockholm and surrounding regions.
          </p>
        </div>
      </section>
    </div>
  );
}
