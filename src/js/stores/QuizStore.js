import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class QuizStore extends EventEmitter {
  constructor () {
    super()
    this.game = null
    this.answers = null
    this.score = 0
  }
  getQuizGame () {
    return this.game
  }
  getAnswers () {
    return this.answers
  }
  getScore () {
    return this.score
  }
  imgLoad () {
    this.emit('img-loaded')
  }

  handleActions (action) {
    switch (action.type) {
      case 'QUIZ_LOADED': {
        this.game = action.game
        this.emit('quiz-loaded')
        break
      }
      case 'IMG_LOADED': {
        this.imgLoad()
        break
      }
      case 'TIMEUP': {
        this.emit('timeup')
        break
      }
      case 'NEXTPIC': {
        this.emit('nextpic')
        break
      }
      case 'START_GAME': {
        this.emit('start-game')
        break
      }
      case 'ENDGAME': {
        this.answers = action.answers
        this.score = action.score
        this.emit('end-game')
        break
      }
    }
  }
}

const quizStore = new QuizStore()
dispatcher.register(quizStore.handleActions.bind(quizStore))

export default quizStore
