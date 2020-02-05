import * as R from 'ramda'
import {ADD_PHONE_TO_BASKET} from "../constants/actionTypes";

const initialState = [];

export const basket = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return R.append(payload, state);
    default:
      return state
  }
};