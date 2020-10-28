import {combineReducers, createStore} from "redux";
import dialogeReducer from "./dialogeReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogeReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
