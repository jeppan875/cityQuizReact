import React from 'react'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'

export default class Header extends React.Component {
  constructor () {
    super()
    this.signout = this.signout.bind(this)
  }
  signout () {
    firebase.auth().signOut().then(function () {
      document.querySelector('#loginBtn').style.display = 'inline-block'
      document.querySelector('#signoutBtn').style.display = 'none'
    }, function (error) {
      console.error('Sign Out Error', error)
    })
  }
  render () {
    const containerStyle = {
      fontSize: '18px'
    }
    return (
      <div id='login' className='float-right'>
        <Link to='/login'><button type='submit' id='loginBtn' className='StandardButton' style={containerStyle}>Login</button></Link>
        <button type='submit' id='signoutBtn' onClick={this.signout} className='StandardButton' style={containerStyle}>Sign out</button>
      </div>
    )
  }
}
