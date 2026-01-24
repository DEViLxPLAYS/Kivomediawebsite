import { Link, useLocation } from "react-router";
import { MessageCircle, Home, Briefcase, FileText, User, Layers, Phone } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Layers },
    { name: 'Work', url: '/work', icon: Briefcase },
    { name: 'Process', url: '/process', icon: FileText },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-28 pointer-events-auto">
            {/* Logo */}
            <Link to="/" className="block">
              <img
                src="https://i.postimg.cc/pLr46KX7/Chat-GPT-Image-Jan-24-2026-11-38-27-PM.png"
                alt="KIVO MEDIA"
                className="h-24 w-auto object-contain"
              />
            </Link>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 py-3 rounded-full transition-colors pointer-events-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </nav>

      <NavBar items={navItems} />
    </>
  );
}
