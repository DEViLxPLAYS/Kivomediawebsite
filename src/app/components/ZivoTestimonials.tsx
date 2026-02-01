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
        profession: "YouTube Creator • 850K Subscribers",
        rating: 5,
        description:
            "Zivo Creative completely transformed my channel's quality! Their video editing is next-level, and my engagement rates have skyrocketed. The turnaround time is incredible too!",
        avatarUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    },
    {
        id: "testimonial-2",
        name: "Sarah Martinez",
        profession: "Brand Manager • TechFlow",
        rating: 5,
        description:
            "Working with Zivo Creative has been a game-changer for our brand. Their attention to detail and creative approach to content creation exceeded all expectations. Highly recommend!",
        avatarUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    },
    {
        id: "testimonial-3",
        name: "Marcus Chen",
        profession: "Podcast Host • The Digital Hour",
        rating: 5,
        description:
            "Zivo Creative turned my raw podcast footage into professional, engaging content. Their editing skills are unmatched, and they truly understand what makes content perform!",
        avatarUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    },
    {
        id: "testimonial-4",
        name: "Emily Rodriguez",
        profession: "E-commerce Entrepreneur",
        rating: 5,
        description:
            "The website Zivo Creative built for me is stunning! The AI chatbot integration has increased our customer conversions by 40%. They're absolute professionals!",
        avatarUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
    },
]

export function ZivoTestimonials() {
    return (
        <section className="bg-black px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter mb-3 sm:mb-4">
                        <span className="text-white">What Clients</span>{" "}
                        <span className="text-[#8B1538]">Say</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Trusted by creators and brands worldwide
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
                                    className="border-[#8B1538]/20 bg-black/90"
                                >
                                    <div className="flex flex-col items-center space-y-4 text-center">
                                        <ReviewStars
                                            className="text-[#8B1538]"
                                            rating={testimonial.rating}
                                        />
                                        <div className="mx-auto w-4/5 text-base text-gray-300">
                                            <blockquote cite="#">{testimonial.description}</blockquote>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="!size-12 border-2 border-[#8B1538]/30">
                                            <AvatarImage
                                                src={testimonial.avatarUrl}
                                                alt={`Portrait of ${testimonial.name}`}
                                            />
                                            <AvatarFallback className="bg-[#8B1538]/20 text-white">
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <span className="block text-lg font-semibold tracking-tight text-white md:text-xl">
                                                {testimonial.name}
                                            </span>
                                            <span className="block text-sm text-gray-400">
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
