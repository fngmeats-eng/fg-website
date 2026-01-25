import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Snake River Farms - American Wagyu | F&G Meats',
  description: 'Premium American Wagyu from Snake River Farms. Exceptional marbling and flavor from family-owned Pacific Northwest ranches.',
};

export default function SnakeRiverFarmsPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/Screenshot_23-1-2026_17394_.jpeg"
          alt="Snake River Farms - Pacific Northwest Wagyu"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Program Info Section */}
      <div className="relative pt-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Program Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-neutral-100 mb-6 tracking-tight drop-shadow-lg">
              Snake River Farms
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Pioneer of American Wagyu since 1988, combining five decades of Idaho ranching tradition with Japanese genetics and heritage feeding methods.
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
                  Snake River Farms is the pioneer of American Wagyu beef, rooted in over five decades of family ranching tradition. Founded in 1968 by Robert "Bob" Rebholtz Sr. in Idaho through Agri Beef Co., the company was an early adopter of Wagyu genetics long before most U.S. producers recognized their potential. In the late 1980s and early '90s, following a transformative trip to Japan, SRF began breeding high-quality Wagyu with premium American cattle—creating the rich, finely marbled American Wagyu beef it's known for today.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Snake River Farms American Wagyu cattle are raised along the high plains of the Snake River in Eastern Idaho, where the unique terroir and climate create ideal conditions for developing exceptional marbling. Managing the production process from start to finish, their herd has developed into one of the most highly regarded groups of Wagyu-cross cattle in the world, joining forces with family-owned farms and ranches in a closed-loop production system that supports the ranching lifestyle of local producers.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  The legendary breed of Wagyu cattle was brought to Japan in the second century A.D. from its home on the Asian mainland. Originally working animals for plowing and rice farming, the Japanese soon discovered the Wagyu's natural ability to deposit intramuscular marbling. Centuries of careful breeding enhanced these characteristics, ultimately bringing worldwide attention to the Wagyu for its unique flavor and tenderness.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Snake River Farms represents the "best of both worlds"—crossing bloodlines from their own herd of purebred Japanese Wagyu bulls with traditional, high-quality American beef animals. This creates the perfect blend of the famous Wagyu buttery marbling with robust, beefy flavor that American palates appreciate.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  Adopting many aspects of heritage-steeped Japanese feeding methods, their cattle are fed an all-natural, sustainable diet consisting of local Northwest ingredients, including Idaho potatoes, soft white wheat, and alfalfa hay. Because they have the ability to deposit intramuscular marbling over time, their animals are on feed an average of three times longer than traditional U.S. commodity beef animals.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                  Snake River Farms American Wagyu's intense marbling is so rich that the USDA grading scale simply can't capture or convey its premium quality. Instead, they use a combination of the Japanese and U.S. grading systems to properly classify their exceptional beef. This attention to detail and commitment to quality has made Snake River Farms the gold standard for American Wagyu, trusted by the world's finest restaurants and discerning chefs.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🏔️</span>
                      </div>
                      <span className="text-neutral-400">Snake River High Plains</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🥩</span>
                      </div>
                      <span className="text-neutral-400">American Wagyu Marbling</span>
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
            <Link href="/programs/beef" className="hover:text-accent-500 transition-colors">Beef Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-100">Snake River Farms</span>
          </nav>
        </div>
      </div>
    </div>
  );
}