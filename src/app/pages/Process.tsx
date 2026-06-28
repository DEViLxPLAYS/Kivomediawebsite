import { MessageSquare, Zap, RefreshCw, Rocket, Calendar } from "lucide-react";
import { SEOHead } from "@/app/components/SEOHead";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Book a Free Call",
      description: "Schedule a 30-minute strategy call on Calendly or reach out via WhatsApp. No commitment required.",
      details: [
        "Calendly booking",
        "WhatsApp chat",
        "Zero obligation",
        "Same-day response",
      ],
    },
    {
      number: "02",
      icon: Zap,
      title: "Discovery & Strategy",
      description: "We deep-dive into your goals, current tools, and pain points to design the right automation or build.",
      details: [
        "Business audit",
        "Tech stack review",
        "Goal alignment",
        "Custom roadmap",
      ],
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Build & Iterate",
      description: "We build your AI system, website, or workflow with rapid iterations and full transparency.",
      details: [
        "Weekly updates",
        "Live previews",
        "Unlimited revisions",
        "Direct Slack/WhatsApp",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Scale",
      description: "We launch, monitor, and optimize — ensuring your system generates results from day one.",
      details: [
        "Full handover",
        "Team training",
        "Ongoing support",
        "Performance tracking",
      ],
    },
  ];

  const faqs = [
    {
      question: "How fast can you deliver?",
      answer: "Most AI automation setups go live within 5-10 business days. Websites take 2-4 weeks depending on complexity. Rush delivery is available.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We offer monthly retainer packages for ongoing automation management, updates, and optimization after launch.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely. We work with US, UK, and Middle East clients. Our team operates across multiple time zones for fast communication.",
    },
    {
      question: "What tools do you use for automation?",
      answer: "We primarily use n8n, GoHighLevel, and custom AI APIs (OpenAI, ElevenLabs, etc.). We can also integrate with your existing CRM.",
    },
    {
      question: "Can you work with our existing tech stack?",
      answer: "Yes! We integrate with most major platforms — HubSpot, Salesforce, Zapier, Make, Slack, Google Workspace, and more.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "ZROXZ Process",
        "description": "Our streamlined 4-step process for AI automation, web development, and video editing",
        "totalTime": "PT72H",
        "step": steps.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.title,
          "text": step.description,
          "url": `https://zroxz.com/process#step-${index + 1}`,
          "itemListElement": step.details.map((detail, idx) => ({
            "@type": "HowToDirection",
            "position": idx + 1,
            "text": detail
          }))
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zroxz.com" },
          { "@type": "ListItem", "position": 2, "name": "Process", "item": "https://zroxz.com/process" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEOHead
        title="Our Process — How ZROXZ Builds AI Automation & Web Systems"
        description="Learn how ZROXZ delivers AI automation, CRM workflows, and web development in 4 clear steps. From discovery to launch — transparent, fast, and results-driven."
        keywords="AI automation process, web development workflow, CRM setup process, n8n workflow building, GoHighLevel setup"
        canonicalUrl="https://zroxz.com/process"
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
              <span className="text-[#1A1523]">Our</span>{" "}
              <span className="text-[#A78BFA]">Process</span>
            </h1>
            <p className="text-xl text-[#6B7280]">
              Streamlined, transparent, and designed for speed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Visual */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-[#EDE9FE] border border-[#E8E0FF] flex items-center justify-center mb-6">
                    <step.icon className="w-16 h-16 text-[#A78BFA]" />
                  </div>
                  <div className="absolute top-0 left-0 text-8xl font-bold text-[#A78BFA]/8">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <div className="inline-block px-4 py-2 bg-[#EDE9FE] border border-[#A78BFA]/30 rounded-full mb-4">
                    <span className="text-[#7C3AED] text-sm font-semibold">Step {index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl text-[#1A1523] tracking-tight mb-4 font-bold">
                    {step.title}
                  </h2>
                  <p className="text-[#6B7280] text-lg mb-6">{step.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {step.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F9F7FF] border border-[#E8E0FF] rounded-lg p-4"
                    >
                      <p className="text-[#1A1523] text-sm font-medium">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F9F7FF] border-t border-[#E8E0FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-[#1A1523]">Typical</span>{" "}
              <span className="text-[#A78BFA]">Timeline</span>
            </h2>
            <p className="text-xl text-[#6B7280]">
              From first call to live system
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8E0FF] hidden md:block" />
            <div className="space-y-12">
              {[
                { time: "Day 1", event: "Discovery call & strategy" },
                { time: "Day 2-3", event: "Architecture & planning" },
                { time: "Day 4-7", event: "Build & development" },
                { time: "Day 8-9", event: "Testing & revisions" },
                { time: "Day 10", event: "Launch & handover" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-center gap-8"
                >
                  <div className="md:w-1/2 text-right">
                    {index % 2 === 0 ? (
                      <div className="bg-white border border-[#E8E0FF] rounded-lg p-4 shadow-[0_2px_16px_rgba(167,139,250,0.06)]">
                        <p className="text-[#A78BFA] font-semibold">{item.time}</p>
                        <p className="text-[#1A1523] font-medium">{item.event}</p>
                      </div>
                    ) : (
                      <div className="md:block hidden" />
                    )}
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 bg-[#A78BFA] rounded-full -translate-x-1/2 hidden md:block border-2 border-white shadow-[0_0_0_3px_rgba(167,139,250,0.2)]" />
                  <div className="md:w-1/2">
                    {index % 2 === 1 ? (
                      <div className="bg-white border border-[#E8E0FF] rounded-lg p-4 shadow-[0_2px_16px_rgba(167,139,250,0.06)]">
                        <p className="text-[#A78BFA] font-semibold">{item.time}</p>
                        <p className="text-[#1A1523] font-medium">{item.event}</p>
                      </div>
                    ) : (
                      <div className="md:block hidden" />
                    )}
                  </div>
                  <div className="md:hidden w-4 h-4 bg-[#A78BFA] rounded-full flex-shrink-0 border-2 border-white" />
                  <div className="md:hidden bg-white border border-[#E8E0FF] rounded-lg p-4 flex-1">
                    <p className="text-[#A78BFA] font-semibold">{item.time}</p>
                    <p className="text-[#1A1523] font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-[#E8E0FF]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-[#1A1523]">Frequently Asked</span>{" "}
              <span className="text-[#A78BFA]">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#F9F7FF] border border-[#E8E0FF] rounded-2xl p-6 hover:border-[#A78BFA]/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-[#1A1523] text-lg mb-3 font-semibold">{faq.question}</h3>
                <p className="text-[#6B7280]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F9F7FF] border-t border-[#E8E0FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-[#1A1523]">Ready to</span>{" "}
            <span className="text-[#A78BFA]">Start?</span>
          </h2>
          <p className="text-xl text-[#6B7280] mb-8">
            Experience the ZROXZ difference — book your free strategy call today
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
