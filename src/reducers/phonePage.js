import {FETCH_PHONE_BY_ID_SUCCESS} from "../constants/actionTypes";
import * as R from 'ramda'

const initialState = {
  id: null
};

export const phonePage = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop('id', payload)
      });
    default:
      return state
  }
};