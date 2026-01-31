"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router"
import { LucideIcon } from "lucide-react"
import { cn } from "./utils"

interface NavItem {
    name: string
    url?: string
    icon: LucideIcon
    dropdown?: { label: string; url: string }[]
}

interface NavBarProps {
    items: NavItem[]
    className?: string
    mobile?: boolean
}

export function NavBar({ items, className, mobile = false }: NavBarProps) {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState("")

    useEffect(() => {
        // Special handling for pricing since it's a dropdown
        if (location.pathname.startsWith('/pricing')) {
            setActiveTab('Pricing')
            return
        }

        // Set active tab based on current path
        const currentItem = items.find(item => {
            if (!item.url) return false
            if (item.url === "/") return location.pathname === "/"
            return location.pathname.startsWith(item.url)
        })
        if (currentItem) {
            setActiveTab(currentItem.name)
        }
    }, [location.pathname, items])



    return (
        <div
            className={cn(
                mobile
                    ? "flex flex-col gap-2 w-full"
                    : "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
                className,
            )}
        >
            <div className={cn(
                "flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
                mobile && "flex-col w-full rounded-xl p-2 bg-transparent border-none backdrop-blur-none"
            )}>
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = item.url ? activeTab === item.name : false

                    // If item has dropdown, render dropdown menu
                    if (item.dropdown && !mobile) {
                        return (
                            <div key={item.name} className="relative group">
                                <button
                                    className={cn(
                                        "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                        "text-white/80 hover:text-[#8B1538] flex items-center gap-1",
                                        isActive && "bg-white/10 text-[#8B1538]",
                                    )}
                                >
                                    <span>{item.name}</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute top-full left-0 mt-2 w-56 bg-[#111] border border-white/10 rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    {item.dropdown.map((dropdownItem, idx) => (
                                        <Link
                                            key={idx}
                                            to={dropdownItem.url}
                                            className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#8B1538]/20 hover:text-white transition-colors border-b border-white/5 last:border-b-0"
                                        >
                                            {dropdownItem.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    }

                    // Mobile dropdown rendering
                    if (item.dropdown && mobile) {
                        return (
                            <div key={item.name} className="w-full">
                                <div className="flex items-center gap-3 px-4 py-3 w-full text-base text-white/80 font-semibold">
                                    <Icon size={18} strokeWidth={2.5} />
                                    <span>{item.name}</span>
                                </div>
                                <div className="pl-8 space-y-1">
                                    {item.dropdown.map((dropdownItem, idx) => (
                                        <Link
                                            key={idx}
                                            to={dropdownItem.url}
                                            className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {dropdownItem.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    }

                    // Regular nav item rendering
                    return (
                        <Link
                            key={item.name}
                            to={item.url!}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                "text-white/80 hover:text-[#8B1538]",
                                mobile && "flex items-center gap-3 px-4 py-3 w-full text-base",
                                isActive && "bg-white/10 text-[#8B1538]",
                            )}
                        >
                            <span className={cn("hidden md:inline", mobile && "inline")}>{item.name}</span>
                            <span className={cn("md:hidden", mobile && "hidden")}>
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {mobile && (
                                <Icon size={18} strokeWidth={2.5} />
                            )}
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-[#8B1538]/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    {!mobile && (
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#8B1538] rounded-t-full">
                                            <div className="absolute w-12 h-6 bg-[#8B1538]/20 rounded-full blur-md -top-2 -left-2" />
                                            <div className="absolute w-8 h-6 bg-[#8B1538]/20 rounded-full blur-md -top-1" />
                                            <div className="absolute w-4 h-4 bg-[#8B1538]/20 rounded-full blur-sm top-0 left-2" />
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
