import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { GlowingCard } from "../components/ui/glowing-card";

export function Services() {
  const services = [
    {
      title: "YouTube Long-Form Editing",
      tagline: "Cinematic storytelling that keeps viewers watching",
      description: "From raw footage to published masterpiece. We handle everything so you can focus on creating.",
      features: [
        "Professional color grading",
        "Motion graphics & animations",
        "Sound design & mixing",
        "Thumbnail consultation",
        "SEO-optimized editing",
        "Multi-cam sync & editing",
      ],
      idealFor: ["YouTubers", "Vloggers", "Educational creators", "Documentary filmmakers"],
      turnaround: "24-72 hours",
    },
    {
      title: "Short-Form Content",
      tagline: "Reels, TikToks & Shorts that stop the scroll",
      description: "High-impact vertical content optimized for every platform. Built for virality and performance.",
      features: [
        "Hook-first editing",
        "Trend-aware formatting",
        "Platform optimization",
        "Batch editing available",
        "Captions & subtitles",
        "Repurposing from long-form",
      ],
      idealFor: ["Content creators", "Influencers", "E-commerce brands", "SaaS companies"],
      turnaround: "12-24 hours",
    },
    {
      title: "Brand & Ad Creatives",
      tagline: "Commercial content that converts",
      description: "From concept to final delivery. Premium editing for brands that demand excellence and results.",
      features: [
        "Concept development",
        "Script to screen",
        "Performance-driven editing",
        "A/B test variations",
        "Platform-specific versions",
        "Unlimited revisions",
      ],
      idealFor: ["Brands", "Marketing agencies", "E-commerce", "Startups"],
      turnaround: "3-5 days",
    },
    {
      title: "Podcast Editing & Repurposing",
      tagline: "Transform conversations into content goldmines",
      description: "Full podcast production and strategic content repurposing to maximize your reach.",
      features: [
        "Multi-camera editing",
        "Audio enhancement",
        "Clip creation for social",
        "Highlight reels",
        "Transcript integration",
        "Distribution support",
      ],
      idealFor: ["Podcasters", "Thought leaders", "Agencies", "Business owners"],
      turnaround: "48-72 hours",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
            <span className="text-white">Our</span>{" "}
            <span className="text-[#8B1538]">Services</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Premium video editing solutions for every content need
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <GlowingCard
              key={index}
              className="bg-transparent border-none p-0"
              innerClassName="bg-transparent border-none rounded-none overflow-visible"
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block px-4 py-2 bg-[#8B1538]/20 border border-[#8B1538]/30 rounded-full mb-4">
                      <span className="text-[#8B1538] text-sm">Service {index + 1}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl text-white tracking-tight mb-3">
                      {service.title}
                    </h2>
                    <p className="text-xl text-[#8B1538] mb-4">{service.tagline}</p>
                    <p className="text-gray-400 text-lg">{service.description}</p>
                  </div>

                  <div>
                    <h3 className="text-white text-lg mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#8B1538] mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Details Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                  <div>
                    <h3 className="text-white text-lg mb-3">Ideal For:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((client, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-300 text-sm"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Turnaround Time</span>
                      <span className="text-white">{service.turnaround}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/923398837213?text=${encodeURIComponent(
                      `Hey Zivo Creative, I want ${service.title} service which includes: ${service.features.join(", ")}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 py-3 rounded-full transition-colors w-full"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-white">How It</span>{" "}
            <span className="text-[#8B1538]">Works</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Our streamlined process ensures quality and speed
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit", desc: "Upload your footage" },
              { step: "02", title: "Edit", desc: "We work our magic" },
              { step: "03", title: "Review", desc: "Request revisions" },
              { step: "04", title: "Deliver", desc: "Get final files" },
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="text-5xl text-[#8B1538]/30">{item.step}</div>
                <h3 className="text-xl text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-white">Ready to</span>{" "}
            <span className="text-[#8B1538]">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss your project and find the perfect solution
          </p>
          <a
            href="https://wa.me/923398837213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-all text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book a Call</span>
          </a>
        </div>
      </section>
    </div>
  );
}
