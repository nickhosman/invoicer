export default function InvoiceFile() {
    const invoice = {
          client: "John Doe",
          business: "ABC Company",
          items: [
            { name: "Product 1", price: 10, quantity: 2 },
            { name: "Product 2", price: 20, quantity: 1 },
            { name: "Product 3", price: 15, quantity: 3 }
          ],
        }

    function calculateTotal(items) {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <>
            <div className="flex space-x-4 p-2">
                <span>[Date]</span>
                <h1 className="text-2xl font-bold text-center">Invoice #</h1>
            </div>

            <div className="grid grid-rows-6 gap-4">
                <div className="grid grid-cols-6">
                    <p>Quantity</p>
                    <p className="col-span-3">Description</p>
                    <p>Unit Price</p>
                    <p>Total</p>
                </div>

                {invoice.items.map((item) => (
                    <div className="grid grid-cols-6 justify-center">
                        <p className="w-full">{item.quantity}</p>
                        <p className="col-span-3">{item.name}</p>
                        <p>${item.price}</p>
                        <p>${item.price * item.quantity}</p>
                    </div>
                ))}

                <div className="grid grid-cols-6">
                    <div></div>
                    <p className="col-span-3 font-bold justify-self-end">Total</p>
                    <div></div>
                    <p>${calculateTotal(invoice.items)}</p>
                </div>
            </div>
        </>
    )
}
