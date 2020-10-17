import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return <div className={styles.content}>
    <div className={styles.main}><img src='https://scx2.b-cdn.net/gfx/news/hires/2018/spacexisgoin.jpg'></img> </div>
    <p>Main content</p>
    <div>
      ava + description
   </div>
    <div>
      My posts
        <div>
        New post
         </div>

      <div className={styles.posts}>
        <div className={styles.item}>Post 1</div>
        <div className={styles.item}>Post 2</div>
      </div>
    </div>
  </div>

}

export default Profile