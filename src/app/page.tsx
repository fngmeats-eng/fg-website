import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CompanyIntro from '@/components/home/CompanyIntro';
import { generatePageMetadata } from '@/lib/metadata';

/**
 * Homepage Metadata
 * 
 * SEO metadata for the homepage using Next.js 14 Metadata API.
 * Includes Open Graph tags for social sharing.
 * 
 * Requirements addressed:
 * - Requirement 10.3: Include meta titles and descriptions for all pages
 * - Requirement 10.4: Implement Open Graph tags for social media sharing
 */
export const metadata: Metadata = generatePageMetadata('home');

/**
 * Homepage
 * 
 * The main landing page for F&G Meat Distribution featuring:
 * - Hero section with compelling headline and CTA (full viewport height)
 * - About F&G Meats section with company overview
 * - Services section with 3 service tiles
 * - Service Areas section with Florida map and coverage details
 * 
 * All sections use responsive design and professional styling.
 * 
 * Requirements addressed:
 * - Requirement 2: Homepage Hero Section
 * - Requirement 3: Homepage Content Sections
 * - Requirement 8: Visual Design and Branding
 * 
 * Layout Structure:
 * ┌─────────────────────────────────────────┐
 * │              Navigation                  │
 * ├─────────────────────────────────────────┤
 * │              Hero Section               │
 * │         (Full viewport height)          │
 * ├─────────────────────────────────────────┤
 * │           About F&G Meats               │
 * ├─────────────────────────────────────────┤
 * │            Our Services                 │
 * │         (3 service tiles)               │
 * ├─────────────────────────────────────────┤
 * │          Our Service Areas              │
 * │    (Florida map + coverage details)     │
 * ├─────────────────────────────────────────┤
 * │               Footer                    │
 * └─────────────────────────────────────────┘
 */
