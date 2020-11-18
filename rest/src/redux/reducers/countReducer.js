import {RESET,MINUS,PLUS} from '../constants/counterConstants'
const initialState = 10;

const count =(state=initialState,action)=>{
  switch(action.type){
    case RESET:
      return 0;
    case MINUS:
      return state-1;
    case PLUS:
      return state+1;

    default: return state;
}
}

export default count;
// export default (state=initialState,action)=>{
//   switch(action){

//     default: return state;
//   }

// 