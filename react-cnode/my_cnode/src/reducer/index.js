import {combineReducers} from "redux";
import list from './list.js';
import user from './user.js';
import detail from './detail.js';

const Reducers = combineReducers({
    list,
    detail,
    user,
});

export default Reducers;