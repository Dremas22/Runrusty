import BannerCarousel from "../components/BannerCarousel";

export default function Home() {
    return (
        <section className="min-h-screen pt-25 flex flex-col items-center justify-center px-6 py-16 bg-white text-gray-900">

            {/* 🚀 Banner Carousel */}
            <div></div>
            <BannerCarousel />

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mt-16 mb-8 tracking-wide text-center">
                Run Rusty
            </h1>

            {/* Brand Intro */}
            <div className="max-w-4xl text-center space-y-6">
                <p className="text-lg md:text-xl leading-relaxed">
                    <span className="font-semibold text-black">Run Rusty</span> is an urban fashion and lifestyle brand founded in 2018 by <span className="text-red-600 font-medium">Resego Serepa</span>.
                    Based in Rustenburg, North West, South Africa, the company specializes in customized clothing
                    that combines creativity, culture, and identity.
                </p>

                {/* What We Do */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-red-600 mt-10 mb-4">
                        What We Do
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-800">
                        We provide a wide range of apparel customization services, including high-quality
                        <span className="font-semibold text-black"> printing</span>, <span className="font-semibold text-black">embroidery</span>,
                        and professional branding solutions — crafted to match your unique style or brand identity.
                    </p>
                </div>

                {/* What Makes Us Different */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-red-600 mt-10 mb-4">
                        What Makes Us Different
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-800">
                        At Run Rusty, we believe clothing is more than just fabric — it’s a statement.
                        Every design reflects our passion for creativity and our dedication to delivering excellence.
                        Our goal is to empower confidence through high-quality, meaningful fashion.
                    </p>
                </div>
            </div>

            {/* Vision & Mission Section */}
            <div className="mt-16 max-w-6xl w-full flex flex-col gap-16">
                {/* Vision */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image */}
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex-shrink-0">
                        <img
                            src="/vision.jpeg"
                            alt="Vision"
                            className="w-full h-full object-cover rounded-xl shadow-md"
                        />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-red-600 mb-4">Vision</h2>
                        <p className="text-lg leading-relaxed">
                            To become South Africa’s leading urban fashion brand known for creativity,
                            quality, and cultural expression.
                        </p>
                    </div>
                </div>

                {/* Mission */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
                    {/* Image */}
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex-shrink-0">
                        <img
                            src="/mission.jpeg"
                            alt="Mission"
                            className="w-full h-full object-cover rounded-xl shadow-md"
                        />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-red-600 mb-4">Mission</h2>
                        <p className="text-lg leading-relaxed">
                            To empower individuals and businesses to express their identity through
                            unique, high-quality customized apparel and branding solutions —
                            promoting innovation, collaboration, and authenticity.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Quote */}
            <p className="mt-16 text-center text-gray-500 italic text-sm">
                “Run Rusty — Where Culture Meets Creativity.”
            </p>
        </section>
    );
}
