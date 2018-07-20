import React from 'react'
import fire from '../../fire'
import SelectGameType from '../components/startmenu/SelectGameType'
import Header from '../components/startmenu/Header'
import MultiplayerButton from '../components/startmenu/MultiplayerButton'

export default class StartMenu extends React.Component {
  constructor () {
    super()
    this.authListener = this.authListener.bind(this)
  }

  componentDidMount () {
    this.authListener()
  }

  authListener () {
    fire.auth().onAuthStateChanged(() => {
      let user = fire.auth().currentUser
      if (user) {
        window.localStorage.setItem('user', user.uid)
        document.querySelector('#loginBtn').style.display = 'none'
        document.querySelector('#signoutBtn').style.display = 'inline-block'
      } else {
        document.querySelector('#loginBtn').style.display = 'inline-block'
        document.querySelector('#signoutBtn').style.display = 'none'
        window.localStorage.removeItem('user')
      }
    })
  }
  render () {
    return (
      <div>
        <div className='card card-position transparent borders slideInFromTop'>
          <div className='card-body'>
            <Header />
          </div>
        </div>
        <div className='card transparent card-position borders slideInFromLeft'>
          <div className='card-body'>
            <h5>Select game type:</h5>
            <SelectGameType />
            <MultiplayerButton />
          </div>
        </div>
      </div>
    )
  }
}
