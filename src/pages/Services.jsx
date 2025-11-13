import { useState } from "react";

export default function Services() {
    // Array of image paths (1–17)
    const productImages = Array.from({ length: 16 }, (_, i) => `/pic${i + 1}.jpeg`);

    // State for modal
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 flex flex-col items-center">
            {/* Header Section */}
            <div className="max-w-3xl text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4">
                    Our Services
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                    At <span className="font-semibold text-white">Run Rusty</span>, we
                    combine creativity, culture, and craftsmanship to deliver apparel and
                    branding solutions that make a statement. Here’s what we offer:
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {/* Customized Clothing */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/10 transition duration-300">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">
                        Customized Clothing
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We design and produce a wide range of apparel including t-shirts,
                        hoodies, tracksuits, caps, and jackets — each available for personal,
                        corporate, or event branding.
                    </p>
                </div>

                {/* Printing Services */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/10 transition duration-300">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">
                        Printing Services
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        From screen printing to heat press and digital printing, our advanced
                        printing techniques ensure vibrant colors and lasting quality for all
                        clothing types.
                    </p>
                </div>

                {/* Embroidery */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/10 transition duration-300">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">Embroidery</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our professional embroidery services give your garments a polished and
                        premium look — ideal for uniforms, sports teams, and corporate wear.
                    </p>
                </div>

                {/* Branding & Event Consultation */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/10 transition duration-300">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">
                        Branding & Event Consultation
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We assist businesses and organizations in developing cohesive brand
                        identities through apparel, merchandise, and event branding strategies.
                    </p>
                </div>

                {/* Accessories */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/10 transition duration-300">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">Accessories</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Complement your look with our branded accessories such as tote bags,
                        beanies, and caps — all customizable to your brand or personal style.
                    </p>
                </div>

                {/* For Schools */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/10 transition duration-300">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">For Schools</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We offer matric jackets, T-shirts, sportswear, tracksuits, golfer
                        T-shirts, hoodies, sweaters, corporate uniforms, beanies, caps, and
                        hats — helping schools create a unified and stylish identity.
                    </p>
                </div>
            </div>

            {/* Product Gallery Section */}
            <div className="mt-20 w-full max-w-6xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-8">
                    Product Gallery
                </h2>
                <p className="text-center text-gray-400 mb-10">
                    Take a look at some of the apparel and branding work we’ve created for our clients.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productImages.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:scale-105 hover:bg-white/10 transition-transform duration-300 shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Product ${index + 1}`}
                                className="w-full h-52 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal / Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4 animate-fadeIn"
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

            {/* Footer Note */}
            <div className="mt-16 text-center">
                <p className="text-gray-400 text-sm">
                    Designed by <span className="font-semibold text-white">Run Rusty</span> — where fashion meets identity.
                </p>
            </div>
        </section>
    );
}
