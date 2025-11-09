'use client';

import Link from 'next/link';
import {
  DocumentTextIcon,
  BuildingOffice2Icon,
  BeakerIcon,
  CheckBadgeIcon,
  LinkIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

interface Source {
  title: string;
  url: string;
  type: 'official' | 'verified' | 'primary' | 'secondary';
  description?: string;
  external?: boolean;
}

interface ResourceSection {
  title: string;
  icon?: 'document' | 'building' | 'lab' | 'verified' | 'link';
  sources: Source[];
}

interface RelatedResourcesProps {
  sections: ResourceSection[];
  title?: string;
}

export default function RelatedResources({ sections, title = "📚 Related Resources" }: RelatedResourcesProps) {
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'document':
        return <DocumentTextIcon className="w-4 h-4" />;
      case 'building':
        return <BuildingOffice2Icon className="w-4 h-4" />;
      case 'lab':
        return <BeakerIcon className="w-4 h-4" />;
      case 'verified':
        return <CheckBadgeIcon className="w-4 h-4" />;
      case 'link':
        return <LinkIcon className="w-4 h-4" />;
      default:
        return <DocumentTextIcon className="w-4 h-4" />;
    }
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'official':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'verified':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'primary':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'secondary':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getBadgeLabel = (type: string) => {
    switch (type) {
      case 'official':
        return '✅ OFFICIAL SOURCE';
      case 'verified':
        return '✓ VERIFIED';
      case 'primary':
        return '📄 PRIMARY';
      case 'secondary':
        return '📚 REFERENCE';
      default:
        return '';
    }
  };

  return (
    <aside className="bg-gray-50 rounded-lg border border-gray-200 p-6">
      <h4 className="text-lg font-bold text-gray-900 mb-4">{title}</h4>

      <div className="space-y-6">
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-600">{getIcon(section.icon)}</span>
              <h5 className="font-semibold text-gray-900 text-sm">{section.title}</h5>
            </div>

            <ul className="space-y-3">
              {section.sources.map((source, sourceIdx) => (
                <li key={sourceIdx} className="group">
                  <div className="flex items-start gap-2">
                    {source.external !== false ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium group-hover:underline flex items-start gap-1"
                      >
                        <span className="flex-1">{source.title}</span>
                        <ArrowTopRightOnSquareIcon className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      </a>
                    ) : (
                      <Link
                        href={source.url}
                        className="flex-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium group-hover:underline"
                      >
                        {source.title}
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getBadgeStyle(source.type)}`}>
                      {getBadgeLabel(source.type)}
                    </span>
                    {source.description && (
                      <span className="text-xs text-gray-600">{source.description}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 italic">
          <strong>Source Quality:</strong> All sources verified for accuracy. Official sources are government/standards bodies.
          Primary sources are direct documentation (company websites, case studies).
        </p>
      </div>
    </aside>
  );
}
