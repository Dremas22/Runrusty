"use client";

import { useState } from "react";

export default function Services() {
    const productImages = Array.from({ length: 16 }, (_, i) => `/pic${i + 1}.jpeg`);
    const [selectedImage, setSelectedImage] = useState(null);

    // Pair services with optional images (for illustration)
    const servicesList = [
        {
            title: "Customized Clothing",
            description:
                "We design and produce a wide range of apparel including t-shirts, hoodies, tracksuits, caps, and jackets — each available for personal, corporate, or event branding.",
            image: "/custom.jpeg",
        },
        {
            title: "Printing Services",
            description:
                "From screen printing to heat press and digital printing, our advanced printing techniques ensure vibrant colors and lasting quality for all clothing types.",
            image: "/printing.jpeg",
        },
        {
            title: "Embroidery",
            description:
                "Our professional embroidery services give your garments a polished and premium look — ideal for uniforms, sports teams, and corporate wear.",
            image: "/embroidery.jpeg",
        },
        {
            title: "Branding & Event Consultation",
            description:
                "We assist businesses and organizations in developing cohesive brand identities through apparel, merchandise, and event branding strategies.",
            image: "/event.jpeg",
        },
        {
            title: "Accessories",
            description:
                "Complement your look with our branded accessories such as tote bags, beanies, and caps — all customizable to your brand or personal style.",
            image: "/accessories.jpeg",
        },
        {
            title: "For Schools",
            description:
                "We offer matric jackets, T-shirts, sportswear, tracksuits, golfer T-shirts, hoodies, sweaters, corporate uniforms, beanies, caps, and hats — helping schools create a unified and stylish identity.",
            image: "/school.jpeg",
        },
    ];

    return (
        <section className="min-h-screen pt-25 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 flex flex-col items-center">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-12 text-center">
                    Our Services
                </h1>

                <div className="flex flex-col gap-16">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-1/2 h-[250px] md:h-[300px] flex-shrink-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => setSelectedImage(service.image)}
                                />
                            </div>

                            {/* Text */}
                            <div className="md:w-1/2">
                                <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal / Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl w-full">
                            <img
                                src={selectedImage}
                                alt="Enlarged product"
                                className="rounded-xl w-full h-auto max-h-[85vh] object-contain border border-white/10"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full px-3 py-1 text-sm font-semibold transition"
                            >
                                ✕ Close
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Note */}
            <div className="mt-16 text-center">
                <p className="text-gray-400 text-sm">
                    Designed by <span className="font-semibold text-white">Run Rusty</span> — where fashion meets identity.
                </p>
            </div>
        </section>
    );
}
