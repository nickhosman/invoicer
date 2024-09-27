import { useState } from "react";
import InvoicePreview from "./InvoicePreview"

export default function MyInvoices({ invoices }) {
    const [ creating, setCreating ] = useState(false);

    return (
        <div>
            <span>My Invoices</span>
            <div>
                {creating ?
                    <button>
                        Create New Invoice
                    </button>
                : null}
            </div>
            <div>
                {invoices.map((invoice) => (
                    <InvoicePreview invoice={invoice} key={invoice.id}/>
                ))}
            </div>
        </div>
    )
};
