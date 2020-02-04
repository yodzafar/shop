import React from "react";
import {Switch, Route} from 'react-router-dom'

import {PhonesContainer} from "../containers/phones";

export const routes = (
    <Switch>
      <Route path='/' exact component={PhonesContainer} />
    </Switch>
)