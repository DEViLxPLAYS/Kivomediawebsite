import { Link } from "react-router";
import { MessageCircle, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="block">
              <img
                src="https://i.postimg.cc/pLr46KX7/Chat-GPT-Image-Jan-24-2026-11-38-27-PM.png"
                alt="KIVO MEDIA"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Premium video editing for creators, brands, and agencies that
              scale.
            </p>
            <a
              href="https://wa.me/923398837213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 py-3 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">YouTube Editing</li>
              <li className="text-gray-400 text-sm">Short-Form Content</li>
              <li className="text-gray-400 text-sm">Brand & Ads</li>
              <li className="text-gray-400 text-sm">Podcast Editing</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kivo Media. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
