import phones from './mockPhones'
import * as R from 'ramda'

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones)
  })
};

export const loadMorePhones = async ({offset}) => {
  return new Promise((resolve, reject) => {
    resolve(phones)
  })
};

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq('id', id), phones)
    resolve(phone)
  })
};