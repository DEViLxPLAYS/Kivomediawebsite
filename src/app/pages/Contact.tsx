import { useState } from "react";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageText = `
*New Project Inquiry*
----------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType}
----------------
*Message:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/923398837213?text=${encodeURIComponent(
      messageText
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+1 (234) 567-8900",
      link: "https://wa.me/1234567890",
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
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/20 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#8B1538]" />
                </div>
                <h3 className="text-white text-sm mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
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

      {/* Contact Form & WhatsApp */}
      <section className="py-16 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl text-white tracking-tight mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8B1538] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8B1538] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#8B1538] transition-colors"
                  >
                    <option value="" className="text-black">Select a service</option>
                    <option value="long-form" className="text-black">YouTube Long-Form</option>
                    <option value="short-form" className="text-black">Short-Form Content</option>
                    <option value="brand" className="text-black">Brand & Ads</option>
                    <option value="podcast" className="text-black">Podcast Editing</option>
                    <option value="other" className="text-black">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#8B1538] transition-colors resize-none"
                    placeholder="Tell us about your content goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 py-4 rounded-full transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-[#8B1538]/20 to-transparent border border-[#8B1538]/30 rounded-2xl p-12 text-center">
                <div className="w-24 h-24 rounded-full bg-[#8B1538] flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl text-white mb-4">
                  Prefer to Chat?
                </h3>
                <p className="text-gray-400 mb-8">
                  Get an instant response on WhatsApp. We're available 24/7 to discuss your project.
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-all text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-4">
                    Looking to book a call instead?
                  </p>
                  <button className="text-white hover:text-[#8B1538] transition-colors">
                    Schedule a Meeting →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl text-white mb-6">
            Have a Quick Question?
          </h2>
          <p className="text-gray-400 mb-8">
            Check out our{" "}
            <a
              href="/process"
              className="text-[#8B1538] hover:text-white transition-colors"
            >
              Process page
            </a>{" "}
            for answers to common questions about timelines, pricing, and workflows.
          </p>
        </div>
      </section>
    </div>
  );
}
