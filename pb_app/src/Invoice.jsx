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
