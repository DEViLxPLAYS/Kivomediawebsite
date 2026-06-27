import { Link, useLocation } from "react-router";
import { MessageCircle, Home, FileText, User, Phone, Menu, X, Calendar } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Track scroll for nav background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Process', url: '/process', icon: FileText },
    { name: 'About', url: '/about', icon: User },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 pointer-events-none transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 pointer-events-auto">
            {/* Logo */}
            <Link to="/" className="block flex-shrink-0">
              <img
                src="https://i.postimg.cc/zGd03Gxt/Chat-GPT-Image-Jan-28-2026-02-41-08-PM.png"
                alt="Zivo Creative"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                style={{ aspectRatio: "1 / 1" }}
              />
            </Link>

            <div className="flex items-center gap-3">
              {/* Get Started CTA (Desktop) */}
              <motion.a
                href="https://calendly.com/creativezivo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex relative items-center gap-2 bg-[#8B1538] text-white px-5 py-2.5 rounded-full text-sm font-semibold overflow-hidden pointer-events-auto"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                />
                <Calendar className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Get Started</span>
              </motion.a>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-white hover:text-[#8B1538] transition-colors pointer-events-auto"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navbar (tubelight) */}
      <NavBar items={navItems} className="hidden md:block" />

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-black/97 backdrop-blur-xl md:hidden flex flex-col items-center justify-center pt-24 pb-8 px-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <NavBar items={navItems} mobile />

          <div className="w-full max-w-xs space-y-3 pt-4">
            <a
              href="https://calendly.com/creativezivo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-4 rounded-full transition-colors w-full font-semibold"
            >
              <Calendar className="w-5 h-5" />
              <span>Get Started — Book a Call</span>
            </a>

            <a
              href="https://wa.me/923190485953"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full transition-colors hover:border-white/40 w-full"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
