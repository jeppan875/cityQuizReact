import React from 'react'
import fire from '../../fire'
import PlayButton from '../components/startmenu/PlayButton'
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
        document.querySelector('#loginBtn').style.display = 'none'
        document.querySelector('#signoutBtn').style.display = 'inline-block'
      } else {
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
            <PlayButton />
          </div>
        </div>
        <div className='card transparent card-position borders slideInFromLeft'>
          <div className='card-body'>
            <MultiplayerButton />
          </div>
        </div>
      </div>
    )
  }
}
