
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface TimelineContentProps {
    children: React.ReactNode;
    as?: React.ElementType;
    animationNum?: number;
    timelineRef?: React.RefObject<HTMLElement>;
    customVariants?: any;
    className?: string;
}

export function TimelineContent({
    children,
    as: Component = "div",
    animationNum = 0,
    timelineRef,
    customVariants,
    className,
}: TimelineContentProps) {
    // Simple implementation that animates in
    return (
        <Component
            className={cn(className)}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={animationNum}
                variants={customVariants}
            >
                {children}
            </motion.div>
        </Component>
    );
}
