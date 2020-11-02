import React from 'react';
import CardCollection from '../CardCollection/CardCollection';
import Filter from '../Filter/Filter';


const Main = ({products,addToCart}) => {
  return (
    <main>
    <Filter />
    <CardCollection products={products} addToCart={addToCart}/>
    </main>
  );
};

export default Main;