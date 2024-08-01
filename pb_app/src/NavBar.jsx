import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <nav className="flex justify-around items-center h-16 bg-cyan-950 relative shadow-sm font-mono text-white" role="navigation">
            <Link to="/" className={pathname == "/" ? "py-8 underline font-bold" : "py-8"}>Home</Link>
            <Link to="/profile" className={pathname == "/profile" ? "py-8 underline font-bold" : "py-8"}>Profile</Link>
            <Link to="/invoice" className={pathname == "/invoice" ? "py-8 underline font-bold" : "py-8"}>Invoice</Link>
            <Link to="/invoice/create" className={pathname == "/invoice/create" ? "py-8 underline font-bold" : "py-8"}>Create Invoice</Link>
        </nav>
    )
}
