"use client";

import { useEffect, useState, useRef } from "react";

export default function BannerCarousel() {
    const images = ["/pic2.jpeg", "/pic12.jpeg"];
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    // Auto-slide every 7 seconds
    useEffect(() => {
        timeoutRef.current = setTimeout(nextSlide, 7000);
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    return (
        <div className="w-full h-[45vh] md:h-[60vh] overflow-hidden relative">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="min-w-full h-[45vh] md:h-[60vh] bg-cover bg-center"
                        style={{ backgroundImage: `url(${src})` }}
                    ></div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition"
            >
                &#10094;
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition"
            >
                &#10095;
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition ${current === index ? "bg-red-600" : "bg-white/40"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
