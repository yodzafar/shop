import React from "react";
import {routes} from "../../routes";

export const Layout = () => (
    <div className='app'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            sidebar
          </div>
          <div className='col-md-9'>
            {routes}
          </div>
        </div>
      </div>
    </div>
);