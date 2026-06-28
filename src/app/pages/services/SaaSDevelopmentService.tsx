import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import { Link } from "react-router";

const faqs = [
  {
    question: "What's the difference between a SaaS product and a regular website?",
    answer:
      "A regular website is a static or informational site. A SaaS (Software as a Service) product is a web application that users log into, with persistent accounts, data, and subscription billing. Examples: Slack, Notion, HubSpot. ZROXZ builds full-stack SaaS products from idea to launch.",
  },
  {
    question: "How long does it take to build a SaaS product?",
    answer:
      "An MVP (minimum viable product) with core features typically takes 6–12 weeks. A fully featured v1.0 with billing, user management, and admin dashboard takes 12–20 weeks. We always recommend starting with an MVP and iterating based on user feedback.",
  },
  {
    question: "Do you handle Stripe payment integration?",
    answer:
      "Yes. Every SaaS we build includes Stripe for subscription billing, including free trials, tiered plans, usage-based billing, invoicing, and customer portal for self-service subscription management.",
  },
  {
    question: "Will I own the code?",
    answer:
      "Yes. You own 100% of the source code delivered by ZROXZ. We do not retain any IP rights. The code is provided via GitHub and you can deploy it anywhere.",
  },
  {
    question: "Can ZROXZ add AI features to my SaaS?",
    answer:
      "Yes — this is one of our core strengths. We integrate OpenAI, Claude, or custom LLMs into SaaS products for features like AI chat, content generation, data analysis, and intelligent recommendations.",
  },
];

export function SaaSDevelopmentService() {
  return (
    <ServicePageLayout
      title="SaaS Development Agency — Build Your Software Product Fast"
      h1="SaaS Development Agency — Build Your Software Product Fast"
      metaDescription="ZROXZ builds full-stack SaaS products for startups and founders using React, Next.js, and Supabase. From MVP to launch in 6–12 weeks. Includes auth, billing, and AI features."
      canonicalUrl="https://zroxz.com/services/saas-development"
      keywords="SaaS development agency, build SaaS product, SaaS MVP development, React SaaS development, Next.js SaaS"
      category="SaaS Development"
      faqs={faqs}
      pricing={{ price: "$8,000", label: "MVP build · Full v1.0 from $15,000 · Book for scope" }}
    >
      <p>
        You have a software idea. You need it built fast, right, and without hiring a full engineering team.
        ZROXZ builds <strong>full-stack SaaS products</strong> from design to deployment — including user
        authentication, subscription billing, AI features, and admin dashboards — so you can get to market
        and start generating revenue.
      </p>

      <h2>What We Build Into Every SaaS MVP</h2>
      <ul>
        <li>User authentication (email, Google OAuth, magic link)</li>
        <li>Multi-tenant architecture (organizations and teams)</li>
        <li>Stripe subscription billing with free trials and tiered plans</li>
        <li>User dashboard and settings</li>
        <li>Admin panel for you to manage users and data</li>
        <li>Transactional emails (onboarding, billing, notifications)</li>
        <li>Basic analytics and usage tracking</li>
        <li>Role-based access control</li>
      </ul>

      <h2>Our SaaS Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> Next.js 14 + TypeScript + TailwindCSS</li>
        <li><strong>Backend:</strong> Supabase (PostgreSQL + Row Level Security + Auth)</li>
        <li><strong>Billing:</strong> Stripe (subscriptions, webhooks, customer portal)</li>
        <li><strong>Email:</strong> Resend + React Email templates</li>
        <li><strong>Deployment:</strong> Vercel (serverless functions, edge network)</li>
        <li><strong>AI integration:</strong> OpenAI API, Anthropic Claude, LangChain</li>
        <li><strong>Storage:</strong> Supabase Storage or Cloudflare R2</li>
      </ul>

      <h2>Why Founders Choose ZROXZ for SaaS Development</h2>
      <ul>
        <li>
          <strong>Speed:</strong> We have battle-tested boilerplates for auth, billing, and dashboards — so
          we're not starting from zero on the basics. Your MVP ships in weeks, not months.
        </li>
        <li>
          <strong>AI-native:</strong> We integrate AI features natively — not as afterthoughts. If your product
          has any AI component, we know exactly how to build it.
        </li>
        <li>
          <strong>You own everything:</strong> Full source code delivered on GitHub. No vendor lock-in.
          No monthly fees to us — only your hosting and API costs.
        </li>
        <li>
          <strong>Post-launch support:</strong> We don't disappear after launch. We offer ongoing development
          retainers for feature additions and technical support.
        </li>
      </ul>

      <h2>SaaS Products We've Built Capabilities For</h2>
      <ul>
        <li>AI writing and content generation tools</li>
        <li>Client reporting and analytics dashboards</li>
        <li>Booking and scheduling platforms</li>
        <li>CRM and lead management systems</li>
        <li>Marketplace and multi-vendor platforms</li>
        <li>Internal tools and operations software</li>
      </ul>

      <h2>Development Phases</h2>
      <ol>
        <li><strong>Discovery & architecture (Week 1–2):</strong> Requirements, user stories, database schema, API design</li>
        <li><strong>MVP build (Week 3–8):</strong> Core features, auth, billing, and dashboard</li>
        <li><strong>Testing & QA (Week 9–10):</strong> End-to-end testing, security review, performance audit</li>
        <li><strong>Beta launch (Week 11):</strong> Deploy to production, onboard first users</li>
        <li><strong>Iteration (Week 12+):</strong> Feature additions based on user feedback</li>
      </ol>

      <p>
        See our web development capabilities:{" "}
        <Link to="/services/web-development">Web Development Agency →</Link>
      </p>
    </ServicePageLayout>
  );
}
