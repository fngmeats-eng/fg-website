import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Snake River Farms Kurobuta - 100% Purebred Berkshire Pork | F&G Meats',
  description: 'Premium 100% purebred Berkshire pork from Snake River Farms. The finest Kurobuta pork with exceptional marbling and flavor.',
};

export default function SnakeRiverFarmsKurobutaPage() {
  return (
    <div className="min-h-screen bg-primary-900">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Placeholder for large program image */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent-500 text-4xl font-bold">SRF</span>
              </div>
              <p className="text-neutral-300 text-lg">Premium Kurobuta Pork</p>
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
              Snake River Farms Kurobuta
            </h1>
            
            {/* Brief Summary */}
            <p className="font-body text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-lg">
              100% purebred Berkshire pork using America's oldest bloodlines, raised on 35+ family farms with extended feeding for exceptional marbling.
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
                  Snake River Farms produces 100% purebred Berkshire pork, known in Japan as Kurobuta, a heritage breed widely regarded as the pork equivalent of Wagyu beef. This breed is prized for its exceptional marbling, tenderness, and depth of flavor, setting it apart from conventional pork programs. Using the oldest Berkshire bloodlines in the United States, Snake River Farms has built an American Kurobuta program that is internationally recognized for quality and consistency.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  The Berkshire breed dates back over 300 years to England, where it was refined for its eating quality. The breed was later preserved and further developed in Japan, where 100% Berkshire pork became known as Kurobuta and earned a reputation comparable to Wagyu beef. Snake River Farms has maintained this lineage by using only purebred Berkshire genetics, ensuring the same marbling-driven eating experience in every cut.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  Snake River Farms raises its Kurobuta hogs from start to finish in the United States through a network of more than 35 family-owned farms throughout the Midwest. The animals are raised in small herds to allow for individualized care and close monitoring. The program does not use gestation stalls, and hogs are raised without the use of growth promotants, allowing for slower, more natural development that enhances both marbling and flavor.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  To further improve quality, Kurobuta hogs are slow-fed approximately 10% longer than conventional hogs. This extended feeding period allows fat to develop more evenly within the muscle, producing pork that is juicier, more tender, and richer in flavor. The result is pork that behaves more like high-quality beef on the grill or in the pan, with better moisture retention and more forgiving cook times.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-6">
                  American Kurobuta pork from Snake River Farms is characterized by small, fine streaks of intramuscular fat that run through each cut. This marbling is a key indicator of quality and is reflected in the pork's darker color and higher pH compared to commodity pork. Unlike conventional white pork, Kurobuta pork has a deeper red hue, richer flavor, and more pronounced juiciness. Because of these qualities, it has been referred to by the Wall Street Journal as "The Other Red Meat."
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  The Snake River Farms pork grading system reflects these differences, with Kurobuta pork scoring higher on the pH scale, which directly correlates to better water retention, tenderness, and flavor. This makes the pork more consistent in cooking and reduces moisture loss during preparation.
                </p>
                <p className="text-neutral-200 text-lg leading-relaxed mb-8">
                  The program is designed for kitchens that want pork with character, structure, and flavor integrity. Cuts such as pork chops, secreto, collar, belly, and tenderloin deliver a noticeably different eating experience compared to standard pork, with richer mouthfeel and a clean, slightly sweet finish. Snake River Farms American Kurobuta pork is produced with a focus on genetics, animal care, feeding discipline, and consistency, resulting in a premium pork program that stands apart from commodity pork in both performance and eating quality.
                </p>
              </div>

              {/* Additional Images Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent-500 text-xl font-bold">🐷</span>
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
                      <span className="text-neutral-400">Kurobuta Marbling</span>
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
            <span className="text-neutral-100">Snake River Farms Kurobuta</span>
          </nav>
        </div>
      </div>
    </div>
  );
}