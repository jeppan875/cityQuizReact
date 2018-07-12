import React from 'react'
import PlayAgain from '../components/singlePlayer/endGame/PlayAgain'
import ScoreBoard from '../components/singlePlayer/endGame/ScoreBoard'

export default class EndGame extends React.Component {
  render () {
    return (
      <div>
        <ScoreBoard />
        <PlayAgain />
      </div>
    )
  }
}
