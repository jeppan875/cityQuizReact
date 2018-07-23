import React from 'react'
import { Redirect } from 'react-router'
import QuizStore from '../../stores/QuizStore'
import QuizGame from '../../game/QuizGame'
import * as QuizActions from '../../actions/QuizActions'

export default class LoadQuiz extends React.Component {
  constructor () {
    super()
    this.imgLoaded = this.imgLoaded.bind(this)
    this.state = {
      imgLoadCount: 0,
      startGame: false
    }
    this.imgLoadCount = 0
    this.maxImg = 34
    this.quizGame = new QuizGame(true, 10, 1000, 1)
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
  render () {
    if (this.state.startGame) {
      return <Redirect to='/quiz' />
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
