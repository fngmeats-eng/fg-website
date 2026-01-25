'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

/**
 * Milestone interface for timeline events
 */
export interface Milestone {
  year: number;
  description: string;
}

/**
 * Props for the CompanyStory component
 */
export interface CompanyStoryProps {
  /** Section title */
  title: string;
  /** Array of content paragraphs */
  content: string[];
  /** Year the company was founded */
  foundingYear: number;
  /** Array of milestone events for the timeline */
  milestones: Milestone[];
  /** Image URL for the company story section */
  image: string;
}

/**
 * CompanyStory Component
 * 
 * Displays the company history narrative with a timeline visualization for milestones.
 * 
 * Features:
 * - Company history narrative with text content
 * - Timeline visualization for milestones
 * - Image support with Next.js Image optimization
 * - Responsive layout: text + image side by side on desktop, stacked on mobile
 * - Timeline: horizontal on desktop, vertical on mobile
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * 
 * Requirements addressed:
 * - Requirement 4.1: Display the company story including founding history and growth
 * - Requirement 4.4: Present content in a visually engaging layout with images
 * - Requirement 4.6: Maintain the premium dark aesthetic consistent with the overall site design
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * 
 * @example
 * <CompanyStory
 *   title="Our Story"
 *   content={["Founded in 1998...", "Today, we serve..."]}
 *   foundingYear={1998}
 *   milestones={[{ year: 1998, description: "Company founded" }]}
 *   image="/images/about/company-story.jpg"
 * />
 */
export default function CompanyStory({
  title,
  content,
  foundingYear,
  milestones,
  image,
}: CompanyStoryProps) {
  // Calculate years in business
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - foundingYear;

  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="company-story-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="company-story-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              {title}
            </h2>
            <div className="accent-divider mx-auto" aria-hidden="true" />
          </div>
        </AnimatedSection>

        {/* Content Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Text Content */}
          <AnimatedSection animation="slideIn" delay={0.1}>
            <div className="space-y-6">
              {/* Years Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-700 rounded-full border border-accent-500/30">
                <span className="font-heading text-2xl text-accent-500 font-semibold">
                  {yearsInBusiness}+
                </span>
                <span className="text-neutral-200 text-sm uppercase tracking-wider">
                  Years of Excellence
                </span>
              </div>

              {/* Content Paragraphs */}
              {content.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-base sm:text-lg text-neutral-200 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-card overflow-hidden border border-neutral-400/20">
              <Image
                src={image}
                alt={`${title} - F&G Meat Distribution`}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Timeline Section */}
        <AnimatedSection animation="slideUp" delay={0.3}>
          <div className="mb-8 sm:mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl text-neutral-100 text-center mb-2">
              Our Journey
            </h3>
            <p className="text-neutral-300 text-center max-w-2xl mx-auto">
              Key milestones that have shaped F&G Meat Distribution into the trusted partner we are today.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline - Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:block">
            {/* Timeline Line */}
            <div 
              className="absolute top-6 left-0 right-0 h-0.5 bg-neutral-400/30"
              aria-hidden="true"
            />
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1" style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)` }}>
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  animation="slideUp"
                  delay={0.4 + index * 0.1}
                >
                  <div className="relative flex flex-col items-center text-center px-4">
                    {/* Timeline Dot */}
                    <div 
                      className="w-4 h-4 rounded-full bg-accent-500 border-4 border-primary-900 z-10 mb-4"
                      aria-hidden="true"
                    />
                    
                    {/* Year */}
                    <span className="font-heading text-xl sm:text-2xl text-accent-500 font-semibold mb-2">
                      {milestone.year}
                    </span>
                    
                    {/* Description */}
                    <p className="font-body text-sm text-neutral-300 max-w-[200px]">
                      {milestone.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile Timeline (Vertical) */}
          <div className="lg:hidden">
            {/* Timeline Line */}
            <div 
              className="absolute top-0 bottom-0 left-6 w-0.5 bg-neutral-400/30"
              aria-hidden="true"
            />
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  animation="slideIn"
                  delay={0.4 + index * 0.1}
                >
                  <div className="relative flex items-start gap-6 pl-0">
                    {/* Timeline Dot */}
                    <div 
                      className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-500 border-4 border-primary-900 z-10 mt-1"
                      aria-hidden="true"
                    />
                    
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      {/* Year */}
                      <span className="font-heading text-xl text-accent-500 font-semibold block mb-1">
                        {milestone.year}
                      </span>
                      
                      {/* Description */}
                      <p className="font-body text-base text-neutral-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution
 * Use this as default props or for demonstration purposes
 */
export const COMPANY_STORY_DATA: CompanyStoryProps = {
  title: 'Our Story',
  content: [
    'F&G Meat Distribution was founded in 1998 with a simple yet ambitious vision: to become the premier supplier of premium proteins to the finest restaurants and hotels across the nation. What started as a small family operation has grown into one of the most trusted names in the B2B meat distribution industry.',
    'Our founders, with decades of combined experience in the culinary and food service industries, recognized a gap in the market for a distributor that truly understood the needs of discerning chefs. They set out to build relationships with the best ranches and producers, ensuring that every product bearing the F&G name meets the highest standards of quality.',
    'Today, we proudly serve over 500 restaurant partners, from Michelin-starred establishments to beloved neighborhood bistros. Our commitment to excellence, consistency, and personalized service remains as strong as it was on day one.',
  ],
  foundingYear: 1998,
  milestones: [
    {
      year: 1998,
      description: 'F&G Meat Distribution founded with a focus on premium beef',
    },
    {
      year: 2005,
      description: 'Expanded product line to include Wagyu and specialty proteins',
    },
    {
      year: 2010,
      description: 'Reached 100 restaurant partners milestone',
    },
    {
      year: 2015,
      description: 'Launched sustainable seafood program with Patagonian Sea',
    },
    {
      year: 2020,
      description: 'Expanded distribution network to serve nationwide',
    },
    {
      year: 2023,
      description: 'Celebrated 25 years of excellence with 500+ partners',
    },
  ],
  image: 'https://placehold.co/800x800/2a2a2a/c9a962?text=Our+Story',
};
