import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    let newPostElement = React.createRef();

                let onAddPost = () => {
                    props.dispatch(addPostActionCreator());
                }

                let onPostChange = () => {
                    let text = newPostElement.current.value;
                    props.updateNewPostText(text);
                }

    return (
        <div>
            <div className={classes.ProfileBG}></div>
            <div className={classes.ProfileAva}></div>
            <div className={classes.container}>
                <div className={classes.addPostBlock}>
                    <h2 className={classes.titleQuestion}>Is there anything you want to share?</h2>
                    <textarea 
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText}
                    className={classes.windowPost} placeholder='Start writing'/>
                    <button onClick={onAddPost} className={classes.customBtn + ' ' + classes.btn}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;