import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
  return <div className={styles.item}>
    <img src="https://www.nasa.gov/sites/default/files/styles/226xvariable_height/public/268276main_armstrong-moon-226x170.jpg?itok=xDgX8JCx" alt="" />
     { props.message}
        <div>
          <span>Like {props.likes}</span>
          </div>
          </div>
}

export default Post