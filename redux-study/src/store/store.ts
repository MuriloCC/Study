import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers: any = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' as any] || compose;

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
)