import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
        <div className="bg-cyan-950 relative flex md:h-[32rem] w-full justify-center items-center">
                <img className="absolute object-cover w-full h-full md:bottom-0 brightness-50" draggable={false} src="https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3VtZW50c3xlbnwwfHwwfHx8MA%3D%3D" alt="a calculator and other tools on a desk" />
                <div className="absolute flex flex-col gap-4">
                    <h1 className="text-white text-4xl font-bold text-center">Welcome to the Invoice App</h1>
                    <p className="text-white text-lg text-center">Create and manage invoices with ease</p>
                    <Link className="p-4 bg-blue-950 text-white self-center rounded-lg cursor-pointer w-40 font-bold flex items-center justify-center select-none" to="/invoice/create">Get Started</Link>
                </div>
            </div>
            <div className="h-96 w-full bg-slate-700">
            </div>
        </div>
    )
}
