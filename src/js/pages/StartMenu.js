import React from 'react'
import fire from '../../fire'
import SelectGameType from '../components/singlePlayer/startmenu/SelectGameType'
import Header from '../components/singlePlayer/startmenu/Header'
import MultiplayerButton from '../components/singlePlayer/startmenu/MultiplayerButton'

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
        <Header />
        <SelectGameType />
        <MultiplayerButton />
      </div>
    )
  }
}
