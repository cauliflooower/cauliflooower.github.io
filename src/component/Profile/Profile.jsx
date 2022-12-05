import MyPosts from './MyPosts/Post/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import ProfileInfoConteiner from './MyPosts/ProfileInfo/ProfileInfoConteiner';
import classes from './Profile.module.css'

function Profile(props) {
    return (
        <div>
            <ProfileInfoConteiner store= {props.store} />
            <MyPosts 
             posts={props.state.posts}/>
        </div>
    )
}

export default Profile;