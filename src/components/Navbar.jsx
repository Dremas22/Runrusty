import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black h-[11vh] border-b border-red-600 w-full fixed top-0 left-0 z-50">
            <div className="w-full flex justify-between items-center px-6 md:px-8 lg:px-10 h-16">
                {/* Logo */}
                <div className="lg:pl-10">
                    <Link to="/">
                        <img
                            src="/runrustyLogo.png"
                            alt="Run Rusty Logo"
                            className="h-10 w-auto pt-2 scale-150 md:scale-180 lg:scale-250"
                        />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 text-red-600 font-bold text-xl">
                    <Link to="/services" className="hover:text-red-400 transition">
                        Services
                    </Link>
                    <Link to="/contact" className="hover:text-red-400 transition">
                        Contact
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-red-600 focus:outline-none"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black text-red-600 font-semibold px-6 py-4 space-y-4 w-full absolute top-16 left-0 z-50">
                    <Link
                        to="/"
                        className="block hover:text-red-500"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className="block hover:text-red-500"
                        onClick={toggleMenu}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="block hover:text-red-500"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
