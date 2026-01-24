import { useState } from "react";
import { Play, Filter } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Long-Form", "Short-Form", "Brand & Ads", "Podcasts"];

  const projects = [
    {
      id: 1,
      title: "Tech Review Series",
      client: "TechVision YouTube",
      category: "Long-Form",
      thumbnail: "https://images.unsplash.com/photo-1758390851386-79c99432120e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MTE1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "2.3M views",
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      client: "StartupCo",
      category: "Brand & Ads",
      thumbnail: "https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY5MjAyNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "5.2M impressions",
    },
    {
      id: 3,
      title: "Viral Reels Series",
      client: "LifestyleInfluencer",
      category: "Short-Form",
      thumbnail: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MjMxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "12M+ views",
    },
    {
      id: 4,
      title: "Business Podcast",
      client: "Leadership Talks",
      category: "Podcasts",
      thumbnail: "https://images.unsplash.com/photo-1758390851386-79c99432120e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY5MTE1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "150K+ downloads",
    },
    {
      id: 5,
      title: "Educational Series",
      client: "LearnHub",
      category: "Long-Form",
      thumbnail: "https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGZpbG1pbmd8ZW58MXx8fHwxNzY5MjAyNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "890K views",
    },
    {
      id: 6,
      title: "TikTok Viral Series",
      client: "FitnessGuru",
      category: "Short-Form",
      thumbnail: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MjMxMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      views: "8.5M views",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
            <span className="text-white">Our</span>{" "}
            <span className="text-[#8B1538]">Work</span>
          </h1>
          <p className="text-xl text-gray-400">
            Proof, not promises. See what we've created for our clients.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#8B1538] text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all cursor-pointer"
              >
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#8B1538] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                      <Play className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 bg-[#8B1538]/80 rounded-full">
                        <span className="text-white text-xs">{project.category}</span>
                      </div>
                      <h3 className="text-white text-lg">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.client}</p>
                      <p className="text-gray-500 text-xs">{project.views}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-white">Want Results Like</span>{" "}
            <span className="text-[#8B1538]">These?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's create something amazing together
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-all text-lg"
          >
            <span>Start Your Project</span>
          </a>
        </div>
      </section>
    </div>
  );
}
