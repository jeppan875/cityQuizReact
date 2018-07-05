import React from 'react'

export default class Header extends React.Component {
  render () {
    const containerStyle = {
      fontSize: '18px'
    }
    return (
      <div id='login'>
        <button type='submit' id='loginBtn' class='StandardButton' style={containerStyle}>Login</button>
        <button type='submit' id='signoutBtn' class='StandardButton' style={containerStyle}>Sign out</button>
      </div>
    )
  }
}
