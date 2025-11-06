import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-rustyRed p-4 flex justify-between items-center">
            <h1 className="text-white font-bold text-xl">Run Rusty</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:text-black">Home</Link>
                <Link to="/services" className="hover:text-black">Services</Link>
                <Link to="/contact" className="hover:text-black">Contact</Link>
            </div>
        </nav>
    );
}
