import { Link } from "react-router";
import { Calendar, ArrowRight, ChevronRight, MapPin, Globe, CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/app/components/SEOHead";
import { ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface LocationPageLayoutProps {
  title: string;
  h1: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string;
  locationName: string;
  locationType: "Country" | "State";
  faqs: FAQItem[];
  children: ReactNode;
}

export function LocationPageLayout({
  title,
  h1,
  metaDescription,
  canonicalUrl,
  keywords,
  locationName,
  locationType,
  faqs,
  children,
}: LocationPageLayoutProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://zroxz.com/locations/${locationName.toLowerCase()}#localbusiness`,
    "name": `ZROXZ AI Automation & Web Development - ${locationName}`,
    "image": "https://i.postimg.cc/zGd03Gxt/Chat-GPT-Image-Jan-28-2026-02-41-08-PM.png",
    "url": canonicalUrl,
    "telephone": "+92-319-0485953",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": locationType === "Country" && locationName === "Canada" ? "CA" : "US",
      "addressRegion": locationType === "State" ? locationName : undefined,
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": locationName,
    },
    "description": metaDescription,
  };

  return (
    <>
      <SEOHead title={title} description={metaDescription} canonicalUrl={canonicalUrl} keywords={keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <div
        className="pt-24 pb-14 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D0118 0%, #150828 60%, #1E0B3A 100%)" }}
      >
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A78BFA]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-purple-300/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-300/40">Locations</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-200/80">{locationName}</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5 animate-pulse" style={{ background: "rgba(167,139,250,0.15)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.3)" }}>
            {locationType === "State" ? <MapPin className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
            <span>Serving {locationName}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 text-white">
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
              Book a Free Strategy Session
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-purple-200 border border-purple-500/30 px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-purple-900/30 transition-colors"
            >
              Our AI Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content */}
          <div className="prose prose-lg max-w-none pt-10 prose-headings:text-[#1A1523] prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#374151] prose-p:leading-relaxed prose-p:my-4 prose-a:text-[#7C3AED] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1523] prose-ul:text-[#374151] prose-ol:text-[#374151] prose-li:my-1.5 prose-li:marker:text-[#A78BFA]">
            {children}
          </div>

          {/* Standard Service Packages for Locations */}
          <section className="mt-14 p-8 rounded-2xl border border-purple-100 bg-[#FAF9FF] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl pointer-events-none" />
            <h2 className="text-2xl font-black text-[#1A1523] mb-6">Our Services in {locationName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "AI Chatbots & Voice Agents", desc: "Automate inbound lead qualifications and answer client queries 24/7." },
                { title: "n8n & GoHighLevel Workflows", desc: "Connect your marketing pipeline and eliminate manual database syncs." },
                { title: "React & Next.js Development", desc: "Build sub-2-second loading websites optimized for maximum search discovery." },
                { title: "Professional Video Editing", desc: "Premium content and ad creative production to scale your brand reach." }
              ].map((serv, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1A1523] text-base">{serv.title}</h4>
                    <p className="text-sm text-[#6B7280] mt-1">{serv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Free Consultation</p>
              <h3 className="text-2xl font-black text-white mb-2">Grow Your {locationName} Business on Autopilot</h3>
              <p className="text-purple-200/70 mb-6 max-w-sm mx-auto text-sm">
                Get a custom roadmap, pricing details, and integration steps tailored for your regional needs.
              </p>
              <a
                href="https://calendly.com/arfa1054/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-900/40"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
