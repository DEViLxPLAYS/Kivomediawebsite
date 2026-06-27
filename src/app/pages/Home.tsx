import { MessageCircle, ArrowRight, Check, Calendar, Star, Zap, Clock, Shield } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { GlowingCard } from "../components/ui/glowing-card";
import { StaggerTestimonials } from "@/app/components/ui/stagger-testimonials";
import { ZivoWorldMap } from "@/app/components/ZivoWorldMap";
import { LetsWorkTogether } from "@/app/components/ui/lets-work-section";
import { SEOHead } from "@/app/components/SEOHead";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "YouTube Long-Form",
      description: "Cinematic storytelling for YouTubers who demand excellence",
      features: ["Pro editing", "Motion graphics", "Color grading", "24-72h turnaround"],
    },
    {
      title: "Short-Form Content",
      description: "High-impact Reels, TikToks & Shorts that convert",
      features: ["Hook mastery", "Trend optimization", "Fast delivery", "Batch editing"],
    },
    {
      title: "Web Development",
      description: "Custom websites with AI chatbot integration",
      features: ["Responsive design", "AI chatbots", "E-commerce", "SEO optimized"],
    },
    {
      title: "Faceless YT Automation",
      description: "AI-powered YouTube channels with automated content creation",
      features: ["AI script generation", "Auto voiceover", "Full automation", "Channel management"],
    },
  ];

  const whyUsFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      subtitle: "24–72 Hour Delivery",
      description: "We move at creator speed. No waiting weeks for your content.",
      highlight: true,
    },
    {
      icon: Star,
      title: "Agency Quality",
      subtitle: "At Freelancer Prices",
      description: "Premium editing, motion graphics & color grading — affordable packages.",
      highlight: false,
    },
    {
      icon: Clock,
      title: "Always On",
      subtitle: "Round-the-Clock Support",
      description: "Direct communication, fast replies — your dedicated creative partner.",
      highlight: false,
    },
    {
      icon: Shield,
      title: "Unlimited Revisions",
      subtitle: "Until You're 100% Happy",
      description: "We don't stop until you love it. Your satisfaction is guaranteed.",
      highlight: false,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zivocreative.com/#organization",
        "name": "Zivo Creative",
        "url": "https://zivocreative.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.postimg.cc/zGd03Gxt/Chat-GPT-Image-Jan-28-2026-02-41-08-PM.png",
          "width": 512,
          "height": 512
        },
        "description": "Professional video editing, YouTube automation, website development, and social media content creation services for creators and brands",
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
          "https://www.instagram.com/zivocreative/",
          "https://www.youtube.com/@zivocreative"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://zivocreative.com/#website",
        "url": "https://zivocreative.com",
        "name": "Zivo Creative",
        "publisher": {
          "@id": "https://zivocreative.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Website Development, Video Editing, YouTube Automation & Content Creation"
        description="Professional website development with AI chatbot integration, YouTube automation services, video editing, and social media content creation. Custom web development, YouTube editing, short-form content, and digital marketing solutions for creators and brands."
        keywords="website development, custom web development, web design, AI chatbot integration, YouTube automation, video editing, social media content, YouTube editing, short-form videos, reels, TikTok, podcast editing, faceless YouTube automation, Zivo Creative"
        canonicalUrl="https://zivocreative.com"
        structuredData={structuredData}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-black" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
            }}
          />
          {/* Ambient glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B1538]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8B1538]/8 rounded-full blur-[80px] pointer-events-none" />
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">

            {/* Left — Text */}
            <motion.div
              className="space-y-6 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-[#8B1538]/15 border border-[#8B1538]/30 text-[#8B1538] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B1538] animate-pulse" />
                Available for New Projects
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05]">
                <span className="block text-white">We Build Content</span>
                <span className="block text-white">That</span>
                <span className="block bg-gradient-to-r from-white to-[#8B1538] bg-clip-text text-transparent">
                  Performs.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0">
                Video editing, content creation & web development — delivered fast, built to scale.
              </p>

              {/* Single CTA */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3 pt-2">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B1538] text-white px-8 py-4 rounded-full text-base font-semibold overflow-hidden transition-all"
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
                </motion.button>

                <motion.a
                  href="https://wa.me/923190485953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#8B1538]/60 hover:bg-[#8B1538]/10 text-white px-8 py-4 rounded-full text-base transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </motion.a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
                <div className="flex -space-x-2">
                  {["MC","SJ","AM","LP","RK"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1538] to-[#6B1028] border-2 border-black flex items-center justify-center text-[9px] font-bold text-white"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-white font-semibold">500+</span> happy clients
                </div>
              </div>
            </motion.div>

            {/* Right — Intro Video */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl shadow-[#8B1538]/20">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dxtuhnzlw&public_id=Website_Intro_Video_US_Style_kso5bd&fluid=true&controls=true&muted=false&autoplay=false&loop=false&show_logo=false&colors[base]=%23C41E3A&colors[accent]=%238B1538"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: "none" }}
                    title="Zivo Creative Intro"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1538]/20 via-[#C41E3A]/20 to-[#8B1538]/20 blur-xl -z-10 opacity-75" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WORLD MAP ───────────────────────────────────────── */}
      <ZivoWorldMap />

      {/* ── SERVICES OVERVIEW ───────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-3">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#8B1538]">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              From content machines to luxury storytelling
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
                <GlowingCard innerClassName="p-6 sm:p-8">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-[#8B1538] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#8B1538]/20 flex items-center justify-center group-hover:bg-[#8B1538]/30 transition-colors">
                    <ArrowRight className="w-5 h-5 text-[#8B1538]" />
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#8B1538] hover:text-white transition-colors text-sm font-medium"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ZIVO CREATIVE ───────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A] relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 -left-48 w-80 h-80 bg-[#8B1538]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-[#8B1538]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#8B1538]/20 blur-2xl rounded-full" />
                <img
                  src="https://i.postimg.cc/zGd03Gxt/Chat-GPT-Image-Jan-28-2026-02-41-08-PM.png"
                  alt="Zivo Creative Logo"
                  className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-4">
              <span className="text-white">Why </span>
              <span className="text-[#C41E3A]">Zivo Creative?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Agency quality. Freelancer speed. Transparent pricing. We're built differently.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
            {whyUsFeatures.map((feat, i) => (
              <motion.div
                key={i}
                className={`relative group rounded-2xl p-6 border transition-all duration-300 cursor-default ${
                  feat.highlight
                    ? "bg-gradient-to-br from-[#8B1538]/20 to-[#8B1538]/5 border-[#8B1538]/40 shadow-lg shadow-[#8B1538]/10"
                    : "bg-white/[0.03] border-white/10 hover:border-[#8B1538]/30 hover:bg-white/[0.06]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {feat.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B1538] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    ✦ Best Choice
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feat.highlight ? "bg-[#8B1538]" : "bg-[#8B1538]/15"
                }`}>
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-0.5">{feat.title}</h3>
                <p className="text-[#8B1538] text-xs font-semibold tracking-wide mb-2">{feat.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* VS Strip */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 text-center">
              {/* Header */}
              <div className="p-4 border-b border-white/10 text-gray-500 text-sm font-medium">Traditional Agencies</div>
              <div className="p-4 border-b border-[#8B1538]/40 bg-[#8B1538]/10 text-[#8B1538] text-sm font-bold">✦ Zivo Creative</div>
              <div className="p-4 border-b border-white/10 text-gray-500 text-sm font-medium">Individual Freelancers</div>

              {[
                ["1–2 weeks", "24–72 hours", "Unpredictable"],
                ["High cost", "Affordable", "Variable"],
                ["Slow replies", "Direct access", "Often unavailable"],
                ["Reliable", "Reliable + fast", "Single point of failure"],
              ].map(([agency, zivo, freelancer], idx) => (
                <>
                  <div key={`a${idx}`} className={`px-4 py-3 text-sm text-gray-400 text-center ${idx < 3 ? "border-b border-white/5" : ""}`}>{agency}</div>
                  <div key={`z${idx}`} className={`px-4 py-3 text-sm text-white font-medium text-center bg-[#8B1538]/5 ${idx < 3 ? "border-b border-[#8B1538]/20" : ""}`}>{zivo}</div>
                  <div key={`f${idx}`} className={`px-4 py-3 text-sm text-gray-400 text-center ${idx < 3 ? "border-b border-white/5" : ""}`}>{freelancer}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT VIDEO REVIEWS ────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0A0A0A] to-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-3">
              <span className="text-white">Video Reviews</span>{" "}
              <span className="text-[#8B1538]">from Clients</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Real results. Real clients. Real talk.
            </p>
          </div>

          {/* Two vertical videos — responsive, compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              "https://player.cloudinary.com/embed/?cloud_name=dxtuhnzlw&public_id=WhatsApp_Video_2026-03-10_at_4.00.18_PM_pwnf4d&fluid=true&controls=true&muted=false&autoplay=false&loop=false&show_logo=false&colors[base]=%23C41E3A&colors[accent]=%238B1538",
              "https://player.cloudinary.com/embed/?cloud_name=dxtuhnzlw&public_id=WhatsApp_Video_2026-03-11_at_1.53.41_AM_epzt6e&fluid=true&controls=true&muted=false&autoplay=false&loop=false&show_logo=false&colors[base]=%23C41E3A&colors[accent]=%238B1538"
            ].map((videoSrc, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-lg shadow-[#8B1538]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.01 }}
              >
                {/* 9:16 aspect for vertical video but capped */}
                <div className="relative w-full" style={{ paddingBottom: "177.78%", maxHeight: "420px", overflow: "hidden" }}>
                  <iframe
                    src={videoSrc}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: "none" }}
                    title={`Client Video Review ${i + 1}`}
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1538]/10 via-transparent to-[#8B1538]/10 blur-xl -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <StaggerTestimonials />

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-4">
              <span className="text-white">Ready to</span>{" "}
              <span className="text-[#8B1538]">Scale?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Let's talk about your content goals — book a free strategy call today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B1538] text-white px-8 py-4 rounded-full text-base font-semibold overflow-hidden"
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
              </motion.button>

              <motion.a
                href="https://wa.me/923190485953"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#8B1538]/60 hover:bg-[#8B1538]/10 text-white px-8 py-4 rounded-full text-base transition-all"
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
