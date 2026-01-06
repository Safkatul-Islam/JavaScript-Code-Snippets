const product = "MacBook Pro";
const price = 2000;
const quantity = 3;
const currency = "$";

const checkoutMessage = `You have ${quantity} items in your cart.
product: ${product}
Total: ${currency}${price * quantity}`;

const bonus = `
----------------------------------
Since your total is ${
  price * quantity > 5000
    ? "over 5000 you get (FREE SHIPPING!)"
    : "less than 5000 you have (SHIPPING: $50)"
}`;
console.log(checkoutMessage, bonus);
