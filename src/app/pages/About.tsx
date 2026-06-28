import { Target, Users, Zap, Award, Calendar } from "lucide-react";
import { SEOHead } from "@/app/components/SEOHead";
import { motion } from "framer-motion";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence First",
      description: "We don't do mediocre. Every automation, every line of code, every frame is crafted to perfection.",
    },
    {
      icon: Zap,
      title: "AI-First",
      description: "We build with AI at the core — faster delivery, smarter systems, and better results for clients.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We're not just vendors — we're your growth partners invested in your success long-term.",
    },
    {
      icon: Award,
      title: "Results Driven",
      description: "Beautiful systems are worthless if they don't perform. We optimize for leads, revenue, and ROI.",
    },
  ];

  const stats = [
    { number: "50+", label: "Clients Served" },
    { number: "80+", label: "Daily AI Calls Handled" },
    { number: "5+", label: "Websites Launched" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  const team = [
    {
      name: "Muhammad Arfa",
      role: "AI Automation & Web Dev & SaaS",
      description: "Visionary builder and AI systems architect leading ZROXZ's mission to automate, build, and scale businesses on autopilot.",
      phone: "+92 310 0004068",
      whatsapp: "923100004068",
    },
    {
      name: "Hamzah Ayyan",
      role: "Video Editor & Motion Designer",
      description: "Creative video editor and motion designer crafting compelling visual stories and animations that elevate ZROXZ's brand and client content.",
      phone: "+92 312 5091172",
      whatsapp: "923125091172",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "url": "https://zroxz.com/about",
        "name": "About ZROXZ",
        "description": "AI automation, web development, and video editing agency helping US businesses scale on autopilot"
      },
      {
        "@type": "Organization",
        "name": "ZROXZ",
        "url": "https://zroxz.com",
        "description": "AI automation, web development, and video editing for US businesses",
        "numberOfEmployees": team.length,
        "foundingDate": "2023",
        "areaServed": ["US", "CA"],
        "knowsAbout": ["AI Automation", "AI Chatbots", "AI Voice Agents", "CRM Automation", "n8n", "GoHighLevel", "Web Development", "SaaS Development", "Video Editing"],
        "slogan": "AI Automation · Web Development · Video Editing",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+92-319-0485953",
          "contactType": "Customer Service",
          "email": "info@zroxz.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zroxz.com" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://zroxz.com/about" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEOHead
        title="About ZROXZ — AI Automation & Web Development Agency"
        description="Meet the ZROXZ team — AI systems builders, web developers, and automation specialists helping US businesses scale on autopilot. Learn about our values, mission, and commitment to results."
        keywords="about ZROXZ, AI automation agency, web development team, AI chatbots, AI voice agents, CRM automation"
        canonicalUrl="https://zroxz.com/about"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
              <span className="text-[#1A1523]">About</span>{" "}
              <span className="text-[#A78BFA]">ZROXZ</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              AI automation, web development, and video editing — built for US businesses that want to scale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-[#6B7280] text-lg">
            <p>
              We started ZROXZ with a simple belief: <span className="text-[#1A1523] font-semibold">businesses deserve better automation partners</span>.
            </p>
            <p>
              Too often, we saw US businesses stuck between two bad options — either pay a huge agency and wait weeks, or hire a cheap freelancer and get inconsistent results.
            </p>
            <p className="text-[#1A1523] text-xl font-semibold">
              We built ZROXZ to solve this problem.
            </p>
            <p>
              Today, we're a team of AI systems builders, web developers, and creative specialists working with growing businesses across the US, UK, and Middle East. We've built AI voice agents that handle 80+ calls daily, automation workflows that cut response times by 40%, and websites that load in under 2 seconds.
            </p>
            <p>
              <span className="text-[#1A1523] font-semibold">Our mission is simple:</span> help you generate more leads, save more time, and scale faster — on autopilot.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-[#1A1523]">Our</span>{" "}
              <span className="text-[#A78BFA]">Values</span>
            </h2>
            <p className="text-xl text-[#6B7280]">
              What drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#E8E0FF] rounded-2xl p-8 hover:border-[#A78BFA]/40 hover:shadow-[0_4px_20px_rgba(167,139,250,0.12)] transition-all text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#EDE9FE] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#A78BFA]" />
                </div>
                <h3 className="text-[#1A1523] text-xl mb-3 font-semibold">{value.title}</h3>
                <p className="text-[#6B7280] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white border-t border-[#E8E0FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl text-[#A78BFA] mb-2 font-black">
                  {stat.number}
                </div>
                <div className="text-[#6B7280]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-[#1A1523]">The</span>{" "}
              <span className="text-[#A78BFA]">Team</span>
            </h2>
            <p className="text-xl text-[#6B7280]">
              AI builders and strategists, handpicked for results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => {
              const isFounder = member.role.includes("Founder");
              return (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all ${
                    isFounder
                      ? "bg-gradient-to-br from-[#A78BFA]/15 to-[#7C3AED]/5 border-2 border-[#A78BFA]/40 hover:border-[#A78BFA]/60 shadow-lg shadow-[#A78BFA]/10"
                      : "bg-white border border-[#E8E0FF] hover:border-[#A78BFA]/30 hover:shadow-[0_4px_20px_rgba(167,139,250,0.12)]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {isFounder && (
                    <div className="absolute -top-3 left-6 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}>
                      ✦ {member.role.includes("Co-Founder") ? "Co-Founder" : "Founder"}
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isFounder ? "bg-[#A78BFA]" : "bg-[#EDE9FE]"
                    }`}>
                      <Users className={`w-8 h-8 ${isFounder ? "text-white" : "text-[#A78BFA]"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#1A1523] text-xl mb-0.5 font-semibold">{member.name}</h3>
                      <p className="text-[#A78BFA] text-sm mb-2 font-medium">{member.role}</p>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{member.description}</p>
                      {member.phone && (
                        <a
                          href={`https://wa.me/${member.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#A78BFA] hover:text-[#7C3AED] transition-colors font-medium"
                        >
                          {member.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white border-t border-[#E8E0FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-[#1A1523]">Our</span>{" "}
              <span className="text-[#A78BFA]">Philosophy</span>
            </h2>
          </div>

          <div className="bg-[#F9F7FF] border border-[#E8E0FF] rounded-2xl p-12 shadow-[0_2px_16px_rgba(167,139,250,0.08)]">
            <blockquote className="text-2xl text-[#1A1523] text-center italic font-medium">
              "Less manual work, more automation. Every system should generate leads while you sleep. Every build should scale without adding headcount."
            </blockquote>
            <p className="text-center text-[#6B7280] mt-6">— ZROXZ Team</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F9F7FF] border-t border-[#E8E0FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-[#1A1523]">Work With</span>{" "}
            <span className="text-[#A78BFA]">ZROXZ</span>
          </h2>
          <p className="text-xl text-[#6B7280] mb-8">
            Join growing businesses who trust ZROXZ to automate, build, and scale
          </p>
          <a
            href="https://calendly.com/arfa1054/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold"
            style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Free Call</span>
          </a>
        </div>
      </section>
    </div>
  );
}
