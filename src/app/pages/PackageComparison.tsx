
import PricingSection from "../components/PricingSection";
import { SEOHead } from "@/app/components/SEOHead";

export function PackageComparison() {
    return (
        <div className="pt-16"> {/* Spacer for fixed navbar */}
            <SEOHead
                title="Pricing & Packages - Affordable Website & Video Editing Services"
                description="Transparent pricing for professional video editing, YouTube automation, and website development services. Choose from flexible packages designed for creators, brands, and businesses. Quality content creation at competitive rates."
                keywords="video editing pricing, YouTube editing packages, website development pricing, content creation rates, video editing services cost, affordable web development"
                canonicalUrl="https://zivocreative.com/pricing"
            />
            <PricingSection />
        </div>
    );
}
