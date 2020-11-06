import React, { Component } from 'react';
import axios from 'axios';
import {withCredentials,request} from '../../helpers/request'
import ListItem from '../ListItem/ListItem';
import Loader from 'react-loader-spinner'
import './List.css'
import Form from '../Form/Form';

class List extends Component {
  state={
    users:[],
    loader: true,
    error: false,
    message: ''
  }

  updateUsers=(users)=>{
    this.setState({
      users
    })
  }

   loaderToogle=()=>{
    this.setState(prev=>({
    loader: !prev.loader
  }))
  }
  errorToogle=(status)=>{
    this.setState({
      error:status,
    }
  )
  }

  // loaderOn =()=>{
  //   this.setState({
  //     loader:true
  //   })
  // }

  // loaderOff=()=>{
  //   this.setState({
  //     loader:false
  //   })
  // }

  errorOn =()=>{
    this.setState({
      error:true
    })
  }
  errorOff =()=>{
    this.setState({
      error:false
    })
  }
  
  async componentDidMount(){
  const url = withCredentials('https://api.github.com/search/users?q=react&');
  try {
    const result = await request('get',url);

    this.setState({
    users: result.items,
    loader: false
  })
    
  } catch (error) {
    this.setState({
      error: true,
      loader: false
    })
  }
  
  
    // axios.get(withCredentials('https://api.github.com/search/repositories?q=react&')).then(response=>console.log(response.data))
    // axios.get(`https://api.github.com/search/repositories?q=react&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    // .then(response=>console.log(response.data))
  }
  render() {
    const {users,loader,error}=this.state
    return (
    <>
      <Form updateUsers={this.updateUsers} 
      loaderToogle={this.loaderToogle} 
      errorToogle={this.errorToogle}
      />
      <div className='container'>
       {error && <h1>Some error, try later</h1>}
       {loader && <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000}/>}
      {!error && !loader && users.map(card=><ListItem key={card.id} {...card}/>)}




         {/* {!!users.length && users.map(card=><ListItem key={card.id} {...card}/>)} */}
        {/* {error ? <h1>Some error, try later</h1> : null} */}
        {/* {loader ? <Loader type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}/> 
         : users.map(card=><ListItem key={card.id} {...card}/>)} */}
        {/* {users.length ? users.map(card=><ListItem key={card.id} {...card}/>) 
        : <Loader type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}/>}
        {users.map(card=><ListItem key={card.id} {...card}/>)} */}
      </div>
      </>
    );
  }
}

export default List;