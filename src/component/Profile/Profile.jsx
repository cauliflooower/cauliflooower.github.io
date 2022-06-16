import MyPosts from './MyPosts/Post/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;