import InvoicePreview from "./InvoicePreview"

export default function MyInvoices({ invoices }) {
    return (
        <div>
            <span>My Invoices</span>
            <div>
                <button>
                    Create New Invoice
                </button>
            </div>
            <div>
                {invoices.map((invoice) => (
                    <InvoicePreview invoice={invoice} key={invoice.id}/>
                ))}
            </div>
        </div>
    )
};
