const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Max" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sacha" },
            { id: 5, name: "Andrey" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hello" },
            { id: 3, message: "Yow are you?" },
            { id: 4, message: "Yo" },
            { id: 5, message: "I'm tired" },
        ],
        newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogReducer;