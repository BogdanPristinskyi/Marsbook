import React from 'react'
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/messages/' + props.id
  return (
    <div className={styles.dialog + ' ' + styles.active}>
    <NavLink to={path}> {props.name}</NavLink>
  </div>
)
}

const Message =(props)=>{
  return(
    <div className={styles.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
       <DialogItem name='Dimych' id='1'/>
       <DialogItem name='Andrey' id='2'/>
       <DialogItem name='Sveta' id='3'/>
       <DialogItem name='Sasha' id='4'/>
       <DialogItem name='Victor' id='5'/>
       <DialogItem name='Valera' id='6'/>
        
      </div>
      <div className={styles.messages}>
        <Message message='Hello' />
        <Message message='Hi!' />
        <Message message='How are you?' />
      </div>
    </div>
  )
}

export default Dialogs