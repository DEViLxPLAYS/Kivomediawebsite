
import PricingSection from "../components/PricingSection";
import { SEOHead } from "@/app/components/SEOHead";

export function PackageComparison() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Pricing & Packages",
        "description": "Professional video editing and content creation packages for creators and brands",
        "url": "https://zivocreative.com/pricing",
        "provider": {
            "@type": "Organization",
            "name": "Zivo Creative",
            "areaServed": ["US", "CA"]
        }
    };

    return (
        <div className="pt-16"> {/* Spacer for fixed navbar */}
            <SEOHead
                title="Pricing & Packages - Affordable Website & Video Editing Services"
                description="Transparent pricing for professional video editing, YouTube automation, and website development services. Choose from flexible packages designed for creators, brands, and businesses. Quality content creation at competitive rates."
                keywords="video editing pricing, YouTube editing packages, website development pricing, content creation rates, video editing services cost, affordable web development"
                canonicalUrl="https://zivocreative.com/pricing"
                structuredData={structuredData}
            />
            <PricingSection />
        </div>
    );
}
