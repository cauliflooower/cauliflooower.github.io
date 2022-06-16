import MyButton from '../../../Button/MyButton';
import classes from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div className={classes.ProfileBG}></div>
            <div className={classes.ProfileAva}></div>
            <div className={classes.container}>
                <div className={classes.addPost}>
                    <h2 className={classes.titleQuestion}>Is there anything you want to share?</h2>
                    <div><textarea className={classes.windowPost} placeholder='Start writing'></textarea></div>
                    <MyButton name='Add Post'/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;