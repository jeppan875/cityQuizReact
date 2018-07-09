import React from 'react'
import PlayAgain from '../components/endGame/PlayAgain'
import ScoreBoard from '../components/endGame/ScoreBoard'

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
