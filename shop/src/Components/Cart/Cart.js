import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import PropTypes from 'prop-types';


const Cart = ({cartStatus,switchCart,order,removeFromCart}) => {
  const total=()=>{
    return order.reduce((acc,el)=> acc+el.price*el.count,0).toFixed(2)
  }
  
  const count=()=>{
    return order.reduce((acc,el)=>acc+el.count,0)
  }
  return (
    <div className={cartStatus ? 'float-cart float-cart--open ': 'float-cart'}>
      {/* <!-- cart icon start  --> */}
      <span onClick={switchCart} className="bag bag--float-cart-closed">
        <span className="bag__quantity">{count()}</span>
      </span>
      {/* <!-- cart icon end --> */}
      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{count()}</span>
          </span>
          <span className="float-cart__header-title">Cart </span>
        </div>
        <div className="float-cart__card-container">
          {order.map(el=> <CartItem key={el.id} {...el} removeFromCart={removeFromCart}/>)}
          
        </div>
        <div className="float-cart__footer">
          <div className="total">
            <p className="sub">TOTAL</p>
            <p className="price-total">$ {total()}</p>
          </div>
          <div className="buy-btn">Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes={
  cartStatus:PropTypes.bool.isRequired,
  switchCart:PropTypes.func.isRequired
}


