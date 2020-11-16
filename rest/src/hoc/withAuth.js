import React, {Component} from 'react';

// const withAuth = (NestedComponent) => {
// return class extends Component {
//   render(){
//     const user={}
//     const isAuth=Object.keys(user).length>0;
//     return <NestedComponent isAuth={isAuth} {...this.props}/>
//   }
// }
// }



const withAuth =(NestedComponent)=>{
  const user={name:'Bob',age:23}
  const isAuth=Object.keys(user).length>0;
  return ((props)=><NestedComponent {...props} isAuth={isAuth}/>)

}


export default withAuth;