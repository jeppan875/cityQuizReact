import React from 'react'
import MultiplayerQuiz from '../components/Multiplayer/multiplayerQuiz/MultiplayerQuiz'

export default class MultiplayerQuizGame extends React.Component {
  constructor () {
    super()
    window.history.replaceState(null, null, '/multiplayer-main')
  }
  render () {
    return (
      <MultiplayerQuiz />
    )
  }
}
