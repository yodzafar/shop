import React from 'react';
import {history} from "./store";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {ConnectedRouter} from "connected-react-router";

import {store} from "./store";
import {App} from "./components/app";

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
