import React from 'react';
// import products from '../../db/product.json';
import CardItem from '../CardItem/CardItem';
import './CardCollection.css';

const CardCollection = ({products,addToCart}) => {
  return (
    <div className="card-container">
      {/* <!-- cards header start --> */}
      <div className="card-container__header">
        <small className="products-found">
          <span>16 Product(s) found</span>
        </small>
        <div className="sort">
          Order by
          <select>
            <option value="">Select</option>
            <option value="low">Lowest to highest</option>
            <option value="high">Highest to lowest</option>
          </select>
        </div>
      </div>
      {/* <!-- cards header end  --> */}
      {/* <!-- card start  --> */}
      {products.map(product=><CardItem 
      key={product.id}  
      id={product.id} 
      img={product.img}
      shipping={product.isFreeShipping} 
      title={product.title} 
      price={product.price} 
      currency={product.currencyFormat} 
      addToCart={addToCart}
      />
    
    )}
      </div>
  );
};

export default CardCollection;