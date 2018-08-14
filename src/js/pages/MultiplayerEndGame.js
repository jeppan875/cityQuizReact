import React from 'react'
import PlayAgain from '../components/endGame/PlayAgain'
import ScoreBoard from '../components/multiplayerEndGame/Scoreboard'

export default class MultiplayerEndGame extends React.Component {
  render () {
    return (
      <div className='card card-position transparent borders slideInFromTop'>
        <div className='card-body'>
          <div>
            <PlayAgain />
            <ScoreBoard />
          </div>
        </div>
      </div>
    )
  }
}
