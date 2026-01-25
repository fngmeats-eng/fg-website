import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'F&G Meats Berkshire - Heritage Breed Premium Pork | F&G Meats',
  description: 'Premium heritage breed Berkshire pork from F&G Meats. Exceptional marbling, rich flavor, and superior quality.',
};

export default function FGBerkshirePage() {
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
              <p className="text-neutral-300 text-lg">Heritage Berkshire Pork</p>
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
              F&G Meats Berkshire
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Premium heritage Berkshire pork from small family farms, featuring refined genetics and craft-level processing for superior marbling and flavor.
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
                  F&G Meats' Berkshire Pork program offers a premium heritage pork experience rooted in tradition and quality. The Berkshire breed is one of the oldest heritage pig breeds in the world, originally developed in England long before modern industrial agriculture. This heritage status reflects a time when pork flavor and eating quality were the primary focus of breeding and husbandry. Over time, the breed earned a global reputation for rich flavor, fine marbling, and tender texture, often being mentioned alongside premium beef programs for its quality.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  At F&G Meats, our Berkshire pork is raised on small, family-owned farms that uphold high standards of ethical animal care and humane handling. These farms maintain practices that prioritize the health of the animals, natural growth, and sustainable farming methods so that every hog has the opportunity to develop proper muscle structure and flavor characteristics. The Berkshire pigs are raised without antibiotics, growth promotants, artificial ingredients, or animal by-products.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  While federal regulations already prohibit hormones in pork in the United States, our program goes further with third-party auditing and monitoring to ensure consistent quality and humane treatment across all farms. This additional oversight ensures that every aspect of our program meets the highest standards for both animal welfare and product quality.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  The Berkshire breed itself produces meat that is visibly and measurably different from conventional pork. Due to higher levels of intramuscular fat, the pork displays fine marbling and a deeper color. Higher marbling and elevated pH levels both correlate with greater tenderness, improved water retention, and a richer flavor profile, contributing to a texture that holds moisture and a taste that is naturally sweet and savory. For those familiar with pork labeled as "the other white meat," Berkshire pork stands apart with a color and mouthfeel more akin to other premium heritage proteins.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  F&G Meats' program also focuses on refinement through breeding. We collaborate with farms that have selected genetic mixes designed to enhance the breed's natural strengths, including improved consistency in flavor, tenderness, marbling, size, and overall structure. This emphasis on genetics and careful feeding means that cuts from our Berkshire pork outperform commodity pork not just in taste, but in cooking behavior and final presentation.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                  Processing for F&G Meats' Berkshire pork is handled with the same attention to quality. State-of-the-art facilities contribute craft-level processing in small batches, ensuring expert hand cutting, uniform trimming, and humane harvest practices. The use of modern CO2 stunning systems helps reduce animal stress and preserves meat quality by maintaining natural color and favorable pH levels in the muscle, resulting in consistently superior pork that performs reliably in professional kitchens.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🏡</span>
                      </div>
                      <span className="text-neutral-400">Family Farm Partners</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🥩</span>
                      </div>
                      <span className="text-neutral-400">Heritage Marbling</span>
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
            <Link href="/programs/pork" className="hover:text-accent-500 transition-colors">Pork Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-100">F&G Meats Berkshire</span>
          </nav>
        </div>
      </div>
    </div>
  );
}