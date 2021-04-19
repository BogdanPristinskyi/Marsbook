import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import authReducer from "./authReducer";
import dialogeReducer from "./dialogeReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogeReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
// Redux DevTool connection
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))
  );

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;

export default store;
