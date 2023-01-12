import { legacy_createStore as createStore,applyMiddleware } from 'redux';

import thunk from "redux-thunk"

import reducers from "./reducers" //combined reducers

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)