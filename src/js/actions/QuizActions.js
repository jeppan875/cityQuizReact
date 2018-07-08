import dispatcher from '../dispatcher'

export function startGame () {
  dispatcher.dispatch({
    type: 'START_GAME'
  })
}
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

export function timeup () {
  dispatcher.dispatch({
    type: 'TIMEUP'
  })
}

export function nextPic () {
  dispatcher.dispatch({
    type: 'NEXTPIC'
  })
}