export default function Home() {
    return (
        <div className="bg-cyan-950 relative md:h-[32rem] w-full justify-center">
            <img className="absolute object-cover w-full h-full md:bottom-0 brightness-50" draggable={false} src="https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3VtZW50c3xlbnwwfHwwfHx8MA%3D%3D" alt="a calculator and other tools on a desk" />
            <div className="absolute">
                <h1 className="text-white text-4xl font-bold text-center">Welcome to the Invoice App</h1>
                <p className="text-white text-lg text-center">Create and manage invoices with ease</p>
                <span>Really need to figure out the spacing here.</span>
            </div>
        </div>
    )
}
