import { combineReducers } from 'redux';
import offerList from './offerList.js';

const appReducer = combineReducers({
    offerList: offerList,
});

const rootReducer = (state, action) => {
   
    return appReducer(state, action)
}

export default rootReducer;

