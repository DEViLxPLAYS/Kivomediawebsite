import { Link } from "react-router";
import { MessageCircle, Instagram, Twitter, Youtube, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="block">
              <img
                src="https://i.postimg.cc/zGd03Gxt/Chat-GPT-Image-Jan-28-2026-02-41-08-PM.png"
                alt="Zivo Creative"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
                style={{ aspectRatio: "1 / 1" }}
              />
            </div>
            <p className="text-gray-400 text-sm">
              Video editing, content creation & web development for creators, brands, and agencies that scale.
            </p>
            <a
              href="https://wa.me/923190485953"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-5 py-2.5 rounded-full transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">YouTube Editing</li>
              <li className="text-gray-400 text-sm">Short-Form Content</li>
              <li className="text-gray-400 text-sm">Brand & Ads</li>
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">YouTube Automation</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="https://wa.me/923190485953" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#8B1538]" />
                  +92 319 0485953
                </a>
              </li>
              <li>
                <a href="https://wa.me/923167001120" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#8B1538]" />
                  +92 316 7001120
                </a>
              </li>
              <li className="text-gray-400 text-sm">info@zivocreative.com</li>
            </ul>

            <h4 className="text-white mb-3 font-semibold text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zivo Creative. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
