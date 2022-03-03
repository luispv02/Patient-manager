import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { patientsReducer } from '../reducers/patientsReducer';
import { sidebarReducer } from '../reducers/sidebarReducer';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    sidebar: sidebarReducer,
    ui: uiReducer,
    auth: authReducer,
    patients: patientsReducer
})

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);