import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import pb from "./lib/pocketbase";

export default function InvoiceForm() {
    const { register, handleSubmit } = useForm();
    const [itemFields, setItemFields] = useState([0]);
    const [item, setItem] = useState({});
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [dummy, setDummy] = useState(0);

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
        setDummy(itemFields.length);
    }, [itemFields]);

    return (
        <>
            <div>
            <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit(createInvoice)}>
                <span>Invoice</span>
                <input className="border" type="text" placeholder="Client name" {...register("client")}/>
                <input className="border" type="text" placeholder="Business name" {...register("business")}/>
                <div className="flex flex-col items-center gap-2">
                    <span>Items</span>
                    <div className="flex flex-col items-center space-x-4">
                        {itemFields.map((field) => (
                            <div className="flex flex-row items-center space-x-4">
                                <input className="border" type="number" min={1} placeholder="Quantity" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} required />
                                <input className="border" type="text" placeholder="Description" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} required />
                                <input className="border" type="number" min={0} step="any" placeholder="Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
                            </div>
                        ))}
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded w-full py-1 px-3 hover:cursor-pointer" type="button" onClick={(e) => {
                            e.preventDefault();
                            setItemFields([...itemFields, 0]);
                        }}>+</button>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Create Invoice</button>
            </form>
            </div>
        </>
    )
}
