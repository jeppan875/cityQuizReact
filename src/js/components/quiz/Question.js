import React from 'react'
import QuizStore from '../../stores/QuizStore'
// import timer from '../../game/Timer'
import * as QuizActions from '../../actions/QuizActions'

export default class Question extends React.Component {
  constructor () {
    super()
    this.startGame = this.quizLoaded.bind(this)
    this.game = null
  }
  componentWillMount () {
    QuizStore.on('quiz-loaded', this.quizLoaded)
  }
  quizLoaded () {
    this.game = QuizStore.getQuizGame()
    console.log(this.game)
  }

  render () {
    return (
      <div id='quizDiv' className='ripple'>
        <div id='viewDiv'>
          <p id='timer'>''</p>
          <img id='view' alt='' />
        </div>
        <progress max='30' />
        <p id='pquestion' />
        <div id='quiz'>
          <div id='question'>
            <div>
              <input type='radio' id='q1' className='option-input radio' name='answer' />
              <label htmlFor='q1' id='l1'>''</label>
            </div>
            <div>
              <input type='radio' id='q2' className='option-input radio' name='answer' />
              <label htmlFor='q2' id='l2'>''</label>
            </div>
            <div>
              <input type='radio' id='q3' className='option-input radio' name='answer' />
              <label htmlFor='q3' id='l3'>''</label>
            </div>
            <div>
              <input type='radio' id='q4' className='option-input radio' name='answer' />
              <label htmlFor='q4' id='l4'>''</label>
            </div>
          </div>
          <div id='btn'>
            <button type='submit' id='send' className='StandardButton'>send</button>
          </div>
          <div id='scoreBoard'>
            <p id='spScore' />
            <table />
          </div>
        </div>
      </div>
    )
  }
}
