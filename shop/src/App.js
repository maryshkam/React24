import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import products from './db/product.json'

class App extends Component {
  state={
    isCartOpen: false,
    order: [],
    products: products
  }

  addToCart = (id)=>{
    const productOrder=this.state.order.find(product=>product.id === id)
    const item = this.state.products.find(product=>product.id === id);
if(this.state.products.find(product=>product.id === id))
    this.setState((prev)=>({
      order: [...prev.order,item]
    }))
  }

  switchCart =()=>{
    this.setState((prev)=>({
      isCartOpen: !prev.isCartOpen
    }))
  }

  render() {
    const {isCartOpen,order,products} = this.state
    return (
      <>
      <Header />
      <Main products={products} addToCart={this.addToCart}/>
      <Cart cartStatus={isCartOpen} switchCart={this.switchCart} order={order} />
     
      </>
    );
  }
}

export default App;
// import React from 'react';
// import Cart from './Components/Cart/Cart';
// import Counter from './Components/Counter/Counter';
// import Header from './Components/Header/Header'
// import Main from './Components/Main/Main';

// const App = () => {
//   return (
//     <>
//     <Header />
//     <Main />
//     <Cart/>
//     {/* <Counter /> */}
//     </>
//   );
// };

// export default App;



