import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import StartMenu from './js/pages/StartMenu'
import EndGame from './js/pages/EndGame'
import Quiz from './js/pages/Quiz'
import Login from './js/pages/Login'
import { Route } from 'react-router'
import LoadQuiz from './js/components/quiz/LoadingQuiz'

class App extends Component {
  render () {
    return (
      <div id='wrapper'>
        <main>
          <Route path='/' exact component={StartMenu} />
          <Route path='/quiz' exact component={Quiz} />
          <Route path='/load-quiz' exact component={LoadQuiz} />
          <Route path='/end-game' exact component={EndGame} />
          <Route path='/login' exact component={Login} />
        </main>
      </div>
    )
  }
}

export default App
