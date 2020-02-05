import {FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONE
} from "../constants/actionTypes";
import * as R from 'ramda'

const initalState = {
  ids: [],
  search:''
};


export const phonesPage =  (state = initalState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge (state, { ids: R.pluck('id', payload)});
    case LOAD_MORE_PHONES_SUCCESS:
      const ids = R.pluck('id', payload);
      return R.merge(state, {
        ids:R.concat(state.ids, ids)
      });
    case SEARCH_PHONE:
      return R.merge(state, {
        search: payload
      });
    default:
      return state
  }
};
