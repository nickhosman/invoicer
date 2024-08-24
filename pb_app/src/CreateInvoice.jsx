export default function CreateInvoice() {
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
            <div>
                <h2>Preview</h2>
                <div>
                    <p>Client:</p>
                    <p>Business:</p>
                </div>
                <div>
                    <p>Quantity</p>
                    <p>Description</p>
                    <p>Unit Price</p>
                    <p>Total</p>
                </div>
                <div>
                    <p>2</p>
                    <p>Product 1</p>
                    <p>$10</p>
                    <p>$20</p>
                </div>
                <div>
                    <p>1</p>
                    <p>Product 2</p>
                    <p>$20</p>
                    <p>$20</p>
                </div>
                <div>
                    <p>3</p>
                    <p>Product 3</p>
                    <p>$15</p>
                    <p>$45</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>$85</p>
                </div>
            </div>
        </div>
    )
}
