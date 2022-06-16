import classes from './Post.module.css'

function Post(props) {
    return (
        <div className={classes.item}>
            <div className={classes.itemInnerAva}>
                <img src="https://i.pinimg.com/originals/3f/4b/30/3f4b309774b38cef7ed79bbfc264dc99.jpg"></img>
                <div className={classes.namePost}>Monika Strange</div>
            </div>
            <div className={classes.messageText}>{props.message}</div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;