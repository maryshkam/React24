const initialState = {
  name: 'Bob',
  age: 23,
  zipCode: 123456,
  country: {
    id:45,
    name: 'Brazil',
    address: {
      
    }
  }
}

export default (state=initialState,action)=>{
  switch(action.type){
    default: return state;
  }
}