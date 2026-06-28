import { useState, useEffect } from "react";
import { MessageCircle, Mail, Clock, MapPin, AlertCircle, CheckCircle2, Link as LinkIcon, User, Zap, Briefcase, Calendar } from "lucide-react";
import { submitContactForm } from "@/lib/supabase";
import { validateContactForm, sanitizeText } from "@/lib/validation";
import { checkRateLimit, recordSubmission, getRateLimitMessage } from "@/lib/rateLimit";
import { useSearchParams } from "react-router";
import { SEOHead } from "@/app/components/SEOHead";
import { motion } from "framer-motion";

export function Contact() {
  const [searchParams] = useSearchParams();

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

  // Pre-fill message from URL parameters
  useEffect(() => {
    const messageParam = searchParams.get("message");
    const packageParam = searchParams.get("package");
    const categoryParam = searchParams.get("category");

    if (messageParam) {
      setFormData(prev => ({
        ...prev,
        message: decodeURIComponent(messageParam)
      }));
    }

    if (packageParam || categoryParam) {
      setFormData(prev => ({
        ...prev,
        projectType: packageParam || categoryParam || ""
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus({ type: null, message: "" });

    // Check rate limit
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setSubmitStatus({
        type: "error",
        message: getRateLimitMessage(rateCheck.resetTime!),
      });
      return;
    }

    // Validate form
    const validation = validateContactForm({
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      message: formData.message,
      phone: formData.phone,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors below",
      });
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
          message: "Thank you! We've received your message and will get back to you within 2 hours.",
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

        // Open WhatsApp as backup/confirmation
        const messageText = `Hi ZROXZ! I just submitted a contact form. Looking forward to hearing from you!`;
        const whatsappUrl = `https://wa.me/923190485953?text=${encodeURIComponent(messageText)}`;
        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
        }, 1500);
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [
        { text: "+92 319 0485953", link: "https://wa.me/923190485953" },
        { text: "+92 316 7001120", link: "https://wa.me/923167001120" },
        { text: "+92 334 7483286", link: "https://wa.me/923347483286" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { text: "info@zroxz.com", link: "mailto:info@zroxz.com" },
      ],
    },
    {
      icon: Clock,
      title: "Response Time",
      details: [
        { text: "Within 2 hours", link: null },
      ],
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        { text: "Global (Remote)", link: null },
      ],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "url": "https://zroxz.com/contact",
        "name": "Contact ZROXZ",
        "description": "Get in touch with ZROXZ for AI automation, web development, and video editing services"
      },
      {
        "@type": "Organization",
        "name": "ZROXZ",
        "url": "https://zroxz.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+92-319-0485953",
            "contactType": "Customer Service",
            "availableLanguage": ["English"],
            "areaServed": ["US", "CA"],
          }
        ],
        "email": "info@zroxz.com"
      },
    ]
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-white">
      <SEOHead
        title="Contact ZROXZ — Get Your Free Consultation"
        description="Get in touch with ZROXZ for AI automation, web development, and video editing services. Fast response within 2 hours. Contact us via email, WhatsApp, or our contact form."
        keywords="contact ZROXZ, AI automation inquiry, web development quote, get free consultation"
        canonicalUrl="https://zroxz.com/contact"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F9F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Book a Call Primary CTA */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#A78BFA]/10 border border-[#A78BFA]/30 text-[#7C3AED] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                First Priority
              </div>
              <div className="bg-gradient-to-br from-[#A78BFA]/10 to-[#7C3AED]/5 border border-[#A78BFA]/20 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-[#1A1523] mb-2">Ready to talk? Book a Free Call</h2>
                <p className="text-[#6B7280] mb-6">Schedule a 30-minute strategy call — fastest way to get started.</p>
                <motion.a
                  href="https://calendly.com/arfa1054/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg text-base font-semibold"
                  style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Free Call on Calendly</span>
                </motion.a>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-4 sm:mb-6">
              <span className="text-[#1A1523]">Or Send Us</span>{" "}
              <span className="text-[#A78BFA]">a Message</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#6B7280] px-4">
              Fill out the form below and we'll get back to you within 2 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#E8E0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#F9F7FF] border border-[#E8E0FF] rounded-2xl p-6 hover:border-[#A78BFA]/30 hover:shadow-[0_4px_20px_rgba(167,139,250,0.1)] transition-all text-center">
                <div className="w-12 h-12 bg-[#EDE9FE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <h3 className="text-[#1A1523] mb-2 font-semibold">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6B7280] hover:text-[#A78BFA] transition-colors block text-sm"
                        >
                          {detail.text}
                        </a>
                      ) : (
                        <p className="text-[#6B7280] text-sm">{detail.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F9F7FF] border-t border-[#E8E0FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-3 sm:mb-4">
              <span className="text-[#1A1523]">Send Us a</span>{" "}
              <span className="text-[#A78BFA]">Message</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6B7280] px-4">
              Fill out the form below and we'll get back to you within 2 hours
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${submitStatus.type === "success"
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

          {/* Form Card */}
          <div className="bg-white border border-[#E8E0FF] rounded-3xl p-8 md:p-10 shadow-[0_2px_16px_rgba(167,139,250,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-[#A78BFA]" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-[#F9F7FF] border ${errors.name ? "border-red-400" : "border-[#E8E0FF]"
                      } text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Business/Brand Name */}
                <div>
                  <label htmlFor="businessName" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#A78BFA]" />
                    Business/Brand Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-[#F9F7FF] border border-[#E8E0FF] text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50"
                    placeholder="Your business or brand name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#A78BFA]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-[#F9F7FF] border ${errors.email ? "border-red-400" : "border-[#E8E0FF]"
                      } text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#A78BFA]" />
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-[#F9F7FF] border ${errors.phone ? "border-red-400" : "border-[#E8E0FF]"
                      } text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Social Media Link */}
              <div>
                <label htmlFor="socialMediaLink" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-[#A78BFA]" />
                  Website/Social Link (Optional)
                </label>
                <input
                  type="url"
                  id="socialMediaLink"
                  name="socialMediaLink"
                  value={formData.socialMediaLink}
                  onChange={handleChange}
                  className="w-full bg-[#F9F7FF] border border-[#E8E0FF] text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all placeholder-[#6B7280]/50"
                  placeholder="https://yourbusiness.com or instagram.com/yourbrand"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-[#1A1523] mb-2 font-medium">
                    Service Needed *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full bg-[#F9F7FF] border ${errors.projectType ? "border-red-400" : "border-[#E8E0FF]"
                      } text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all`}
                  >
                    <option value="" className="text-[#6B7280]">Select a service</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="AI Voice Agent">AI Voice Agent</option>
                    <option value="CRM Automation">CRM Automation</option>
                    <option value="n8n Workflows">n8n Workflows</option>
                    <option value="GoHighLevel Setup">GoHighLevel Setup</option>
                    <option value="Web Development">Web Development</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Video Editing">Video Editing / Motion Design</option>
                    <option value="Full Package">Full Package (Multiple Services)</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>}
                </div>

                {/* Priority */}
                <div>
                  <label htmlFor="priority" className="block text-[#1A1523] mb-2 font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#A78BFA]" />
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full bg-[#F9F7FF] border border-[#E8E0FF] text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
                  >
                    <option value="normal">Normal Priority</option>
                    <option value="fast">Fast Priority ⚡</option>
                  </select>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    {formData.priority === "fast"
                      ? "We'll prioritize your request for faster turnaround"
                      : "Standard response within 2 hours"}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#1A1523] mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className={`w-full bg-[#F9F7FF] border ${errors.message ? "border-red-400" : "border-[#E8E0FF]"
                    } text-[#1A1523] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none placeholder-[#6B7280]/50`}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                <p className="mt-1 text-sm text-[#6B7280]">
                  {formData.message.length} / 2000 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl transition-all text-lg font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-sm text-[#6B7280]">
                🔒 Your information is secure and will never be shared
              </p>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-[#6B7280] mb-4">Prefer to book a call directly?</p>
            <a
              href="https://calendly.com/arfa1054/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg transition-all font-semibold"
              style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Free Call on Calendly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
