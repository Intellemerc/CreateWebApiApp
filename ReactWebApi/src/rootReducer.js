import { combineReducers } from 'redux';
import { mySimpleReducer } from './components/MySimpleComponent';
const reducers = {
    mySimpleReducer
};
const rootApp = combineReducers(reducers);
export default rootApp;
