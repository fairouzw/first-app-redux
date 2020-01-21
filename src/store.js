import {createStore, compose, applyMiddleware} from 'redux'; 
import thunk from "redux-thunk";
import rootReducer from './rootReducer';

const initialState = {};
//reducer is a funciton that returns an object of data - which then modifies the state.
//need to create one file that combine reducers - to then bring all the reducers to our store.

const middleWare = {thunk}
//need thunk/middleware before getting data from api

const store = createStore(
  rootReducer,
  initialState, 
  compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
//compose is to enable our devtool extension and middleware

export default store;