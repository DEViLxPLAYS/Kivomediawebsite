import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import { Link } from "react-router";

const faqs = [
  {
    question: "Do you build websites on WordPress or React?",
    answer:
      "ZROXZ primarily builds with React and Next.js for performance-critical sites, and Supabase for backend. We do not build on WordPress for new projects. If you have an existing WordPress site, we can migrate it or build a headless solution on top.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A simple 5-page marketing website takes 2–3 weeks. A custom web application with user authentication and database takes 4–8 weeks. We provide a detailed timeline after the discovery call.",
  },
  {
    question: "Will my website be mobile-responsive?",
    answer:
      "Yes, always. Every site we build is mobile-first, tested on iOS and Android across multiple screen sizes, and scored for Core Web Vitals before delivery.",
  },
  {
    question: "What is Supabase and why do you use it?",
    answer:
      "Supabase is an open-source Firebase alternative that provides a PostgreSQL database, authentication, storage, and real-time subscriptions. It's faster to develop with than custom backends and far more scalable than WordPress. We use it as the backend for all custom web apps.",
  },
  {
    question: "Do you provide hosting and maintenance after the site is built?",
    answer:
      "Yes. We deploy to Vercel (for Next.js) or Netlify, both of which offer free tiers for most sites. We offer monthly maintenance packages for clients who need ongoing updates, content changes, and performance monitoring.",
  },
];

export function WebDevelopmentService() {
  return (
    <ServicePageLayout
      title="Web Development Agency for US Small Businesses — React & Next.js"
      h1="Web Development Agency for US Small Businesses — React & Next.js"
      metaDescription="ZROXZ builds fast, mobile-first websites and web apps using React, Next.js, and Supabase for US small businesses. Starting from $1,500. Sub-2-second load times guaranteed."
      canonicalUrl="https://zroxz.com/services/web-development"
      keywords="web development agency USA, React web development, Next.js website, small business website development, custom website design"
      category="Web Development"
      faqs={faqs}
      pricing={{ price: "$1,500", label: "5-page marketing site · Custom apps from $5,000" }}
    >
      <p>
        Most small business websites are slow, look like templates, and convert at under 1%. Your website
        is your best salesperson — it should load in under 2 seconds, clearly communicate your value proposition,
        and turn visitors into leads. ZROXZ builds{" "}
        <strong>custom websites and web apps using React, Next.js, and Supabase</strong> that actually convert.
      </p>

      <h2>What We Build</h2>
      <ul>
        <li>Marketing websites for service businesses (5–20 pages)</li>
        <li>Landing pages for specific campaigns or services</li>
        <li>Custom web applications with user authentication</li>
        <li>E-commerce stores (custom, not Shopify templates)</li>
        <li>Client portals and dashboards</li>
        <li>SaaS frontend with Supabase backend</li>
      </ul>

      <h2>Why React & Next.js Instead of WordPress?</h2>
      <p>
        WordPress powers 43% of the web — which means 43% of the web loads slowly, gets hacked regularly,
        and requires constant plugin maintenance. React and Next.js give you:
      </p>
      <ul>
        <li><strong>Speed:</strong> Sub-2-second load times, which directly improves conversion rates and Google rankings</li>
        <li><strong>Security:</strong> No database exposed to the internet, no plugin vulnerabilities</li>
        <li><strong>Flexibility:</strong> Any design, any feature — not constrained by theme limitations</li>
        <li><strong>SEO:</strong> Server-side rendering means Google and AI crawlers can read every page</li>
        <li><strong>Scalability:</strong> Your site can handle millions of visitors without special hosting</li>
      </ul>

      <p>
        Read our full guide:{" "}
        <Link to="/blog/web-development-for-us-businesses">Web Development for US Small Businesses in 2025 →</Link>
      </p>

      <h2>Our Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React 18, Next.js 14, TailwindCSS</li>
        <li><strong>Backend:</strong> Supabase (PostgreSQL + Auth + Storage)</li>
        <li><strong>Deployment:</strong> Vercel (automatic CI/CD, global CDN)</li>
        <li><strong>CMS:</strong> Sanity, Contentful, or Notion for content-heavy sites</li>
        <li><strong>Forms:</strong> React Hook Form + serverless functions</li>
        <li><strong>Analytics:</strong> Google Analytics 4 + Plausible</li>
      </ul>

      <h2>What Every ZROXZ Website Includes</h2>
      <ul>
        <li>Custom design (no templates)</li>
        <li>Mobile-first, fully responsive layout</li>
        <li>Core Web Vitals optimized (LCP, CLS, FID)</li>
        <li>SEO meta tags, Open Graph, and structured data on every page</li>
        <li>Contact form with CRM integration</li>
        <li>Google Analytics and Search Console setup</li>
        <li>Speed and security audit before delivery</li>
        <li>30 days of post-launch support</li>
      </ul>

      <h2>Pricing Guide</h2>
      <ul>
        <li><strong>5-page marketing site:</strong> $1,500–$3,000 (2–3 weeks)</li>
        <li><strong>10–20 page custom site:</strong> $3,000–$6,000 (3–5 weeks)</li>
        <li><strong>Custom web application:</strong> $5,000–$15,000 (4–10 weeks)</li>
        <li><strong>E-commerce:</strong> $4,000–$10,000 depending on complexity</li>
      </ul>

      <p>
        If you're building a full SaaS product, see our{" "}
        <Link to="/services/saas-development">SaaS Development service →</Link>
      </p>

      <h2>Our Process</h2>
      <ol>
        <li><strong>Discovery:</strong> Goals, target audience, competitor analysis, sitemap</li>
        <li><strong>Design:</strong> Wireframes and mockups for approval before building</li>
        <li><strong>Development:</strong> Build in React/Next.js with daily progress updates</li>
        <li><strong>Content:</strong> Integrate your content or write copy for you</li>
        <li><strong>Testing:</strong> Cross-browser, cross-device, performance, and SEO audit</li>
        <li><strong>Launch:</strong> Deploy to Vercel, connect domain, submit to Google</li>
      </ol>
    </ServicePageLayout>
  );
}
