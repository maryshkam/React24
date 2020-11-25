import {LOADER_OFF,LOADER_ON} from '../constant/index'

export const loaderOn=()=>({
  type: LOADER_ON
});
export const loaderOff=()=>({
  type: LOADER_OFF
})