"use client";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { TimelineContent } from "@/app/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/app/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server, Zap, Rocket } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router";

type PricingCategory = "all-in-one" | "video-editing" | "web-development";

interface PlanFeature {
    text: string;
    icon: React.ReactNode;
}

interface Plan {
    name: string;
    description: string;
    price: number;
    maxPrice?: number;
    delivery: string;
    buttonText: string;
    buttonVariant: "outline" | "default";
    popular?: boolean;
    isCustom?: boolean;
    features: PlanFeature[];
    includes: string[];
}

const allInOnePackages: Plan[] = [
    {
        name: "Starter Growth",
        description: "Perfect for new creators, small businesses, or coaches starting from scratch",
        price: 500,
        maxPrice: 800,
        delivery: "Ongoing",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        features: [
            { text: "Social media setup & optimization (Instagram, TikTok, YouTube, Facebook)", icon: <Rocket size={20} /> },
            { text: "8 short-form videos (reels/shorts) per month", icon: <Zap size={20} /> },
            { text: "2-3 YouTube long-form edits per month", icon: <Server size={20} /> },
            { text: "Consistent CTAs & story templates", icon: <Briefcase size={20} /> },
            { text: "YouTube thumbnails (up to 3 per month)", icon: <Database size={20} /> },
            { text: "Monthly performance report", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Package Includes:",
            "Social media setup & optimization",
            "8 short-form videos/month",
            "2-3 long-form edits/month",
            "Monthly performance report",
        ],
    },
    {
        name: "Accelerator",
        description: "For brands ready to scale and grow their audience faster",
        price: 1200,
        maxPrice: 1800,
        delivery: "Ongoing",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        popular: true,
        features: [
            { text: "15 short-form videos per month", icon: <Rocket size={20} /> },
            { text: "4 long-form edits per month", icon: <Server size={20} /> },
            { text: "Advanced YouTube strategy (titles, descriptions, thumbnails)", icon: <Briefcase size={20} /> },
            { text: "Weekly story/offer campaigns", icon: <Zap size={20} /> },
            { text: "Social Media Management (Stories, Comments, DMs strategy)", icon: <Database size={20} /> },
            { text: "Professional Website landing page design with AI chatbot integration", icon: <CheckCheck size={20} /> },
            { text: "Bi-weekly analytics & growth consultation", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Everything in Starter, plus:",
            "15 short-form videos/month",
            "4 long-form edits/month",
            "Website with AI chatbot",
            "Bi-weekly consultation",
        ],
    },
    {
        name: "Premium Authority",
        description: "For established businesses & creators who want full-scale management",
        price: 2500,
        maxPrice: 4000,
        delivery: "Ongoing",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        features: [
            { text: "20 short-form videos per month", icon: <Rocket size={20} /> },
            { text: "5 long-form edits per month", icon: <Server size={20} /> },
            { text: "Complete YouTube channel management (uploads, SEO, thumbnails, playlists)", icon: <Briefcase size={20} /> },
            { text: "Daily story/offer campaigns with CTAs", icon: <Zap size={20} /> },
            { text: "Full advanced website design (multi-page, professional branding, AI chatbot)", icon: <Database size={20} /> },
            { text: "Monthly strategy call + growth roadmap", icon: <CheckCheck size={20} /> },
            { text: "Priority support & dedicated account manager", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Everything in Accelerator, plus:",
            "20 short-form videos/month",
            "5 long-form edits/month",
            "Full advanced website",
            "Dedicated account manager",
        ],
    },
    {
        name: "Custom Enterprise",
        description: "Tailored for larger businesses or influencers with unique needs",
        price: 0,
        maxPrice: 0,
        delivery: "Custom",
        buttonText: "Contact Us",
        buttonVariant: "default" as const,
        isCustom: true,
        features: [
            { text: "Fully customizable mix of short-form, long-form, and website services", icon: <Rocket size={20} /> },
            { text: "Website add-ons: Paid ads management, advanced funnel design, email marketing", icon: <Server size={20} /> },
            { text: "Flexible content volume & posting schedule", icon: <Briefcase size={20} /> },
            { text: "Dedicated creative team", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Fully Custom Package:",
            "Customizable service mix",
            "Advanced website add-ons",
            "Flexible scheduling",
            "Dedicated team",
        ],
    },
];

const videoEditPackages: Plan[] = [
    {
        name: "Starter Growth Package",
        description: "Best for new creators, coaches & small businesses",
        price: 399,
        maxPrice: 599,
        delivery: "Ongoing",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        features: [
            { text: "Social media setup & optimization (Instagram, TikTok, YouTube, Facebook)", icon: <Rocket size={20} /> },
            { text: "8 short-form videos per month", icon: <Zap size={20} /> },
            { text: "2–3 long-form YouTube edits per month", icon: <Server size={20} /> },
            { text: "Consistent CTAs & story templates", icon: <Briefcase size={20} /> },
            { text: "Up to 3 YouTube thumbnails per month", icon: <Database size={20} /> },
            { text: "Monthly performance report", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Package Includes:",
            "Social media setup & optimization",
            "8 short-form videos/month",
            "2-3 long-form edits/month",
            "Monthly performance report",
        ],
    },
    {
        name: "Accelerator Package",
        description: "For brands ready to scale faster",
        price: 999,
        maxPrice: 1299,
        delivery: "Ongoing",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        popular: true,
        features: [
            { text: "15 short-form videos per month", icon: <Rocket size={20} /> },
            { text: "4 long-form YouTube edits per month", icon: <Server size={20} /> },
            { text: "Advanced YouTube strategy (titles, descriptions, thumbnails)", icon: <Briefcase size={20} /> },
            { text: "Weekly story & offer campaigns", icon: <Zap size={20} /> },
            { text: "Social media management strategy (stories, comments, DMs)", icon: <Database size={20} /> },
            { text: "Bi-weekly analytics & growth consultation", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Package Includes:",
            "15 short-form videos/month",
            "4 long-form edits/month",
            "Advanced YouTube strategy",
            "Bi-weekly consultation",
        ],
    },
    {
        name: "Premium Authority Package",
        description: "For creators & businesses building long-term authority",
        price: 2500,
        maxPrice: 4000,
        delivery: "Ongoing",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        features: [
            { text: "20 short-form videos per month", icon: <Rocket size={20} /> },
            { text: "5 long-form YouTube edits per month", icon: <Server size={20} /> },
            { text: "Complete YouTube channel management (uploads, SEO, thumbnails, playlists)", icon: <Briefcase size={20} /> },
            { text: "Daily story & offer campaigns with CTAs", icon: <Zap size={20} /> },
            { text: "Monthly strategy call + growth roadmap", icon: <Database size={20} /> },
            { text: "Priority support & dedicated account manager", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Package Includes:",
            "20 short-form videos/month",
            "5 long-form edits/month",
            "Complete YouTube management",
            "Dedicated account manager",
        ],
    },
];

const webDevelopmentPackages: Plan[] = [
    {
        name: "Starter",
        description: "Great for small businesses and startups looking to get started with AI",
        price: 850,
        delivery: "1–2 weeks",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        features: [
            { text: "1–2 weeks delivery", icon: <Rocket size={20} /> },
            { text: "Animated landing page", icon: <Zap size={20} /> },
            { text: "Responsive design", icon: <Server size={20} /> },
            { text: "Basic SEO optimization", icon: <Briefcase size={20} /> },
            { text: "Chatbot setup", icon: <Database size={20} /> },
        ],
        includes: [
            "Package Includes:",
            "Animated landing page",
            "Responsive design",
            "Basic SEO optimization",
            "Chatbot setup",
        ],
    },
    {
        name: "Growth",
        description: "Best value for growing businesses aiming for conversions",
        price: 1250,
        delivery: "2–4 weeks",
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
        popular: true,
        features: [
            { text: "2–4 weeks delivery", icon: <Rocket size={20} /> },
            { text: "Full animated website", icon: <Zap size={20} /> },
            { text: "AI chatbot integration", icon: <Server size={20} /> },
            { text: "Email automation", icon: <Briefcase size={20} /> },
            { text: "Technical SEO", icon: <Database size={20} /> },
            { text: "3 months free service", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Everything in Starter, plus:",
            "Full animated website",
            "Email automation",
            "Technical SEO",
            "3 months free service",
        ],
    },
    {
        name: "Enterprise",
        description: "Advanced plan with enhanced security and unlimited access for large teams",
        price: 2999,
        delivery: "4–6 weeks",
        buttonText: "Contact Us",
        buttonVariant: "default" as const,
        features: [
            { text: "4–6 weeks delivery", icon: <Rocket size={20} /> },
            { text: "Custom animations", icon: <Zap size={20} /> },
            { text: "Advanced AI integration", icon: <Server size={20} /> },
            { text: "Ongoing SEO & monitoring", icon: <Briefcase size={20} /> },
            { text: "Off-page SEO", icon: <Database size={20} /> },
            { text: "6 months enhanced service", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Everything in Growth, plus:",
            "Custom animations",
            "Advanced AI integration",
            "Ongoing SEO & monitoring",
            "6 months enhanced service",
        ],
    },
];

const categoryData: Record<PricingCategory, { title: string; subtitle: string; plans: Plan[] }> = {
    "all-in-one": {
        title: "All-in-One Packages",
        subtitle: "Complete content creation and management solutions for your business",
        plans: allInOnePackages,
    },
    "video-editing": {
        title: "Video Edit Packages",
        subtitle: "Professional video editing services to elevate your content",
        plans: videoEditPackages,
    },
    "web-development": {
        title: "Website Development",
        subtitle: "Modern, AI-powered websites that drive results",
        plans: webDevelopmentPackages,
    },
};

export default function PricingSection() {
    const pricingRef = useRef<HTMLDivElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState<PricingCategory>("all-in-one");

    useEffect(() => {
        const category = searchParams.get("category") as PricingCategory;
        if (category && categoryData[category]) {
            setActiveCategory(category);
        }
    }, [searchParams]);

    const currentData = categoryData[activeCategory];

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };

    return (
        <div
            className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 min-h-screen max-w-7xl mx-auto relative mb-12 sm:mb-20"
            ref={pricingRef}
        >
            {/* Category Tabs */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                <button
                    onClick={() => setActiveCategory("all-in-one")}
                    className={cn(
                        "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all text-xs sm:text-sm font-medium whitespace-nowrap",
                        activeCategory === "all-in-one"
                            ? "bg-[#8B1538] text-white shadow-lg shadow-[#8B1538]/20"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                    )}
                >
                    All-in-One
                </button>
                <button
                    onClick={() => setActiveCategory("video-editing")}
                    className={cn(
                        "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all text-xs sm:text-sm font-medium whitespace-nowrap",
                        activeCategory === "video-editing"
                            ? "bg-[#8B1538] text-white shadow-lg shadow-[#8B1538]/20"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                    )}
                >
                    Video Editing
                </button>
                <button
                    onClick={() => setActiveCategory("web-development")}
                    className={cn(
                        "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all text-xs sm:text-sm font-medium whitespace-nowrap",
                        activeCategory === "web-development"
                            ? "bg-[#8B1538] text-white shadow-lg shadow-[#8B1538]/20"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                    )}
                >
                    Web Development
                </button>
            </div>

            <article className="flex sm:flex-row flex-col sm:pb-0 pb-8 sm:items-center items-start justify-between mb-8 sm:mb-12">
                <div className="text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[130%] text-white mb-3 sm:mb-4">
                        <VerticalCutReveal
                            splitBy="words"
                            staggerDuration={0.15}
                            staggerFrom="first"
                            reverse={true}
                            containerClassName="justify-start"
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 40,
                                delay: 0,
                            }}
                        >
                            {currentData.title}
                        </VerticalCutReveal>
                    </h2>

                    <TimelineContent
                        as="p"
                        animationNum={0}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                        className="text-sm sm:text-base text-gray-400 w-full md:w-[80%] lg:w-[60%]"
                    >
                        {currentData.subtitle}
                    </TimelineContent>
                </div>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-start">
                {currentData.plans.map((plan) => (
                    <div
                        key={plan.name}
                        className="h-full"
                    >
                        <Card
                            className={`relative flex-col flex justify-between h-full bg-[#111] border-white/10 ${plan.popular
                                ? "ring-1 ring-[#8B1538] shadow-[0_0_20px_rgba(139,21,56,0.2)]"
                                : "hover:border-white/20 transition-colors"
                                }`}
                        >
                            <CardContent className="p-5">
                                <div className="space-y-2 pb-4">
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0">
                                            <span className="bg-[#8B1538] text-white px-3 py-1 rounded-bl-lg text-[10px] font-bold uppercase tracking-wider">
                                                Best Value
                                            </span>
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                                    <p
                                        className="text-xs text-gray-400 min-h-[32px] leading-relaxed"
                                    >
                                        {plan.description}
                                    </p>

                                    <div className="pt-3">
                                        <div className="flex items-baseline gap-1">
                                            {plan.isCustom ? (
                                                <span className="text-3xl font-bold text-white">Custom Pricing</span>
                                            ) : (
                                                <>
                                                    <span className="text-3xl font-bold text-white">
                                                        $
                                                        <NumberFlow
                                                            format={{ currency: "USD" }}
                                                            value={plan.price}
                                                        />
                                                        {plan.maxPrice && plan.maxPrice !== plan.price && (
                                                            <>
                                                                {" - $"}
                                                                <NumberFlow
                                                                    format={{ currency: "USD" }}
                                                                    value={plan.maxPrice}
                                                                />
                                                            </>
                                                        )}
                                                    </span>
                                                    <span className="text-gray-500 font-medium text-sm">
                                                        {activeCategory === "web-development" ? "/one-time" : "/month"}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 pt-2">
                                        Delivery: <span className="text-white">{plan.delivery}</span>
                                    </p>
                                </div>

                                <div className="border-t border-white/10 my-3"></div>

                                <div className="space-y-3 pt-1">
                                    <h4 className="font-medium text-white mb-2 text-xs uppercase tracking-wide opacity-80">
                                        {plan.includes[0]}
                                    </h4>
                                    <ul className="space-y-2">
                                        {plan.includes.slice(1).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className="text-[#8B1538] bg-[#8B1538]/10 rounded-full p-0.5 mr-2 shrink-0 mt-0.5">
                                                    <CheckCheck className="h-3 w-3" />
                                                </span>
                                                <span className="text-xs text-gray-300">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter className="pb-5 px-5 flex flex-col gap-2">
                                {/* WhatsApp Button */}
                                <button
                                    className={`w-full py-3 px-4 text-sm rounded-lg transition-all duration-300 font-bold ${plan.popular
                                        ? "bg-[#8B1538] hover:bg-[#6B1028] text-white shadow-md shadow-[#8B1538]/10"
                                        : "bg-[#8B1538] text-white hover:bg-[#6B1028]"
                                        }`}
                                    onClick={() => window.open(`https://wa.me/923398837213?text=${encodeURIComponent(`Hey Zivo Creative, I'm interested in the ${plan.name} package.`)}`, '_blank')}
                                >
                                    {plan.buttonText}
                                </button>

                                {/* Email Us Button */}
                                <button
                                    className="w-full py-3 px-4 text-sm rounded-lg transition-all duration-300 font-bold bg-white text-black hover:bg-gray-200 border border-gray-300"
                                    onClick={() => {
                                        const categoryName = activeCategory === "all-in-one" ? "All in One" : activeCategory === "video-editing" ? "Video Edit" : "Website Development";
                                        const priceRange = plan.isCustom
                                            ? "custom pricing based on project requirements"
                                            : plan.maxPrice && plan.maxPrice !== plan.price
                                                ? `$${plan.price}-$${plan.maxPrice}${activeCategory === "web-development" ? " (one-time)" : "/month"}`
                                                : `$${plan.price}${activeCategory === "web-development" ? " (one-time)" : "/month"}`;

                                        const features = plan.includes.slice(1).join('\n');

                                        const message = `Hello Zivo Creative,\n\nI want ${categoryName} ${plan.name} Package which includes:\n${features}\n\nat a service fee of ${priceRange} depending on my project size and details.\n\nI would like to speak to a representative as soon as possible.\n\nThanks.`;

                                        window.location.href = `/contact?message=${encodeURIComponent(message)}&package=${encodeURIComponent(categoryName + " " + plan.name)}`;
                                    }}
                                >
                                    Email Us
                                </button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
