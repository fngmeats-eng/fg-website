'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import {
  Beef,
  ChefHat,
  Clock,
  Package,
  Scissors,
  ShieldCheck,
  Snowflake,
  Truck,
  Users,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';

/**
 * ServiceItem interface for individual service cards
 */
export interface ServiceItem {
  /** Title of the service */
  title: string;
  /** Description explaining the service */
  description: string;
  /** Icon name from Lucide React */
  icon: string;
}

/**
 * Props for the ServiceOverview component
 */
export interface ServiceOverviewProps {
  /** Section title */
  title: string;
  /** Section description */
  description: string;
  /** Array of services to display */
  services: ServiceItem[];
}

/**
 * Icon mapping from string names to Lucide React components
 * Allows dynamic icon rendering based on string identifier
 */
const iconMap: Record<string, LucideIcon> = {
  beef: Beef,
  'chef-hat': ChefHat,
  clock: Clock,
  package: Package,
  scissors: Scissors,
  'shield-check': ShieldCheck,
  snowflake: Snowflake,
  truck: Truck,
  users: Users,
  warehouse: Warehouse,
};

/**
 * ServiceOverview Component
 * 
 * Displays distribution services in a scannable card format with icons.
 * 
 * Features:
 * - Services displayed in scannable card format (Requirement 6.5)
 * - AnimatedSection wrapper for scroll-triggered animations
 * - Dark theme styling with gold accents consistent with the premium aesthetic
 * - Responsive grid layout: 1 column on mobile, 2 on tablet, 3 on desktop
 * - Lucide React icons for visual representation of services
 * - Hover effects for interactive feel
 * 
 * Requirements addressed:
 * - Requirement 6.1: Describe the distribution services offered by F&G
 * - Requirement 6.5: Present information in an easy-to-scan format
 * - Requirement 8.1: Dark/black primary color scheme reflecting premium positioning
 * - Requirement 8.2: Typography that conveys sophistication and readability
 * - Requirement 8.3: Consistent spacing, alignment, and visual hierarchy
 * - Requirement 8.5: Subtle animations and transitions for interactive elements
 * 
 * @example
 * <ServiceOverview
 *   title="Our Distribution Services"
 *   description="Comprehensive meat distribution solutions..."
 *   services={[
 *     { title: "Premium Selection", description: "...", icon: "beef" },
 *     { title: "Custom Cuts", description: "...", icon: "scissors" }
 *   ]}
 * />
 */
export default function ServiceOverview({
  title,
  description,
  services,
}: ServiceOverviewProps) {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="service-overview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="service-overview-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl text-neutral-100 mb-4"
            >
              {title}
            </h2>
            <div className="accent-divider mx-auto mb-6" aria-hidden="true" />
            <p className="text-neutral-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent =
              iconMap[service.icon.toLowerCase()] || Package;

            return (
              <AnimatedSection
                key={service.title}
                animation="slideUp"
                delay={0.1 + index * 0.1}
              >
                <div className="bg-primary-700 rounded-card p-6 sm:p-8 border border-neutral-400/10 shadow-card transition-all duration-base hover:-translate-y-1 hover:border-accent-500/30 hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.4)] h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent-500/10 border border-accent-500/30">
                      <IconComponent
                        className="w-7 h-7 sm:w-8 sm:h-8 text-accent-500"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-heading text-xl sm:text-2xl text-neutral-100 mb-3">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="font-body text-neutral-300 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Decorative Bottom Accent */}
                  <div
                    className="mt-6 pt-4 border-t border-neutral-400/10"
                    aria-hidden="true"
                  >
                    <div className="w-12 h-1 bg-accent-500/50 rounded-full" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Sample data for F&G Meat Distribution services
 * Use this as default props or for demonstration purposes
 */
export const SERVICE_OVERVIEW_DATA: ServiceOverviewProps = {
  title: 'Our Distribution Services',
  description:
    'F&G Meat Distribution provides comprehensive solutions for premium protein sourcing, ensuring your establishment receives the finest quality products with reliable, temperature-controlled delivery.',
  services: [
    {
      title: 'Premium Meat Selection',
      description:
        'Access our curated portfolio of premium beef, wagyu, duck, and seafood from the most trusted producers in the industry. We source only the finest proteins that meet our rigorous quality standards.',
      icon: 'beef',
    },
    {
      title: 'Custom Cut Services',
      description:
        'Our expert butchers provide precision cutting services tailored to your specifications. From portion-controlled steaks to specialty cuts, we deliver exactly what your kitchen needs.',
      icon: 'scissors',
    },
    {
      title: 'Temperature-Controlled Delivery',
      description:
        'Our state-of-the-art refrigerated fleet maintains optimal temperatures throughout transit, ensuring your products arrive fresh and at peak quality every time.',
      icon: 'snowflake',
    },
    {
      title: 'Reliable Logistics',
      description:
        'Count on consistent, on-time deliveries with our dedicated logistics team. We understand that timing is critical in the food service industry and plan our routes accordingly.',
      icon: 'truck',
    },
    {
      title: 'Quality Assurance',
      description:
        'Every product undergoes rigorous quality checks before leaving our facility. Our commitment to excellence means you receive only the best, backed by our quality guarantee.',
      icon: 'shield-check',
    },
    {
      title: 'Dedicated Account Management',
      description:
        'Work with a dedicated account manager who understands your business needs. From order placement to delivery, you have a single point of contact for personalized service.',
      icon: 'users',
    },
  ],
};
