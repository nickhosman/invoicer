export default function InvoiceFile() {
    return (
        <>
            <div className="flex space-x-4 items-center p-2">
                <span>[Date]</span>
                <h1 className="text-2xl font-bold text-center">Invoice #</h1>
            </div>

            <div className="grid grid-cols-6 gap-4">
                <p className="">Quantity</p>
                <p className="col-span-3">Description</p>
                <p>Unit Price</p>
                <p>Total</p>
            </div>
        </>
    )
}
