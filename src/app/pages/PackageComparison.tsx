
import PricingSection from "../components/PricingSection";
import { SEOHead } from "@/app/components/SEOHead";

export function PackageComparison() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "ZROXZ Pricing & Packages",
                "description": "AI automation, web development, and video editing packages for US businesses",
                "url": "https://zroxz.com/pricing",
                "provider": {
                    "@type": "Organization",
                    "name": "ZROXZ",
                    "areaServed": ["US", "CA"]
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://zroxz.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Pricing",
                        "item": "https://zroxz.com/pricing"
                    }
                ]
            }
        ]
    };

    return (
        <div className="pt-16"> {/* Spacer for fixed navbar */}
            <SEOHead
                title="Pricing & Packages — AI Automation, Web Development & Video Editing"
                description="Transparent pricing for AI automation, web development, and video editing services from ZROXZ. Affordable packages for growing US businesses."
                keywords="ZROXZ pricing, AI automation packages, web development cost, video editing pricing, CRM automation packages"
                canonicalUrl="https://zroxz.com/pricing"
                structuredData={structuredData}
            />
            <PricingSection />
        </div>
    );
}
