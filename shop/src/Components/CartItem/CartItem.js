import React from "react";
import "./CartItem.css";
const CartItem = () => {
  return (
    <div class="cart-item">
    <div class="cart-item__del"></div>
    <div class="cart-item__thumb">
      <img
        src="https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg"
        alt="Skuul"
      />
    </div>
    <div class="cart-item__details">
      <p class="title">Skuul</p>
      <p class="desc">
        Black T-Shirt with front print
      </p>
      <p class="desc">Quantity: 1</p>
    </div>
    <div class="cart-item__price">
      <p>$ 14.00</p>
      <button disabled="" class="change-product-button">-</button
      ><button class="change-product-button">+</button>
    </div>
  </div>
  );
};

export default CartItem;