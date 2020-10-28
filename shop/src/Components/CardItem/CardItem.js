import React from 'react';
import PropTypes from 'prop-types';
import {Card} from './CardItem.styled'

const CardItem = ({img,shipping, title, price, currency,type}) => {
  return (
    <Card>
    {/* <div className="card-item"> */}
      {shipping && <div className="card-stopper">Free shipping</div>}
        
        <div className="card-item__thumb">
          <img
            src={img}
            // alt={product.style}
          />
        </div>
        <p className="card-item__title">{title}</p>
        <div className="card-item__price">
          <div className="val">
            {currency} {price + 10}
          </div>
        </div>
        <div className={type}>Add to cart</div>
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