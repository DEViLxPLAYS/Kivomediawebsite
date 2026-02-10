import { MessageCircle, Play, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { GlowingCard } from "../components/ui/glowing-card";
import { StaggerTestimonials } from "@/app/components/ui/stagger-testimonials";
import { ZivoWorldMap } from "@/app/components/ZivoWorldMap";
import { BookCallButton } from "@/app/components/BookCallButton";
import { LetsWorkTogether } from "@/app/components/ui/lets-work-section";
import { SEOHead } from "@/app/components/SEOHead";
import { WhyZivoCreative } from "@/app/components/WhyZivoCreative";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: "Web Development",
      description: "Custom websites with AI chatbot integration",
      features: ["Responsive design", "AI chatbots", "E-commerce", "SEO optimized"],
    },
    {
      title: "Faceless YT Automation",
      description: "AI-powered YouTube channels with automated content creation",
      features: ["AI script generation", "Auto voiceover", "Full automation", "Channel management"],
    },
  ];




  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zivocreative.com/#organization",
        "name": "Zivo Creative",
        "url": "https://zivocreative.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.postimg.cc/SNGzjXYz/favicon.png",
          "width": 512,
          "height": 512
        },
        "description": "Professional video editing, YouTube automation, website development, and social media content creation services for creators and brands",
        "foundingDate": "2023",
        "areaServed": ["US", "CA"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+92-339-8837213",
          "contactType": "Customer Service",
          "availableLanguage": ["English"],
          "areaServed": ["US", "CA"]
        },
        "sameAs": [
          "https://www.instagram.com/zivocreative/",
          "https://www.youtube.com/@zivocreative"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://zivocreative.com/#localbusiness",
        "name": "Zivo Creative",
        "image": "https://i.postimg.cc/SNGzjXYz/favicon.png",
        "telephone": "+92-339-8837213",
        "email": "info@zivocreative.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.5204",
          "longitude": "74.3587"
        },
        "url": "https://zivocreative.com",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://zivocreative.com/#website",
        "url": "https://zivocreative.com",
        "name": "Zivo Creative",
        "publisher": {
          "@id": "https://zivocreative.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://zivocreative.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Zivo Creative offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zivo Creative offers professional video editing for YouTube long-form content, short-form content (Reels, TikToks, Shorts), custom website development with AI chatbot integration, and faceless YouTube automation services."
            }
          },
          {
            "@type": "Question",
            "name": "How fast is your turnaround time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our standard turnaround is 24-72 hours for long-form content and 12-24 hours for short-form videos. Rush delivery is available for urgent projects."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer unlimited revisions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our Professional and Enterprise plans include unlimited revisions until you're 100% satisfied with the final result."
            }
          },
          {
            "@type": "Question",
            "name": "Can you develop custom websites with AI chatbots?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in custom website development with integrated AI chatbots, responsive design, e-commerce functionality, and full SEO optimization."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://zivocreative.com"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Website Development, Video Editing, YouTube Automation & Content Creation"
        description="Professional website development with AI chatbot integration, YouTube automation services, video editing, and social media content creation. Custom web development, YouTube editing, short-form content, and digital marketing solutions for creators and brands."
        keywords="website development, custom web development, web design, AI chatbot integration, YouTube automation, video editing, social media content, YouTube editing, short-form videos, reels, TikTok, podcast editing, faceless YouTube automation, Zivo Creative"
        canonicalUrl="https://zivocreative.com"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-black" />
          {/* Grain Texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
        </div>

        {/* Content - Split Layout */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">

            {/* Left Side - Text Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-tight">
                <span className="block text-white">We Build Content</span>
                <span className="block text-white">That</span>
                <span className="block bg-gradient-to-r from-white to-[#8B1538] bg-clip-text text-transparent">
                  Performs.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Video editing, content creation & web development for creators and brands
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3 sm:gap-4 pt-4 sm:pt-8">
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all text-base sm:text-lg group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Content Packages</span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all text-base sm:text-lg group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
                <BookCallButton onClick={() => setIsModalOpen(true)} />
              </div>
            </div>

            {/* Right Side - Video Player */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl shadow-[#8B1538]/20">
                {/* Video Container with aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dxtuhnzlw&public_id=Website_Intro_Video_US_Style_kso5bd&fluid=true&controls=true&muted=false&autoplay=false&loop=false&show_logo=false&colors[base]=%23C41E3A&colors[accent]=%238B1538"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }}
                    title="Zivo Creative Intro"
                  />
                </div>

                {/* Decorative Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1538]/20 via-[#C41E3A]/20 to-[#8B1538]/20 blur-xl -z-10 opacity-75" />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* World Map Section */}
      <ZivoWorldMap />

      {/* Services Overview Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-4 sm:mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#8B1538]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              From content machines to luxury storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <GlowingCard key={index} innerClassName="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-red-500" />
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

      {/* Why Zivo Creative Section */}
      <WhyZivoCreative />


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
      <StaggerTestimonials />


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
              href="https://wa.me/923398837213"
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

      {/* Book a Call Modal */}
      <LetsWorkTogether isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
