import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

let dialogs = [
    {id:1, name: "Dimych"},
    {id:2, name: "Max"},
    {id:3, name: "Sveta"},
    {id:4, name: "Sacha"},
    {id:5, name: "Andrey"},
]

let messages = [
    {id:1, message: "Hi"},
    {id:2, message: "Hello"},
    {id:3, message: "Yow are you?"},
    {id:4, message: "Yo"},
    {id:5, message: "I'm tired"},
]

let dialogsElements = dialogs.map(d  => <DialogItem name={d.name} id={d.id}/>)
let messageElements = messages.map(m => <Message message={m.message}/>)

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;