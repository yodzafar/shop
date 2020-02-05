import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

import {getTotalBasketCount, getTotalBasketPrice} from '../../selectors'

const Cart = ({totalBasketCount, totalPrice}) => (
    <div className='cart'>
      <div className='dropdown'>
        <Link to='/basket' className='btn btn-primary btn-click'>
          <i className='fa fa-shopping-cart fa-fw'/>
          <span>{totalBasketCount} item(s) - ${totalPrice}</span>
        </Link>
      </div>
    </div>
);

const mapStateToProps = state => {
  console.log(state);
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
};

export const BasketCart = connect(mapStateToProps, null)(Cart)