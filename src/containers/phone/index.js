import {connect} from 'react-redux'
import React, {Component} from "react";
import * as R from 'ramda'

import {PageLayout} from "../../components/layout";
import {fetchPhoneById, addPhoneToBasket} from "../../actions";
import {getPhoneById} from "../../selectors";
import {BasketCart} from "../../components/basketCart";
import {Link} from "react-router-dom";


class PhoneContainer extends Component {

  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  renderFields() {
    const {phone} = this.props;
    const columnField = R.compose(
        R.toPairs,
        R.pick([
          'cpu',
          'camera',
          'size',
          'weight',
          'display',
          'battery',
          'memory'
        ])
    )(phone);
    return columnField.map(([key, value]) => (
        <div className='column' key={key}>
          <div className='details-title'>
            <p>{key}:</p>
          </div>
          <div className='details-info'>
            <p>{value}</p>
          </div>
        </div>
    ))
  }

  renderContent() {
    const {phone} = this.props;
    return (
        <div className='content'>
          <div className='row mb-3'>
            <div className='col-md-5'>
              <img src={phone.image} alt={phone.name}/>
            </div>
            <div className='col-md-7'>
              {this.renderFields()}
            </div>
          </div>
          <div className='caption-full'>
            <div className='page-title'>
              <span className='phone-name'>{phone.name}</span>
              <span className='phone-price'>${phone.price}</span>
            </div>
            <p className='desc'>{phone.description}</p>
          </div>
        </div>
    )
  }

  renderSidebar() {
    const {phone, addPhoneToBasket} = this.props
    return (
        <div className='sidebar'>
          <h5>Quick shop</h5>
          <BasketCart/>
          <div className='form-group page-title'>
            <span className='phone-name'>{phone.name}</span>
            <span className='phone-price'>${phone.price}</span>
          </div>
          <Link to='/' className='btn btn-info btn-block'>
            Back to store
          </Link>
          <button
              className='btn btn-success btn-block'
              onClick={() => addPhoneToBasket(phone.id)}
          >
            Add to cart
          </button>
        </div>
    )
  }

  render() {
    const {phone} = this.props;
    return (
        <div className='row'>
          <div className='col-md-9'>
            {phone && this.renderContent()}
          </div>
          <div className='col-md-3'>
            {phone && this.renderSidebar()}
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
};

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
};

export const Phone = PageLayout(connect(mapStateToProps, mapDispatchToProps)(PhoneContainer));