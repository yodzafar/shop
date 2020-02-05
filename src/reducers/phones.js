import * as R from 'ramda'

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS
} from "../constants/actionTypes";


const initialSate = {};

export const phones = (state = initialSate, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, moreValues);
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
    default:
      return state
  }
};