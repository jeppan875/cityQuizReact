import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import StartMenu from './js/pages/StartMenu'
import EndGame from './js/pages/EndGame'
import Quiz from './js/pages/Quiz'
import Login from './js/pages/Login'
import MultiplayerMain from './js/pages/MultiplayerMain'
import { Route } from 'react-router'
import LoadQuiz from './js/components/quiz/LoadingQuiz'
import LoadingMultiplayerGame from './js/components/multiplayerCreateGame/LoadingMultiplayerGame'
import LoadingMultiplayerJoiner from './js/components/multiplayerJoinRoom/LoadingMultiplayerJoiner'
import MultiplayerJoinRoom from './js/pages/MultiplayerJoinRoom'
import MultiplayerCreateGame from './js/pages/MultiplayerCreateGame'
import MultiplayerQuizGame from './js/pages/MultiplayerQuizGame'
import MultiplayerEndGame from './js/pages/MultiplayerEndGame'

class App extends Component {
  componentWillMount () {
    if (window.location.pathname === '/') {
      window.history.pushState(null, null, '/')
    }
  }
  render () {
    return (
      <div id='wrapper'>
        <main>
          <Route path='/' exact component={StartMenu} />
          <Route path='/quiz' exact component={Quiz} />
          <Route path='/load-quiz' exact component={LoadQuiz} />
          <Route path='/end-game' exact component={EndGame} />
          <Route path='/login' exact component={Login} />
          <Route path='/multiplayer-main' exact component={MultiplayerMain} />
          <Route path='/create-multiplayer-game' exact component={MultiplayerCreateGame} />
          <Route path='/loading-multiplayer-game' exact component={LoadingMultiplayerGame} />
          <Route path='/join' exact component={LoadingMultiplayerJoiner} />
          <Route path='/joinroom' exact component={MultiplayerJoinRoom} />
          <Route path='/multiplayer-quiz' exact component={MultiplayerQuizGame} />
          <Route path='/multiplayer-endgame' exact component={MultiplayerEndGame} />
        </main>
      </div>
    )
  }
}

export default App
