export default function HeroSection() {
    return (
        <section className="bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-center">
            <div className="bg-black bg-opacity-60 p-8 rounded">
                <h1 className="text-5xl font-bold text-rustyRed mb-4">Run Rusty</h1>
                <p className="text-lg max-w-2xl">
                    Urban fashion. Local roots. Global energy.
                    Designed in Rustenburg, made for creators everywhere.
                </p>
            </div>
        </section>
    );
}
