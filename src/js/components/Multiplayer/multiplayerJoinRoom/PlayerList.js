import React from 'react'
import * as firebase from 'firebase'
import QuizStore from '../../../stores/QuizStore'
const database = firebase.database()

export default class PlayerList extends React.Component {
  constructor () {
    super()
    this.getGameId = this.getGameId.bind(this)
    this.state = {
      players: []
    }
    this.gameId = null
  }
  componentWillMount () {
    QuizStore.on('multiplayer-quiz-loaded', this.getGameId)
  }
  componentWillUnmount () {
    QuizStore.removeListener('multiplayer-quiz-loaded', this.getGameId)
  }
  getGameId () {
    this.gameId = QuizStore.getGameId()
    this.setPlayerList()
  }
  setPlayerList () {
    let playersRef = database.ref(`games/${this.gameId}/players`)
    playersRef.on('value', function (snapshot) {
      let players = Object.keys(snapshot.val())
      let playersNames = []
      for (let i = 0; i < players.length; i++) {
        playersNames.push(snapshot.child(`${players[i]}`).val().displayName)
      }
      this.setState({players: playersNames})
    }.bind(this))
  }
  render () {
    return (
      <div id='playerlist'>
        <ul className='no-list-style'>
          {this.state.players.map((player, i) =>
            <li key={i}>{player}</li>
          )}
        </ul>
      </div>
    )
  }
}
