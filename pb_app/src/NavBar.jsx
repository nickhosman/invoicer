import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        console.log("AAAAAAAAAAAAAAAAAAAA")
        console.log(pathname);
    }, [pathname]);

    return (
        <nav className="flex justify-between items-center h-16 bg-cyan-950 relative shadow-sm font-mono text-white" role="navigation">
            <Link to="/" className={pathname == "/" ? "p-8 underline font-bold" : "p-8"}>Home</Link>
            <Link to="/profile" className={pathname == "/profile" ? "p-8 underline font-bold" : "p-8"}>Profile</Link>
            <Link to="/invoice" className={pathname == "/invoice" ? "pl-8 underline font-bold" : "pl-8"}>Invoice</Link>
            <Link to="/invoice/create" className={pathname == "/invoice/create" ? "pl-8 underline font-bold" : "pl-8"}>Create Invoice</Link>
        </nav>
    )
}
