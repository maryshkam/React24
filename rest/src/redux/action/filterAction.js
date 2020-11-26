import {createAction} from '@reduxjs/toolkit';
import {FILTER_ITEM } from '../constant/index';

export const filterType = createAction(FILTER_ITEM);