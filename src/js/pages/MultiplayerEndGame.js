import React from 'react'
import PlayAgain from '../components/singlePlayer/endGame/PlayAgain'
import ScoreBoard from '../components/Multiplayer/multiplayerEndGame/Scoreboard'

export default class MultiplayerEndGame extends React.Component {
  render () {
    return (
      <div>
        <PlayAgain />
        <ScoreBoard />
      </div>
    )
  }
}
