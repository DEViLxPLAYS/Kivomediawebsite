import { SEOHead } from "@/app/components/SEOHead";
import { Link } from "react-router";
import { Calendar, ArrowRight, Clock, Tag, BookOpen } from "lucide-react";

const posts = [
  {
    slug: "how-ai-voice-agents-work-2025",
    title: "How AI Voice Agents Work in 2025 (And Why Every Small Business Needs One)",
    description: "AI voice agents are replacing human receptionists at a fraction of the cost. Here's exactly how they work and how ZROXZ built one handling 80+ calls per day.",
    category: "AI Voice Agents",
    readTime: "8 min",
    date: "Jun 15, 2025",
  },
  {
    slug: "ai-chatbot-vs-live-chat",
    title: "AI Chatbot vs. Live Chat: Which One Should Your Business Use in 2025?",
    description: "A full comparison of AI chatbots versus live chat agents — costs, response times, and which works best for lead generation.",
    category: "AI Chatbots",
    readTime: "7 min",
    date: "Jun 10, 2025",
  },
  {
    slug: "gohighlevel-automation-guide",
    title: "GoHighLevel Automation Setup Guide for Small Businesses (2025)",
    description: "Complete GoHighLevel setup guide: automate lead follow-up, appointment booking, and CRM pipelines with real workflow examples.",
    category: "GoHighLevel",
    readTime: "9 min",
    date: "Jun 5, 2025",
  },
  {
    slug: "n8n-vs-zapier-vs-make",
    title: "n8n vs. Zapier vs. Make: Which Automation Tool is Best in 2025?",
    description: "Full comparison of n8n, Zapier, and Make. Which one saves the most money, handles complex workflows, and scales best?",
    category: "Automation",
    readTime: "8 min",
    date: "May 28, 2025",
  },
  {
    slug: "ai-automation-for-dental-clinics",
    title: "AI Automation for Dental Clinics: Get More Patients on Autopilot",
    description: "Dental clinics using AI automation book 30% more appointments and reduce no-shows by 50%. Here's exactly what to automate.",
    category: "AI Automation",
    readTime: "7 min",
    date: "May 20, 2025",
  },
  {
    slug: "replace-receptionist-with-ai",
    title: "How to Replace Your Business Receptionist with an AI (Save $40K/Year)",
    description: "AI receptionists handle calls, book appointments, answer FAQs, and follow up — 24/7, for a one-time setup fee.",
    category: "AI Voice Agents",
    readTime: "8 min",
    date: "May 12, 2025",
  },
  {
    slug: "best-ai-tools-for-small-business-2025",
    title: "10 Best AI Tools for Small Business in 2025 (That Actually Save Time)",
    description: "The 10 AI tools US small businesses are using to automate marketing, sales, customer support, and operations in 2025.",
    category: "AI Tools",
    readTime: "9 min",
    date: "May 5, 2025",
  },
  {
    slug: "gohighlevel-for-real-estate",
    title: "GoHighLevel for Real Estate Agents: The Complete Automation Setup",
    description: "Real estate agents using GoHighLevel close 2x more deals with automated lead nurture, appointment booking, and follow-up sequences.",
    category: "GoHighLevel",
    readTime: "8 min",
    date: "Apr 28, 2025",
  },
  {
    slug: "ai-lead-generation-automation",
    title: "AI Lead Generation: Get Leads Without Ads or Cold Calling",
    description: "How to build an AI-powered lead generation system that captures, qualifies, and follows up with leads automatically.",
    category: "Lead Generation",
    readTime: "7 min",
    date: "Apr 20, 2025",
  },
  {
    slug: "n8n-workflow-for-lead-generation",
    title: "5 n8n Workflows That Generate Leads on Autopilot",
    description: "Five proven n8n automation workflows that capture and nurture leads automatically, with step-by-step setup instructions.",
    category: "n8n",
    readTime: "8 min",
    date: "Apr 12, 2025",
  },
  {
    slug: "ai-automation-agency-vs-freelancer",
    title: "AI Automation Agency vs. Freelancer: Which Should You Hire in 2025?",
    description: "An honest comparison of cost, reliability, speed, and results between solo freelancers and AI automation agencies.",
    category: "Agency",
    readTime: "6 min",
    date: "Apr 5, 2025",
  },
  {
    slug: "web-development-for-us-businesses",
    title: "Web Development for US Small Businesses in 2025: What You Actually Need",
    description: "Most US small businesses are overpaying for web development or using templates that don't convert. Here's what you actually need.",
    category: "Web Development",
    readTime: "7 min",
    date: "Mar 28, 2025",
  },
];

