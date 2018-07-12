import React from 'react'
import CreateGameButton from '../components/Multiplayer/MultiplayerMain/CreateGameButton'
import JoinGame from '../components/Multiplayer/MultiplayerMain/JoinGame'

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
