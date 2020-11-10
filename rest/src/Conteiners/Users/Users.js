import React, { Component } from 'react';
import Form from '../../Components/Form/Form';
import List from '../../Components/List/List';
import Loader from 'react-loader-spinner';
import {withCredentials,request} from '../../helpers/request';
import queryString from 'query-string'


class Users extends Component {
  state={
    users:[],
    loader: true,
    error: false,
    search:'',
    currentpage:1,
    perPage:12
  }

  componentDidMount(){
    const {location}=this.props
    const params = queryString.parse(location.search);
    if(Object.keys(params).length) {
      this.getUsers(params.userName)
    } else {
      this.getUsers();
    }
    
    
    
  }

  getUsers = async (search='react')=>{
    const {currentpage,perPage}=this.state
    const url = withCredentials(`https://api.github.com/search/users?q=${search}&page=${currentpage}&per_page=${perPage}&`);
    
    try {
      const result= await request('get',url);
      this.updateUsers(result.items)
      
    } catch (error) {
      this.errorToogle(true)
    }
    finally{
      this.loaderToogle(false)
    }
  }

  loaderToogle=(status)=>{
    this.setState({loader:status})
  }

  errorToogle=(status)=>{
    this.setState({error:status})
  }

  updateUsers =(users)=>{
    this.setState({users})
  }

  inputHeandler=({target})=>{
    const {value}=target;
    this.setState({
      search:value
    })
  }
  resetForm=()=>{
    this.setState({
      search:''
    })
  }

  render() {
    const {loader,error,users,search}=this.state
    return (
      <div>
        {loader && <Loader type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
/>}
{!loader && !error && <>
        <Form search={search} inputHeandler={this.inputHeandler} getUsers={this.getUsers} resetForm={this.resetForm} />
        <List users={users}/></>}
        {error && <h1>Something went wrong, try later</h1>}
        
      </div>
    );
  }
}

export default Users;