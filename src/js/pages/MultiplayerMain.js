import React from 'react'
import CreateGameButton from '../components/multiplayerMain/CreateGameButton'
import JoinGame from '../components/multiplayerMain/JoinGame'

export default class MultiplayerMain extends React.Component {
  render () {
    return (
      <div id='multiplayerDiv'>
        <CreateGameButton />
        <JoinGame />
      </div>
    )
  }
}
