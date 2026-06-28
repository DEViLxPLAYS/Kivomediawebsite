import { Link } from "react-router";
import { Instagram, Twitter, Youtube, Phone, Calendar, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F9F7FF] border-t border-[#E8E0FF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <img
                src="https://i.postimg.cc/yxCJWVpw/Chat-GPT-Image-Jun-29-2026-02-14-414-AM.png"
                alt="ZROXZ"
                className="h-12 w-auto object-contain"
                style={{ filter: "drop-shadow(0 2px 10px rgba(124,58,237,0.2))" }}
              />
            </div>
            <p className="text-[#6B7280] text-sm">
              AI automation, web development &amp; video editing for US businesses that want to scale on autopilot.
            </p>
            <a
              href="https://calendly.com/arfa1054/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg transition-colors text-sm font-semibold"
              style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Call</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#1A1523] mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-us" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors font-medium">
                  Book a Free Call ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1A1523] mb-4 font-semibold">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ai-chatbots" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services/ai-voice-agents" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link to="/services/crm-automation" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  CRM Automation
                </Link>
              </li>
              <li>
                <Link to="/services/n8n-workflows" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  n8n Workflows
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/video-editing" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  Video Editing &amp; Motion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-[#1A1523] mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="https://wa.me/923190485953" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#A78BFA]" />
                  +92 319 0485953
                </a>
              </li>
              <li>
                <a href="https://wa.me/923167001120" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#A78BFA]" />
                  +92 316 7001120
                </a>
              </li>
              <li>
                <a href="mailto:info@zroxz.com" className="flex items-center gap-2 text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#A78BFA]" />
                  info@zroxz.com
                </a>
              </li>
            </ul>

            <h4 className="text-[#1A1523] mb-3 font-semibold text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E8E0FF] flex items-center justify-center text-[#6B7280] hover:text-[#7C3AED] hover:border-[#A78BFA] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E8E0FF] flex items-center justify-center text-[#6B7280] hover:text-[#7C3AED] hover:border-[#A78BFA] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E8E0FF] flex items-center justify-center text-[#6B7280] hover:text-[#7C3AED] hover:border-[#A78BFA] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="mt-10 pt-6 border-t border-[#E8E0FF] text-center md:text-left">
          <p className="text-[#1A1523] text-xs font-semibold uppercase tracking-wider mb-3">Areas We Serve</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start text-sm">
            <Link to="/locations/usa" className="text-[#6B7280] hover:text-[#A78BFA] transition-colors font-medium">United States (USA)</Link>
            <span className="text-purple-300">·</span>
            <Link to="/locations/canada" className="text-[#6B7280] hover:text-[#A78BFA] transition-colors font-medium">Canada</Link>
            <span className="text-purple-300">·</span>
            <Link to="/locations/california" className="text-[#6B7280] hover:text-[#A78BFA] transition-colors font-medium">California</Link>
            <span className="text-purple-300">·</span>
            <Link to="/locations/texas" className="text-[#6B7280] hover:text-[#A78BFA] transition-colors font-medium">Texas</Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#E8E0FF]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-sm">
              © 2025 ZROXZ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#6B7280] hover:text-[#A78BFA] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
