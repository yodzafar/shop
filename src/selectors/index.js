
import * as R from 'ramda'

export const getPhonesById = (state, id) => {
  return R.prop(id, state.phones);
};

export const getPhones = (state) => {
  const phones = R.map(id => getPhonesById(state, id), state.phonesPage.ids);
  console.log(phones);
  return phones
};

export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids)