import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center h-16 bg-cyan-950 text-black relative shadow-sm font-mono text-white" role="navigation">
            <Link to="/" className="pl-8">Home</Link>
            <Link to="/profile" className="p-4">Profile</Link>
            <Link to="/invoice" className="p-4">Invoice</Link>
            <Link to="/invoice/create" className="p-4">Create Invoice</Link>
        </nav>
    )
}
