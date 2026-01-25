import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'F&G Meats Wagyu - American Wagyu | F&G Meats',
  description: 'Premium American Wagyu from F&G Meats. Our signature Wagyu program featuring exceptional marbling and flavor.',
};

export default function FGWagyuPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Placeholder for large program image */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent-500 text-4xl font-bold">F&G</span>
              </div>
              <p className="text-neutral-300 text-lg">F&G Signature Wagyu</p>
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
              F&G Meats Wagyu
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Premium American Wagyu sourced from Midwest family farms, combining traditional Japanese genetics with heartland values and clean production.
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
                  F&G Meats Wagyu is an F1 American Wagyu program built on responsible production and selective genetic improvement designed to elevate marbling, tenderness, and overall carcass quality over time. Sourced from a network of small, family-operated farms across the Midwest, the program emphasizes integrity, transparency, and traceability at every stage of production.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  All cattle are source- and age-verified and continuously monitored by professional animal nutritionists, ensuring consistent development and strict adherence to program standards. The entire program follows Never-Ever protocols—no antibiotics, no hormones, no growth promotants, no animal by-products, and no artificial ingredients—delivering a clean, trustworthy beef program aligned with modern chef and consumer expectations.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-8">
                  This commitment to responsible production creates American Wagyu that not only delivers exceptional eating quality but also meets the growing demand for transparency and ethical sourcing in professional kitchens. Each animal's journey from farm to table is fully documented, providing chefs with the confidence and story they need for their most discerning guests.
                </p>
              </div>

              <div className="bg-primary-800 rounded-lg p-8 my-12">
                <h3 className="font-heading text-2xl text-neutral-100 mb-8 text-center">Two Distinct Wagyu Lines</h3>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="font-heading text-xl text-accent-500 mb-4">1. Grain-Finished American Wagyu</h4>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      Our grain-finished line is fed on a traditional Japanese-style diet, designed to maximize marbling and promote slow, steady growth. These cattle are fed up to 300% longer than commodity beef, allowing intramuscular fat to mature naturally and develop the signature richness, depth, and buttery texture associated with authentic Wagyu. This extended feeding program creates beef with exceptional marbling that melts at lower temperatures, delivering the luxurious mouthfeel that defines premium Wagyu.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-heading text-xl text-accent-500 mb-4">2. Grass-Fed / Grass-Finished American Wagyu</h4>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      Our grass-fed and finished line offers a distinctly elevated expression of American Wagyu. Raised exclusively on open pasture and finished on a diverse blend of natural forages, this program delivers a cleaner, more mineral-forward flavor profile with naturally sweet undertones. This line appeals to chefs seeking the marbling and tenderness of Wagyu genetics combined with the terroir-driven characteristics that only grass-finishing can provide.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  Both lines represent F&G Meats' commitment to advancing American Wagyu through careful genetic selection and responsible farming practices. By working exclusively with small, family-operated farms, we ensure that each animal receives individual attention and care, resulting in consistently superior beef that honors both the Wagyu tradition and American agricultural values.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                  The program's focus on selective genetic improvement means that quality continues to evolve with each generation, while our Never-Ever protocols ensure that this premium beef meets the highest standards for purity and integrity. This combination of genetic excellence and ethical production creates American Wagyu that stands apart in both quality and story.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🌾</span>
                      </div>
                      <span className="text-neutral-400">Midwest Family Farms</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🥩</span>
                      </div>
                      <span className="text-neutral-400">Premium Wagyu Marbling</span>
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
            <span className="text-neutral-100">F&G Meats Wagyu</span>
          </nav>
        </div>
      </div>
    </div>
  );
}