import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogReducer,
    sidebar : sidebarReducer
})
export let store = createStore(reducer)

export default store;