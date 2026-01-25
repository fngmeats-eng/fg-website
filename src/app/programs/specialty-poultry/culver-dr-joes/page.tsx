import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Culver/Dr. Joes - Domestic Duck | F&G Meats',
  description: 'Premium domestic duck from Joe Jurgielewicz & Son. Fourth-generation family farm producing flavorful Pekin ducks with superior texture.',
};

export default function CulverDrJoesPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Placeholder for large program image */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent-500 text-4xl font-bold">DJ</span>
              </div>
              <p className="text-neutral-300 text-lg">Premium Domestic Duck</p>
            </div>
          </div>
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Program Info Section */}
      <div className="relative pt-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Program Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6 tracking-tight drop-shadow-lg">
              Culver/Dr. Joes
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Fourth-generation family farm producing premium Pekin ducks with higher natural fat content and deeper flavor through traditional farming practices.
            </p>
            
            {/* Inquire Now Button */}
            <a 
              href="/contact" 
              className="inline-flex items-center px-10 py-4 bg-accent-500 text-primary-900 font-semibold text-lg rounded-lg hover:bg-accent-400 transition-all duration-300 shadow-lg hover:shadow-accent-500/50 hover:scale-105"
            >
              Inquire Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Detailed Description Section */}
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Detailed Content */}
            <div className="space-y-8">
              <div>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  F&G Meats sources its premium duck line from Joe Jurgielewicz & Son, a fourth-generation family farm known for producing one of the most flavorful and uniquely meaty Pekin ducks in the country. The Jurgielewicz duck is distinct for its higher natural fat content, balanced meat-to-fat ratio, and deeper flavor profile, achieved through selective breeding and traditional farming practices refined over decades.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  This program prioritizes responsible, vertically integrated production — from on-farm hatching to humane raising and processing — ensuring full traceability and consistent quality. The ducks are raised on family farms in Pennsylvania under a controlled, natural diet with no antibiotics ever, resulting in a premium, gourmet-style Pekin duck recognized for its richness, clean fat, and superior texture.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  The Jurgielewicz family's commitment to traditional farming methods, combined with modern quality standards, creates a duck program that stands apart in both flavor and consistency. Their selective breeding program focuses on developing birds with optimal fat distribution and meat quality, ensuring that each duck delivers the rich, satisfying eating experience that discerning chefs demand.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                  The vertically integrated approach allows for complete control over every aspect of production, from genetics and nutrition to processing and packaging. This comprehensive oversight ensures that the ducks maintain their distinctive characteristics — higher natural fat content for superior flavor, balanced meat-to-fat ratios for optimal cooking performance, and the clean, rich taste that has made Jurgielewicz ducks a favorite among top culinary professionals.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🦆</span>
                      </div>
                      <span className="text-neutral-400">Pennsylvania Family Farms</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🥩</span>
                      </div>
                      <span className="text-neutral-400">Premium Duck Cuts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb at bottom */}
      <div className="bg-primary-800 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-neutral-300">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/programs/specialty-poultry" className="hover:text-accent-500 transition-colors">Specialty Poultry Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-100">Culver/Dr. Joes</span>
          </nav>
        </div>
      </div>
    </div>
  );
}