import React,{useState,useEffect} from 'react';
import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';
import {createSingleUserUrl,request} from '../../helpers/request';
import arrow from './arrowBack.png';
import './SingleUser.css'


const SingleUser = () => {
  const history =useHistory()
  const[user,setUser]=useState({});
  const location= useLocation();
  const userName=useParams().name;
  const match=useRouteMatch();
  console.log(location);
  console.log(match);
//  const userName=params.name;

  useEffect(()=>{
    const url=createSingleUserUrl(userName);
    request('get',url)
    .then(response=>setUser(response))
    .catch(error=>console.log(error))
  },[]);

  
const goToBack =()=>{
  history.push('/repos')
}
  
  
  // console.log('location:',location);
  // console.log('params:',params);
  // console.log('match:',match);
  return (
    <div>
      <img src={arrow} alt='' className='arrow' onClick={goToBack}/>
      <h1>{user.login}</h1>
    <h3>{user.name}</h3>
    <img src={user.avatar_url} alt=''/>
    {user.location && <p>Location: {user.location}</p>}
    <ul>
      <li>Followers: {user.followers}</li>
      <li>Following: {user.following}</li>
  <li>public repos: {user.public_repos}</li>
    </ul>

    </div>
  );
};

export default SingleUser;