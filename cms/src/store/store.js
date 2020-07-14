import { createStore, applyMiddleware } from "redux";
import ReducerAll from "../reducers/index";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(ReducerAll, composeWithDevTools(applyMiddleware(thunk)));