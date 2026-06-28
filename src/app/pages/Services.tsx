import { Check, ArrowRight, MessageCircle, Calendar, Bot, Mic, Workflow, Globe, Code, Video, Zap, Database } from "lucide-react";
import { LetsWorkTogether } from "@/app/components/ui/lets-work-section";
import { useState } from "react";
import { motion } from "framer-motion";
import { SEOHead } from "@/app/components/SEOHead";

const services = [
  {
    icon: Bot,
    tag: "AI Automation",
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI that qualifies leads, books appointments, and handles support — 24/7 without human intervention.",
    points: [
      "GPT-powered conversation flows",
      "Lead qualification & scoring",
      "Appointment booking automation",
      "Multi-platform deployment",
      "CRM & calendar integration",
      "Custom training on your business",
    ],
    gradient: "from-violet-100/60 via-transparent to-transparent",
    glow: "rgba(167,139,250,0.3)",
  },
  {
    icon: Mic,
    tag: "AI Automation",
    title: "AI Voice Agents",
    description:
      "Human-like voice AI that handles inbound & outbound calls, follow-ups, and customer service — zero missed leads.",
    points: [
      "80+ daily calls handled (Evinn.pk)",
      "70% handle time reduction",
      "Zero missed leads after hours",
      "Natural conversation flows",
      "CRM auto-logging",
      "Multilingual support",
    ],
    gradient: "from-purple-100/50 via-transparent to-transparent",
    glow: "rgba(124,58,237,0.25)",
  },
  {
    icon: Workflow,
    tag: "Automation",
    title: "CRM Automation",
    description:
      "End-to-end CRM setup and automation — GoHighLevel, HubSpot, or custom — that turns your pipeline into a machine.",
    points: [
      "GoHighLevel setup & automation",
      "Lead pipeline automation",
      "Auto follow-up sequences",
      "Client onboarding workflows",
      "Reporting & analytics",
      "Team notification systems",
    ],
    gradient: "from-indigo-100/50 via-transparent to-transparent",
    glow: "rgba(99,102,241,0.22)",
  },
  {
    icon: Zap,
    tag: "Automation",
    title: "n8n Workflows",
    description:
      "Custom n8n automation workflows that connect your tools and eliminate manual work across your entire business.",
    points: [
      "40% faster lead response",
      "Multi-app workflow automation",
      "API & webhook integrations",
      "Slack, email, and CRM sync",
      "Error handling & monitoring",
      "Unlimited workflow scale",
    ],
    gradient: "from-fuchsia-100/40 via-transparent to-transparent",
    glow: "rgba(192,132,252,0.22)",
  },
  {
    icon: Globe,
    tag: "Development",
    title: "Web Development",
    description:
      "Custom websites built fast, built to convert — React, Next.js, Supabase — with sub-2 second load times guaranteed.",
    points: [
      "5+ sites launched",
      "Sub-2s load times",
      "React + Next.js + Supabase",
      "Responsive & SEO optimized",
      "AI chatbot integration",
      "E-commerce ready",
    ],
    gradient: "from-blue-100/40 via-transparent to-transparent",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    icon: Code,
    tag: "Development",
    title: "SaaS Development",
    description:
      "Full-stack SaaS platforms with authentication, billing, and dashboards — from MVP to production-ready.",
    points: [
      "Full-stack SaaS architecture",
      "Auth, billing & subscriptions",
      "Admin dashboards",
      "API development",
      "Database design",
      "Deployment & DevOps",
    ],
    gradient: "from-cyan-100/40 via-transparent to-transparent",
    glow: "rgba(6,182,212,0.2)",
  },
  {
    icon: Database,
    tag: "Integration",
    title: "GoHighLevel",
    description:
      "Complete GoHighLevel setup, automation, and management — your all-in-one sales & marketing machine.",
    points: [
      "Full GHL account setup",
      "Funnel & pipeline builds",
      "Email & SMS automation",
      "Reputation management",
      "Sub-account management",
      "White-label setup",
    ],
    gradient: "from-emerald-100/40 via-transparent to-transparent",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    icon: Video,
    tag: "Media",
    title: "Video Editing / Motion Design",
    description:
      "Professional video editing and AI motion design for content creators and brands serving US audiences.",
    points: [
      "Long-form YouTube editing",
      "Short-form Reels & TikToks",
      "AI motion graphics",
      "Color grading & sound design",
      "Content for US brands",
      "Fast turnaround, premium quality",
    ],
    gradient: "from-rose-100/40 via-transparent to-transparent",
    glow: "rgba(244,63,94,0.18)",
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
            name: "ZROXZ",
            url: "https://zroxz.com",
          },
          areaServed: ["US", "CA"],
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://zroxz.com/services",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://zroxz.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://zroxz.com/services" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Services — AI Automation, Web Development, CRM & Video Editing"
        description="ZROXZ offers AI chatbots, AI voice agents, CRM automation, n8n workflows, GoHighLevel, web development, SaaS development, and video editing for US businesses."
        keywords="AI chatbots, AI voice agents, CRM automation, n8n workflows, GoHighLevel, web development, SaaS development, video editing, ZROXZ"
        canonicalUrl="https://zroxz.com/services"
        structuredData={structuredData}
      />

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#F9F7FF]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#A78BFA]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#A78BFA]/10 border border-[#A78BFA]/30 text-[#7C3AED] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
              What We Do
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter mb-5">
              <span className="text-[#1A1523]">Our </span>
              <span className="text-[#A78BFA]">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto">
              From AI automation to luxury web builds — everything your business needs to dominate digitally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CARDS ──────────────────────────── */}
      <section className="relative py-8 pb-24 overflow-hidden bg-white">
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
      <section className="relative py-20 overflow-hidden bg-[#F9F7FF]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">
            <span className="text-[#1A1523]">How It </span>
            <span className="text-[#A78BFA]">Works</span>
          </h2>
          <p className="text-[#6B7280] mb-14 text-lg">Our streamlined process ensures quality and speed</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book a Call", desc: "Schedule a free call on Calendly or reach out on WhatsApp" },
              { step: "02", title: "Discovery", desc: "We understand your goals, stack, and automation needs" },
              { step: "03", title: "Execute", desc: "We build and deliver with AI-powered speed and quality" },
              { step: "04", title: "Launch", desc: "You get the final result, ready to scale" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl text-[#A78BFA]/25 font-bold">{item.step}</div>
                <h3 className="text-lg text-[#1A1523] font-semibold">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#E8E0FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">
              <span className="text-[#1A1523]">Ready to </span>
              <span className="text-[#A78BFA]">Get Started?</span>
            </h2>
            <p className="text-[#6B7280] text-lg mb-8">
              Let's discuss your project and build something that performs.
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#A78BFA] hover:border-[#7C3AED] hover:bg-[#F3EFFF] text-[#7C3AED] px-8 py-4 rounded-lg text-base transition-all"
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
      className="group relative rounded-2xl border border-[#E8E0FF] bg-white overflow-hidden cursor-default flex flex-col shadow-[0_2px_16px_rgba(167,139,250,0.06)]"
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
            <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] group-hover:bg-[#A78BFA]/20 flex items-center justify-center transition-colors duration-300">
              <service.icon className="w-6 h-6 text-[#A78BFA]" />
            </div>
            <span className="text-[#A78BFA] text-xs font-bold tracking-widest uppercase">
              {service.tag}
            </span>
          </div>

          {/* Arrow — animates on hover */}
          <div className="w-9 h-9 rounded-full border border-[#E8E0FF] group-hover:border-[#A78BFA]/50 group-hover:bg-[#EDE9FE] flex items-center justify-center transition-all duration-300 overflow-hidden">
            <motion.div
              animate={{ x: 0 }}
              whileHover={{ x: 2 }}
              className="flex items-center"
            >
              <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#A78BFA] transition-colors duration-300 group-hover:translate-x-0.5" />
            </motion.div>
          </div>
        </div>

        {/* Title + Description */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#1A1523] mb-2 tracking-tight">
          {service.title}
        </h2>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{service.description}</p>

        {/* Feature list */}
        <ul className="space-y-2 mb-8 flex-1">
          {service.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <Check className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
              <span className="text-[#1A1523]">{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://calendly.com/arfa1054/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center gap-2 border border-[#A78BFA]/40 hover:border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white text-[#7C3AED] px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Call</span>
        </a>
      </div>
    </motion.div>
  );
}
