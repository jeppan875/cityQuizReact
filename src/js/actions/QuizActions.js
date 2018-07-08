import dispatcher from '../dispatcher'

export function startQuiz (quizGame) {
  dispatcher.dispatch({
    type: 'START_QUIZ',
    game: quizGame
  })
  console.log('dispatched')
}
export function imgLoaded () {
  dispatcher.dispatch({
    type: 'IMG_LOADED'
  })
  console.log('dispatched')
}
