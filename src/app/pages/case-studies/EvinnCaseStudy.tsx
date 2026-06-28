import { SEOHead } from "@/app/components/SEOHead";
import { Link } from "react-router";
import { Calendar, ArrowRight, ChevronRight, Phone, Clock, TrendingDown, CheckCircle, Quote } from "lucide-react";

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How ZROXZ Built an AI Voice Agent Handling 80+ Daily Calls",
  author: { "@type": "Organization", name: "ZROXZ" },
  publisher: { "@type": "Organization", name: "ZROXZ", url: "https://zroxz.com" },
  description:
    "Case study: ZROXZ built an AI voice agent for Evinn.pk that handles 80+ daily calls with 70% handle time reduction and zero missed after-hours leads.",
  url: "https://zroxz.com/case-studies/evinn-ai-voice-agent",
};

const results = [
  { stat: "80+", label: "Daily calls handled automatically", icon: Phone },
  { stat: "70%", label: "Reduction in average handle time", icon: TrendingDown },
  { stat: "0", label: "Missed after-hours leads", icon: CheckCircle },
  { stat: "14 days", label: "From kickoff to live deployment", icon: Clock },
];

export function EvinnCaseStudy() {
  return (
    <>
      <SEOHead
        title="Case Study: AI Voice Agent for Evinn.pk — 80+ Daily Calls Automated"
        description="How ZROXZ built an AI voice agent for Evinn.pk that handles 80+ daily calls with 70% handle time reduction and zero missed after-hours leads — deployed in 14 days."
        canonicalUrl="https://zroxz.com/case-studies/evinn-ai-voice-agent"
        keywords="AI voice agent case study, ZROXZ case study, Evinn.pk, AI receptionist, automated call handling"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      {/* Hero */}
      <div className="pt-24 pb-14" style={{ background: "linear-gradient(135deg, #0D0118 0%, #150828 60%, #1E0B3A 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-purple-300/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-200/70">Case Studies</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-200/80 font-medium">Evinn.pk — AI Voice Agent</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5" style={{ background: "rgba(124,58,237,0.3)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.3)" }}>
              Case Study · AI Voice Agent
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5" style={{ color: "#F5F0FF" }}>
              How ZROXZ Built an AI Voice Agent Handling 80+ Daily Calls for Evinn.pk
            </h1>
            <p className="text-purple-200/70 text-lg leading-relaxed max-w-2xl">
              Evinn.pk was losing 30+ leads per day to missed after-hours calls. ZROXZ deployed
              an AI voice agent in 14 days that now handles their entire inbound call flow —
              24/7, with zero missed leads.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {results.map(({ stat, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(167,139,250,0.3)" }}
              >
                <Icon className="w-5 h-5 text-purple-300 mx-auto mb-2" />
                <p className="text-3xl font-black text-white mb-1">{stat}</p>
                <p className="text-xs text-purple-300/70 leading-tight">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Body */}
      <div className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="space-y-10">
            {/* The Problem */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1523] mb-4">The Problem</h2>
              <div className="prose prose-lg max-w-none prose-p:text-[#374151] prose-p:leading-relaxed">
                <p>
                  Evinn.pk is a growing business in Pakistan serving customers who prefer to contact them
                  by phone. Their team was handling calls manually — which worked fine during business hours.
                  But after 6 PM, the phones went unanswered. Every missed call was a potential customer
                  calling a competitor.
                </p>
                <p>
                  At an estimated 30+ missed calls per day, with a 20% conversion rate and an average order
                  value of $50, the after-hours call problem was costing Evinn.pk an estimated{" "}
                  <strong>$90,000+ per year in lost revenue</strong>. And that number was only growing as
                  their business scaled.
                </p>
                <p>
                  Hiring a night-shift receptionist would have cost $15,000–$25,000 per year — and introduced
                  new management overhead. They needed a better solution.
                </p>
              </div>
            </section>

            {/* The Solution */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1523] mb-4">The Solution</h2>
              <div className="prose prose-lg max-w-none prose-p:text-[#374151] prose-p:leading-relaxed prose-ul:text-[#374151] prose-li:marker:text-[#A78BFA]">
                <p>
                  ZROXZ proposed and built an <strong>AI voice agent using VAPI</strong> — a production-grade
                  voice AI platform — that would answer every inbound call, handle the conversation naturally,
                  take orders, answer common questions, and log everything to their CRM.
                </p>
                <p>The solution had four key components:</p>
                <ul>
                  <li>
                    <strong>VAPI voice infrastructure:</strong> Ultra-low latency AI voice platform that
                    ensures natural conversation without awkward pauses
                  </li>
                  <li>
                    <strong>Custom conversation flows:</strong> Scripted and trained on Evinn's specific
                    products, pricing, policies, and common customer questions
                  </li>
                  <li>
                    <strong>CRM integration:</strong> Every call automatically logged with transcript,
                    caller details, and order/inquiry information
                  </li>
                  <li>
                    <strong>Escalation logic:</strong> Complex queries automatically escalated to a
                    human via WhatsApp notification with full call context
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Built It */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1523] mb-4">How We Built It — Technical Breakdown</h2>
              <div className="prose prose-lg max-w-none prose-p:text-[#374151] prose-p:leading-relaxed">
                <p>
                  The build process ran over 14 days from kickoff call to live deployment:
                </p>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { day: "Day 1–2", title: "Discovery & Mapping", desc: "Documented all call scenarios, common questions, product catalog, pricing, and escalation triggers. Built a conversation flow diagram covering 40+ possible call paths." },
                  { day: "Day 3–5", title: "Voice Agent Build", desc: "Built the voice agent on VAPI with custom prompt engineering trained on Evinn's specific business context. Configured natural language understanding for Evinn's product names and customer vocabulary." },
                  { day: "Day 6–8", title: "CRM Integration", desc: "Integrated with Evinn's CRM using n8n. Every call outcome — order taken, inquiry logged, escalation triggered — is automatically written to the CRM with full transcript." },
                  { day: "Day 9–11", title: "Testing", desc: "Internal testing across 200+ call scenarios including edge cases, difficult questions, and attempted misuse. Refined conversation flows based on test results." },
                  { day: "Day 12–13", title: "Soft Launch", desc: "Deployed to a secondary phone number and ran parallel testing with live calls monitored in real-time. Minor refinements made." },
                  { day: "Day 14", title: "Full Go-Live", desc: "Switched the main business number to the AI voice agent. ZROXZ monitored the first 48 hours closely and made real-time adjustments." },
                ].map(({ day, title, desc }) => (
                  <div key={day} className="flex gap-4 p-5 rounded-xl border border-[#E8E0FF] bg-[#F9F7FF]">
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-[#7C3AED] text-white text-xs font-bold px-2.5 py-1 rounded-full">{day}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1523] mb-1">{title}</p>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Results Deep Dive */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1523] mb-4">The Results</h2>
              <div className="prose prose-lg max-w-none prose-p:text-[#374151] prose-p:leading-relaxed prose-ul:text-[#374151] prose-li:marker:text-[#A78BFA]">
                <p>Within the first 30 days of going live, the AI voice agent delivered:</p>
                <ul>
                  <li><strong>80+ daily calls handled automatically</strong> — no human intervention required for standard inquiries</li>
                  <li><strong>70% reduction in average handle time</strong> — the AI resolves calls in 2–3 minutes vs. 7–10 minutes for human agents</li>
                  <li><strong>Zero missed after-hours leads</strong> — every call is answered instantly, regardless of time or day</li>
                  <li><strong>Full call transcripts in CRM</strong> — management can review any call with complete context</li>
                  <li><strong>15% reduction in escalations</strong> — as the AI learned from real calls, it became better at handling edge cases</li>
                </ul>
                <p>
                  The net result: Evinn.pk's after-hours revenue is now captured, their team spends less time
                  on phone calls, and customer experience is more consistent.
                </p>
              </div>
            </section>

            {/* Client Quote */}
            <section>
              <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #F3EFFF 0%, #EDE9FF 100%)", border: "1px solid #D4C5FF" }}>
                <Quote className="w-8 h-8 text-[#A78BFA] mb-4" />
                <blockquote className="text-xl font-medium text-[#1A1523] leading-relaxed mb-4 italic">
                  "The AI handles our calls better than we expected. Our team is no longer stressed about
                  missing leads, and the CRM logging means we have a complete record of every customer
                  interaction. ZROXZ delivered exactly what they promised."
                </blockquote>
                <p className="text-sm text-[#6B7280] font-medium">— Evinn.pk Client (name withheld for privacy)</p>
              </div>
            </section>

            {/* Technology Used */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1523] mb-4">Technology Stack</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "VAPI — Voice AI Platform",
                  "OpenAI GPT-4 — Language Model",
                  "Twilio — Phone Infrastructure",
                  "n8n — CRM Integration",
                  "GoHighLevel — CRM",
                  "Custom Prompt Engineering",
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-3 rounded-lg border border-[#E8E0FF] bg-white">
                    <CheckCircle className="w-4 h-4 text-[#A78BFA] flex-shrink-0" />
                    <span className="text-sm text-[#374151] font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #F3EFFF 0%, #EDE9FF 100%)", border: "1px solid #D4C5FF" }}>
            <h3 className="text-2xl font-black text-[#1A1523] mb-2">Want This for Your Business?</h3>
            <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
              Book a free 30-minute strategy call. We'll map out an AI voice agent for your specific
              call flow and give you a real quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/arfa1054/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
              >
                <Calendar className="w-4 h-4" />
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/services/ai-voice-agents"
                className="inline-flex items-center gap-2 border border-purple-400/40 text-[#7C3AED] px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#F3EFFF] transition-colors"
              >
                AI Voice Agent Service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

