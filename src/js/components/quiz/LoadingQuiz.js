import React from 'react'
import { Redirect } from 'react-router'
import QuizStore from '../../stores/QuizStore'
import QuizGame from '../../game/QuizGame'
import ReturnToMain from './ReturnToMain'
import * as QuizActions from '../../actions/QuizActions'

export default class LoadQuiz extends React.Component {
  constructor () {
    super()
    if (document.querySelector('input[name="location"]:checked') === null) return
    this.imgLoaded = this.imgLoaded.bind(this)
    this.state = {
      gameType: document.querySelector('input[name="location"]:checked'),
      imgLoadCount: 0,
      startGame: false
    }
    this.imgLoadCount = 0
    this.maxImg = this.getMaxImgs(this.state.gameType)
    this.quizGame = new QuizGame(parseInt(this.state.gameType.value.split(' ')[0], 10), this.state.gameType.value.split(' ')[1] || 1000)
  }
  componentWillMount () {
    QuizStore.on('img-loaded', this.imgLoaded)
  }
  componentWillUnmount () {
    QuizStore.removeListener('img-loaded', this.imgLoaded)
  }
  imgLoaded () {
    this.state.imgLoadCount++
    document.querySelector('progress').value = this.state.imgLoadCount
    if (this.state.imgLoadCount === this.maxImg) {
      this.setState({startGame: true})
      setTimeout(() => {
        QuizActions.loadedQuiz(this.quizGame)
      }, 0)
    }
  }
  getMaxImgs (val) {
    let size = parseInt(val.value.split(' ')[0], 10)
    return 3 * size + size * 0.4
  }
  render () {
    if (this.state.startGame) {
      return <Redirect to='/quiz' />
    }
    if (document.querySelector('input[name="location"]:checked')) {
      return (
        <div>
          <p>render!</p>
          <progress max={this.maxImg} />
        </div>
      )
    } else {
      return (
        <ReturnToMain />
      )
    }
  }
}
