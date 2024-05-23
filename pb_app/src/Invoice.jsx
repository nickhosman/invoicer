import { useForm } from "react-hook-form";

export default function Invoice() {
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
            <form>
                <input type="text" placeholder="Client name"/>
                <input type="text" placeholder="Business name"/>
            </form>
        </>
    )
}
