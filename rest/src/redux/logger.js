
// function ownLogger (store) {
//   return function(next){
//     return function(action){

//     }
//   }
// }

 export const ownLogger = (store)=>(next)=>(action)=>{
  console.group('action',action.type);
  const prevState=store.getState();
  console.log('prevState', prevState);
  const result = next(action);
  console.log(result);
  const newState=store.getState()
  console.log('newState', newState);
  console.groupEnd();

}