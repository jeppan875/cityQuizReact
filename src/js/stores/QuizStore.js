import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class QuizStore extends EventEmitter {
  constructor () {
    super()
    this.game = null
  }
  getQuizGame () {
    return this.game
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
    }
  }
}

const quizStore = new QuizStore()
dispatcher.register(quizStore.handleActions.bind(quizStore))

export default quizStore
