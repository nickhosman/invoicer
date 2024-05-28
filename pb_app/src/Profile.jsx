export default function Profile() {
    const invoices = [
        {
          client: "John Doe",
          business: "ABC Company",
          items: [
            { name: "Product 1", price: 10, quantity: 2 },
            { name: "Product 2", price: 20, quantity: 1 },
            { name: "Product 3", price: 15, quantity: 3 }
          ],
        },
        {
          client: "Jane Smith",
          business: "XYZ Corporation",
          items: [
            { name: "Widget A", price: 25, quantity: 4 },
            { name: "Widget B", price: 30, quantity: 2 }
          ],
        },
        {
          client: "Michael Johnson",
          business: "LMN Ltd",
          items: [
            { name: "Service X", price: 50, quantity: 1 },
            { name: "Service Y", price: 35, quantity: 2 }
          ],
        },
        {
          client: "Emily Brown",
          business: "PQR Enterprises",
          items: [
            { name: "Accessory 1", price: 15, quantity: 3 },
            { name: "Accessory 2", price: 10, quantity: 5 }
          ],
        },
        {
          client: "David Wilson",
          business: "EFG Inc",
          items: [
            { name: "Gadget 1", price: 30, quantity: 2 },
            { name: "Gadget 2", price: 40, quantity: 1 },
            { name: "Gadget 3", price: 20, quantity: 4 }
          ],
        },
      ];

    function calculateTotal(items) {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <>
            {invoices.map((invoice) => (
                    <div className="flex flex-col items-center space-x-4">
                        <span>Bill to: {invoice.business}</span>
                        <span>Total: ${calculateTotal(invoice.items)}</span>
                    </div>
            ))}
        </>
    )
}
