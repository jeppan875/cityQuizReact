import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class QuizStore extends EventEmitter {
  startGame (game) {
    this.emit('start-game', game)
    console.log('game started')
  }

  imgLoad () {
    this.emit('img-loaded')
  }

  handleActions (action) {
    switch (action.type) {
      case 'START_QUIZ': {
        console.log(action.game)
        this.startGame(action.game)
        break
      }
      case 'IMG_LOADED': {
        this.imgLoad()
        break
      }
    }
  }
}

const quizStore = new QuizStore()
dispatcher.register(quizStore.handleActions.bind(quizStore))

export default quizStore
