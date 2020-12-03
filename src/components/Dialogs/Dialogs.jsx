import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import {
  requiredField,
  maxLengthCreator,
} from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[requiredField, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>

      <div>
        {" "}
        <button>Send message</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
