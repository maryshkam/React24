import React from 'react';
import PropTypes from 'prop-types';
import {Card,CardThumb, CardBtn, CardItemTitle, CardPrice} from './CardItem.styled'

const CardItem = ({img,shipping, title, price, currency,type,id,addToCart}) => {
  
  return (
    <Card>
    {/* <div className="card-item"> */}
      {shipping && <div className="card-stopper">Free shipping</div>}
      <CardThumb  >
          <img
            src={img}
            alt={title}
          />
        </CardThumb>
        <CardItemTitle>{title}</CardItemTitle>
       <CardPrice>
        
          <div className="val">
            {currency} {price}
          </div>
          </CardPrice>
        <div className={type} onClick={()=> addToCart(id)}>Add to cart</div>
      {/* </div> */}
      </Card>
  );
};

export default CardItem;

CardItem.defaultProps = {
  type: "card-item__buy-btn",
  img: "https://i.ibb.co/0jDhL34/51498472915966370-1.jpg"
}

CardItem.propTypes = {
  img: PropTypes.string.isRequired,
  shipping: PropTypes.bool.isRequired,
  title: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  type: PropTypes.string
}