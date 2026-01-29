import { Target, Users, Zap, Award, MessageCircle } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence First",
      description: "We don't do mediocre. Every frame, every transition, every edit is crafted to perfection.",
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "Content moves fast. We move faster. Without ever compromising on quality.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We're not just vendors—we're your creative partners invested in your success.",
    },
    {
      icon: Award,
      title: "Results Driven",
      description: "Beautiful edits are worthless if they don't perform. We optimize for engagement and conversions.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "100M+", label: "Total Views Generated" },
    { number: "50+", label: "Happy Clients" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  const team = [
    {
      name: "Senior Editor",
      role: "Long-Form Specialist",
      description: "10+ years crafting cinematic stories for YouTube's top creators",
    },
    {
      name: "Motion Graphics",
      role: "Animation Expert",
      description: "Award-winning designer bringing brands to life through motion",
    },
    {
      name: "Short-Form Lead",
      role: "Viral Content Expert",
      description: "Master of hooks and trends with 500M+ views across platforms",
    },
    {
      name: "Project Manager",
      role: "Client Success",
      description: "Ensuring every project exceeds expectations, every time",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-[#8B1538]">Zivo Creative</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where content machines meet luxury storytelling
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-gray-400 text-lg">
            <p>
              We started Zivo Creative with a simple belief: <span className="text-white">content creators deserve better editing partners</span>.
            </p>
            <p>
              Too often, we saw creators stuck between two bad options—either sacrifice quality for speed with cheap editors, or sacrifice speed for quality with slow agencies.
            </p>
            <p className="text-white text-xl">
              We built Zivo Creative to solve this problem.
            </p>
            <p>
              Today, we're a team of elite editors, motion designers, and content strategists working with some of the fastest-growing creators and brands in the world. We've edited everything from million-view YouTube videos to high-converting brand campaigns.
            </p>
            <p>
              <span className="text-white">Our mission is simple:</span> help you create more, better, faster.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#8B1538]">Values</span>
            </h2>
            <p className="text-xl text-gray-400">
              What drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#8B1538]/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#8B1538]" />
                </div>
                <h3 className="text-white text-xl mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl text-[#8B1538] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-white">The</span>{" "}
              <span className="text-[#8B1538]">Team</span>
            </h2>
            <p className="text-xl text-gray-400">
              Elite editors and designers, handpicked for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#8B1538]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-[#8B1538]" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-1">{member.name}</h3>
                    <p className="text-[#8B1538] text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#8B1538]">Philosophy</span>
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
            <blockquote className="text-2xl text-gray-300 text-center italic">
              "Less clutter, more intent. Every frame should have a purpose. Every edit should drive action. Every video should perform."
            </blockquote>
            <p className="text-center text-gray-500 mt-6">— Zivo Creative Team</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-6">
            <span className="text-white">Work With</span>{" "}
            <span className="text-[#8B1538]">The Best</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the growing list of creators and brands who trust Zivo Creative
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-all text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start Your Project</span>
          </a>
        </div>
      </section>
    </div>
  );
}
