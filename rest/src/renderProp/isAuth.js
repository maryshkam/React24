import React, {Component} from 'react';

class IsAuth extends Component {
  render(){
    const user={name:'Bob',age:23}
    const isUserAuth=Object.keys(user).length>0;
    return this.props.children({isUserAuth:isUserAuth});
  }
}
export default IsAuth;