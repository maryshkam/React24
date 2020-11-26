import {createReducer} from '@reduxjs/toolkit';
import {filterType} from '../action/filterAction'

export default createReducer('All', {
  [filterType]: (state,{payload})=>payload
})