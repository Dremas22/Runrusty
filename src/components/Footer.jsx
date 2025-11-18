import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white p-6 border-t border-red-600 text-center flex flex-col items-center gap-2">
            <p>© 2025 Run Rusty</p>
            <div className="flex gap-4 mt-2">
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-400 transition"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-400 transition"
                    aria-label="Facebook"
                >
                    <FaFacebook size={24} />
                </a>
            </div>
        </footer>
    );
}
