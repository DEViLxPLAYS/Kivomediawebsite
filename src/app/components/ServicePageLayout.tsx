import { Link } from "react-router";
import { Calendar, ArrowRight, ChevronRight, ExternalLink, CheckCircle } from "lucide-react";
import { SEOHead } from "@/app/components/SEOHead";
import { ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface PricingItem {
  label: string;
  price: string;
}

interface ServicePageLayoutProps {
  title: string;
  h1: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string;
  category: string;
  faqs: FAQItem[];
  pricing?: PricingItem;
  children: ReactNode;
}

export function ServicePageLayout({
  title,
  h1,
  metaDescription,
  canonicalUrl,
  keywords,
  category,
  faqs,
  pricing,
  children,
}: ServicePageLayoutProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    provider: { "@type": "Organization", name: "ZROXZ", url: "https://zroxz.com" },
    description: metaDescription,
    url: canonicalUrl,
    areaServed: "United States",
  };

  return (
    <>
      <SEOHead title={title} description={metaDescription} canonicalUrl={canonicalUrl} keywords={keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <div
        className="pt-24 pb-14"
        style={{ background: "linear-gradient(135deg, #0D0118 0%, #150828 60%, #1E0B3A 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-purple-300/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-purple-200 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-200/80">{category}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5" style={{ background: "rgba(124,58,237,0.3)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.3)" }}>
            {category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5" style={{ color: "#F5F0FF" }}>
            {h1}
          </h1>
          <p className="text-purple-200/70 text-lg max-w-2xl leading-relaxed mb-8">{metaDescription}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/arfa1054/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-900/40"
              style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
            >
              <Calendar className="w-4 h-4" />
              Book a Free Call
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-purple-200 border border-purple-500/30 px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-purple-900/30 transition-colors"
            >
              All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Callout */}
          {pricing && (
            <div className="mt-10 mb-8 flex items-center gap-6 p-6 rounded-2xl border border-[#D4C5FF] bg-gradient-to-r from-[#F9F7FF] to-white">
              <div>
                <p className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest mb-1">Starting from</p>
                <p className="text-3xl font-black text-[#1A1523]">{pricing.price}</p>
                <p className="text-sm text-[#6B7280] mt-0.5">{pricing.label}</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <a
                  href="https://calendly.com/arfa1054/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#7C3AED] text-sm font-semibold hover:underline"
                >
                  Get a custom quote
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className={`prose prose-lg max-w-none prose-headings:text-[#1A1523] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#374151] prose-p:leading-relaxed prose-p:my-4 prose-a:text-[#7C3AED] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1523] prose-ul:text-[#374151] prose-ol:text-[#374151] prose-li:my-1.5 prose-li:marker:text-[#A78BFA] ${pricing ? "" : "pt-10"}`}>
            {children}
          </div>

          {/* FAQ */}
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

          {/* Final CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D0118 0%, #1E0B3A 100%)" }}>
            <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, #A78BFA 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Free Strategy Call</p>
              <h3 className="text-2xl font-black text-white mb-2">Let's Build This For You</h3>
              <p className="text-purple-200/70 mb-6 max-w-sm mx-auto text-sm">
                Book a free 30-minute call. We'll map out exactly what you need and give you a real quote.
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
        </div>
      </div>
    </>
  );
}
