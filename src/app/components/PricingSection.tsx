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
        name: "Starter",
        description: "Small businesses; intro sites, single product or service",
        price: 149, // Monthly Service
        yearlyPrice: 850, // One-Time Build
        delivery: "1–2 weeks",
        buttonText: "Get started",
        buttonVariant: "outline" as const,
        features: [
            { text: "Animated landing", icon: <Rocket size={20} /> },
            { text: "Responsive Design", icon: <Zap size={20} /> },
            { text: "Basic SEO", icon: <Database size={20} /> },
            { text: "Chatbot setup", icon: <Briefcase size={20} /> },
        ],
        includes: [
            "Package Includes:",
            "1–2 weeks Delivery",
            "Responsive Layout",
            "Basic SEO Setup",
        ],
    },
    {
        name: "Growth",
        description: "Growing businesses aiming for conversions",
        price: 249, // Monthly Service
        yearlyPrice: 1250, // One-Time Build
        delivery: "2–4 weeks",
        buttonText: "Get started",
        buttonVariant: "outline" as const,
        popular: true,
        features: [
            { text: "Full animated site", icon: <Rocket size={20} /> },
            { text: "AI chat intent", icon: <Briefcase size={20} /> },
            { text: "Email automation", icon: <Server size={20} /> },
            { text: "Technical SEO", icon: <Database size={20} /> },
        ],
        includes: [
            "Everything in Starter, plus:",
            "3 months Free Service",
            "Technical SEO",
            "Email Automation",
        ],
    },
    {
        name: "Enterprise",
        description: "Established brands, multi-service platforms",
        price: 349, // Monthly Service
        yearlyPrice: 2999, // One-Time Build
        delivery: "4–6 weeks",
        buttonText: "Contact Sales",
        buttonVariant: "default" as const,
        features: [
            { text: "Custom animations", icon: <Rocket size={20} /> },
            { text: "Advanced AI", icon: <Briefcase size={20} /> },
            { text: "Full Automation", icon: <Server size={20} /> },
            { text: "Ongoing SEO", icon: <Database size={20} /> },
        ],
        includes: [
            "Everything in Growth, plus:",
            "6 months enhanced service",
            "Full Uptime Guarantee",
            "Off-page SEO Monitoring",
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-start">
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
                                            <span className="text-3xl font-bold text-white">
                                                $
                                                <NumberFlow
                                                    format={{ currency: "USD" }}
                                                    value={plan.yearlyPrice}
                                                />
                                            </span>
                                            <span className="text-gray-500 font-medium text-sm">One-Time</span>
                                        </div>
                                        <div className="flex items-baseline gap-2 mt-0.5">
                                            <span className="text-base text-[#8B1538] font-semibold">
                                                +$
                                                <NumberFlow
                                                    format={{ currency: "USD" }}
                                                    value={plan.price}
                                                />
                                            </span>
                                            <span className="text-gray-500 text-xs">/month service</span>
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
