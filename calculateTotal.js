function calculateTotal(products = [], { discountPercentage, salesTax = 0.0825 } = {}) {
    let result = 0;
    for (let i = 0; i < products.length; i++) {
      const { priceInCents, quantity } = products[i];
      result += priceInCents * quantity;
    }
  
    if (discountPercentage) result *= 1 - discountPercentage;
    const res =  result * (1 + salesTax);
    const final = res/100
    const sum = final.toFixed(2)
    return sum
  }

  // Inputs
  const products = [
            {
            name: "Black Longline T-Shirt",
            priceInCents: 1500,
            size: "M",
            quantity: 2,
            },
            {
            name: "Light Wash Stretch Skinny Jeans",
            priceInCents: 6000,
            size: 32,
            quantity: 1,
            },
        ];

  const options = { discountPercentage: .1, salesTax: 0.0825 };
  
  // Function call
console.log(calculateTotal(products, options))

//Aditional iteration Practice
for(let p of products){
const size = p.size
console.log(size)
}
