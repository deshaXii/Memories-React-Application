import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

import rootReducer from "./rootReducer";

export const providor = Provider

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
