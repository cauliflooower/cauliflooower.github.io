import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo';

function ProfileInfoConteiner(props) {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<ProfileInfo updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
            newPostText = {state.profilePage.newPostText}/>)
}

export default ProfileInfoConteiner;