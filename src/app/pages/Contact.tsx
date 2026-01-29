import { useState } from "react";
import { MessageCircle, Mail, Clock, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/lib/supabase";
import { validateContactForm, sanitizeText } from "@/lib/validation";
import { checkRateLimit, recordSubmission, getRateLimitMessage } from "@/lib/rateLimit";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

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
          email: "",
          projectType: "",
          message: "",
          phone: "",
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
      detail: "+92 339 8837213",
      link: "https://wa.me/923398837213",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@zivocreative.com",
      link: "mailto:hello@zivocreative.com",
    },
    {
      icon: Clock,
      title: "Response Time",
      detail: "Within 2 hours",
      link: null,
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Global (Remote)",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
            <span className="text-white">Get In</span>{" "}
            <span className="text-[#8B1538]">Touch</span>
          </h1>
          <p className="text-xl text-gray-400">
            Let's discuss your project and bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all text-center"
              >
                <div className="w-12 h-12 bg-[#8B1538]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#8B1538]" />
                </div>
                <h3 className="text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#8B1538] transition-colors"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-gray-400">{info.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">
              <span className="text-white">Send Us a</span>{" "}
              <span className="text-[#8B1538]">Message</span>
            </h2>
            <p className="text-gray-400">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"
                    } text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#8B1538] transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"
                    } text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#8B1538] transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            {/* Phone (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-white mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-white/5 border ${errors.phone ? "border-red-500" : "border-white/10"
                  } text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#8B1538] transition-colors`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-white mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full bg-white/5 border ${errors.projectType ? "border-red-500" : "border-white/10"
                  } text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#8B1538] transition-colors`}
              >
                <option value="">Select a project type</option>
                <option value="YouTube Long-Form">YouTube Long-Form Editing</option>
                <option value="Short-Form Content">Short-Form Content (Reels/TikTok/Shorts)</option>
                <option value="Brand & Ads">Brand & Ad Creatives</option>
                <option value="Podcast Editing">Podcast Editing</option>
                <option value="Web Development">Website Design & Development</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Other">Other</option>
              </select>
              {errors.projectType && <p className="mt-1 text-sm text-red-400">{errors.projectType}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full bg-white/5 border ${errors.message ? "border-red-500" : "border-white/10"
                  } text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#8B1538] transition-colors resize-none`}
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              <p className="mt-1 text-sm text-gray-500">
                {formData.message.length} / 2000 characters
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8B1538] hover:bg-[#6B1028] disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full transition-colors text-lg font-medium flex items-center justify-center gap-2"
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

            <p className="text-center text-sm text-gray-500">
              We'll respond within 2 hours during business hours
            </p>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Prefer to chat directly?</p>
            <a
              href="https://wa.me/923398837213?text=Hey%20Zivo%20Creative%2C%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all"
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
