import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Palmetto Farms - Domestic Poussin/Squab | F&G Meats',
  description: 'Premium domestic poussin and squab from Palmetto Farms. Nearly a century of traditional breeding expertise and consistent quality.',
};

export default function PalmettoFarmsPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Placeholder for large program image */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent-500 text-4xl font-bold">PF</span>
              </div>
              <p className="text-neutral-300 text-lg">Specialty Poultry Excellence</p>
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
              Palmetto Farms
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Nearly a century of traditional breeding expertise producing tender, delicate specialty birds with exceptional culinary versatility.
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
                  Palmetto Farms stands as one of the country's longest-running and most respected producers of squab and specialty poultry, supplying top chefs and distributors for nearly a century. Built on traditional breeding expertise and consistent quality standards, Palmetto Farms focuses on raising young birds known for their tender texture, delicate flavor, and exceptional culinary versatility.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  The farm's commitment to traditional breeding methods ensures that each bird develops the characteristics that have made Palmetto Farms a trusted name in fine dining establishments across the country. Their poussin and squab programs are designed to deliver consistent sizing, optimal tenderness, and the refined flavor profiles that discerning chefs require for their most sophisticated menu applications.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  Palmetto Farms' nearly century-long experience in specialty poultry production has allowed them to perfect their breeding and raising techniques, resulting in birds that offer superior eating quality and cooking performance. The young age at harvest ensures maximum tenderness, while their careful breeding programs maintain the delicate, nuanced flavors that set these specialty birds apart from conventional poultry.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                  The farm's focus on consistency and quality has made them the preferred supplier for restaurants and distributors who demand reliability in both product specifications and delivery. Their poussin and squab are prized for their versatility in culinary applications, from elegant presentations in fine dining to specialty preparations that showcase the unique characteristics of these premium birds. This combination of traditional expertise and modern quality standards ensures that Palmetto Farms continues to set the benchmark for specialty poultry excellence.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🕊️</span>
                      </div>
                      <span className="text-neutral-400">Traditional Breeding</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🍽️</span>
                      </div>
                      <span className="text-neutral-400">Fine Dining Quality</span>
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
            <span className="text-neutral-100">Palmetto Farms</span>
          </nav>
        </div>
      </div>
    </div>
  );
}