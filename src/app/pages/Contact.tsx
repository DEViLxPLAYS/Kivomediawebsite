import { useState, useEffect } from "react";
import { MessageCircle, Mail, Clock, MapPin, AlertCircle, CheckCircle2, Link as LinkIcon, User, Zap, Briefcase } from "lucide-react";
import { submitContactForm } from "@/lib/supabase";
import { validateContactForm, sanitizeText } from "@/lib/validation";
import { checkRateLimit, recordSubmission, getRateLimitMessage } from "@/lib/rateLimit";
import { useSearchParams } from "react-router";

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
      // Submit to Supabase
      const result = await submitContactForm({
        name: sanitizeText(formData.name),
        email: formData.email.toLowerCase().trim(),
        project_type: formData.projectType,
        message: sanitizeText(formData.message),
        phone: formData.phone || undefined,
      });

      if (result.success) {
        // Record successful submission for rate limiting
        recordSubmission();

        setSubmitStatus({
          type: "success",
          message: "Thank you! We've received your message and will get back to you within 2 hours.",
        });

        // Reset form
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
        const messageText = `Hi Zivo Creative! I just submitted a contact form. Looking forward to hearing from you!`;
        const whatsappUrl = `https://wa.me/923398837213?text=${encodeURIComponent(messageText)}`;
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
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [
        { text: "+92 339 8837213", link: "https://wa.me/923398837213" },
        { text: "+92 334 7483286", link: "https://wa.me/923347483286" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { text: "info@zivocreative.com", link: "mailto:info@zivocreative.com" },
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

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-4 sm:mb-6">
            <span className="text-white">Get In</span>{" "}
            <span className="text-[#8B1538]">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
            Let's discuss your project and bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all text-center">
                <div className="w-12 h-12 bg-[#8B1538]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#8B1538]" />
                </div>
                <h3 className="text-white mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#8B1538] transition-colors block"
                        >
                          {detail.text}
                        </a>
                      ) : (
                        <p className="text-gray-400">{detail.text}</p>
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
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-3 sm:mb-4">
              <span className="text-white">Send Us a</span>{" "}
              <span className="text-[#8B1538]">Message</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 px-4">
              Fill out the form below and we'll get back to you within 2 hours
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${submitStatus.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
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

          {/* Beautiful Form Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-[#8B1538]" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-gray-200"
                      } text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all placeholder-gray-400`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                {/* Business/Influencer Name */}
                <div>
                  <label htmlFor="businessName" className="block text-white mb-2 font-medium flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#8B1538]" />
                    Business/Brand Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Your brand or channel name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#8B1538]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-gray-200"
                      } text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all placeholder-gray-400`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white mb-2 font-medium flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#8B1538]" />
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.phone ? "border-red-500" : "border-gray-200"
                      } text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all placeholder-gray-400`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* Social Media Link */}
              <div>
                <label htmlFor="socialMediaLink" className="block text-white mb-2 font-medium flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-[#8B1538]" />
                  Social Media Link (Optional)
                </label>
                <input
                  type="url"
                  id="socialMediaLink"
                  name="socialMediaLink"
                  value={formData.socialMediaLink}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all placeholder-gray-400"
                  placeholder="https://instagram.com/yourbrand or YouTube channel"
                />
                <p className="mt-1 text-sm text-gray-400">Attach your social media profile for reference</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-white mb-2 font-medium">
                    Package/Service *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.projectType ? "border-red-500" : "border-gray-200"
                      } text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all`}
                  >
                    <option value="" className="text-gray-400">Select a package</option>
                    <option value="All-in-One Starter Growth">All-in-One: Starter Growth</option>
                    <option value="All-in-One Accelerator">All-in-One: Accelerator</option>
                    <option value="All-in-One Premium Authority">All-in-One: Premium Authority</option>
                    <option value="All-in-One Custom Enterprise">All-in-One: Custom Enterprise</option>
                    <option value="Video Edit Starter Growth">Video Edit: Starter Growth</option>
                    <option value="Video Edit Accelerator">Video Edit: Accelerator</option>
                    <option value="Video Edit Premium Authority">Video Edit: Premium Authority</option>
                    <option value="Website Starter">Website: Starter</option>
                    <option value="Website Growth">Website: Growth</option>
                    <option value="Website Enterprise">Website: Enterprise</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && <p className="mt-1 text-sm text-red-400">{errors.projectType}</p>}
                </div>

                {/* Priority */}
                <div>
                  <label htmlFor="priority" className="block text-white mb-2 font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#8B1538]" />
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all"
                  >
                    <option value="normal">Normal Priority</option>
                    <option value="fast">Fast Priority ⚡</option>
                  </select>
                  <p className="mt-1 text-sm text-gray-400">
                    {formData.priority === "fast"
                      ? "We'll prioritize your request for faster turnaround"
                      : "Standard response within 2 hours"}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-gray-200"
                    } text-black px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all resize-none placeholder-gray-400`}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                <p className="mt-1 text-sm text-gray-400">
                  {formData.message.length} / 2000 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#8B1538] to-[#6B1028] hover:from-[#6B1028] hover:to-[#8B1538] disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full transition-all text-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#8B1538]/20 hover:shadow-[#8B1538]/40 hover:scale-[1.02] active:scale-[0.98]"
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

              <p className="text-center text-sm text-gray-400">
                🔒 Your information is secure and will never be shared
              </p>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Prefer to chat directly?</p>
            <a
              href="https://wa.me/923398837213?text=Hey%20Zivo%20Creative%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#8B1538] hover:bg-[#8B1538]/10 text-white px-8 py-4 rounded-full transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
