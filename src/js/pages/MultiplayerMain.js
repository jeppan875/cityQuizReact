import React from 'react'
import CreateGameButton from '../components/multiplayerMain/CreateGameButton'
import JoinGame from '../components/multiplayerMain/JoinGame'
import * as QuizAction from '../actions/QuizActions'
import { Redirect } from 'react-router'
import QuizStore from '../stores/QuizStore'

export default class MultiplayerMain extends React.Component {
  constructor () {
    super()
    this.join = this.join.bind(this)
    this.state = {
      clickedJoin: false
    }
  }
  componentWillMount () {
    QuizStore.on('gameid', this.join)
  }
  componentWillUnmount () {
    QuizStore.removeListener('gameid', this.join)
  }
  join () {
    console.log('fhgf')
    this.setState({clickedJoin: true})
  }
  clickJoin (e) {
    e.preventDefault()
    let value = e.target
    QuizAction.gameId(value.answer.value)
    // console.log(value.answer.value)
  }
  render () {
    if (this.state.clickedJoin) {
      return <Redirect to='/join' />
    }
    return (
      <div id='multiplayerDiv'>
        <CreateGameButton />
        <JoinGame onSubmit={this.clickJoin} />
      </div>
    )
  }
}