const categoryStyle: Record<string, { bg: string; text: string }> = {
  "AI Voice Agents":  { bg: "#EDE9FF", text: "#5B21B6" },
  "AI Chatbots":      { bg: "#F0EBFF", text: "#6D28D9" },
  "GoHighLevel":      { bg: "#EDE9FF", text: "#4C1D95" },
  "Automation":       { bg: "#F5F0FF", text: "#7C3AED" },
  "AI Automation":    { bg: "#EDE9FF", text: "#5B21B6" },
  "AI Tools":         { bg: "#F0EBFF", text: "#6D28D9" },
  "Lead Generation":  { bg: "#F5F0FF", text: "#7C3AED" },
  "n8n":              { bg: "#EDE9FF", text: "#4C1D95" },
  "Agency":           { bg: "#F0EBFF", text: "#6D28D9" },
  "Web Development":  { bg: "#F5F0FF", text: "#5B21B6" },
};

export function BlogIndex() {
  return (
    <>
      <SEOHead
        title="AI Automation Blog — ZROXZ"
        description="Guides on n8n, GoHighLevel, AI chatbots, voice agents, and automation for US small businesses. Real strategies from the ZROXZ team."
        canonicalUrl="https://zroxz.com/blog"
        keywords="AI automation blog, n8n tutorials, GoHighLevel guides, AI chatbot tips, voice agent setup"
      />

      {/* Hero */}
      <div className="pt-24 pb-14" style={{ background: "linear-gradient(135deg, #0D0118 0%, #150828 60%, #1E0B3A 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5" style={{ background: "rgba(124,58,237,0.3)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.3)" }}>
            <BookOpen className="w-3.5 h-3.5" />
            ZROXZ Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "#F5F0FF" }}>
            AI Automation Guides
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Practical guides on AI voice agents, chatbots, GoHighLevel, n8n workflows, and web development — written by the ZROXZ team.
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFF] min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => {
              const cs = categoryStyle[post.category] || { bg: "#F3EFFF", text: "#7C3AED" };
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-[#E8E0FF] bg-white hover:border-[#A78BFA] hover:shadow-xl hover:shadow-purple-100/60 transition-all duration-200 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #A78BFA, #7C3AED)" }} />
                  <div className="flex flex-col flex-1 p-6">
                    {/* Meta row */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: cs.bg, color: cs.text }}>
                        <Tag className="w-2.5 h-2.5" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[15px] font-bold text-[#1A1523] leading-snug mb-3 group-hover:text-[#7C3AED] transition-colors line-clamp-3 flex-1">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2 mb-5">
                      {post.description}
                    </p>

                    {/* Footer row */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#F0EBFF]">
                      <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#7C3AED] group-hover:gap-2 transition-all">
                        Read article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl p-10 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D0118 0%, #1E0B3A 100%)" }}>
            <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, #A78BFA 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <h2 className="text-2xl font-black text-white mb-2">Stop Reading. Start Automating.</h2>
              <p className="text-purple-200/60 mb-6 max-w-md mx-auto text-sm">
                Book a free call with ZROXZ and get a real automation plan for your business in 30 minutes.
              </p>
              <a
                href="https://calendly.com/arfa1054/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
              >
                <Calendar className="w-4 h-4" />
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
