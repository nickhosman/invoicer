import { useForm } from "react-hook-form";

export default function Invoice() {
    const { register, handleSubmit } = useForm();

    function createInvoice(id, client, business, ...items) {
        return pb.collection("invoices").create({
            client,
            items,
            business,
        });
    }

    function createItem(name, price) {
        return pb.collection("items").create({
            name,
            price,
        });
    }

    return (
        <>
            <h1>Invoice</h1>
            <form onSubmit={handleSubmit(createInvoice)}>
                <input type="text" placeholder="Client name" {...register("client")}/>
                <input type="text" placeholder="Business name" {...register("business")}/>
                <button type="submit">Generate</button>
            </form>

            <h2>Items</h2>
            <form onSubmit={handleSubmit(createItem)}>
                <input type="text" placeholder="Item name" {...register("name")}/>
                <input type="number" placeholder="Price" {...register("price")}/>
                <button type="submit">Add item</button>
            </form>
        </>
    )
}
