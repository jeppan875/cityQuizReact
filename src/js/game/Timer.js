import * as QuizActions from '../actions/QuizActions'

class Timer {
  constructor () {
    this._interval = ''
    this.timeLeft = null
  }
  startTimer (time) {
    this.timeLeft = parseInt(time)
    this._interval = setInterval(() => {
      this.timeLeft--
      if (this.timeLeft < 1) {
        QuizActions.timeup()
      } else if (this.timeLeft % 10 === 0) {
        QuizActions.nextPic()
      }
    }, 1000)
  }

  getIntervalID () {
    return this._interval
  }

  stopTimer () {
    window.clearInterval(this._interval)
  }
}

export default Timer
