const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        let price = parseFloat(item.price);

        if (typeof item.name !== "string" || isNaN(price)) {
            console.log("Invalid item or price.");
            return;
        }

        item.price = price; 
        this.items.push(item);
        this.total += price;
        console.log(`Added item: ${item.name} - $${price.toFixed(2)}`);
    },

    getTotal() {
        return `Total: $${this.total.toFixed(2)}`;
    }
};


checkout.addItem({ name: "Coffee Maker", price: "99.95" }); 
checkout.addItem({ name: "Milk", price: 3.50 });             

console.log(checkout.getTotal()); 
