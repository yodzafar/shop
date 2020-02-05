import {connect} from 'react-redux'
import React, {Component} from "react";
import * as R from 'ramda'
import {Link} from 'react-router-dom'

import {BaseLayout} from "../../components/layout";
import {fetchPhones, loadMorePhones, addPhoneToBasket} from "../../actions";
import {getPhones} from '../../selectors'

class PhonesContainer extends Component {
  componentDidMount() {
    this.props.fetchPhones()
  }

  renderPhone = (phone, index) => {
    const shortDescription = `${R.take(60, phone.description)}...`;
    const {addPhoneToBasket} = this.props;
    return (
        <div className='list-item' key={index}>
          <div className='thumbnail'>
            <img src={phone.image} alt={phone.name}/>
          </div>
          <div className='caption'>
            <Link to={`/phones/${phone.id}`} className='list-title'>
              {phone.name}
            </Link>
            <span className='list-price'>${phone.price}</span>
          </div>
          <p className='desc'>{shortDescription}</p>
          <div className='actions'>
            <button
                className='btn btn-primary main-btn'
                onClick={() => addPhoneToBasket(phone.id)}
            >
              Buy now
            </button>
            <Link to={`/phones/${phone.id}`} className='more-link btn'>
              More info
            </Link>
          </div>
        </div>
    )
  };

  render() {
    const {phones, loadMorePhones} = this.props;
    return (
        <>
          <div className='list'>
            {phones.map((phone, index) => this.renderPhone(phone, index))}
          </div>
          <button
              className='btn btn-primary more-btn'
              onClick={loadMorePhones}
          >
            Load More
          </button>
        </>
    )
  }
}

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket
};

const mapStateToProps = state => ({
  phones: getPhones(state)
});

export const Phones = BaseLayout(connect(mapStateToProps, mapDispatchToProps)(PhonesContainer));