import classes from './MyPosts.module.css'
import Post from './Post'

function MyPosts(props) {
    
    let postsElements = 
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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