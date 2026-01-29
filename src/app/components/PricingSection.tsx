"use client";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { TimelineContent } from "@/app/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/app/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server, Zap, Rocket } from "lucide-react";
import { useRef } from "react";

const plans = [
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

export default function PricingSection() {
    const pricingRef = useRef<HTMLDivElement>(null);

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
            className="px-4 pt-20 pb-10 min-h-screen max-w-7xl mx-auto relative mb-20"
            ref={pricingRef}
        >
            <article className="flex sm:flex-row flex-col sm:pb-0 pb-12 sm:items-center items-start justify-between mb-12">
                <div className="text-left">
                    <h2 className="text-4xl md:text-5xl font-medium leading-[130%] text-white mb-4">
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
                            Package Comparison
                        </VerticalCutReveal>
                    </h2>

                    <TimelineContent
                        as="p"
                        animationNum={0}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                        className="text-gray-400 w-full md:w-[60%]"
                    >
                        Choose the perfect package for your business needs. Transparent pricing, no hidden fees.
                    </TimelineContent>
                </div>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
                {plans.map((plan) => (
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
                                                    <span className="text-gray-500 font-medium text-sm">/month</span>
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
                            <CardFooter className="pb-5 px-5">
                                <button
                                    className={`w-full py-3 px-4 text-sm rounded-lg transition-all duration-300 font-bold ${plan.popular
                                        ? "bg-[#8B1538] hover:bg-[#6B1028] text-white shadow-md shadow-[#8B1538]/10"
                                        : "bg-white text-black hover:bg-gray-200"
                                        }`}
                                    onClick={() => window.open(`https://wa.me/923398837213?text=${encodeURIComponent(`Hey Zivo Creative, I'm interested in the ${plan.name} package.`)}`, '_blank')}
                                >
                                    {plan.buttonText}
                                </button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
