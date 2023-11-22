const products = [
    { name: "Shirt", price: 25 },
    { name: "Jeans", price: 40 },
    { name: "Socks", price: 8 },
    { name: "Hat", price: 20 }
];

const discountedPrices = products.map((product) => {
    return {
        name: product.name,
        discountedPrices: product.price * 0.9
    };
});

console.log(discountedPrices);