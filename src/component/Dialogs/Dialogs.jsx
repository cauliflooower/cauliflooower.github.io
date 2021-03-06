import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

function Dialogs(props) {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.messages.map(m => <Message message={m.message} />)

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