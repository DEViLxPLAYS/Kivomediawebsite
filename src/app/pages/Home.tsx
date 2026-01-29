import { MessageCircle, Play, ArrowRight, Check, Star } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { GlowingCard } from "../components/ui/glowing-card";

export function Home() {
  const services = [
    {
      title: "YouTube Long-Form",
      description: "Cinematic storytelling for YouTubers who demand excellence",
      features: ["Pro editing", "Motion graphics", "Color grading", "24-72h turnaround"],
    },
    {
      title: "Short-Form Content",
      description: "High-impact Reels, TikToks & Shorts that convert",
      features: ["Hook mastery", "Trend optimization", "Fast delivery", "Batch editing"],
    },
    {
      title: "Brand & Ads",
      description: "Premium commercial content for brands that scale",
      features: ["Concept to delivery", "Platform optimization", "Performance focus", "Unlimited revisions"],
    },
    {
      title: "Podcast Editing",
      description: "Transform raw footage into engaging podcast content",
      features: ["Multi-cam editing", "Audio polish", "Clips for social", "Full repurposing"],
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "YouTube Creator • 2.4M Subs",
      content: "Zivo Creative transformed my channel. Their edits don't just look good—they perform. My watch time increased 40% after switching to them.",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "Brand Manager • TechFlow",
      content: "Working with Zivo Creative is like having an elite in-house team, but better. They understand our brand and deliver consistently premium work.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Agency • Digital Pulse",
      content: "We've tried every editor out there. Zivo Creative is the only team that matches our pace and exceeds our quality standards. They're our secret weapon.",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "BASIC",
      price: "$499",
      period: "/month",
      features: [
        "2 YouTube Videos",
        "5 Reels/Shorts",
        "10 Stories",
        "5 Posts",
      ],
      popular: false,
    },
    {
      name: "STANDARD",
      price: "$999",
      period: "/month",
      features: [
        "3 YouTube Videos",
        "10 Reels/Shorts",
        "20 Stories",
        "10 Posts",
      ],
      popular: true,
    },
    {
      name: "PREMIUM",
      price: "$1399",
      period: "/month",
      features: [
        "5 YouTube Videos",
        "15 Reels/Shorts",
        "30 Stories",
        "15 Posts",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MjMxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Video editing workspace"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Grain Texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter">
              <span className="block text-white">We Build Content</span>
              <span className="block text-white">That</span>
              <span className="block bg-gradient-to-r from-white to-[#8B1538] bg-clip-text text-transparent">
                Performs.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Editing for YouTubers, creators, and brands that scale
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-all text-lg group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Content Packages</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all text-lg group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#8B1538]">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From content machines to luxury storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <GlowingCard key={index} innerClassName="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-[#8B1538]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#8B1538]/20 flex items-center justify-center group-hover:bg-[#8B1538]/30 transition-colors">
                  <ArrowRight className="w-6 h-6 text-[#8B1538]" />
                </div>
              </GlowingCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#8B1538] hover:text-white transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Machine */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <div className="inline-block px-4 py-2 bg-[#8B1538]/20 border border-[#8B1538]/30 rounded-full">
                <span className="text-[#8B1538] text-sm">Content Machine</span>
              </div>
              <h3 className="text-3xl md:text-4xl text-white tracking-tight">
                High Output. Lightning Fast.
              </h3>
              <p className="text-gray-400 text-lg">
                Need 20 videos a week? We've got you. Built for creators and brands that demand volume without sacrificing quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Check className="w-8 h-8 text-[#8B1538]" />
                  <span className="text-gray-300 text-center">Batch editing workflows</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Check className="w-8 h-8 text-[#8B1538]" />
                  <span className="text-gray-300 text-center">Same-day turnaround available</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Check className="w-8 h-8 text-[#8B1538]" />
                  <span className="text-gray-300 text-center">Consistent brand style</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6">
              <span className="text-white">Featured</span>{" "}
              <span className="text-[#8B1538]">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what we've created for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all cursor-pointer"
              >
                <ImageWithFallback
                  src={i === 1
                    ? "https://images.unsplash.com/photo-1758390851386-79c99432120e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MTE1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    : i === 2
                      ? "https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY5MjAyNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      : "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MjMxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080"}
                  alt={`Work sample ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white text-lg mb-1">Project Title {i}</h4>
                        <p className="text-gray-400 text-sm">Client Name</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#8B1538] flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-full transition-all"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6">
              <span className="text-white">What Clients</span>{" "}
              <span className="text-[#8B1538]">Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trusted by creators and brands worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <GlowingCard key={index} innerClassName="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#8B1538] text-[#8B1538]" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
                <div>
                  <p className="text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#8B1538]">Packages</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Monthly retainers designed for scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <GlowingCard
                key={index}
                className={plan.popular ? "border-[#8B1538]" : ""}
                innerClassName={`p-8 ${plan.popular ? "bg-[#8B1538]/10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8B1538] rounded-full text-white text-sm z-10">
                    Most Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <Check className="w-5 h-5 text-[#8B1538] mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/923398837213?text=${encodeURIComponent(
                      `Hey Zivo Creative, I want ${plan.name} package which includes: ${plan.features.join(", ")}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-6 py-3 rounded-full transition-colors ${plan.popular
                      ? "bg-[#8B1538] hover:bg-[#6B1028] text-white"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      }`}
                  >
                    Get Started
                  </a>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6">
            <span className="text-white">Ready to</span>{" "}
            <span className="text-[#8B1538]">Scale?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's talk about your content goals and how we can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-all text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Your Project</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full transition-all text-lg"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
