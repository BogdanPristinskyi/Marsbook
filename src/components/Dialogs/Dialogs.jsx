import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogeReducer'


const Dialogs = (props) => {

  let state = props.store.getState().messagesPage;
  

let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> )
let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} /> )
let newMessageBody = state.newMessageBody;

let onSendMessageClick = () =>{
  props.store.dispatch(sendMessageCreator())

}

let onNewMessageChange =(e) =>{
 let body = e.target.value;
props.store.dispatch(updateNewMessageBodyCreator(body))
 }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
      {dialogsElements}
       
      </div>
      <div className={styles.messages}>
      {messagesElements}
      </div>
      <div>
        <textarea value={newMessageBody} 
        onChange={onNewMessageChange}>
        </textarea>
      </div>
      <div>
        <button onClick={onSendMessageClick }>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs