"use client";

import { GlowingEffect } from "./glowing-effect";
import { cn } from "./utils";
import { ReactNode } from "react";

interface GlowingCardProps {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
}

export function GlowingCard({ children, className, innerClassName }: GlowingCardProps) {
    return (
        <div className={cn("relative h-full rounded-2xl border border-white/10 p-1 md:p-1.5", className)}>
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />
            <div className={cn("relative h-full rounded-xl bg-black/50 overflow-hidden", innerClassName)}>
                {children}
            </div>
        </div>
    );
}
