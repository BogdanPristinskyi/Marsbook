import {combineReducers, createStore} from "redux";
import dialogeReducer from "./dialogeReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogeReducer,
    sidebar: sidebarReducer,
    userPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
