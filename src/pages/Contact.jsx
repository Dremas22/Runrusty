export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const phone = form.get("phone");
        const message = form.get("message");

        const fullMessage = `Hello, my name is ${name}. My number is ${phone}. ${message}`;
        const encodedMessage = encodeURIComponent(fullMessage);

        const whatsappNumber = "27721441392";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
            "_blank"
        );
    };

    return (
        <section className="min-h-screen bg-gradient-to-b pt-25 from-black via-gray-900 to-black text-white px-6 py-16 flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4">
                    Contact Us
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Have a question, custom order, or collaboration idea? We’d love
                    to hear from you! Send us a WhatsApp message below.
                </p>
            </div>

            {/* WhatsApp Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-8 w-full max-w-lg flex flex-col space-y-5 hover:shadow-red-500/20 transition duration-300"
            >
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-300 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="p-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-600 outline-none transition"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-300 mb-1">
                        Cell Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Your WhatsApp number"
                        className="p-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-600 outline-none transition"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-300 mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        rows="5"
                        placeholder="Write your message here..."
                        className="p-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-600 outline-none transition resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-red-500/20 transition duration-300"
                >
                    Send via WhatsApp
                </button>
            </form>

            {/* Footer */}
            <div className="mt-12 text-center text-gray-400 text-sm">
                <p>
                    Prefer email? Reach us at{" "}
                    <a
                        href="mailto:info@runrusty.co.za"
                        className="text-red-500 hover:underline"
                    >
                        Werunrusty@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}
