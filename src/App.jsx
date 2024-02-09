import React from 'react'
import Sidebar from './components/sidebar'
import Main from './components/main-comp'
import "./style.css"

function App() {

  return (
    <div className='app'>
      <div className="sidebar-comp">
        <Sidebar />
      </div>
      <div className='main-component'>
        <nav className='topbar'>
          <h3>Dashboard</h3>
          <input type='text' placeholder='Search...'></input>
          <button type="button" class="icon-button">
            <span class="material-icons">notifications</span>
            <span class="icon-button__badge">2</span>
          </button>
        </nav>
        <Main />
      </div>
    </div>
  )
}

export default App
