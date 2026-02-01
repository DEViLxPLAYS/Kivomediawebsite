"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface BookCallButtonProps {
    onClick?: () => void;
}

export function BookCallButton({ onClick }: BookCallButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#8B1538] text-white rounded-full overflow-hidden transition-all text-base sm:text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            {/* Animated background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6B1028] to-[#8B1538]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
            />

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                }}
            />

            {/* Icon with animation */}
            <motion.div
                className="relative z-10"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
            >
                <Calendar className="w-5 h-5" />
            </motion.div>

            {/* Text */}
            <span className="relative z-10">Book a Call</span>

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full">
                <span className="absolute inset-0 rounded-full bg-[#8B1538] opacity-75 animate-ping" style={{ animationDuration: "2s" }}></span>
            </span>
        </motion.button>
    );
}
