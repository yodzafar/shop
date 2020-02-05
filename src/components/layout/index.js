import React from "react";
import {Sidebar} from "../sidebar";

export const BaseLayout = (Component) => {
  return function (props) {
    return (
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
                <Sidebar/>
              </div>
              <div className='col-md-9'>
                <Component {...props}/>
              </div>
            </div>
          </div>
    )
  }
};

export const PageLayout = (Component) => {
  return function (props) {
    return (
        <div className='container'>
          <Component {...props}/>
        </div>
    )
  }
};