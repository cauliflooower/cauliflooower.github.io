import classes from './MyPosts.module.css'
import Post from './Post'

let postData = [
    {id:1, message:'Hi, how are you?', likesCount: 0},
    {id:2, message:"It's my first post", likesCount: 23},
]

let postsElements = 
    postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

function MyPosts() {
    return (
        <div className={classes.postsBlock}>
            <div className={classes.contentPosition}>
                <div className={classes.descriptionBlock}>
                    Ut enim ad minima veniam, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur. Ut enim ad minima veniam, consectetur adipiscing elit, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus?
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;