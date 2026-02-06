import { Upload, Zap, RefreshCw, Download, MessageCircle } from "lucide-react";
import { SEOHead } from "@/app/components/SEOHead";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Submit Your Footage",
      description: "Upload your raw footage to our secure platform. Share your vision, brand guidelines, and any reference materials.",
      details: [
        "Drag & drop upload",
        "Secure cloud storage",
        "Project brief form",
        "Reference materials",
      ],
    },
    {
      number: "02",
      icon: Zap,
      title: "We Edit & Optimize",
      description: "Our team gets to work. We edit, color grade, add motion graphics, and optimize for your target platform.",
      details: [
        "Professional editing",
        "Color grading",
        "Motion graphics",
        "Platform optimization",
      ],
    },
    {
      number: "03",
      icon: RefreshCw,
      title: "Review & Revisions",
      description: "Review your video and request changes. We offer unlimited revisions until you're 100% satisfied.",
      details: [
        "Video preview link",
        "Timestamped feedback",
        "Unlimited revisions",
        "Quick turnaround",
      ],
    },
    {
      number: "04",
      icon: Download,
      title: "Final Delivery",
      description: "Receive your final video in all required formats, optimized and ready to publish across all platforms.",
      details: [
        "Multiple formats",
        "Platform-specific exports",
        "Source files available",
        "Lifetime cloud storage",
      ],
    },
  ];

  const faqs = [
    {
      question: "How fast is your turnaround?",
      answer: "Standard turnaround is 48-72 hours for long-form content and 12-24 hours for short-form. Rush delivery is available for urgent projects.",
    },
    {
      question: "What if I need revisions?",
      answer: "All plans include revisions. Creator plan includes 2 revisions per video, Professional includes unlimited, and Enterprise gets white-glove treatment with dedicated support.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with creators and brands worldwide. Our team operates across multiple time zones to ensure fast communication.",
    },
    {
      question: "What file formats do you need?",
      answer: "We accept all common video formats (MP4, MOV, AVI, etc.). For best quality, we recommend uploading in the highest resolution available.",
    },
    {
      question: "Can you match my brand style?",
      answer: "Yes! We create custom editing templates based on your brand guidelines. After the first few videos, we'll have your style locked in perfectly.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Our Process - How We Deliver Professional Video Editing"
        description="Learn about our streamlined video editing process from upload to final delivery. Fast turnaround within 48-72 hours, unlimited revisions, and professional quality guaranteed. See our step-by-step workflow for YouTube editing, short-form content, and more."
        keywords="video editing process, editing workflow, video production timeline, YouTube editing turnaround, video editing revisions, content creation process"
        canonicalUrl="https://zivocreative.com/process"
      />
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
            <span className="text-white">Our</span>{" "}
            <span className="text-[#8B1538]">Process</span>
          </h1>
          <p className="text-xl text-gray-400">
            Streamlined, transparent, and designed for speed
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Visual */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-[#8B1538]/20 border border-[#8B1538]/30 flex items-center justify-center mb-6">
                    <step.icon className="w-16 h-16 text-[#8B1538]" />
                  </div>
                  <div className="absolute top-0 left-0 text-8xl font-bold text-white/5">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <div className="inline-block px-4 py-2 bg-[#8B1538]/20 border border-[#8B1538]/30 rounded-full mb-4">
                    <span className="text-[#8B1538] text-sm">Step {index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-6">{step.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {step.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-lg p-4"
                    >
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-white">Typical</span>{" "}
              <span className="text-[#8B1538]">Timeline</span>
            </h2>
            <p className="text-xl text-gray-400">
              From upload to published content
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-12">
              {[
                { time: "Hour 0", event: "Footage uploaded" },
                { time: "Hour 6", event: "Editing begins" },
                { time: "Hour 24", event: "First draft ready" },
                { time: "Hour 48", event: "Revisions completed" },
                { time: "Hour 72", event: "Final delivery" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-center gap-8"
                >
                  <div className="md:w-1/2 text-right">
                    {index % 2 === 0 ? (
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <p className="text-[#8B1538]">{item.time}</p>
                        <p className="text-white">{item.event}</p>
                      </div>
                    ) : (
                      <div className="md:block hidden" />
                    )}
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 bg-[#8B1538] rounded-full -translate-x-1/2 hidden md:block" />
                  <div className="md:w-1/2">
                    {index % 2 === 1 ? (
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <p className="text-[#8B1538]">{item.time}</p>
                        <p className="text-white">{item.event}</p>
                      </div>
                    ) : (
                      <div className="md:block hidden" />
                    )}
                  </div>
                  <div className="md:hidden w-4 h-4 bg-[#8B1538] rounded-full flex-shrink-0" />
                  <div className="md:hidden bg-white/5 border border-white/10 rounded-lg p-4 flex-1">
                    <p className="text-[#8B1538]">{item.time}</p>
                    <p className="text-white">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-white">Frequently Asked</span>{" "}
              <span className="text-[#8B1538]">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-white text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-white">Ready to</span>{" "}
            <span className="text-[#8B1538]">Start?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Experience the Zivo Creative difference
          </p>
          <a
            href="https://wa.me/923398837213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-all text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Get Started</span>
          </a>
        </div>
      </section>
    </div>
  );
}
