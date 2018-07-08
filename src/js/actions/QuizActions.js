import dispatcher from '../dispatcher'

export function loadedQuiz (quizGame) {
  dispatcher.dispatch({
    type: 'QUIZ_LOADED',
    game: quizGame
  })
}
export function imgLoaded () {
  dispatcher.dispatch({
    type: 'IMG_LOADED'
  })
}
