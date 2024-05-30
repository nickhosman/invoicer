import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function InvoiceForm() {
    const { register, handleSubmit } = useForm();
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});

    function createInvoice(client, business, ...items) {
        return pb.collection("invoices").create({
            client,
            items,
            business,
        });
    }

    function createItem(quantity, description, price) {
        return pb.collection("items").create({
            quantity,
            description,
            price,
        });
    }

    function addItem(item) {
        setItems([...items, item]);
    }

    return (
        <>
            <div>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(createInvoice)}>
                <span>Invoice</span>
                <input className="border" type="text" placeholder="Client name" {...register("client")}/>
                <input className="border" type="text" placeholder="Business name" {...register("business")}/>
                <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(createItem)}>
                    <span>Items</span>
                    {items.map((item) => (
                        <div className="flex flex-row items-center space-x-4">
                            <span>{item.quantity} x</span>
                            <span>{item.description}</span>
                            <span>${item.price}</span>
                        </div>
                    ))}
                    <div className="flex flex-row items-center space-x-4">
                        <input className="border" type="number" min={1} placeholder="Quantity" {...register("quantity")}/>
                        <input className="border" type="text" placeholder="Description" {...register("description")}/>
                        <input className="border" type="number" min={0} step="any" placeholder="Price" {...register("price")}/>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded w-full py-1 px-3 hover:cursor-pointer">+</button>
                    </div>
                </form>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Create Invoice</button>
            </form>
            </div>
        </>
    )
}
