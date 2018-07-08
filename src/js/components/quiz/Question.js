import React from 'react'
import QuizStore from '../../stores/QuizStore'
import Timer from '../../game/Timer'
// import timer from '../../game/Timer'
import * as QuizActions from '../../actions/QuizActions'

export default class Question extends React.Component {
  constructor () {
    super()
    this.quizLoaded = this.quizLoaded.bind(this)
    this.startGame = this.startGame.bind(this)
    this.timeUp = this.timeUp.bind(this)
    this.nextPic = this.nextPic.bind(this)
    this.game = null
    this.timer = new Timer()
    this.state = {
      startTime: null,
      timeLeft: null,
      currentImg: null
    }
    this.interval = null
  }
  componentWillMount () {
    QuizStore.on('quiz-loaded', this.quizLoaded)
    QuizStore.on('timeup', this.timeUp)
    QuizStore.on('nextpic', this.nextPic)
    QuizStore.on('start-game', this.startGame)
  }
  startGame () {
    this.startTimer()
    console.log(this.game.questions[this.game.currentCount].urlArr[0])
    this.setState({currentImg: this.game.questions[this.game.currentCount].urlArr[0]})
  }
  quizLoaded () {
    this.game = QuizStore.getQuizGame()
    console.log(this.game)
    setTimeout(() => {
      QuizActions.startGame()
    }, 0)
  }
  timeUp () {
    this.game.currentCount++
    this.stopTimer()
    this.startTimer()
  }
  nextPic () {
    if (this.game.questions[this.game.currentCount].urlArr[0] === 1) {

    } else {
      
    }
  }
  sendAnswer () {
    this.game.currentCount++
    this.stopTimer()
    this.startTimer()
  }
  startTimer () {
    let game = this.game
    let startTime = game.questions[game.currentCount].time
    this.setState({
      startTime: startTime,
      timeLeft: startTime
    })
    this.interval = setInterval(() => {
      this.setState({timeLeft: this.state.timeLeft - 1})
      if (this.state.timeLeft < 1) {
        QuizActions.timeup()
      } else if (this.state.timeLeft % 10 === 0) {
        QuizActions.nextPic()
      }
    }, 1000)
  }

  stopTimer () {
    window.clearInterval(this.interval)
  }

  render () {
    return (
      <div id='quizDiv' className='ripple'>
        <p id='timer'>{this.state.timeLeft}</p>
        <div id='viewDiv'>
          <img id='view' alt='' src={this.state.currentImg} />
        </div>
        <progress max={this.state.startTime} value={this.state.timeLeft} />
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
            <button type='submit' id='send' className='StandardButton' onClick={this.sendAnswer.bind(this)}>send</button>
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
