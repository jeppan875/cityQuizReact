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
      gameType: QuizStore.getGameType(),
      imgLoadCount: 0,
      startGame: false
    }
    console.log(this.state.gameType)
    this.imgLoadCount = 0
    this.maxImg = this.getMaxImgs(this.state.gameType)
    this.quizGame = new QuizGame(parseInt(this.state.gameType.split(' ')[0], 10), this.state.gameType.split(' ')[1] || 1000, 1, false)
  }
  componentWillMount () {
    QuizStore.on('img-loaded', this.imgLoaded)
  }
  componentWillUnmount () {
    QuizStore.removeListener('img-loaded', this.imgLoaded)
  }
  imgLoaded () {
    console.log('loaded')
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
    let size = parseInt(val.split(' ')[0], 10)
    console.log(size)
    return 3 * size + size * 0.4
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
