import { Check, X } from "lucide-react";

export function WhyZivoCreative() {
    const comparisons = [
        {
            category: "Speed & Turnaround",
            zivoCreative: "24-72 hours for most projects",
            agencies: "1-2 weeks minimum",
            freelancers: "Unpredictable timelines",
            zivoHas: true,
            agenciesHave: false,
            freelancersHave: false,
        },
        {
            category: "Quality & Professionalism",
            zivoCreative: "Agency-grade quality, every time",
            agencies: "High quality, high cost",
            freelancers: "Inconsistent results",
            zivoHas: true,
            agenciesHave: true,
            freelancersHave: false,
        },
        {
            category: "Pricing & Value",
            zivoCreative: "Transparent, affordable packages",
            agencies: "Premium pricing, hidden fees",
            freelancers: "Low cost, variable quality",
            zivoHas: true,
            agenciesHave: false,
            freelancersHave: false,
        },
        {
            category: "Communication",
            zivoCreative: "Direct access, quick responses",
            agencies: "Multiple layers, slow replies",
            freelancers: "Often ghosting or delays",
            zivoHas: true,
            agenciesHave: false,
            freelancersHave: false,
        },
        {
            category: "Technology & Innovation",
            zivoCreative: "AI integration, modern tools",
            agencies: "Traditional workflows",
            freelancers: "Limited tech capabilities",
            zivoHas: true,
            agenciesHave: false,
            freelancersHave: false,
        },
        {
            category: "Reliability",
            zivoCreative: "Consistent delivery, backup team",
            agencies: "Reliable but bureaucratic",
            freelancers: "Single point of failure",
            zivoHas: true,
            agenciesHave: true,
            freelancersHave: false,
        },
    ];

    return (
        <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#8B1538] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#8B1538] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with Logo */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#8B1538]/20 blur-2xl rounded-full" />
                            <img
                                src="https://i.postimg.cc/SNGzjXYz/favicon.png"
                                alt="Zivo Creative Logo"
                                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                            />
                        </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-4 sm:mb-6">
                        <span className="text-white">Why </span>
                        <span className="text-[#8B1538]">Zivo Creative?</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        We combine the quality of top agencies with the speed and affordability you need
                    </p>
                </div>

                {/* Comparison Table - Desktop */}
                <div className="hidden lg:block">
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 gap-4 p-6 bg-white/5 border-b border-white/10">
                            <div className="text-gray-500 text-sm font-medium">What We Offer</div>
                            <div className="text-center">
                                <div className="text-gray-400 text-sm mb-1">Traditional</div>
                                <div className="text-white font-semibold">Agencies</div>
                            </div>
                            <div className="text-center bg-[#8B1538]/10 rounded-2xl p-4 -m-2 border border-[#8B1538]/30">
                                <div className="text-[#8B1538] text-sm mb-1">✨ Best Choice</div>
                                <div className="text-white font-bold text-lg">Zivo Creative</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-400 text-sm mb-1">Individual</div>
                                <div className="text-white font-semibold">Freelancers</div>
                            </div>
                        </div>

                        {/* Table Rows */}
                        <div className="divide-y divide-white/5">
                            {comparisons.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center">
                                        <span className="text-white font-medium">{item.category}</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2">
                                        {item.agenciesHave ? (
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        ) : (
                                            <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                        )}
                                        <span className="text-sm text-gray-400">{item.agencies}</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2 bg-[#8B1538]/5 rounded-xl -m-2 p-4">
                                        <Check className="w-6 h-6 text-[#8B1538] flex-shrink-0" />
                                        <span className="text-sm text-white font-medium">{item.zivoCreative}</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center text-center gap-2">
                                        {item.freelancersHave ? (
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        ) : (
                                            <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                        )}
                                        <span className="text-sm text-gray-400">{item.freelancers}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Comparison Cards - Mobile/Tablet */}
                <div className="lg:hidden space-y-6">
                    {/* Zivo Creative Highlight */}
                    <div className="bg-gradient-to-br from-[#8B1538]/20 to-[#8B1538]/5 border-2 border-[#8B1538]/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
                        <div className="text-center mb-6">
                            <div className="inline-block px-4 py-2 bg-[#8B1538]/30 rounded-full mb-3">
                                <span className="text-[#8B1538] text-sm font-bold">✨ Best Choice</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Zivo Creative</h3>
                            <p className="text-gray-300 text-sm">We validate, design, build, and launch real products.</p>
                        </div>
                        <div className="space-y-3">
                            {comparisons.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 bg-black/30 rounded-xl p-4">
                                    <Check className="w-5 h-5 text-[#8B1538] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-white font-medium text-sm mb-1">{item.category}</div>
                                        <div className="text-gray-300 text-xs">{item.zivoCreative}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Agencies Comparison */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Traditional Agencies</h3>
                        <div className="space-y-3">
                            {comparisons.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    {item.agenciesHave ? (
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    <div>
                                        <div className="text-gray-300 font-medium text-sm mb-1">{item.category}</div>
                                        <div className="text-gray-400 text-xs">{item.agencies}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Freelancers Comparison */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Individual Freelancers</h3>
                        <div className="space-y-3">
                            {comparisons.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    {item.freelancersHave ? (
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    <div>
                                        <div className="text-gray-300 font-medium text-sm mb-1">{item.category}</div>
                                        <div className="text-gray-400 text-xs">{item.freelancers}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm sm:text-base">
                        Join hundreds of creators and brands who chose Zivo Creative
                    </p>
                </div>
            </div>
        </section>
    );
}
