import React from "react";
import {Switch, Route} from 'react-router-dom'

import {Phones} from "../containers/phones";
import {Phone} from "../containers/phone";

export const routes = (
    <Switch>
      <Route path='/' exact component={Phones} />
      <Route path='/phones/:id' component={Phone} />
    </Switch>
)