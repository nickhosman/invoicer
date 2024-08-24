import { useState } from "react";

export default function CreateInvoice() {
    const [client, setClient] = useState("");
    const [business, setBusiness] = useState("");
    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    
    return (
        <div>
            <h1>Create Invoice</h1>
            <form>
                <input type="text" placeholder="Client name" />
                <input type="text" placeholder="Business name" />
                <div>
                    <h2>Items</h2>
                    <input type="number" placeholder="Quantity" />
                    <input type="text" placeholder="Description" />
                    <input type="number" placeholder="Price" />
                    <button>Add Item</button>
                </div>
                <button>Create Invoice</button>
            </form>
        </div>
    )
}
