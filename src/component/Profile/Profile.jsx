import MyPosts from './MyPosts/Post/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;