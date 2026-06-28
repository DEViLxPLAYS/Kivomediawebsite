import { BlogPostLayout } from "@/app/components/BlogPostLayout";
import { Link } from "react-router";

const faqs = [
  {
    question: "How much should a small business website cost in 2025?",
    answer:
      "A 5-page marketing website should cost $1,500–$5,000. A custom 10–20 page site with a CMS runs $3,000–$8,000. If you're paying more than $10,000 for a basic marketing site with no custom functionality, you're overpaying. If you're paying less than $800 for a 'custom' site, expect a template with your logo swapped in.",
  },
  {
    question: "Should I use WordPress or React/Next.js for my small business website?",
    answer:
      "For most small businesses, React/Next.js is the better choice: faster load times, better security, and easier to maintain long-term. WordPress makes sense if you need a large content blog, have existing WordPress expertise, or need specific plugins that don't have React equivalents. ZROXZ builds with React and Next.js.",
  },
  {
    question: "How long does it take to build a small business website?",
    answer:
      "A 5-page marketing site takes 2–3 weeks. A larger custom site takes 4–6 weeks. Rush builds (under 2 weeks) are possible for an additional fee but involve trade-offs in polish and testing.",
  },
  {
    question: "What are red flags when hiring a web development agency?",
    answer:
      "Red flags: they show you a portfolio of template sites with your brand colors swapped, they can't explain how they'll handle SEO, they don't discuss mobile performance, they send a proposal in less than 24 hours without asking questions, they don't discuss who will maintain the site after launch.",
  },
  {
    question: "Does ZROXZ provide website maintenance after launch?",
    answer:
      "Yes. ZROXZ offers monthly maintenance packages for hosting management, content updates, performance monitoring, and security. Ask about our maintenance retainers during your free call.",
  },
];

export function WebDevForUSBusinesses() {
  return (
    <BlogPostLayout
      title="Web Development for US Small Businesses in 2025: What You Actually Need"
      metaDescription="Most US small businesses are overpaying for web development or using templates that don't convert. Here's what you actually need and what it should cost."
      canonicalUrl="https://zroxz.com/blog/web-development-for-us-businesses"
      keyword="web development agency for small business usa"
      publishDate="2025-03-28"
      readTime="7 min"
      category="Web Development"
      faqs={faqs}
    >
      <p>
        The average US small business website was built 5+ years ago, loads in over 4 seconds, and converts
        less than 1% of visitors. In a world where Google ranks fast sites and users bounce in under 3 seconds,
        a bad website isn't just embarrassing — <strong>it's costing you customers every single day</strong>.
        Here's what you actually need in 2025.
      </p>

      <h2>The Real Cost of a Bad Website</h2>
      <p>
        A slow, dated website has measurable business impact:
      </p>
      <ul>
        <li>Google rankings: Page speed is a direct ranking factor. A site loading in 5 seconds ranks below a competitor loading in 1 second</li>
        <li>Conversion rate: Every 1-second improvement in load time increases conversions by 7% (Portent research)</li>
        <li>Trust: 75% of users judge a company's credibility based on their website (Stanford Web Credibility Research)</li>
        <li>Mobile: 60%+ of web traffic is mobile — a site not optimized for mobile is losing the majority of visitors</li>
      </ul>
      <p>
        If your website converts at 1% and gets 500 visitors/month, that's 5 leads. A properly built site
        converting at 3% generates 15 leads from the same traffic — triple your lead flow without spending
        more on marketing.
      </p>

      <h2>What Small Businesses Actually Need from Their Website</h2>
      <ul>
        <li>
          <strong>Sub-2-second load time:</strong> Non-negotiable in 2025 for both SEO and conversion.
          This requires optimized images, CDN delivery, and clean code — not a WordPress site with
          12 plugins.
        </li>
        <li>
          <strong>Mobile-first design:</strong> Your site should look and function perfectly on a
          5-inch phone screen — not just "work on mobile."
        </li>
        <li>
          <strong>Clear value proposition above the fold:</strong> In the first 3 seconds, visitors must
          know: what you do, who you serve, and why they should trust you.
        </li>
        <li>
          <strong>Lead capture on every page:</strong> Contact form, chatbot, phone number, and
          booking link — always visible, never buried.
        </li>
        <li>
          <strong>Social proof:</strong> Testimonials, case studies, client logos, or review widgets
          — on the homepage and service pages.
        </li>
        <li>
          <strong>SEO fundamentals:</strong> Meta tags, structured data, proper heading hierarchy,
          and optimized content on every page.
        </li>
      </ul>

      <h2>Platform Guide: Which Should You Use?</h2>
      <ul>
        <li>
          <strong>React/Next.js (ZROXZ recommendation):</strong> Best for performance, security, and
          long-term maintainability. Required for custom functionality. Sub-1-second load times achievable.
          Cost: $1,500–$10,000 to build.
        </li>
        <li>
          <strong>WordPress:</strong> Best if you have a large content operation or an existing WordPress
          site. Requires more maintenance and is inherently slower than Next.js. Cost: $500–$5,000 for
          custom work (but often mis-priced as low as $200 for templates).
        </li>
        <li>
          <strong>Webflow:</strong> Best for design-heavy marketing sites that need a non-technical CMS.
          Good performance, no-code updates, but limited custom functionality. Cost: $2,000–$8,000.
        </li>
        <li>
          <strong>Shopify:</strong> Best for e-commerce — not for service business websites. Cost:
          $29–$299/month platform fee plus design/development.
        </li>
      </ul>

      <h2>What to Pay in 2025 — Honest Price Guide</h2>
      <ul>
        <li><strong>Template site (Squarespace, Wix):</strong> $200–$800 DIY. Avoid paying a developer more than $500 for this.</li>
        <li><strong>Custom WordPress or Webflow site:</strong> $1,500–$5,000 from a skilled developer</li>
        <li><strong>Custom React/Next.js site:</strong> $1,500–$8,000 depending on scope and design complexity</li>
        <li><strong>Custom web application (with user accounts, database):</strong> $5,000–$15,000</li>
        <li><strong>Full SaaS product:</strong> $10,000–$50,000+</li>
      </ul>

      <h2>Red Flags When Hiring a Web Dev Agency</h2>
      <ul>
        <li>They show a portfolio of identical-looking sites (template reuse)</li>
        <li>They don't ask about your business goals or target customer</li>
        <li>They quote under $500 for a "custom" site</li>
        <li>They can't explain their approach to mobile performance and SEO</li>
        <li>They outsource development to contractors in countries you've never heard of without disclosing it</li>
        <li>No post-launch support plan</li>
      </ul>

      <h2>ZROXZ's Tech Stack and Why We Build This Way</h2>
      <p>
        ZROXZ builds with <strong>React + Next.js + Supabase</strong> because:
      </p>
      <ul>
        <li>Next.js provides server-side rendering — pages load fast and are readable by Google and AI crawlers</li>
        <li>Supabase gives us a scalable PostgreSQL backend without managing servers</li>
        <li>Vercel deployment means global CDN out of the box — your site loads fast from anywhere in the US</li>
        <li>TypeScript catches bugs before they reach production</li>
        <li>This stack is maintainable long after we hand it off — no proprietary lock-in</li>
      </ul>

      <p>
        <Link to="/services/web-development">See our Web Development service →</Link> ·{" "}
        <Link to="/services/saas-development">SaaS Development →</Link>
      </p>
    </BlogPostLayout>
  );
}
