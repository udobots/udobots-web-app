interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

/**
 * Standard dark hero banner used across inner pages.
 * Import from '@/components/layout/PageHero'
 */
export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div className="bg-charcoal text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <p className="text-primary-400 text-sm font-medium mb-2 uppercase tracking-wider">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
