import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import initialState from './reducer';
const middlewares = [thunk];

//creating a store
const store = createStore(reducer,applyMiddleware(...middlewares));

export default store;