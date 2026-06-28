import { Link, useLocation } from "react-router";
import { Calendar, X } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FileText, User, PhoneCall, BookOpen } from "lucide-react";

const LOGO = "https://i.postimg.cc/yxCJWVpw/Chat-GPT-Image-Jun-29-2026-02-14-414-AM.png";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Services", url: "/services", icon: Briefcase },
    { name: "Blog", url: "/blog", icon: BookOpen },
    { name: "Process", url: "/process", icon: FileText },
    { name: "About", url: "/about", icon: User },
    { name: "Book a Call", url: "/book-us", icon: PhoneCall },
  ];

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Top bar (logo left + CTA right + hamburger) ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ background: "transparent" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 pointer-events-auto">

            {/* Logo — image only */}
            <Link to="/" aria-label="ZROXZ home" className="flex-shrink-0 group">
              <img
                src={LOGO}
                alt="ZROXZ"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                style={{ filter: "drop-shadow(0 2px 10px rgba(124,58,237,0.3))" }}
              />
            </Link>

            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <motion.a
                href="https://calendly.com/arfa1054/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex relative items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden pointer-events-auto"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
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
                <span className="relative z-10">Book a Free Call</span>
              </motion.a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden pointer-events-auto flex flex-col justify-center items-center w-10 h-10 rounded-xl gap-[5px] group"
                aria-label="Open menu"
              >
                <motion.span
                  className="block w-6 h-[2px] rounded-full bg-gray-800 origin-center transition-all"
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block w-5 h-[2px] rounded-full bg-gray-800 transition-all"
                  animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                />
                <motion.span
                  className="block w-6 h-[2px] rounded-full bg-gray-800 origin-center transition-all"
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Desktop tubelight pill ── */}
      <NavBar items={navItems} className="hidden md:block" />

      {/* ── Mobile slide-in drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] md:hidden"
              style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] md:hidden w-[85vw] max-w-[340px] flex flex-col"
              style={{ background: "#ffffff", boxShadow: "-8px 0 40px rgba(124,58,237,0.12)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src={LOGO}
                    alt="ZROXZ"
                    className="h-9 w-auto object-contain"
                    style={{ filter: "drop-shadow(0 2px 8px rgba(124,58,237,0.25))" }}
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 pt-4 pb-2 flex-1 overflow-y-auto">
                {navItems.map((item, i) => {
                  const isActive = location.pathname === item.url ||
                    (item.url !== "/" && location.pathname.startsWith(item.url));
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045, duration: 0.28 }}
                    >
                      <Link
                        to={item.url}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 px-4 py-4 rounded-xl text-base font-semibold transition-all border-b border-gray-50 ${
                          isActive
                            ? "text-[#7C3AED] bg-[#F3EFFF]"
                            : "text-gray-800 hover:text-[#7C3AED] hover:bg-[#F3EFFF]/60"
                        }`}
                      >
                        <span
                          className="text-xs font-bold tabular-nums"
                          style={{ color: isActive ? "#A78BFA" : "#D1D5DB", minWidth: "18px" }}
                        >
                          0{i + 1}
                        </span>
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer CTA */}
              <div className="px-4 pb-8 pt-4 space-y-3">
                <motion.a
                  href="https://calendly.com/arfa1054/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white w-full py-4 rounded-xl font-semibold text-sm tracking-wide"
                  style={{ background: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Calendar className="w-4 h-4" />
                  BOOK A FREE CALL
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38 }}
                >
                  <Link
                    to="/book-us"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 rounded-xl border border-[#A78BFA]/40 text-[#7C3AED] text-sm font-medium hover:bg-[#F3EFFF] transition-colors"
                  >
                    Contact Form
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
