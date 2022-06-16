import classes from './MyButton.module.css'

function MyButton(props) {
    return (
        <div>
            <button className={classes.customBtn + ' ' + classes.btn}>{props.name}</button>
        </div>
    )
}

export default MyButton;