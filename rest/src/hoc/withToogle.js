import React, {Component} from 'react';

const withToogle =(NestedComponent)=>{
  return class extends Component {
    state={
      isOpen:false
    }

    toggle =()=>{
      this.setState(prev=>({
        isOpen: !prev.isOpen
      }))
    }
    render(){
      return <NestedComponent {...this.props} isOpen={this.state.isOpen} toggle={this.toggle}/>
    }
  }

}

export default withToogle;