import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

function Dialogs(props) {
    
    let state = props.store.getState().dialogsPage 
    debugger
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body)) 
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messageText}>{messageElements}</div>
                <div className={classes.fieldMessage}>
                    <textarea className={classes.windowPost} value={newMessageBody} onChange={onNewMessageChange} placeholder='Writing message'></textarea>
                    <button onClick={onSendMessageClick} className={classes.customBtn + ' ' + classes.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;