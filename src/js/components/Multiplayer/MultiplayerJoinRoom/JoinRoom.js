import React from 'react'
import QuizStore from '../../../stores/QuizStore'
import * as firebase from 'firebase'
const database = firebase.database()

export default class JoinRoom extends React.Component {
  constructor () {
    super()
    this.clickReady = this.clickReady.bind(this)
    this.quizLoaded = this.quizLoaded.bind(this)
    this.state = {
      classNames: 'StandardButton',
      disabled: false,
      gameId: null
    }
    this.gameId = null
  }
  componentWillMount () {
    QuizStore.on('multiplayer-quiz-loaded', this.quizLoaded)
  }
  quizLoaded () {
    this.gameId = QuizStore.getGameId()
    this.setState({gameId: QuizStore.getGameId()})
  }
  onReady () {
    let readyCountRef = database.ref(`games/${this.gameId}/readyCount`)
    let gameRef = database.ref(`games/${this.gameId}`)
    readyCountRef.on('value', function (snapshot) {
      let update = parseInt(snapshot.val()) - 1
      if (update <= 0) {
        update = 0
      }
      gameRef.onDisconnect().update({readyCount: update})
    // if (gameFinished) { return }
      gameRef.once('value').then(function (gameSnapshot) {
        let maxPlayers = gameSnapshot.child('maxPlayers').val()
        if (parseInt(snapshot.val()) === parseInt(maxPlayers)) {
         // startGame(qg, gameRef, timer, gameId, user)
        }
      })
    })
  }

  clickReady (e) {
    e.preventDefault()
    this.setState({
      classNames: 'StandardButton pressedButton',
      disabled: true
    })
  }
  render () {
    return (
      <div id='joinroom'>
        <p className='no-margin'>Game key:</p>
        <p id='key'>{this.state.gameId}</p>
        <p>Game link:</p>
        <p>
          <a href='' id='gamekey' />
        </p>
        <p>Player list:</p>
        <div id='playerlist' />
        <div id='start'>
          <button type='submit' id='startBtn' className={this.state.classNames} onClick={this.clickReady} disabled={this.state.disabled} >Start game</button>
          <p id='wait' />
        </div>
      </div>
    )
  }
}
