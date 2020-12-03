const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
    ]
}

const dialogeReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state, 
                messages:[...state.messages, { id: 6, message: body }]
            };

        default:
            return state;
    }

}


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })




export default dialogeReducer;