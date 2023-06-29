import React from 'react'
import "./Header.css"

const Header = (props) => {
    console.log(props);
  return (
    <header className='header'>
      <h1>LOGO</h1>
      <button>Contact</button>
      <button>Phone</button>
      <button onClick={props.onShowForm} className='btn-login'>
        {props.state===false ? "LOGIN" : "LOGOUT"}
    </button>
    </header>
  )
}

export default Header
