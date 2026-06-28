import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import { Link } from "react-router";
import { Bot, Check, Zap, MessageCircle, Users, Clock } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build an AI chatbot for my business?",
    answer:
      "Most AI chatbots are fully built and deployed within 7–14 days. This includes discovery, conversation flow design, OpenAI integration, testing, and launch on your website or platform of choice.",
  },
  {
    question: "Can an AI chatbot qualify leads for my business?",
    answer:
      "Absolutely. That's one of the primary use cases. The chatbot asks qualifying questions (budget, timeline, service interest), scores the lead, and either books a call automatically or routes them to your CRM pipeline.",
  },
  {
    question: "Does the AI chatbot integrate with my CRM?",
    answer:
      "Yes. We integrate with GoHighLevel, HubSpot, Salesforce, Airtable, Notion, and any CRM with an API. Every lead captured by the chatbot is automatically logged with full conversation context.",
  },
  {
    question: "What if the chatbot can't answer a question?",
    answer:
      "We design fallback flows for every chatbot. When the AI reaches the limit of its knowledge, it collects the user's contact info and escalates to a human via email, SMS, or Slack notification — no lead is ever dropped.",
  },
  {
    question: "How much does an AI chatbot cost?",
    answer:
      "ZROXZ AI chatbots start at $500 for a basic lead capture bot and go up to $2,000+ for fully custom, multi-flow chatbots with CRM integrations. Book a free call for a custom quote.",
  },
];

export function AIChatbotsService() {
  return (
    <ServicePageLayout
      title="AI Chatbot Development Agency for US Businesses"
      h1="AI Chatbot Development Agency for US Businesses"
      metaDescription="ZROXZ builds custom AI chatbots powered by OpenAI that capture leads, qualify prospects, and book appointments 24/7 — without a human. Starting from $500."
      canonicalUrl="https://zroxz.com/services/ai-chatbots"
      keywords="AI chatbot development, AI chatbot for small business, custom AI chatbot, lead generation chatbot, OpenAI chatbot agency"
      category="AI Chatbots"
      faqs={faqs}
      pricing={{ price: "$500", label: "One-time setup · Book a call for a custom quote" }}
    >
      <p>
        Every visitor who lands on your website without a chat response is a potential lead lost. ZROXZ builds
        <strong> custom AI chatbots powered by OpenAI</strong> that engage every visitor instantly — 24 hours a day,
        7 days a week — qualifying them, answering their questions, and booking appointments directly into your calendar.
      </p>

      <h2>What Our AI Chatbots Can Do</h2>
      <ul>
        <li>Greet every website visitor and start a conversation immediately</li>
        <li>Ask qualifying questions to score and segment leads</li>
        <li>Answer FAQs about your services, pricing, and process</li>
        <li>Book appointments directly into Google Calendar or Calendly</li>
        <li>Capture name, email, and phone number and push to your CRM</li>
        <li>Send instant follow-up emails or SMS after a conversation</li>
        <li>Escalate complex questions to a human agent seamlessly</li>
      </ul>

      <h2>Why AI Chatbots Beat Live Chat for Most Small Businesses</h2>
      <p>
        A live chat agent costs $2,500–$5,000/month in salary. They work 8 hours a day, take breaks, and miss
        after-hours leads. An AI chatbot from ZROXZ is a one-time setup fee — and it works every hour of every day.
        For most small businesses, this means <strong>an AI chatbot pays for itself in the first week</strong>.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        {[
          { icon: Clock, stat: "24/7", label: "Always Available" },
          { icon: Zap, stat: "<3s", label: "Response Time" },
          { icon: Users, stat: "100%", label: "Leads Captured" },
        ].map(({ icon: Icon, stat, label }) => (
          <div key={label} className="rounded-xl border border-[#E8E0FF] bg-[#F9F7FF] p-5 text-center">
            <Icon className="w-6 h-6 text-[#A78BFA] mx-auto mb-2" />
            <p className="text-3xl font-black text-[#1A1523]">{stat}</p>
            <p className="text-sm text-[#6B7280]">{label}</p>
          </div>
        ))}
      </div>

      <h2>How ZROXZ Builds Your AI Chatbot</h2>
      <p>
        We start with a discovery call to map your most important customer conversations. Then we design a conversation
        flow that mirrors how your best salesperson would talk — but smarter and faster. We train the AI on your
        business, integrate it with your CRM and calendar, test it thoroughly, and deploy it to your website.
      </p>

      <p>The typical build process:</p>
      <ol>
        <li><strong>Discovery call (Day 1–2):</strong> Map your key use cases, tone, and CRM</li>
        <li><strong>Flow design (Day 3–4):</strong> Build conversation paths and fallback logic</li>
        <li><strong>Development (Day 5–9):</strong> Build with OpenAI API + custom backend logic</li>
        <li><strong>Integration (Day 10–11):</strong> Connect to your CRM, calendar, and website</li>
        <li><strong>Testing + launch (Day 12–14):</strong> QA across devices and go live</li>
      </ol>

      <h2>Platforms We Deploy On</h2>
      <ul>
        <li>Your website (embedded widget)</li>
        <li>WhatsApp Business</li>
        <li>Instagram DMs</li>
        <li>Facebook Messenger</li>
        <li>SMS / Text</li>
      </ul>

      <h2>Real Results for Our Clients</h2>
      <p>
        For <strong>Evinn.pk</strong>, we deployed an AI voice agent (a sister technology to chatbots) that handled
        80+ daily calls with a 70% reduction in handle time and zero missed after-hours leads.{" "}
        <Link to="/case-studies/evinn-ai-voice-agent">Read the full case study →</Link>
      </p>

      <p>
        Want to see what this looks like for your industry? Also read:{" "}
        <Link to="/blog/ai-chatbot-vs-live-chat">AI Chatbot vs. Live Chat — Which Should You Use?</Link>
      </p>

      <h2>Technology Stack</h2>
      <ul>
        <li><strong>AI Engine:</strong> OpenAI GPT-4 / GPT-4o</li>
        <li><strong>Backend:</strong> Node.js / Python API</li>
        <li><strong>CRM Integrations:</strong> GoHighLevel, HubSpot, Airtable, Notion</li>
        <li><strong>Deployment:</strong> Embedded widget, WhatsApp, Instagram, SMS</li>
        <li><strong>Automation:</strong> n8n for post-conversation workflows</li>
      </ul>
    </ServicePageLayout>
  );
}
