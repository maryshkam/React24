import React, {Component} from 'react';
import SimpleContext from '../SimpleContext';

class SimpleProvider extends Component {
  state ={
    number: 15,
    tasks:[]
  }

  increment =()=>{
    this.setState((prev)=>({
      number: prev.number+1
    }))
  }
  render(){
    return <SimpleContext.Provider value={{number:this.state.number,increment:this.increment}}>
      {this.props.children}
    </SimpleContext.Provider>
  }
}
export default SimpleProvider;