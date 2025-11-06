export default function Contact() {
    return (
        <div className="px-6 py-16 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-red-600 mb-8">Contact Us</h1>
            <form className="flex flex-col space-y-4 w-full max-w-md">
                <input type="text" placeholder="Name" className="p-3 rounded border border-gray-600" />
                <input type="email" placeholder="Email" className="p-3 rounded border border-gray-600" />
                <textarea placeholder="Message" className="p-3 rounded border border-gray-600"></textarea>
                <button type="submit" className="bg-red-600 text-white p-3 rounded">Send Message</button>
            </form>
        </div>
    );
}
