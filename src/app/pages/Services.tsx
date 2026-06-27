import { Check, ArrowRight, MessageCircle, Calendar, Video, Globe, ShoppingCart, Shield, Zap } from "lucide-react";
import { LetsWorkTogether } from "@/app/components/ui/lets-work-section";
import { useState } from "react";
import { motion } from "framer-motion";
import { SEOHead } from "@/app/components/SEOHead";

const services = [
  {
    icon: Video,
    tag: "Content & Media",
    title: "Video Editing",
    description:
      "Full-service video editing and AI-powered content production that brings your vision to life.",
    points: [
      "YouTube long-form editing",
      "YouTube automation systems",
      "Faceless AI YouTube channels",
      "AI content production",
      "Shorts, Reels & TikToks",
      "Motion graphics & animation",
      "Color grading & sound design",
      "Fast turnaround, premium quality",
    ],
    gradient: "from-rose-900/30 via-transparent to-transparent",
    glow: "rgba(139,21,56,0.35)",
  },
  {
    icon: Globe,
    tag: "Development",
    title: "Website & App Development",
    description:
      "We build fast, secure & scalable websites and mobile apps.",
    points: [
      "Custom business websites",
      "Mobile app development",
      "Modern UI/UX design",
      "API & AI integrations",
      "Responsive optimization",
      "Performance focused systems",
    ],
    gradient: "from-blue-900/25 via-transparent to-transparent",
    glow: "rgba(37,99,235,0.25)",
  },
  {
    icon: ShoppingCart,
    tag: "E-Commerce",
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce systems to launch and scale your online business.",
    points: [
      "Full e-commerce websites",
      "Product & inventory management",
      "Payment gateway integration",
      "Analytics & reporting",
      "Order management systems",
      "Complete startup support",
    ],
    gradient: "from-emerald-900/25 via-transparent to-transparent",
    glow: "rgba(16,185,129,0.22)",
  },
  {
    icon: Shield,
    tag: "Security",
    title: "Cyber Security",
    description:
      "Protect your business, servers and digital assets with advanced security solutions.",
    points: [
      "Website & server security",
      "Malware & vulnerability scanning",
      "Data protection systems",
      "Firewall & security audits",
      "Security monitoring",
      "Threat prevention solutions",
    ],
    gradient: "from-yellow-900/20 via-transparent to-transparent",
    glow: "rgba(234,179,8,0.2)",
  },
  {
    icon: Zap,
    tag: "Automation",
    title: "Automated Workflows",
    description:
      "Smart automation systems that streamline your business operations and save time.",
    points: [
      "CRM workflow automation",
      "AI-powered business systems",
      "Lead management automation",
      "Automated client onboarding",
      "Task & process automation",
      "Business efficiency optimization",
    ],
    gradient: "from-purple-900/25 via-transparent to-transparent",
    glow: "rgba(147,51,234,0.25)",
  },
];

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
          "@type": "Service",
          position: index + 1,
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Organization",
            name: "Zivo Creative",
            url: "https://zivocreative.com",
          },
          areaServed: ["US", "CA"],
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://zivocreative.com/services",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://zivocreative.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://zivocreative.com/services" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Our Services — Video Editing, Web Development, E-Commerce, Cyber Security & Automation"
        description="Professional video editing, website & app development, e-commerce solutions, cyber security, and business workflow automation. Full-service digital agency for creators and brands."
        keywords="video editing, YouTube automation, web development, e-commerce, cyber security, workflow automation, AI content, mobile app development"
        canonicalUrl="https://zivocreative.com/services"
        structuredData={structuredData}
      />

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B1538]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#8B1538]/15 border border-[#8B1538]/30 text-[#8B1538] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1538] animate-pulse" />
              What We Do
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter mb-5">
              <span className="text-white">Our </span>
              <span className="text-[#8B1538]">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              From viral content to secured systems — everything your brand needs to dominate digitally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CARDS ──────────────────────────── */}
      <section className="relative py-8 pb-24 overflow-hidden">
        {/* Section noise + gradient background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                onBook={() => setIsModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-black" />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">
            <span className="text-white">How It </span>
            <span className="text-[#8B1538]">Works</span>
          </h2>
          <p className="text-gray-400 mb-14 text-lg">Our streamlined process ensures quality and speed</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Reach out on WhatsApp or book a call" },
              { step: "02", title: "Discovery", desc: "We understand your goals & requirements" },
              { step: "03", title: "Execute", desc: "We deliver with speed and quality" },
              { step: "04", title: "Deliver", desc: "You get the final result, ready to publish" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl text-[#8B1538]/25 font-bold">{item.step}</div>
                <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">
              <span className="text-white">Ready to </span>
              <span className="text-[#8B1538]">Get Started?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss your project and build something that performs.
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

      <LetsWorkTogether isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

/* ── SERVICE CARD COMPONENT ─────────────────────── */
interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  onBook: () => void;
}

function ServiceCard({ service, index, onBook }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden cursor-default flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={
        {
          "--glow-color": service.glow,
        } as React.CSSProperties
      }
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
        }}
      />

      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
      />

      {/* Glow ring on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1px var(--glow-color), 0 0 40px -8px var(--glow-color)`,
        }}
      />

      {/* Card content */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
        {/* Top row — icon + tag + arrow */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#8B1538]/20 group-hover:bg-[#8B1538]/30 flex items-center justify-center transition-colors duration-300">
              <service.icon className="w-6 h-6 text-[#8B1538]" />
            </div>
            <span className="text-[#8B1538] text-xs font-bold tracking-widest uppercase">
              {service.tag}
            </span>
          </div>

          {/* Arrow — animates on hover */}
          <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-[#8B1538]/50 group-hover:bg-[#8B1538]/10 flex items-center justify-center transition-all duration-300 overflow-hidden">
            <motion.div
              animate={{ x: 0 }}
              whileHover={{ x: 2 }}
              className="flex items-center"
            >
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#8B1538] transition-colors duration-300 group-hover:translate-x-0.5" />
            </motion.div>
          </div>
        </div>

        {/* Title + Description */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          {service.title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

        {/* Feature list */}
        <ul className="space-y-2 mb-8 flex-1">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <Check className="w-4 h-4 text-[#8B1538] mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={onBook}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-[#8B1538]/0 border border-[#8B1538]/30 hover:bg-[#8B1538] hover:border-[#8B1538] text-[#8B1538] hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Call</span>
        </button>
      </div>
    </motion.div>
  );
}
