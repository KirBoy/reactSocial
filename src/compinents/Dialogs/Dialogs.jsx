import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from 'react';

const DialogItem = (props) => {

    return (
        <li className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

const AmswerItem = (props) => {
    return (
        <li className={s.dialog}>
            <p className={s.answer}>{props.text}</p>
        </li>
    )
}


const Dialogs = (props) => {

    let newMessage = React.createRef()

    const addMessageDialog = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    }

    const onMessageChange = () => {
        let text = newMessage.current.value;
        props.changeMessageText(text);
    }

    let messageElement = props.dialogsPage.messages.message.map(elem => <AmswerItem text={elem.message}/>);
    let dialogElement = props.dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id}/>);

    return (
        <div className={s.dialogs__inner}>
            <ul className={s.dialogs}>
                {dialogElement}
            </ul>
            <div>
                <ul className={s.answers}>
                    {messageElement}
                </ul>
                <textarea ref={newMessage} value={props.dialogsPage.messages.messageText} onChange={onMessageChange}/>
                <button onClick={addMessageDialog}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;