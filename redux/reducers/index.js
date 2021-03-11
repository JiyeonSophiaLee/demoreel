import menuExtendedReducer from './menuExtended'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    menuExtended : menuExtendedReducer
})

export default allReducers;