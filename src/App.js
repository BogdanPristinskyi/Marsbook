import React from 'react'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { Route } from 'react-router-dom'

const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar friends={props.state.sidebar.friends} />
      <div className='app-wrapper-content'>
        <Route path='/messages'
          render={() => 
          <Dialogs messages={props.state.messagesPage.messages} 
         store={props.store} 
          /> } />
        <Route path='/profile'
          render={() =>
            <Profile 
            profilePage={props.state.profilePage} 
            dispatch={props.dispatch} /> } />
      </div>
    </div>

  )
}


export default App
