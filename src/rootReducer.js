import {combineReducers} from "redux";
import {starWarsReducer} from './components/starWars/starWarsReducer';

export default combineReducers({
starWarsReducer: starWarsReducer
//can pass any 
});