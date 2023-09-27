// src/store.js
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
