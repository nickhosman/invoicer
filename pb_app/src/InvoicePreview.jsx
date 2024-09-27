export default function InvoicePreview({ invoice }) {
    return (
        <div>
            <div>
                <span>{invoice.client}</span>
                <span>{invoice.business}</span>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-center">Invoice #{invoice.id}</h1>
                <span>{invoice.date}</span>
            </div>
        </div>
    )
};
