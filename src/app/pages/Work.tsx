import { useState } from "react";
import { Play, Filter, Calendar } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { SEOHead } from "@/app/components/SEOHead";

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI Automation", "Web Dev", "Video Editing", "SaaS"];

  const projects = [
    {
      id: 1,
      title: "AI Voice Agent — Evinn.pk",
      client: "Evinn.pk",
      category: "AI Automation",
      thumbnail: "https://images.unsplash.com/photo-1758390851386-79c99432120e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MTE1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "80+ daily calls handled",
    },
    {
      id: 2,
      title: "n8n + GoHighLevel Automation",
      client: "US SaaS Client",
      category: "AI Automation",
      thumbnail: "https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY5MjAyNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "40% faster lead response",
    },
    {
      id: 3,
      title: "React + Supabase SaaS Build",
      client: "US Tech Startup",
      category: "SaaS",
      thumbnail: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MjMxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "Sub-2s load time",
    },
    {
      id: 4,
      title: "Business Website Launch",
      client: "US Real Estate Brand",
      category: "Web Dev",
      thumbnail: "https://images.unsplash.com/photo-1758390851386-79c99432120e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MTE1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "3x conversion lift",
    },
    {
      id: 5,
      title: "AI Motion Design Reel",
      client: "US Brand Agency",
      category: "Video Editing",
      thumbnail: "https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY5MjAyNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "5M+ impressions",
    },
    {
      id: 6,
      title: "AI Chatbot Lead Qualifier",
      client: "US Insurance Broker",
      category: "AI Automation",
      thumbnail: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MjMxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "15+ booked calls/week",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "ZROXZ Work Portfolio",
        "description": "AI automation, web development, and video editing projects by ZROXZ",
        "url": "https://zroxz.com/work",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": projects.map((project, index) => ({
            "@type": "CreativeWork",
            "position": index + 1,
            "name": project.title,
            "creator": {
              "@type": "Organization",
              "name": "ZROXZ"
            },
            "image": project.thumbnail,
            "genre": project.category,
            "description": `ZROXZ project: ${project.title}`,
            "url": "https://zroxz.com/work",
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zroxz.com" },
          { "@type": "ListItem", "position": 2, "name": "Work", "item": "https://zroxz.com/work" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEOHead
        title="Our Work — AI Automation, Web Development & Video Editing Portfolio"
        description="See ZROXZ's portfolio of AI automation systems, web development projects, and video editing work. Real results for US businesses."
        keywords="ZROXZ portfolio, AI automation projects, web development portfolio, video editing samples, AI chatbot, AI voice agent"
        canonicalUrl="https://zroxz.com/work"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
            <span className="text-[#1A1523]">Our</span>{" "}
            <span className="text-[#A78BFA]">Work</span>
          </h1>
          <p className="text-xl text-[#6B7280]">
            Proof, not promises. Real results for real businesses.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-[#E8E0FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap text-sm font-medium ${activeFilter === filter
                  ? "text-white"
                  : "bg-[#F9F7FF] text-[#6B7280] hover:bg-[#EDE9FE] border border-[#E8E0FF]"
                  }`}
                style={activeFilter === filter ? { background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" } : {}}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-video bg-[#F9F7FF] border border-[#E8E0FF] rounded-2xl overflow-hidden hover:border-[#A78BFA]/40 transition-all cursor-pointer shadow-[0_2px_16px_rgba(167,139,250,0.06)]"
              >
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1523]/90 via-[#1A1523]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform" style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}>
                      <Play className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 bg-[#A78BFA]/80 rounded-full">
                        <span className="text-white text-xs font-semibold">{project.category}</span>
                      </div>
                      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      <p className="text-white/70 text-sm">{project.client}</p>
                      <p className="text-[#A78BFA] text-xs font-semibold">{project.views}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F9F7FF] border-t border-[#E8E0FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-[#1A1523]">Want Results Like</span>{" "}
            <span className="text-[#A78BFA]">These?</span>
          </h2>
          <p className="text-xl text-[#6B7280] mb-8">
            Let's build something that generates leads while you sleep
          </p>
          <a
            href="https://calendly.com/arfa1054/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold"
            style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Free Call</span>
          </a>
        </div>
      </section>
    </div>
  );
}
