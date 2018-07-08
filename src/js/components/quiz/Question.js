import React from 'react'
import QuizStore from '../../stores/QuizStore'
import { Redirect } from 'react-router'
import * as QuizActions from '../../actions/QuizActions'

export default class Question extends React.Component {
  constructor () {
    super()
    this.quizLoaded = this.quizLoaded.bind(this)
    this.startGame = this.startGame.bind(this)
    this.sendAnswer = this.sendAnswer.bind(this)
    this.nextPic = this.nextPic.bind(this)
    this.game = null
    this.state = {
      startTime: null,
      timeLeft: null,
      currentImg: null,
      alternatives: ['', '', '', ''],
      endGame: false,
      score: 0,
      question: ''
    }
    this.interval = null
    this.picCount = null
  }
  componentWillMount () {
    QuizStore.on('quiz-loaded', this.quizLoaded)
    QuizStore.on('timeup', this.sendAnswer)
    QuizStore.on('nextpic', this.nextPic)
    QuizStore.on('start-game', this.startGame)
  }
  componentWillUnmount () {
    QuizStore.removeListener('quiz-loaded', this.quizLoaded)
    QuizStore.removeListener('timeup', this.sendAnswer)
    QuizStore.removeListener('nextpic', this.nextPic)
    QuizStore.removeListener('start-game', this.startGame)
  }
  quizLoaded () {
    this.game = QuizStore.getQuizGame()
    console.log(this.game)
    setTimeout(() => {
      QuizActions.startGame()
    }, 0)
  }
  startGame () {
    this.startTimer()
    this.picCount = 0
    this.setState({
      currentImg: this.game.questions[this.game.currentCount].urlArr[this.picCount],
      alternatives: this.game.questions[this.game.currentCount].alternatives,
      question: this.game.questions[this.game.currentCount].getQuestionDesc()
    })
  }
  endGame () {
    this.stopTimer()
    this.setState({endGame: true})
  }
  nextPic () {
    if (this.game.questions[this.game.currentCount].urlArr.length === 1) {

    } else {
      this.picCount++
      this.game.questions[this.game.currentCount].picCount--
      this.setState({
        currentImg: this.game.questions[this.game.currentCount].urlArr[this.picCount],
        question: this.game.questions[this.game.currentCount].getQuestionDesc()
      })
    }
  }
  sendAnswer () {
    this.answer()
    this.picCount = 0
    this.game.currentCount++
    this.stopTimer()
    console.log(this.state.score)
    if (this.state.score >= this.game.maxPoints || this.game.currentCount >= this.game.size) {
      this.endGame()
    } else {
      this.startTimer()
      this.setState({
        currentImg: this.game.questions[this.game.currentCount].urlArr[this.picCount],
        alternatives: this.game.questions[this.game.currentCount].alternatives,
        question: this.game.questions[this.game.currentCount].getQuestionDesc()
      })
    }
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

  answer () {
    let answer = document.querySelector('input[name="answer"]:checked')
    if (answer === null) {
      this.game.answers.push('', 'Wrong')
    } else if (answer.value === this.game.questions[this.game.currentCount].rightAnswer) {
      this.setState({score: this.state.score + this.state.timeLeft})
      this.game.answers.push(answer.value, 'Correct')
    } else {
      this.game.answers.push(answer.value, 'Wrong')
    }
  }

  render () {
    if (this.state.endGame) {
      return <Redirect to='/end-game' />
    }
    return (
      <div id='quizDiv' className='ripple'>
        <p id='timer'>{this.state.timeLeft}</p>
        <div id='viewDiv'>
          <img id='view' alt='' src={this.state.currentImg} />
        </div>
        <progress max={this.state.startTime} value={this.state.timeLeft} />
        <p id='pquestion'>{this.state.question}</p>
        <div id='quiz'>
          <div id='question'>
            <div>
              <input type='radio' id='q1' className='option-input radio' name='answer' value={this.state.alternatives[0]} />
              <label htmlFor='q1' id='l1'>{this.state.alternatives[0]}</label>
            </div>
            <div>
              <input type='radio' id='q2' className='option-input radio' name='answer' value={this.state.alternatives[1]} />
              <label htmlFor='q2' id='l2'>{this.state.alternatives[1]}</label>
            </div>
            <div>
              <input type='radio' id='q3' className='option-input radio' name='answer' value={this.state.alternatives[2]} />
              <label htmlFor='q3' id='l3'>{this.state.alternatives[2]}</label>
            </div>
            <div>
              <input type='radio' id='q4' className='option-input radio' name='answer' value={this.state.alternatives[3]} />
              <label htmlFor='q4' id='l4'>{this.state.alternatives[3]}</label>
            </div>
          </div>
          <div id='btn'>
            <button type='submit' id='send' className='StandardButton' onClick={this.sendAnswer.bind(this)}>send</button>
          </div>
          <div id='scoreBoard'>
            <p id='spScore'>{this.state.score}</p>
            <table />
          </div>
        </div>
      </div>
    )
  }
}
