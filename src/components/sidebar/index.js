import React from "react";
import {BasketCart} from "../basketCart";
import {Search} from "../search";
import {Categories} from "../categories";

export const Sidebar = () => (
    <div className='sidebar'>
      <BasketCart/>
      <Search/>
      <Categories/>
    </div>
);