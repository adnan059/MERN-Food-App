import React from "react";
import { useSelector } from "react-redux";
import classes from "./checkout.module.css";

const Checkout = () => {
  const { products } = useSelector((state) => state.cart);

  let totalPrice = 0;

  const newThing = products.map((product) => {
    totalPrice += product.quantity * product.price;
    console.log(totalPrice);
    return totalPrice;
  });

  console.log(newThing);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order is successful</h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
