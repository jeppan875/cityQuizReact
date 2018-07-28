import React from 'react'
import fire from '../../fire'
import Header from '../components/startmenu/Header'
import MultiplayerButton from '../components/startmenu/MultiplayerButton'
import SelectGameType from '../components/multiplayerCreateGame/SelectGameType'
import * as QuizAction from '../actions/QuizActions'
import CreateGameButton from '../components/multiplayerCreateGame/CreateButton'
import { Redirect } from 'react-router'

export default class StartMenu extends React.Component {
  constructor () {
    super()
    this.authListener = this.authListener.bind(this)
    this.state = {
      clickedstart: false
    }
  }

  componentDidMount () {
    this.authListener()
  }
  clickStart (e) {
    e.preventDefault()
    let value = e.target
    QuizAction.gameType(value.gametype.value)
    this.setState({clickedstart: true})
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
    if (this.state.clickedstart) {
      return <Redirect to='/load-quiz' />
    }
    return (
      <div>
        <div className='card card-position transparent borders slideInFromTop'>
          <div className='card-body'>
            <Header />
          </div>
        </div>
        <div className='card transparent card-position borders slideInFromLeft'>
          <div className='card-body'>
            <form onSubmit={this.clickStart.bind(this)}>
              <SelectGameType />
              <CreateGameButton />
            </form>
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
