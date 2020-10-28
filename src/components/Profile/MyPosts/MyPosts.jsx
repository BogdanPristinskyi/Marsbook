import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import styles from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

  let newPostElement = React.createRef();

  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
  let action = updateNewPostTextActionCreator(text);
  props.dispatch(action);
  
}

  let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)

  return <div className={styles.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
    </div>
    <div className={styles.posts}>
      {postsElements}

    </div>
  </div>


}

export default MyPosts