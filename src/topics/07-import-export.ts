import { Product, taxCalculations } from "./06-function-destructuring";
const shoppingCart: Product[] = [
  {
    description: "a",
    price: 1,
  },
  {
    description: "b",
    price: 2,
  },
];

const tax = 2.2;
const [total, totalTax] = taxCalculations({
  //tax: tax,
  tax,
  products: shoppingCart,
});

console.log("Total", total);
console.log("Tax", totalTax.toPrecision(3));
