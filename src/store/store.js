import { combineReducers, createStore } from 'redux'
import { sidebarReducer } from '../reducers/sidebarReducer';

const reducers = combineReducers({
    sidebar: sidebarReducer,
})

export const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);