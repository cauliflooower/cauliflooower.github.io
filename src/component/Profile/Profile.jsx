import MyPosts from './MyPosts/Post/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'

function Profile(props) {
    return (
        <div>
            <ProfileInfo dispatch={props.dispatch}
                newPostText={props.state.newPostText}/>
            <MyPosts 
             posts={props.state.posts}/>
        </div>
    )
}

export default Profile;