import {SET_ERROR,RESET_ERROR} from '../constant/index'
const initialState='';

export default (state=initialState,action)=>{
  switch(action.type){
    case SET_ERROR:
      return action.payload;
    case RESET_ERROR:
      return "";
    default: return state;
  }
}