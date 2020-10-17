import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'

const Profile = () => {
  return <div className={styles.content}>
    <div className={styles.main}><img src='https://scx2.b-cdn.net/gfx/news/hires/2018/spacexisgoin.jpg'></img> </div>
    <p>Main content</p>
    <div>
      ava + description
   </div>
    <MyPosts />
  </div>

}

export default Profile