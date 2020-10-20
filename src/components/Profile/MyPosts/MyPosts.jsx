import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return <div className={styles.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </div>
    <div className={styles.posts}>
    <Post message='Hi, how are you?' likes='15' />
    <Post message="It's my first post" likes='7' />
    </div>
  </div>


}

export default MyPosts