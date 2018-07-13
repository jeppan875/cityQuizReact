import React from 'react'
import CreateGameButton from '../components/Multiplayer/multiplayerMain/CreateGameButton'
import JoinGame from '../components/Multiplayer/multiplayerMain/JoinGame'

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
