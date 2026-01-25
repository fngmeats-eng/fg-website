import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'St. Helens Beef - American Angus Choice | F&G Meats',
  description: 'Premium American Angus Choice beef from St. Helens. Sustainably raised on volcanic soil for exceptional flavor and quality.',
};

export default function StHelensBeefPage() {
  return (
    <div className="min-h-screen relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/Screenshot_23-1-2026_18236_.jpeg"
          alt="St. Helens Beef Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10">

      {/* Program Info Section */}
      <div className="relative pt-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Program Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6 tracking-tight drop-shadow-lg">
              St. Helens Beef
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              A chef-driven premium Angus program from the Pacific Northwest, delivering consistent marbling and clean flavor through pasture-raised, grain-finished cattle.
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
      <div className="py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Detailed Content */}
            <div className="space-y-8">
              <div>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  The Pacific Northwest, with its clean environment, cool climate, and ideal cattle-raising conditions, serves as the foundation for St. Helens Beef's premium Angus program. This region's unique geography—spanning Idaho, Washington, and Oregon—creates an environment where cooler temperatures reduce animal stress, wide-open rangeland allows natural movement, and clean water sources support optimal animal health.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  St. Helens cattle begin their lives on pasture before entering a carefully controlled grain-finishing program. The finishing diet incorporates locally grown corn, wheat, barley, oats, and natural forages—a balanced ration that produces beef that is rich but not heavy, tender without being soft, and clean with a slightly sweet flavor profile that remains consistent from box to box.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  This is a chef-driven program built around three core principles: predictability, eating quality, and value—not hype. Every aspect of the program is designed to eliminate variability, which is why professional kitchens trust St. Helens for both premium steaks and daily menu items.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  The environmental factors of the Pacific Northwest contribute directly to better marbling, firmer fat, and cleaner flavor in the final product. St. Helens Beef represents the perfect balance of traditional ranching practices and modern quality standards, delivering the consistency and performance that discerning chefs demand.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                  Built for the professional kitchen, this program eliminates the guesswork that comes with inconsistent beef programs. Chefs can rely on St. Helens for predictable cooking performance, consistent portion yields, and the clean, slightly sweet flavor profile that enhances rather than overwhelms menu preparations.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/Screenshot_23-1-2026_18294_.jpeg"
                    alt="Pacific Northwest Rangeland"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/Screenshot_23-1-2026_182656_.jpeg"
                    alt="Premium Angus Cuts"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb at bottom */}
      <div className="bg-primary-800/80 py-4 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-neutral-300">
            <Link href="/" className="hover:text-accent-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/programs/beef" className="hover:text-accent-500 transition-colors">Beef Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-100">St. Helens Beef</span>
          </nav>
        </div>
      </div>
      </div>
    </div>
  );
}