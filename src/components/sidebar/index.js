import React from "react";
import {BasketCart} from "../basketCart";
import {Search} from "../search";

export const Sidebar = () => (
    <div className='sidebar'>
      <BasketCart/>
      <Search/>
    </div>
);