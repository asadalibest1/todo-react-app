import {combineReducers} from 'redux'

const masterReducer = combineReducers({
    inputField: (state='', action)=>{switch(action.type){case "inputField" : return action.payload} return state},
    arr: (state='', action)=>{switch(action.type){case "arr" : return action.payload} return state},
    condition: (state='', action)=>{switch(action.type){case "condition" : return action.payload} return state},
    
}) 

export {masterReducer};