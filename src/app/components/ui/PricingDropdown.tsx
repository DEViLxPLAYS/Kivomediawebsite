"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface DropdownItem {
    label: string;
    url: string;
}

interface PricingDropdownProps {
    items: DropdownItem[];
    className?: string;
}

export function PricingDropdown({ items, className }: PricingDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={cn("relative", className)} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-lg"
            >
                <span>Pricing</span>
                <ChevronDown
                    className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            {isOpen && (
                <div
                    className="absolute top-full left-0 mt-2 w-56 bg-[#111] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            to={item.url}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#8B1538]/20 hover:text-white transition-colors border-b border-white/5 last:border-b-0"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
