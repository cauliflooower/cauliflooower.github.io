import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.state.messages.map(m => <Message message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messageText}>{messageElements}</div>
                <div className={classes.fieldMessage}>
                    <textarea className={classes.windowPost} placeholder='Writing message'></textarea>
                    <button className={classes.customBtn + ' ' + classes.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;