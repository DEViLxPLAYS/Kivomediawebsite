"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "Zivo Creative built a website for me which gets me leads and they make the best content and short form edits!",
        by: "Michael Chen, E-commerce CEO",
        imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 1,
        testimonial: "The website they built for my business is stunning and the AI chatbot has increased conversions by 40%!",
        by: "Sarah Johnson, Online Store Owner",
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 2,
        testimonial: "Their YouTube automation service saved me 100+ hours. The video editing quality is incredible!",
        by: "Alex Martinez, YouTuber",
        imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 3,
        testimonial: "Zivo Creative's short-form content edits boosted my engagement by 3x. They truly understand social media!",
        by: "Emily Rodriguez, Influencer",
        imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 4,
        testimonial: "Best decision I made for my podcast! Their editing makes my content look so professional.",
        by: "David Park, Podcast Host",
        imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 5,
        testimonial: "The turnaround time is unbelievable! Zivo Creative delivers quality work faster than anyone else.",
        by: "Lisa Thompson, Content Creator",
        imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 6,
        testimonial: "Their website development skills are top-notch. My site loads fast and looks amazing!",
        by: "James Wilson, Startup Founder",
        imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 7,
        testimonial: "Zivo Creative transformed my raw footage into viral-worthy content. Highly recommend!",
        by: "Nina Patel, Social Media Manager",
        imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 8,
        testimonial: "The best investment for my brand. Their creative vision is unmatched!",
        by: "Robert Kim, Brand Director",
        imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80"
    },
    {
        tempId: 9,
        testimonial: "Working with Zivo Creative has been a game-changer for my YouTube channel!",
        by: "Amanda Foster, YouTuber",
        imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-[#8B1538] text-white border-[#8B1538]"
                    : "z-0 bg-black/90 text-gray-300 border-white/10 hover:border-[#8B1538]/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px rgba(139, 21, 56, 0.3)" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className="absolute block origin-top-right rotate-45"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2,
                    backgroundColor: isCenter ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"
                }}
            />
            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-12 bg-muted object-cover object-top"
                style={{
                    boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.5)"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-white" : "text-gray-300"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-white/90" : "text-gray-400"
            )}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
                        <span className="text-white">What Clients</span>{" "}
                        <span className="text-[#8B1538]">Say</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Trusted by creators and brands worldwide
                    </p>
                </div>

                <div
                    className="relative w-full overflow-hidden bg-transparent"
                    style={{ height: 600 }}
                >
                    {testimonialsList.map((testimonial, index) => {
                        const position = testimonialsList.length % 2
                            ? index - (testimonialsList.length + 1) / 2
                            : index - testimonialsList.length / 2;
                        return (
                            <TestimonialCard
                                key={testimonial.tempId}
                                testimonial={testimonial}
                                handleMove={handleMove}
                                position={position}
                                cardSize={cardSize}
                            />
                        );
                    })}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                        <button
                            onClick={() => handleMove(-1)}
                            className={cn(
                                "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                                "bg-black border-2 border-white/20 hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538]",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] focus-visible:ring-offset-2"
                            )}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="text-white" />
                        </button>
                        <button
                            onClick={() => handleMove(1)}
                            className={cn(
                                "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                                "bg-black border-2 border-white/20 hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538]",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] focus-visible:ring-offset-2"
                            )}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
