import React, {Component} from "react";
import {connect} from 'react-redux'
import {searchPhone} from "../../actions";

class SearchS extends Component {
  state = {
    value: ''
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchPhone(this.state.value)
  };

  handleChange = (e) => {
    this.setState({value: e.target.value})
  };

  render() {
    return (
        <div className='from-wrapper'>
          <h5 className='sidebar-title'>Quick shop</h5>

          <form onSubmit={this.handleSubmit}>
            <div className='input-group'>
              <input
                  type="text"
                  onChange={this.handleChange}
                  className='form-control'
                  value={this.state.value}
              />
              <div className='input-group-btn'>
                <button className='btn btn-default search-btn'>
                  <i className='fa fa-search'/>
                </button>
              </div>
            </div>
          </form>
        </div>
    )
  }
}

const mapDispatchToProps = {
  searchPhone
};

export const Search = connect(null, mapDispatchToProps)(SearchS);