'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

/**
 * Full-viewport section component with background image and scroll-snap
 */
function FullSection({
  backgroundImage,
  children,
  overlay = 'bg-black/50',
  className = '',
}: {
  backgroundImage: string;
  children: React.ReactNode;
  overlay?: string;
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative h-screen min-h-screen flex items-center justify-center snap-start snap-always ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
      <div className={`relative z-10 w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {children}
      </div>
    </section>
  );
}

/**
 * Staggered animation wrapper for content within sections
 */
function AnimatedContent({ 
  children, 
  delay = 0,
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) {
  return (
    <div 
      className={className}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * CTA Button styled like Bush Brothers
 */
function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block border-2 border-white text-white px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black transition-all duration-300"
    >
      {children}
    </Link>
  );
}

export default function HomePageClient() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Section - "TRADITION MEATS TOMORROW" style */}
      <FullSection 
        backgroundImage="/images/herohomepic.jpeg"
        overlay="bg-black/40"
      >
        <div className="text-center px-6 max-w-5xl mx-auto">
          <AnimatedContent delay={0.2}>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
              THE ART OF
            </h1>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide">
              BEEF BUYING
            </h1>
          </AnimatedContent>
          <AnimatedContent delay={0.6}>
            <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light">
              Premium proteins for Florida&apos;s finest establishments
            </p>
          </AnimatedContent>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </FullSection>

      {/* Our Legacy Section */}
      <FullSection 
        backgroundImage="/images/wagyu-grazing.jpg"
        overlay="bg-black/60"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR LEGACY
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              F&amp;G Meats is a dynamic distributor of premium proteins, supplying high-quality 
              beef and specialty meats to Florida&apos;s leading restaurants, hotels, and country clubs. 
              Built on reliability, product variety, and hands-on service, we operate with a 
              partnership-driven approach focused on making the protein-ordering process seamless 
              and effortless for every client.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/about">
              Get to Know F&amp;G Meats
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>

      {/* Our Quality Section */}
      <FullSection 
        backgroundImage="/images/ranching.jpg"
        overlay="bg-black/55"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR QUALITY
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              We supply the finest custom-aged, expertly trimmed meats to fine restaurants, 
              five-star hotels, clubs, and other prestigious dining venues. These establishments 
              depend on us for the highest quality proteins to delight their customers and 
              enhance their brands.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/products">
              View Our Premium Meats
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>

      {/* Our Service Section */}
      <FullSection 
        backgroundImage="/images/OUR SERVICES .jpeg"
        overlay="bg-black/55"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR SERVICE
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Trust is established by reliability, honesty, consistency, and a commitment to 
              our customers' success. We take a consultative approach to working with great 
              chefs and restaurant executives. We customize our service to build relationships 
              lasting for decades.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/services">
              Explore Our Services
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>

      {/* Service Areas Section */}
      <FullSection 
        backgroundImage="/images/DRR Valley.jpg"
        overlay="bg-black/60"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedContent>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-8 tracking-wide">
              OUR REACH
            </h2>
          </AnimatedContent>
          <AnimatedContent delay={0.2}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              We provide reliable, regular delivery all across South Florida — Miami-Dade, 
              Broward, Palm Beach, and surrounding counties. Beyond our local footprint, 
              we also manage international export programs across Europe, Asia, South America, 
              and the Caribbean.
            </p>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <CTAButton href="/contact">
              Contact Us Today
            </CTAButton>
          </AnimatedContent>
        </div>
      </FullSection>
    </main>
  );
}
