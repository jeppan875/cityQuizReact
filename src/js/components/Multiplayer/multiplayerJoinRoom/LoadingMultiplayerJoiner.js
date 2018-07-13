import React from 'react'
import { Redirect } from 'react-router'
import QuizStore from '../../../stores/QuizStore'
import QuizGame from '../../../game/QuizGame'
import * as QuizActions from '../../../actions/QuizActions'
import * as firebase from 'firebase'
const database = firebase.database()

export default class LoadingMultiplayerGame extends React.Component {
  constructor () {
    super()
    this.imgLoaded = this.imgLoaded.bind(this)
    this.downloadQuiz = this.downloadQuiz.bind(this)
    this.state = {
      imgLoadCount: 0,
      startGame: false,
      gameId: document.querySelector('#gameid').value
    }
    this.imgLoadCount = 0
    this.quizGame = null
    this.maxImg = null
    this.downloadQuiz()
  }
  componentWillMount () {
    console.log('willmount')
    QuizStore.on('img-loaded', this.imgLoaded)
  }
  componentWillUnmount () {
    QuizStore.removeListener('img-loaded', this.imgLoaded)
  }
  downloadQuiz () {
    let user = firebase.auth().currentUser
    let playerCount = database.ref(`games/${this.state.gameId}/playerCount`)
    let players = database.ref(`games/${this.state.gameId}/players`)
    database.ref(`games/${this.state.gameId}/`).once('value').then(function (gameSnapshot) {
      let game = gameSnapshot.child('game/questions').val()
      playerCount.transaction(function (currentData) {
        return (currentData || 0) + 1
      }, function (error, committed, snapshot) {
        if (error) {
          console.log(error)
        } else if (committed) {
          let maxPlayers = parseInt(gameSnapshot.child('maxPlayers').val())
          let maxPoints = parseInt(gameSnapshot.child('game/maxPoints').val())
          this.maxImg = parseInt(gameSnapshot.child('game/size').val())
          if (parseInt(snapshot.val()) <= maxPlayers) {
            let updates = {}
            updates[`/${user.uid}`] = {
              displayName: user.email,
              uid: user.uid,
              score: 0
            }
            players.update(updates)
            let questions = game
            this.quizGame = new QuizGame(game.length, maxPoints, maxPlayers, true, questions)
          } else {
            playerCount.transaction(function (currentData) {
              return (currentData || 0) - 1
            })
          }
        } else {
        }
      }.bind(this), false)
    }.bind(this))
  }
  imgLoaded () {
    this.state.imgLoadCount++
    document.querySelector('progress').value = this.state.imgLoadCount
    if (this.state.imgLoadCount === this.maxImg) {
      this.setState({startGame: true})
      setTimeout(() => {
        QuizActions.loadedMultiplayerQuiz(this.quizGame, this.state.gameId)
      }, 0)
    }
  }
  getMaxImgs (val) {
    let size = parseInt(val.value.split(' ')[0], 10)
    return 3 * size + size * 0.4
  }
  render () {
    if (this.state.startGame) {
      return <Redirect to='/joinroom' />
    } else {
      return (
        <div>
          <p>render!</p>
          <progress max={this.maxImg} />
        </div>
      )
    }
  }
}
