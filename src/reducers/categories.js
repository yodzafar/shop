import * as R from 'ramda'
import {FETCH_CATEGORIES_SUCCESS} from "../constants/actionTypes";

const initalState = {}

export const categories = (state = initalState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues)
    default:
      return state
  }
};