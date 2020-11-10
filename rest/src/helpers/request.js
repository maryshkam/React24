import axios from 'axios'

export const withCredentials= (url)=>{
  return `${url}client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
}

export const request= async (method,url,body=null)=>{
  const result =  await axios[method](url,body);
  return result.data

}

export const createSingleUserUrl=(login)=>{
 return withCredentials(`https://api.github.com/users/${login}?`)
}