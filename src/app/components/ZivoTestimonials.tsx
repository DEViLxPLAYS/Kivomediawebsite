"use client"

import * as React from "react"
import {
    CardTransformed,
    CardsContainer,
    ContainerScroll,
    ReviewStars,
} from "@/app/components/ui/animated-cards-stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"

const TESTIMONIALS = [
    {
        id: "testimonial-1",
        name: "Alex Johnson",
        profession: "E-Commerce Owner • USA",
        rating: 5,
        description:
            "ZROXZ built us an AI voice agent that handles 80+ calls daily. We went from missing leads after hours to closing them automatically. Absolute game-changer.",
        avatarUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    },
    {
        id: "testimonial-2",
        name: "Sarah Martinez",
        profession: "Brand Manager • TechFlow",
        rating: 5,
        description:
            "Working with ZROXZ has been a game-changer for our brand. Their AI automation and web development exceeded all expectations. Highly recommend!",
        avatarUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    },
    {
        id: "testimonial-3",
        name: "Marcus Chen",
        profession: "SaaS Founder • San Francisco",
        rating: 5,
        description:
            "ZROXZ set up our n8n + GoHighLevel workflows in days. Our lead response time dropped by 40% and we never miss a follow-up. Worth every penny.",
        avatarUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    },
    {
        id: "testimonial-4",
        name: "Emily Rodriguez",
        profession: "E-commerce Entrepreneur",
        rating: 5,
        description:
            "The website ZROXZ built for me is stunning! Sub-2 second load times and the AI chatbot integration has increased our conversions by 40%. Absolute professionals!",
        avatarUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
    },
]

export function ZivoTestimonials() {
    return (
        <section className="bg-[#F9F7FF] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter mb-3 sm:mb-4">
                        <span className="text-[#1A1523]">What Clients</span>{" "}
                        <span className="text-[#A78BFA]">Say</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6B7280] max-w-2xl mx-auto px-4">
                        Trusted by businesses and creators worldwide
                    </p>
                </div>

                <ContainerScroll className="container h-[100vh] overflow-x-hidden">
                    <div className="sticky left-0 top-0 h-svh w-full py-8 sm:py-12 flex items-center justify-center overflow-hidden">
                        <CardsContainer className="mx-auto h-[380px] w-[300px] sm:h-[420px] sm:w-[340px] md:h-[450px] md:w-[350px] max-w-full">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <CardTransformed
                                    arrayLength={TESTIMONIALS.length}
                                    key={testimonial.id}
                                    variant="dark"
                                    index={index + 2}
                                    role="article"
                                    aria-labelledby={`card-${testimonial.id}-title`}
                                    aria-describedby={`card-${testimonial.id}-content`}
                                    className="border-[#A78BFA]/20 bg-white/95"
                                >
                                    <div className="flex flex-col items-center space-y-4 text-center">
                                        <ReviewStars
                                            className="text-[#A78BFA]"
                                            rating={testimonial.rating}
                                        />
                                        <div className="mx-auto w-4/5 text-base text-[#6B7280]">
                                            <blockquote cite="#">{testimonial.description}</blockquote>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="!size-12 border-2 border-[#A78BFA]/30">
                                            <AvatarImage
                                                src={testimonial.avatarUrl}
                                                alt={`Portrait of ${testimonial.name}`}
                                            />
                                            <AvatarFallback className="bg-[#A78BFA]/20 text-[#7C3AED]">
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <span className="block text-lg font-semibold tracking-tight text-[#1A1523] md:text-xl">
                                                {testimonial.name}
                                            </span>
                                            <span className="block text-sm text-[#6B7280]">
                                                {testimonial.profession}
                                            </span>
                                        </div>
                                    </div>
                                </CardTransformed>
                            ))}
                        </CardsContainer>
                    </div>
                </ContainerScroll>
            </div>
        </section>
    )
}
