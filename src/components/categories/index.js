import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {compose} from "redux";
import classNames from 'classnames'
import * as R from 'ramda'

import {getCategories, getActiveCategoryId} from '../../selectors'

const CategoreisS = ({categories, activeCategoryId}) => {

  const renderCategory = (category, index) => {
    const getActiveState = R.propEq('id', activeCategoryId)
    const linkClass = classNames({
      'list-group-item category-item':true,
      'active': getActiveState(category)
    });
    return (
        <Link
            to={`/categories/${category.id}`}
            key={index}
            className={linkClass}>
          {category.name}
        </Link>
    )
  };

  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item category-item':true,
      'active': R.isNil(activeCategoryId)
    });

    return (
        <Link to='/' className={linkClass}>All Categories</Link>
    )
  };

  return (
      <div className='categories'>
        <h5 className='sidebar-title'>Brand</h5>
        <div className='list-group'>
          {renderAllCategory()}
          {categories.map((category, index) => renderCategory(category, index))}
        </div>
      </div>
  )

};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
});

export const Categories = compose(withRouter, connect(mapStateToProps, null))(CategoreisS);
