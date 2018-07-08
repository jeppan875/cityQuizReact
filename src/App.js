import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import StartMenu from './js/pages/StartMenu'
import Quiz from './js/pages/Quiz'
import { Route } from 'react-router'
import LoadQuiz from './js/components/quiz/LoadingQuiz'

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/' exact component={StartMenu} />
        <Route path='/quiz' exact component={Quiz} />
        <Route path='/load-quiz' exact component={LoadQuiz} />
      </div>
    )
  }
}

export default App
