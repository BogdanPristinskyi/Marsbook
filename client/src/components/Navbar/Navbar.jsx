import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import Friends from './Friends/Friends';

const Navbar =(props)=>{
 // let friends = props.friends.map(p => <Friends name={p.name} />)
    return <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
      </div>
    <div className={`${style.item} ${style.active}`}>
    <NavLink to="/messages" activeClassName={style.active}> Messages</NavLink>
    </div>
    <div className={style.item}>News</div>
    <div className={style.item}> Music</div>
    <div className={style.item}>Settings</div>
    <div className={style.item}><NavLink to="/users" activeClassName={style.active}>Users</NavLink></div>
    <div  className={style.friends}><p>Friends:</p>
    <Friends name='Jony Cage' />
    </div> 

  
  </nav>
    
}

export default Navbar