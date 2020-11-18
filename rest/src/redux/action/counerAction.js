import {RESET,MINUS,PLUS} from '../constants/counterConstants'

export const reset=(e)=>({
  type: RESET,
  
})

export const minus=()=>({
  type: MINUS
})

export const plus=()=>({
  type: PLUS
})