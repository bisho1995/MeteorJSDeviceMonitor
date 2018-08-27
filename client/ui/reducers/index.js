import {SET_ID} from '../actions/index'

import {combineReducers} from 'redux';

function devices(state = [], action) {
     switch(action.type) {
         case SET_ID: return action.id
         default: return state
     }
}


const rootReducer =  combineReducers({devices})
export default rootReducer