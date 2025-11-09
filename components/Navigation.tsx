'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/suppliers', label: 'Suppliers' },
    { href: '/consultants', label: 'Consultants' },
    { href: '/partnership-strategy', label: 'Partnership Strategy' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/scenarios', label: 'Scenarios' },
    { href: '/regulatory', label: 'Regulatory Guide' },
    { href: '/fire-safety', label: 'Fire Safety' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-emerald-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-emerald-100 transition">
            Fyra Circular Platform
          </Link>

          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md transition ${
                    isActive
                      ? 'bg-emerald-900 text-white'
                      : 'text-emerald-100 hover:bg-emerald-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button placeholder */}
          <button className="md:hidden px-3 py-2 rounded-md hover:bg-emerald-600 transition">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
