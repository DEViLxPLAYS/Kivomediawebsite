import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import { Link } from "react-router";
import { Phone, Clock, TrendingDown, Shield } from "lucide-react";

const faqs = [
  {
    question: "Does the AI voice agent sound robotic?",
    answer:
      "No. Modern AI voice agents built with VAPI or Bland AI use neural text-to-speech that sounds natural and human. Most callers cannot tell they are speaking to an AI — especially when the conversation flow is well-designed.",
  },
  {
    question: "What happens when the AI can't handle a call?",
    answer:
      "We design warm transfer logic into every voice agent. When a call exceeds the AI's capability or when the caller explicitly requests a human, the system transfers the call to a live agent or leaves a detailed voicemail with full context.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Typically 7–14 days from kickoff to live deployment. This includes voice design, conversation flow, CRM integration, and testing with real call scenarios.",
  },
  {
    question: "What languages does the AI voice agent support?",
    answer:
      "English is our primary deployment language for US clients. Spanish-language support is available. Additional languages can be added depending on the platform and use case.",
  },
  {
    question: "How much does an AI voice agent cost compared to a human receptionist?",
    answer:
      "A human receptionist costs $35,000–$55,000 per year including salary, benefits, and turnover. A ZROXZ AI voice agent starts at $1,500–$3,000 one-time setup plus $50–$200/month in API costs. The ROI is typically achieved within the first month.",
  },
];

export function AIVoiceAgentsService() {
  return (
    <ServicePageLayout
      title="AI Voice Agent Development — Replace Your Receptionist for Less"
      h1="AI Voice Agent Development — Replace Your Receptionist for Less"
      metaDescription="ZROXZ builds AI voice agents using VAPI and Bland AI that handle inbound calls 24/7, book appointments, and eliminate missed leads. Proven: 80+ daily calls automated for Evinn.pk."
      canonicalUrl="https://zroxz.com/services/ai-voice-agents"
      keywords="AI voice agent, AI receptionist, VAPI voice agent, replace receptionist with AI, AI phone system for small business"
      category="AI Voice Agents"
      faqs={faqs}
      pricing={{ price: "$1,500", label: "One-time setup · Monthly API costs extra · Book for custom quote" }}
    >
      <p>
        Your phone rings after hours. No one answers. That lead goes to your competitor. This happens to thousands
        of small businesses every single day — and it's completely preventable. ZROXZ builds{" "}
        <strong>AI voice agents</strong> that answer every call, 24/7, handle the conversation naturally, book
        appointments, and log everything to your CRM. No salary, no sick days, no missed leads.
      </p>

      <h2>Proven Results: Evinn.pk Case Study</h2>
      <p>
        For <strong>Evinn.pk</strong>, ZROXZ deployed an AI voice agent using VAPI that now handles their entire
        inbound call flow. The results:
      </p>

      <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
        {[
          { stat: "80+", label: "Daily calls handled" },
          { stat: "70%", label: "Handle time reduction" },
          { stat: "0", label: "Missed after-hours leads" },
          { stat: "14 days", label: "Time to deployment" },
        ].map(({ stat, label }) => (
          <div key={label} className="rounded-xl border border-[#D4C5FF] bg-[#F3EFFF] p-5 text-center">
            <p className="text-3xl font-black text-[#7C3AED]">{stat}</p>
            <p className="text-sm text-[#6B7280] mt-1">{label}</p>
          </div>
        ))}
      </div>

      <p>
        <Link to="/case-studies/evinn-ai-voice-agent">Read the full Evinn.pk case study →</Link>
      </p>

      <h2>What Our AI Voice Agents Handle</h2>
      <ul>
        <li>Answer inbound calls with a natural, branded greeting</li>
        <li>Understand caller intent through natural language processing</li>
        <li>Book appointments directly into your calendar (Google, Calendly, GHL)</li>
        <li>Answer FAQ questions about your business, hours, pricing, and location</li>
        <li>Collect caller name, phone, and reason for call</li>
        <li>Log all call data and transcripts to your CRM automatically</li>
        <li>Transfer to a human agent when needed (warm handoff)</li>
        <li>Send follow-up SMS or email after every call</li>
      </ul>

      <h2>The Technology Behind Our Voice Agents</h2>
      <p>
        We build with the most reliable voice AI infrastructure available:
      </p>
      <ul>
        <li><strong>VAPI:</strong> Enterprise-grade voice AI with ultra-low latency and natural conversation</li>
        <li><strong>Bland AI:</strong> Highly customizable voice platform for complex call flows</li>
        <li><strong>Retell AI:</strong> Cost-effective option for high-volume deployments</li>
        <li><strong>Twilio:</strong> Phone number provisioning and SMS integration</li>
        <li><strong>GoHighLevel:</strong> CRM logging, pipeline updates, and follow-up automation</li>
      </ul>

      <h2>The True Cost of a Human Receptionist vs. AI</h2>
      <p>
        A full-time receptionist costs $35,000–$55,000/year when you include salary, benefits, payroll taxes,
        and turnover costs. They work 8 hours a day, 5 days a week. An AI voice agent from ZROXZ costs
        $1,500–$3,000 to build and $50–$200/month to run — and it works 24/7, 365 days a year.
      </p>
      <p>
        That's why our clients see full ROI within the first 30 days.{" "}
        <Link to="/blog/replace-receptionist-with-ai">See the full cost comparison →</Link>
      </p>

      <h2>Who Is This For?</h2>
      <ul>
        <li>Dental clinics and medical practices with high inbound call volume</li>
        <li>Real estate agents who can't answer every inquiry immediately</li>
        <li>Law firms, accountants, and service businesses with appointment-based models</li>
        <li>E-commerce and local businesses getting after-hours calls</li>
        <li>Any business losing leads because the phone isn't always answered</li>
      </ul>

      <h2>How ZROXZ Deploys Your AI Voice Agent</h2>
      <ol>
        <li><strong>Discovery (Day 1–2):</strong> Map your call scenarios, common questions, and CRM setup</li>
        <li><strong>Voice & flow design (Day 3–5):</strong> Design conversation flows, booking logic, escalation paths</li>
        <li><strong>Build & integration (Day 6–11):</strong> Build on VAPI/Bland, integrate CRM and calendar</li>
        <li><strong>Testing (Day 12–13):</strong> Test with real call scenarios across dozens of variations</li>
        <li><strong>Go live (Day 14):</strong> Deploy to your phone number and monitor first week closely</li>
      </ol>
    </ServicePageLayout>
  );
}
