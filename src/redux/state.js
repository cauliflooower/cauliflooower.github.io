const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

    // addPost(){
    //     let newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber();
    // },
    // updateNewPostText(newText){
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },
    dispatch(action){ // {type: 'ADD-POST'}
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber();
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

window.store = store
export default store;