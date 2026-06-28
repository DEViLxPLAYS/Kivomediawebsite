import { MessageCircle, ArrowRight, Check, Calendar, Star, Zap, Clock, Shield } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { GlowingCard } from "../components/ui/glowing-card";
import { StaggerTestimonials } from "@/app/components/ui/stagger-testimonials";
import { ZivoWorldMap } from "@/app/components/ZivoWorldMap";
import { LetsWorkTogether } from "@/app/components/ui/lets-work-section";
import { SEOHead } from "@/app/components/SEOHead";
import { useState } from "react";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "AI Chatbots",
      description: "Intelligent conversational AI that qualifies leads and books appointments 24/7",
      features: ["Lead qualification", "Appointment booking", "Multi-platform deploy", "GPT-powered"],
    },
    {
      title: "AI Voice Agents",
      description: "Human-like voice AI that handles calls, follow-ups, and customer support automatically",
      features: ["80+ daily calls", "Zero missed leads", "After-hours coverage", "CRM integration"],
    },
    {
      title: "CRM & n8n Automation",
      description: "End-to-end workflow automation with n8n and GoHighLevel to eliminate manual work",
      features: ["40% faster response", "Auto follow-ups", "Lead pipeline", "n8n + GHL"],
    },
    {
      title: "Web & SaaS Development",
      description: "Custom websites and SaaS platforms built with React, Next.js, and Supabase",
      features: ["Sub-2s load times", "5+ sites launched", "React + Next.js", "Supabase backend"],
    },
  ];

  const whyUsFeatures = [
    {
      icon: Zap,
      title: "AI-First",
      subtitle: "Automation at the Core",
      description: "Every solution we build leverages AI to save you time and generate more leads.",
      highlight: true,
    },
    {
      icon: Star,
      title: "Premium Quality",
      subtitle: "At Startup Prices",
      description: "Agency-grade deliverables — without the agency price tag or the wait.",
      highlight: false,
    },
    {
      icon: Clock,
      title: "Always On",
      subtitle: "Round-the-Clock Delivery",
      description: "Direct communication, fast replies — your dedicated growth partner.",
      highlight: false,
    },
    {
      icon: Shield,
      title: "Results Driven",
      subtitle: "ROI or We Iterate",
      description: "We don't stop until the system generates leads, saves time, or scales revenue.",
      highlight: false,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zroxz.com/#organization",
        "name": "ZROXZ",
        "url": "https://zroxz.com",
        "description": "AI automation, web development, and video editing agency helping US businesses scale on autopilot",
        "foundingDate": "2023",
        "areaServed": ["US", "CA"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+92-319-0485953",
          "contactType": "Customer Service",
          "availableLanguage": ["English"],
          "areaServed": ["US", "CA"]
        },
        "sameAs": [
          "https://www.instagram.com/zroxz/",
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://zroxz.com/#website",
        "url": "https://zroxz.com",
        "name": "ZROXZ",
        "publisher": {
          "@id": "https://zroxz.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Best AI Automation Agency & Web Development Company in USA"
        description="ZROXZ is the premier AI automation agency, website development company, and video editing agency. We serve businesses across the USA (California, Texas) and Canada to automate workflows and scale operations on autopilot."
        keywords="best AI automation agency in USA, AI automation agency, video edit agency, website development agency, website development company, best website development in USA, California, Texas, Canada, AI chatbots, AI voice agents, CRM automation, n8n workflows, GoHighLevel, SaaS development, ZROXZ"
        canonicalUrl="https://zroxz.com"
        structuredData={structuredData}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top left, #EDE9FE 0%, #FFFFFF 60%)" }} />
          {/* Ambient glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A78BFA]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#7C3AED]/8 rounded-full blur-[80px] pointer-events-none" />
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">

            {/* Left — Text */}
            <motion.div
              className="space-y-6 text-center lg:text-left order-1 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-[#A78BFA]/10 border border-[#A78BFA]/30 text-[#7C3AED] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                Available for New Projects
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05]">
                <span
                  className="block font-black"
                  style={{
                    background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ZROXZ
                </span>
                <span className="block text-[#1A1523]">AI Automation ·</span>
                <span className="block text-[#1A1523]">Web Development ·</span>
                <span className="block text-[#1A1523]">Video Editing</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-lg mx-auto lg:mx-0">
                We build AI systems, websites, and visual content that generate leads, save time, and scale your business — on autopilot.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3 pt-2">
                <motion.a
                  href="https://calendly.com/arfa1054/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg text-base font-semibold overflow-hidden transition-all"
                  style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                  />
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Book a Free Call</span>
                </motion.a>

                <motion.a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#A78BFA] hover:border-[#7C3AED] hover:bg-[#F3EFFF] text-[#7C3AED] px-8 py-4 rounded-lg text-base transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>See Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
                <div className="flex -space-x-2">
                  {["MC","SJ","AM","LP","RK"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-[#6B7280]">
                  <span className="text-[#1A1523] font-semibold">50+</span> happy clients
                </div>
              </div>
            </motion.div>

            {/* Right — Visual (stats card) */}
            <motion.div
              className="order-2 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div
                className="relative rounded-2xl overflow-hidden border border-[#E8E0FF] shadow-[0_8px_40px_rgba(167,139,250,0.18)]"
                style={{ background: "linear-gradient(135deg, #EDE9FE 0%, #F9F7FF 50%, #FFFFFF 100%)" }}
              >
                <div className="p-8 sm:p-12 space-y-6">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Daily Calls Handled", value: "80+" },
                      { label: "Handle Time Reduction", value: "70%" },
                      { label: "Sites Launched", value: "100+" },
                      { label: "Lead Response Faster", value: "75%" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="bg-white border border-[#E8E0FF] rounded-xl p-4 shadow-[0_2px_16px_rgba(167,139,250,0.08)]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      >
                        <div className="text-2xl font-black text-[#7C3AED]">{stat.value}</div>
                        <div className="text-xs text-[#6B7280] font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-[#A78BFA] font-semibold text-sm tracking-widest uppercase">AI · Web · Video</p>
                    <p className="text-[#1A1523] font-bold text-lg mt-1">Systems that work while you sleep.</p>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#A78BFA]/10 via-[#7C3AED]/10 to-[#A78BFA]/10 blur-xl -z-10 opacity-75" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WORLD MAP ───────────────────────────────────────── */}
      <ZivoWorldMap />

      {/* ── SERVICES OVERVIEW ───────────────────────────────── */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-3">
              <span className="text-[#1A1523]">Our</span>{" "}
              <span className="text-[#A78BFA]">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-xl mx-auto">
              AI automation, web development, and video — everything you need to scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowingCard innerClassName="p-6 sm:p-8 bg-white border border-[#E8E0FF]">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl text-[#1A1523]">{service.title}</h3>
                    <p className="text-[#6B7280] text-sm">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#6B7280] text-sm">
                          <Check className="w-4 h-4 text-[#A78BFA] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center group-hover:bg-[#A78BFA]/20 transition-colors">
                    <ArrowRight className="w-5 h-5 text-[#A78BFA]" />
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#A78BFA] hover:text-[#7C3AED] transition-colors text-sm font-medium"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ZROXZ ───────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F9F7FF] relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 -left-48 w-80 h-80 bg-[#A78BFA]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-[#7C3AED]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-4">
              <span className="text-[#1A1523]">Why </span>
              <span className="text-[#7C3AED]">ZROXZ?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto">
              Agency quality. AI-powered speed. Transparent pricing. We're built differently.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
            {whyUsFeatures.map((feat, i) => (
              <motion.div
                key={i}
                className={`relative group rounded-2xl p-6 border transition-all duration-300 cursor-default ${
                  feat.highlight
                    ? "bg-gradient-to-br from-[#A78BFA]/20 to-[#A78BFA]/5 border-[#A78BFA]/40 shadow-lg shadow-[#A78BFA]/10"
                    : "bg-white border-[#E8E0FF] hover:border-[#A78BFA]/40 hover:shadow-[0_4px_20px_rgba(167,139,250,0.12)]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {feat.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}>
                    ✦ Best Choice
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feat.highlight ? "bg-[#A78BFA]" : "bg-[#EDE9FE]"
                }`}>
                  <feat.icon className={`w-6 h-6 ${feat.highlight ? "text-white" : "text-[#A78BFA]"}`} />
                </div>
                <h3 className="text-[#1A1523] font-bold text-lg mb-0.5">{feat.title}</h3>
                <p className="text-[#A78BFA] text-xs font-semibold tracking-wide mb-2">{feat.subtitle}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* VS Strip */}
          <div className="bg-white border border-[#E8E0FF] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(167,139,250,0.08)]">
            <div className="grid grid-cols-3 text-center">
              {/* Header */}
              <div className="p-4 border-b border-[#E8E0FF] text-[#6B7280] text-sm font-medium">Traditional Agencies</div>
              <div className="p-4 border-b border-[#A78BFA]/30 bg-[#A78BFA]/8 text-[#7C3AED] text-sm font-bold">✦ ZROXZ</div>
              <div className="p-4 border-b border-[#E8E0FF] text-[#6B7280] text-sm font-medium">Individual Freelancers</div>

              {[
                ["1–2 weeks", "24–72 hours", "Unpredictable"],
                ["High cost", "Affordable", "Variable"],
                ["Slow replies", "Direct access", "Often unavailable"],
                ["Reliable", "Reliable + fast", "Single point of failure"],
              ].map(([agency, zivo, freelancer], idx) => (
                <>
                  <div key={`a${idx}`} className={`px-4 py-3 text-sm text-[#6B7280] text-center ${idx < 3 ? "border-b border-[#E8E0FF]" : ""}`}>{agency}</div>
                  <div key={`z${idx}`} className={`px-4 py-3 text-sm text-[#1A1523] font-medium text-center bg-[#A78BFA]/5 ${idx < 3 ? "border-b border-[#A78BFA]/15" : ""}`}>{zivo}</div>
                  <div key={`f${idx}`} className={`px-4 py-3 text-sm text-[#6B7280] text-center ${idx < 3 ? "border-b border-[#E8E0FF]" : ""}`}>{freelancer}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS STRIP (replaces client logos / video reviews) ── */}
      <section className="py-16 sm:py-20 bg-[#F3EFFF] border-t border-[#E8E0FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-3">
              <span className="text-[#1A1523]">Real</span>{" "}
              <span className="text-[#A78BFA]">Results</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-xl mx-auto">
              Case study highlights from ZROXZ client work
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                emoji: "⚡",
                client: "Evinn.pk",
                stats: ["80+ Daily Calls Handled", "70% Handle Time Reduction", "Zero Missed Leads After Hours"],
                tag: "AI Voice Agent",
              },
              {
                emoji: "🤖",
                client: "AI Automation",
                stats: ["3 Clients Live", "40% Faster Lead Response", "n8n + GoHighLevel Workflows"],
                tag: "Automation",
              },
              {
                emoji: "🌐",
                client: "Web Development",
                stats: ["5+ Sites Launched", "Sub-2s Load Times", "React + Next.js + Supabase"],
                tag: "Dev",
              },
              {
                emoji: "🎬",
                client: "Video Editing",
                stats: ["Motion Design & AI Video", "Content for US Brands", "Short-form + Long-form"],
                tag: "Media",
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                className="bg-white border border-[#E8E0FF] rounded-2xl p-6 shadow-[0_2px_16px_rgba(167,139,250,0.08)] cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(167,139,250,0.18)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{badge.emoji}</span>
                  <div>
                    <div className="text-[#1A1523] font-bold text-sm">{badge.client}</div>
                    <div className="text-[#A78BFA] text-xs font-semibold tracking-widest uppercase">{badge.tag}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {badge.stats.map((stat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] flex-shrink-0" />
                      <span className="text-[#1A1523] font-medium">{stat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <StaggerTestimonials />

      {/* ── FINAL CTA (dark accent panel) ───────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: "#1A1523" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-4">
              <span className="text-white">Ready to</span>{" "}
              <span className="text-[#A78BFA]">Scale?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl mx-auto">
              Let's talk about your goals — book a free strategy call today and let's build something that works while you sleep.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.a
                href="https://calendly.com/arfa1054/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-lg text-base font-semibold overflow-hidden"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                />
                <Calendar className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Book a Free Call</span>
              </motion.a>

              <motion.a
                href="https://wa.me/923190485953"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#A78BFA]/60 hover:bg-[#A78BFA]/10 text-white px-8 py-4 rounded-lg text-base transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book a Call Modal */}
      <LetsWorkTogether isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
