import { Link } from "react-router";
import { Calendar, ArrowRight, ChevronRight, Clock, Tag } from "lucide-react";
import { SEOHead } from "@/app/components/SEOHead";
import { ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPostLayoutProps {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  keyword: string;
  publishDate: string;
  readTime: string;
  category: string;
  faqs: FAQItem[];
  children: ReactNode;
}

export function BlogPostLayout({
  title,
  metaDescription,
  canonicalUrl,
  keyword,
  publishDate,
  readTime,
  category,
  faqs,
  children,
}: BlogPostLayoutProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: { "@type": "Organization", name: "ZROXZ" },
    publisher: { "@type": "Organization", name: "ZROXZ", url: "https://zroxz.com" },
    description: metaDescription,
    url: canonicalUrl,
  };

  return (
    <>
      <SEOHead
        title={title}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        keywords={`${keyword}, ZROXZ, AI automation, US businesses`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero banner */}
      <div
        className="pt-24 pb-10"
        style={{
          background: "linear-gradient(135deg, #0D0118 0%, #150828 60%, #1E0B3A 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-purple-300/60 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-purple-200 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-200/80 font-medium">{category}</span>
          </nav>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "rgba(124,58,237,0.3)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.3)" }}>
              <Tag className="w-3 h-3" />
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-purple-300/60">
              <Clock className="w-3 h-3" />
              {readTime} read
            </span>
            <span className="text-xs text-purple-300/40">·</span>
            <time className="text-xs text-purple-300/60">{publishDate}</time>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4" style={{ color: "#F5F0FF" }}>
            {title}
          </h1>

          <p className="text-purple-200/70 text-base leading-relaxed mb-6">{metaDescription}</p>

          <div className="flex items-center gap-3 text-sm text-purple-300/50">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#A78BFA,#7C3AED)" }}>Z</div>
            <span>By <strong className="text-purple-200">ZROXZ Team</strong></span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          {/* Article prose */}
          <article className="prose prose-lg max-w-none prose-headings:text-[#1A1523] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#374151] prose-p:leading-relaxed prose-p:my-4 prose-a:text-[#7C3AED] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1523] prose-ul:text-[#374151] prose-ol:text-[#374151] prose-li:my-1.5 prose-li:marker:text-[#A78BFA] prose-blockquote:border-l-[#A78BFA] prose-blockquote:bg-[#F9F7FF] prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
            {children}
          </article>

          {/* FAQ Section */}
          <section className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-[#E8E0FF] to-transparent" />
              <h2 className="text-xl font-bold text-[#1A1523] whitespace-nowrap">Frequently Asked Questions</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-[#E8E0FF] to-transparent" />
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-[#E8E0FF] rounded-2xl overflow-hidden bg-white hover:border-[#C4B5FD] transition-colors">
                  <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer font-semibold text-[#1A1523] hover:bg-[#FAFAFF] transition-colors list-none">
                    <span className="text-sm leading-snug pt-0.5">{faq.question}</span>
                    <ChevronRight className="w-4 h-4 text-[#A78BFA] group-open:rotate-90 transition-transform flex-shrink-0 mt-0.5" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-[#374151] leading-relaxed border-t border-[#F0EBFF] pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D0118 0%, #1E0B3A 100%)" }}>
            <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, #A78BFA 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">ZROXZ Agency</p>
              <h3 className="text-2xl font-black text-white mb-2">Ready to Automate Your Business?</h3>
              <p className="text-purple-200/70 mb-6 max-w-sm mx-auto text-sm">
                Book a free 30-minute strategy call. No sales pitch — just a real plan for your business.
              </p>
              <a
                href="https://calendly.com/arfa1054/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-900/40"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
              >
                <Calendar className="w-4 h-4" />
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#7C3AED] font-medium text-sm hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