export default function Home() {
  return (
    <>
      {/* Hero Section - Full viewport height with background image
          Simple headline only */}
      <HeroSection
        headline="The art of beef buying."
        subheadline=""
        ctaText=""
        ctaHref=""
        backgroundImage="/images/herohomepic.jpeg"
      />
      
      {/* About F&G Meats Section */}
      <CompanyIntro />
      
      {/* Services Section - 3 Tiles */}
      <section className="bg-primary-900 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4">
              Our Services
            </h2>
            <div className="accent-divider mx-auto" aria-hidden="true" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Allocation */}
            <div className="bg-primary-800 p-8 rounded-lg border border-neutral-600 hover:border-accent-500 transition-colors text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl text-neutral-100 mb-4">Product Allocation</h3>
              <p className="text-neutral-300">Strategic sourcing and allocation of premium meats to ensure consistent supply and optimal pricing for our partners.</p>
            </div>
            
            {/* Product Fabrication */}
            <div className="bg-primary-800 p-8 rounded-lg border border-neutral-600 hover:border-accent-500 transition-colors text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl text-neutral-100 mb-4">Product Fabrication</h3>
              <p className="text-neutral-300">Custom cutting and fabrication services to meet your exact specifications and portion requirements.</p>
            </div>
            
            {/* Daily Delivery */}
            <div className="bg-primary-800 p-8 rounded-lg border border-neutral-600 hover:border-accent-500 transition-colors text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl text-neutral-100 mb-4">Daily Delivery</h3>
              <p className="text-neutral-300">Reliable daily delivery service ensuring fresh products arrive when you need them, maintaining the cold chain throughout.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Areas Section - Interactive SVG Map */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Florida Map - Left Side */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-800 p-8 shadow-2xl border border-accent-500/20">
                {/* SVG Florida Map */}
                <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Animated Background Grid */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201, 169, 98, 0.1)" strokeWidth="0.5"/>
                    </pattern>
                    
                    {/* Glow Filter */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    {/* Pulse Animation */}
                    <radialGradient id="pulseGradient">
                      <stop offset="0%" stopColor="#c9a962" stopOpacity="0.8">
                        <animate attributeName="stop-opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                      </stop>
                      <stop offset="100%" stopColor="#c9a962" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;0.2;0" dur="2s" repeatCount="indefinite"/>
                      </stop>
                    </radialGradient>
                  </defs>
                  
                  {/* Grid Background */}
                  <rect width="400" height="500" fill="url(#grid)" opacity="0.3"/>
                  
                  {/* Florida State Outline - Simplified */}
                  <g className="florida-state">
                    <path 
                      d="M 50 50 L 350 50 L 350 100 L 320 120 L 300 140 L 280 160 L 260 180 L 240 200 L 220 220 L 200 240 L 180 260 L 160 280 L 140 300 L 120 320 L 100 340 L 90 360 L 85 380 L 80 400 L 75 420 L 70 440 L 65 460 L 60 470 L 55 475 L 60 480 L 70 485 L 85 485 L 100 480 L 120 470 L 140 455 L 160 440 L 180 420 L 200 400 L 220 380 L 240 360 L 260 340 L 280 320 L 300 300 L 320 280 L 340 260 L 360 240 L 370 220 L 375 200 L 380 180 L 380 160 L 375 140 L 365 120 L 355 100 L 350 80 L 350 60 L 340 50 Z"
                      fill="rgba(201, 169, 98, 0.15)"
                      stroke="#c9a962"
                      strokeWidth="2"
                      className="transition-all duration-500 hover:fill-[rgba(201,169,98,0.25)] cursor-pointer"
                      filter="url(#glow)"
                    >
                      <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Animated Delivery Routes */}
                  <g className="delivery-routes" opacity="0.6">
                    {/* Route 1 */}
                    <path d="M 200 100 Q 180 200 160 300" stroke="#c9a962" strokeWidth="2" fill="none" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1s" repeatCount="indefinite"/>
                    </path>
                    {/* Route 2 */}
                    <path d="M 200 100 Q 220 200 240 300" stroke="#c9a962" strokeWidth="2" fill="none" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1.2s" repeatCount="indefinite"/>
                    </path>
                    {/* Route 3 */}
                    <path d="M 200 100 Q 200 250 180 400" stroke="#c9a962" strokeWidth="2" fill="none" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1.5s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Location Markers with Pulse */}
                  <g className="location-markers">
                    {/* Miami */}
                    <circle cx="180" cy="420" r="20" fill="url(#pulseGradient)" opacity="0.3"/>
                    <circle cx="180" cy="420" r="8" fill="#c9a962" filter="url(#glow)" className="cursor-pointer hover:r-10 transition-all">
                      <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="180" y="445" textAnchor="middle" fill="#c9a962" fontSize="12" fontWeight="bold" className="pointer-events-none">Miami</text>
                    
                    {/* Fort Lauderdale */}
                    <circle cx="200" cy="380" r="20" fill="url(#pulseGradient)" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="380" r="8" fill="#c9a962" filter="url(#glow)" className="cursor-pointer hover:r-10 transition-all">
                      <animate attributeName="r" values="8;10;8" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </circle>
                    <text x="200" y="405" textAnchor="middle" fill="#c9a962" fontSize="12" fontWeight="bold" className="pointer-events-none">Ft. Lauderdale</text>
                    
                    {/* Palm Beach */}
                    <circle cx="240" cy="320" r="20" fill="url(#pulseGradient)" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" begin="1s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="240" cy="320" r="8" fill="#c9a962" filter="url(#glow)" className="cursor-pointer hover:r-10 transition-all">
                      <animate attributeName="r" values="8;10;8" dur="2s" begin="1s" repeatCount="indefinite"/>
                    </circle>
                    <text x="240" y="345" textAnchor="middle" fill="#c9a962" fontSize="12" fontWeight="bold" className="pointer-events-none">Palm Beach</text>
                    
                    {/* Distribution Hub */}
                    <circle cx="200" cy="100" r="25" fill="url(#pulseGradient)" opacity="0.4"/>
                    <circle cx="200" cy="100" r="12" fill="#c9a962" filter="url(#glow)" className="cursor-pointer">
                      <animate attributeName="r" values="12;14;12" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <text x="200" y="85" textAnchor="middle" fill="#e5e5e5" fontSize="14" fontWeight="bold" className="pointer-events-none">Distribution Hub</text>
                  </g>
                  
                  {/* Animated Trucks */}
                  <g className="delivery-trucks">
                    {/* Truck 1 */}
                    <g opacity="0.8">
                      <rect x="0" y="0" width="12" height="8" fill="#c9a962" rx="1">
                        <animateMotion dur="8s" repeatCount="indefinite" path="M 200 100 Q 180 200 160 300"/>
                      </rect>
                    </g>
                    {/* Truck 2 */}
                    <g opacity="0.8">
                      <rect x="0" y="0" width="12" height="8" fill="#c9a962" rx="1">
                        <animateMotion dur="10s" repeatCount="indefinite" path="M 200 100 Q 220 200 240 300"/>
                      </rect>
                    </g>
                  </g>
                  
                  {/* Stats Overlay */}
                  <g className="stats-overlay">
                    <rect x="10" y="10" width="120" height="80" fill="rgba(10, 10, 10, 0.8)" rx="8" stroke="#c9a962" strokeWidth="1" opacity="0.9"/>
                    <text x="70" y="30" textAnchor="middle" fill="#c9a962" fontSize="24" fontWeight="bold">24/7</text>
                    <text x="70" y="50" textAnchor="middle" fill="#e5e5e5" fontSize="12">Delivery</text>
                    <text x="70" y="70" textAnchor="middle" fill="#b3b3b3" fontSize="10">Coverage</text>
                  </g>
                </svg>
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 right-6 bg-primary-900/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-accent-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-accent-500 font-semibold text-sm">Live Coverage</p>
                      <p className="text-neutral-400 text-xs">3 Active Routes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service Areas Text - Right Side with Staggered Animations */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Title with Slide-in Animation */}
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4 bg-gradient-to-r from-neutral-100 via-accent-500 to-neutral-100 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Our Service Areas
                </h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"></div>
                  <div className="h-1 w-8 bg-accent-500/50 rounded-full"></div>
                  <div className="h-1 w-4 bg-accent-500/30 rounded-full"></div>
                </div>
              </div>
              
              {/* Description with Fade-in */}
              <p className="font-body text-lg text-neutral-200 leading-relaxed transform transition-all duration-500 hover:text-neutral-100">
                We provide reliable, regular delivery all across South Florida. Beyond our local 
                footprint, we also manage international export programs with capabilities across 
                Europe, Asia, South America, and the Caribbean, ensuring compliant, efficient, 
                and consistent shipments worldwide.
              </p>
              
              {/* Animated Feature Cards */}
              <div className="space-y-4 pt-4">
                {/* Card 1 */}
                <div className="group relative bg-primary-700/50 backdrop-blur-sm p-5 rounded-xl border border-neutral-600/30 hover:border-accent-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/10 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
                        <span className="font-semibold text-neutral-100 group-hover:text-accent-500 transition-colors duration-300">South Florida Coverage:</span> 
                        <br className="sm:hidden" />
                        <span className="sm:ml-2">Miami-Dade, Broward, Palm Beach, and surrounding counties</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="group relative bg-primary-700/50 backdrop-blur-sm p-5 rounded-xl border border-neutral-600/30 hover:border-accent-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/10 transform hover:-translate-y-1" style={{ transitionDelay: '100ms' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
                        <span className="font-semibold text-neutral-100 group-hover:text-accent-500 transition-colors duration-300">International Exports:</span> 
                        <br className="sm:hidden" />
                        <span className="sm:ml-2">Europe, Asia, South America, and Caribbean markets</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="group relative bg-primary-700/50 backdrop-blur-sm p-5 rounded-xl border border-neutral-600/30 hover:border-accent-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/10 transform hover:-translate-y-1" style={{ transitionDelay: '200ms' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500/30 transition-colors duration-300">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
                        <span className="font-semibold text-neutral-100 group-hover:text-accent-500 transition-colors duration-300">Compliance & Quality:</span> 
                        <br className="sm:hidden" />
                        <span className="sm:ml-2">Full regulatory compliance and cold-chain management</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}