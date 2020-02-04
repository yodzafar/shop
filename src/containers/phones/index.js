import {connect} from 'react-redux'
import React, {Component} from "react";
import * as R from 'ramda'
import {Link} from 'react-router-dom'

import {fetchPhones, LoadMorePhones} from "../../actions";
import {getPhones} from '../../selectors'

class PhonesContainerS extends Component {
  componentDidMount() {
    this.props.fetchPhones()
  }

  renderPhone = (phone, index) => {
    const shortDescription = `${R.take(60, phone.description)}...`;
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
            <button className='btn btn-primary main-btn'>Buy now</button>
            <Link to={`/phones/${phone.id}`} className='more-link btn'>
              More info
            </Link>
          </div>
        </div>
    )
  };

  render() {
    const {phones, LoadMorePhones} = this.props
    return (
        <>
          <div className='list'>
            {phones.map((phone, index) => this.renderPhone(phone, index))}
          </div>
         <div>
           <button
               className='btn btn-primary'
               onClick={LoadMorePhones}
           >
             Load More
           </button>
         </div>
        </>
    )
  }
}

const mapDispatchToProps = {
  fetchPhones,
  LoadMorePhones
};

const mapStateToProps = state => ({
  phones: getPhones(state)
});

export const PhonesContainer = connect(mapStateToProps, mapDispatchToProps)(PhonesContainerS);