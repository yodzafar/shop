import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {createStore, applyMiddleware} from "redux";
import {routerMiddleware} from "connected-react-router";
import {composeWithDevTools} from "redux-devtools-extension";

import createRootReducer from '../reducers/rootReducer'


export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);

