import React from "react";
import "./CartItem.css";
const CartItem = ({title,count,price,currencyFormat,img,id,removeFromCart}) => {
  return (
    <div class="cart-item">
    <div onClick={()=>removeFromCart(id)} class="cart-item__del"></div>
    <div class="cart-item__thumb">
      <img
        src={img}
        alt="Skuul"
      />
    </div>
    <div class="cart-item__details">
      <p class="title">{title}</p>
      <p class="desc">
        Black T-Shirt with front print
      </p>
      <p class="desc">Quantity: {count}</p>
    </div>
    <div class="cart-item__price">
      <p>{currencyFormat} {(count*price).toFixed(2)}</p>
      <button disabled="" class="change-product-button">-</button
      ><button class="change-product-button">+</button>
    </div>
  </div>
  );
};

export default CartItem;