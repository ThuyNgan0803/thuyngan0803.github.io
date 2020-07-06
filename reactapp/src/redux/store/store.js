import { createStore, applyMiddleware} from 'redux' ; 
import { counteReducer } from '../reducers/counterReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(counteReducer, composeWithDevTools(applyMiddleware(thunk)))