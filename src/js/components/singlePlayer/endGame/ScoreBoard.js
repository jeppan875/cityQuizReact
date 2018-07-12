import React from 'react'
import ScoreRow from './ScoreRow'
import QuizStore from '../../../stores/QuizStore'

export default class ScoreBoard extends React.Component {
  constructor () {
    super()
    this.getAnswers = this.getAnswers.bind(this)
    this.getScore = this.getScore.bind(this)
    this.state = {
      answers: [],
      score: 0
    }
  }
  componentWillMount () {
    QuizStore.on('end-game', this.getAnswers)
    QuizStore.on('end-game', this.getScore)
  }
  componentWillUnmount () {
    QuizStore.removeListener('end-game', this.getAnswers)
    QuizStore.removeListener('end-game', this.getScore)
  }
  getAnswers () {
    this.setState({answers: QuizStore.getAnswers()})
  }
  getScore () {
    this.setState({score: QuizStore.getScore()})
  }
  render () {
    return (
      <div>
        <p className='no-margin'>Your score: {this.state.score}</p>
        <table>
          <tbody>
            {this.state.answers.map((answer, i) =>
              <ScoreRow key={i + 1} nr={i + 1 + ') '} answer={answer.answer} correct={answer.correct} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
