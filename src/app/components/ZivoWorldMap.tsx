"use client";

import { WorldMap } from "@/app/components/ui/map";

export function ZivoWorldMap() {
    return (
        <div className="py-16 sm:py-20 md:py-24 dark:bg-black bg-black w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
                        <span className="text-white">Global</span>{" "}
                        <span className="text-[#8B1538]">Reach</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Zivo Creative satisfied clients from all across the world
                    </p>
                </div>

                <WorldMap
                    lineColor="#8B1538"
                    dots={[
                        {
                            start: {
                                lat: 40.7128,
                                lng: -74.0060,
                                label: "New York"
                            },
                            end: {
                                lat: 51.5074,
                                lng: -0.1278,
                                label: "London"
                            },
                        },
                        {
                            start: {
                                lat: 51.5074,
                                lng: -0.1278,
                                label: "London"
                            },
                            end: {
                                lat: 25.2048,
                                lng: 53.2708,
                                label: "Dubai"
                            },
                        },
                        {
                            start: {
                                lat: 25.2048,
                                lng: 53.2708,
                                label: "Dubai"
                            },
                            end: {
                                lat: 35.6762,
                                lng: 139.6503,
                                label: "Tokyo"
                            },
                        },
                        {
                            start: {
                                lat: 35.6762,
                                lng: 139.6503,
                                label: "Tokyo"
                            },
                            end: {
                                lat: -33.8688,
                                lng: 151.2093,
                                label: "Sydney"
                            },
                        },
                        {
                            start: {
                                lat: 40.7128,
                                lng: -74.0060,
                                label: "New York"
                            },
                            end: {
                                lat: 34.0522,
                                lng: -118.2437,
                                label: "Los Angeles"
                            },
                        },
                        {
                            start: {
                                lat: 28.6139,
                                lng: 77.2090,
                                label: "New Delhi"
                            },
                            end: {
                                lat: 1.3521,
                                lng: 103.8198,
                                label: "Singapore"
                            },
                        },
                    ]}
                />
            </div>
        </div>
    );
}
