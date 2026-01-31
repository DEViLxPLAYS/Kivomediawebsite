import { Link, useLocation } from "react-router";
import { MessageCircle, Home, Briefcase, FileText, User, Layers, Phone, Menu, X, Tag } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";
import { useState, useEffect } from "react";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Layers },
    { name: 'Work', url: '/work', icon: Briefcase },
    {
      name: 'Pricing',
      icon: Tag,
      dropdown: [
        { label: 'All-in-One Packages', url: '/pricing?category=all-in-one' },
        { label: 'Video Edit Packages', url: '/pricing?category=video-editing' },
        { label: 'Website Development', url: '/pricing?category=web-development' },
      ]
    },
    { name: 'Process', url: '/process', icon: FileText },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contact', url: '/contact', icon: Phone }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 pointer-events-auto">
            {/* Logo */}
            <Link to="/" className="block">
              <img
                src="https://i.postimg.cc/zGd03Gxt/Chat-GPT-Image-Jan-28-2026-02-41-08-PM.png"
                alt="Zivo Creative"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-4">
              {/* WhatsApp CTA (Desktop) */}
              <a
                href="https://wa.me/923398837213"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 py-3 rounded-full transition-colors pointer-events-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp Us</span>
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white hover:text-[#8B1538] transition-colors pointer-events-auto"
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <NavBar items={navItems} className="hidden md:block" />

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center pt-24 pb-8 px-6 space-y-8">
          <NavBar items={navItems} mobile />

          <a
            href="https://wa.me/923398837213"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-lg">WhatsApp Us</span>
          </a>
        </div>
      )}
    </>
  );
}
