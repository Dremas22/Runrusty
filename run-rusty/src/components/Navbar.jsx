import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black border-b border-red-600">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img
                            src="/runrustyLogo.png"
                            alt="Run Rusty Logo"
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Links (no Home) */}
                <div className="hidden md:flex space-x-6 text-red-600 font-semibold">
                    <Link to="/services" className="text-red">
                        Services
                    </Link>
                    <Link to="/contact" className="text-red">
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
                <div className="md:hidden bg-black text-red-600 font-semibold px-6 py-4 space-y-4">
                    {/* Home only in mobile */}
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
