import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import pb from "./lib/pocketbase";

export default function InvoiceForm() {
    const { register, handleSubmit } = useForm();
    const [ items, setItems ] = useState([]);
    const [item, setItem] = useState({});
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [itemError, setItemError] = useState("");
    const [disabled, setDisabled] = useState(false);

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

    useEffect(() => {
        if (itemQuantity <= 0 || itemPrice <= 0 || itemDescription.trim() === "") {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }), [itemQuantity, itemPrice, itemDescription];

    return (
        <>
            <div>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(createInvoice)}>
                <span>Invoice</span>
                <input className="border" type="text" placeholder="Client name" {...register("client")}/>
                <input className="border" type="text" placeholder="Business name" {...register("business")}/>
                <div className="flex flex-col items-center gap-2">
                    <span>Items</span>
                    {items.map((item) => (
                        <div className="flex flex-row items-center space-x-4">
                            <span>{item.quantity}</span>
                            <span>x</span>
                            <span>{item.description}</span>
                            <span>@</span>
                            <span>${item.price}</span>
                            <button className="g-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded py-1 px-3 hover:cursor-pointer" onClick={(e) => {
                                e.preventDefault();
                                setItems(items.filter((i) => i !== item));
                            }}>x</button>
                        </div>
                    ))}
                    {itemError && <span className="text-red-500">{itemError}</span>}
                    <div className="flex flex-row items-center space-x-4">
                        <div className="flex flex-row items-center space-x-4">
                            <input className="border" type="number" min={1} placeholder="Quantity" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} required />
                            <input className="border" type="text" placeholder="Description" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} required />
                            <input className="border" type="number" min={0} step="any" placeholder="Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
                        </div>
                        <button className={!disabled ? "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded w-full py-1 px-3 hover:cursor-pointer" : "bg-blue-500 text-white font-semibold py-1 px-3 opacity-50 cursor-not-allowed rounded w-full"} type="button" disabled={disabled} onClick={(e) => {
                            e.preventDefault();
                            if (itemQuantity <= 0 || itemPrice <= 0 || itemDescription.trim() === "") {
                                setItemError("Invalid item");
                            } else {
                                setItemError("");
                                setItems([...items, { quantity: itemQuantity, description: itemDescription, price: itemPrice }]);
                                setItemQuantity(0);
                                setItemDescription("");
                                setItemPrice(0);
                            }
                        }}>+</button>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Create Invoice</button>
            </form>
            </div>
        </>
    )
}
