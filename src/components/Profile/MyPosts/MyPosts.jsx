import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLength10 =  maxLengthCreator(10);
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
<AddNewPostFormRedux onSubmit={ onAddPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};


let AddNewPostForm =(props) => {
  return    (  
     <form onSubmit={props.handleSubmit}>
  <div>
    <Field name='newPostText' component={Textarea} validate={[requiredField, maxLength10]}/>
  </div>
  <div>
    <button>Add Post</button>
  </div>
</form>
  )
}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'}) (AddNewPostForm)


export default MyPosts;
