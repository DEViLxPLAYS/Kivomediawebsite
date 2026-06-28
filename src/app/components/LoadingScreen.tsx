import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://i.postimg.cc/yxCJWVpw/Chat-GPT-Image-Jun-29-2026-02-14-414-AM.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    let frame: number;
    let start: number | null = null;
    const duration = 1800; // ms

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));
      if (pct < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        // Short pause at 100% then fade out
        setTimeout(() => setVisible(false), 300);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#ffffff" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Subtle background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(167,139,250,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6 select-none">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <img
                src={LOGO_URL}
                alt="ZROXZ"
                className="w-24 h-24 object-contain rounded-2xl"
                style={{
                  filter: "drop-shadow(0 8px 24px rgba(124,58,237,0.18))",
                }}
              />
            </motion.div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-1"
            >
              <span
                className="text-2xl font-black tracking-widest"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 60%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.15em",
                }}
              >
                ZROXZ
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                AI · Web · Video
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-56 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)",
                    width: `${progress}%`,
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <span className="text-xs text-gray-400 tabular-nums">
                {progress}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
