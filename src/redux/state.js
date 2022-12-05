import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 0 },
                { id: 2, message: "It's my first post", likesCount: 23 },
                { id: 3, message: "Uuuuuuu", likesCount: 45 },
            ],
            newPostText: 'good mood',
        },
    
        dialogsPage: {
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
        }, 
    
        sidebar:{}
    },
    _callSubscriber(){
        console.log('State changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer){ // патерн наблюдатель (observer)
        this._callSubscriber = observer
    },

    dispatch(action){ // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store;