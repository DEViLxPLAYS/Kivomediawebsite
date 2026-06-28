import { useState, useEffect } from "react";
import { Calendar, CheckCircle2, AlertCircle, MessageCircle, Mail, User, Briefcase, Zap, Link as LinkIcon, Star, Clock, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/app/components/SEOHead";
import { submitContactForm } from "@/lib/supabase";
import { validateContactForm, sanitizeText } from "@/lib/validation";
import { checkRateLimit, recordSubmission, getRateLimitMessage } from "@/lib/rateLimit";

export function BookUs() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    projectType: "",
    message: "",
    phone: "",
    socialMediaLink: "",
    priority: "normal",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  // Load Calendly widget script
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus({ type: null, message: "" });

    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setSubmitStatus({
        type: "error",
        message: getRateLimitMessage(rateCheck.resetTime!),
      });
      return;
    }

    const validation = validateContactForm({
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      message: formData.message,
      phone: formData.phone,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus({ type: "error", message: "Please fix the errors below" });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactForm({
        name: sanitizeText(formData.name),
        email: formData.email.toLowerCase().trim(),
        project_type: formData.projectType,
        message: sanitizeText(formData.message),
        phone: formData.phone || undefined,
      });

      if (result.success) {
        recordSubmission();
        setSubmitStatus({
          type: "success",
          message: "Thank you! We've received your request and will confirm your call within 1 hour.",
        });
        setFormData({
          name: "",
          businessName: "",
          email: "",
          projectType: "",
          message: "",
          phone: "",
          socialMediaLink: "",
          priority: "normal",
        });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please book directly on Calendly or WhatsApp us.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const trustBadges = [
    { icon: Star, label: "4.9/5 Rating", sub: "From 50+ clients" },
    { icon: Clock, label: "Same-Day Response", sub: "Usually within 2 hours" },
    { icon: Shield, label: "Free Consultation", sub: "No commitment required" },
    { icon: CheckCircle2, label: "Results Guaranteed", sub: "Or we iterate" },
  ];

  const whatWeOffer = [
    "AI Voice Agents (80+ daily calls handled)",
    "AI Chatbots & Lead Qualification",
    "n8n + GoHighLevel Automation",
    "CRM Setup & Workflow Automation",
    "Web & SaaS Development",
    "Video Editing & Motion Design",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ZROXZ — Book a Free Call",
    "provider": {
      "@type": "Organization",
      "name": "ZROXZ",
      "url": "https://zroxz.com"
    },
    "description": "Book a free 30-minute strategy call with ZROXZ to discuss AI automation, web development, or video editing for your business."
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      <SEOHead
        title="Book a Free Call — Strategy Session with ZROXZ"
        description="Schedule a free 30-minute strategy call with ZROXZ. Discuss AI automation, web development, CRM setup, or video editing for your business. No commitment required."
        keywords="book a call ZROXZ, free AI consultation, AI automation strategy call, web development consultation"
        canonicalUrl="https://zroxz.com/book-us"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "radial-gradient(ellipse at top, #EDE9FE 0%, #FFFFFF 60%)" }}>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#A78BFA]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#7C3AED]/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#A78BFA]/10 border border-[#A78BFA]/30 text-[#7C3AED] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
              Free · No Commitment · 30 Minutes
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6 font-black">
              <span
                style={{
                  background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Book a Free Call
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1A1523] font-semibold mb-4">
              Let's build something that works while you sleep.
            </p>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-10">
              30-minute strategy session to map out your AI automation, web build, or video workflow. Come with your problem — leave with a plan.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-[#E8E0FF] rounded-xl p-4 shadow-[0_2px_16px_rgba(167,139,250,0.08)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <badge.icon className="w-5 h-5 text-[#A78BFA] mx-auto mb-2" />
                  <div className="text-[#1A1523] font-bold text-sm">{badge.label}</div>
                  <div className="text-[#6B7280] text-xs">{badge.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Embed — Primary CTA */}
      <section className="py-16 bg-white border-t border-[#E8E0FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl tracking-tighter text-[#1A1523] font-bold mb-3">
              Pick a Time That Works For You
            </h2>
            <p className="text-[#6B7280]">Select a slot directly on Calendly — instant confirmation.</p>
          </div>

          {/* Calendly inline embed */}
          <div className="bg-[#F9F7FF] border border-[#E8E0FF] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(167,139,250,0.08)]">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/arfa1054/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7C3AED"
              style={{ minWidth: "320px", height: "700px" }}
            />
            {!calendlyLoaded && (
              <div className="flex flex-col items-center justify-center py-16 gap-6">
                <div className="w-12 h-12 border-4 border-[#E8E0FF] border-t-[#A78BFA] rounded-full animate-spin" />
                <p className="text-[#6B7280]">Loading calendar...</p>
                <a
                  href="https://calendly.com/arfa1054/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
                >
                  <Calendar className="w-4 h-4" />
                  Open Calendly Directly
                </a>
              </div>
            )}
          </div>

          {/* Fallback CTA */}
          <div className="text-center mt-6">
            <p className="text-[#6B7280] text-sm mb-3">Calendar not loading?</p>
            <a
              href="https://calendly.com/arfa1054/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
            >
              <Calendar className="w-4 h-4" />
              Open Calendly in New Tab
            </a>
          </div>
        </div>
      </section>

      {/* What We'll Cover */}
      <section className="py-16 bg-[#F9F7FF] border-t border-[#E8E0FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tighter text-[#1A1523] font-bold mb-4">
                What We'll Cover on the Call
              </h2>
              <p className="text-[#6B7280] mb-8">
                This isn't a sales call. It's a working session where we map out exactly what you need and how we'd build it.
              </p>
              <ul className="space-y-3">
                {[
                  "Your current bottlenecks and pain points",
                  "Which AI or automation solution fits best",
                  "A rough roadmap and timeline",
                  "Pricing estimates (no hidden fees)",
                  "Q&A — ask us anything",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-[#1A1523]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#A78BFA] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#E8E0FF] rounded-2xl p-8 shadow-[0_2px_16px_rgba(167,139,250,0.08)]">
              <h3 className="text-[#1A1523] font-bold text-xl mb-6">Services We Can Help With</h3>
              <ul className="space-y-3">
                {whatWeOffer.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <ArrowRight className="w-4 h-4 text-[#A78BFA] flex-shrink-0" />
                    <span className="text-[#1A1523]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#E8E0FF]">
                <p className="text-[#6B7280] text-sm">
                  Not sure what you need? <span className="text-[#7C3AED] font-semibold">Just come and tell us your goal.</span> We'll figure out the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form — Alternative */}
      <section className="py-16 bg-white border-t border-[#E8E0FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl tracking-tighter text-[#1A1523] font-bold mb-3">
              Or Send a Message First
            </h2>
            <p className="text-[#6B7280]">
              Prefer to send details ahead? Fill this out and we'll reach out to schedule.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${
                submitStatus.type === "success"
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-red-50 border-red-200 text-red-600"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              )}
              <p>{submitStatus.message}</p>
            </div>
          )}

          <div className="bg-[#F9F7FF] border border-[#E8E0FF] rounded-3xl p-8 shadow-[0_2px_16px_rgba(167,139,250,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="book-name" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-[#A78BFA]" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="book-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.name ? "border-red-400" : "border-[#E8E0FF]"} text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50 text-sm`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="book-businessName" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-[#A78BFA]" />
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="book-businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E8E0FF] text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50 text-sm"
                    placeholder="Your business"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="book-email" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-[#A78BFA]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="book-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.email ? "border-red-400" : "border-[#E8E0FF]"} text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50 text-sm`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="book-phone" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4 text-[#A78BFA]" />
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    id="book-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E8E0FF] text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50 text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="book-projectType" className="block text-[#1A1523] mb-2 font-medium text-sm">
                    Service Needed *
                  </label>
                  <select
                    id="book-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.projectType ? "border-red-400" : "border-[#E8E0FF]"} text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all text-sm`}
                  >
                    <option value="">Select a service</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="AI Voice Agent">AI Voice Agent</option>
                    <option value="CRM Automation">CRM Automation</option>
                    <option value="n8n Workflows">n8n Workflows</option>
                    <option value="GoHighLevel Setup">GoHighLevel Setup</option>
                    <option value="Web Development">Web Development</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Video Editing">Video Editing / Motion Design</option>
                    <option value="Full Package">Full Package</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                  {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>}
                </div>
                <div>
                  <label htmlFor="book-priority" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-[#A78BFA]" />
                    Urgency
                  </label>
                  <select
                    id="book-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E8E0FF] text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all text-sm"
                  >
                    <option value="normal">Exploring Options</option>
                    <option value="fast">Ready to Start ASAP ⚡</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="book-socialMediaLink" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2 text-sm">
                  <LinkIcon className="w-4 h-4 text-[#A78BFA]" />
                  Website / Social Link (Optional)
                </label>
                <input
                  type="url"
                  id="book-socialMediaLink"
                  name="socialMediaLink"
                  value={formData.socialMediaLink}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#E8E0FF] text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50 text-sm"
                  placeholder="https://yourbusiness.com"
                />
              </div>

              <div>
                <label htmlFor="book-message" className="block text-[#1A1523] mb-2 font-medium text-sm">
                  Tell Us Your Goal *
                </label>
                <textarea
                  id="book-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-white border ${errors.message ? "border-red-400" : "border-[#E8E0FF]"} text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none placeholder-[#6B7280]/50 text-sm`}
                  placeholder="What's your main challenge? What would success look like in 90 days?"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl transition-all text-base font-bold flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Request a Call Back
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-[#6B7280]">
                🔒 Your information is secure. We respond within 2 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Alternative */}
      <section className="py-12 bg-[#F9F7FF] border-t border-[#E8E0FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#6B7280] mb-4">Prefer to chat first?</p>
          <a
            href="https://wa.me/923190485953?text=Hi%20ZROXZ!%20I'd%20like%20to%20book%20a%20free%20call%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#A78BFA] text-[#7C3AED] hover:bg-[#F3EFFF] px-6 py-3 rounded-lg transition-all font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us Directly</span>
          </a>
        </div>
      </section>
    </div>
  );
}
