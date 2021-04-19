import dialogeReducer from "./dialogeReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'It\'s my first post', likesCount: 7 }
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Message #3' },
                { id: 4, message: 'Message #4' }
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Sasha' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogeReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

//Action Creators
window.store = store;
export default store;
