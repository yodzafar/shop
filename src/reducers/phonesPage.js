import {FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS} from "../constants/actionTypes";
import * as R from 'ramda'

const initalState = {
  ids: []
};


export const PhonesPage =  (state = initalState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge (state, { ids: R.pluck('id', payload)});
    case LOAD_MORE_PHONES_SUCCESS:
      const ids = R.pluck('id', payload);
      return R.merge(state, {
        ids:R.concat(state.ids, ids)
      });
    default:
      return state
  }
};
