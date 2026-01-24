import { Link, useLocation } from "react-router";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/work", label: "Work" },
    { path: "/process", label: "Process" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="block">
            <img
              src="https://i.postimg.cc/pLr46KX7/Chat-GPT-Image-Jan-24-2026-11-38-27-PM.png"
              alt="KIVO MEDIA"
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${isActive(link.path)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 py-3 rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">WhatsApp Us</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm transition-colors ${isActive(link.path)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-6 py-3 rounded-full transition-colors w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
