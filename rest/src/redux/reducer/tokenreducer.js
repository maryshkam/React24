import {SET_TOKEN,RESET_TOKEN} from "../constant/index"
const initialState=null;

export default (state=initialState,action)=>{
  switch(action.type){
    case SET_TOKEN:
      return action.payload;
    case RESET_TOKEN:
      return null;
    default: return state;
  }
}