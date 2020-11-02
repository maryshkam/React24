// import React, { Component } from 'react';
// import Header from './Components/Header/Header'
// import Main from './Components/Main/Main';
// import Cart from './Components/Cart/Cart';
// import products from './db/product.json'

// class App extends Component {
//   state={
//     isCartOpen: false,
//     order: [],
//     products: products
//   }

//   addToCart = (id)=>{
    // const productOrder=this.state.order.find(product=>product.id === id)
    // const item = this.state.products.find(product=>product.id === id);
// if(productOrder) {
//   this.setState(prev=>({
//     order: prev.order.map(orderItem => (orderItem.id===id ? {...orderItem, count: orderItem.count +1} : orderItem))
//   }))
// } else {
  // item.count = 1
  // this.setState((prev)=>({
  //   order: [...prev.order,item]
  // }))
// }  
//   }

//   removeFromCart=(id)=>{
//     // const result = this.state.order.filter(orderItem=>orderItem.id !==id );
//     // this.setState({
//     //   order:result
//     // })
// this.setState((prev)=>({
//   order: prev.order.filter(orderItem=>orderItem.id!==id)
// }))
//   }

  // switchCart =()=>{
  //   this.setState((prev)=>({
  //     isCartOpen: !prev.isCartOpen
  //   }))
  // }

//   render() {
//     const {isCartOpen,order,products} = this.state
//     return (
//       <>
//       <Header />
//       <Main products={products} addToCart={this.addToCart}/>
//       <Cart cartStatus={isCartOpen} switchCart={this.switchCart} order={order} removeFromCart={this.removeFromCart}/>
     
//       </>
//     );
//   }
// }

// export default App;
import React,{useState} from 'react';
import Cart from './Components/Cart/Cart';
import Counter from './Components/Counter/Counter';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import prod from './db/product.json'

const App = () => {
  const [isCartOpen,setIsCartOpen]=useState(false);
  const [order,setOrder]=useState([]);
  const [products,setProducts]=useState(prod);

  const switchCart =()=>{
    setIsCartOpen(state=>!state)
  }

  const addToCart=(id)=>{
    const productOrder=order.find(product=>product.id === id)
    const item = products.find(product=>product.id === id);
    if(productOrder) {
     setOrder(state=>state.map(el=>el.id===id ? {...el,count:el.count+1}:el))
    } else {
      item.count = 1
      setOrder(prev=>[...prev,item])
      }
    
  }

  const removeFromCart=(id)=>{
    
    setOrder((state)=>state.filter(cartItem=>cartItem.id !== id))
  }


  return (
    <>
    <Header />
    <Main products={products} addToCart={addToCart}/>
    <Cart cartStatus={isCartOpen} switchCart={switchCart} order={order} removeFromCart={removeFromCart} />
    {/* <Counter /> */}
    </>
  );
};

export default App;



