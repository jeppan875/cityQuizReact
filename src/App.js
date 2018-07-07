import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import StartMenu from './js/pages/StartMenu'
import Quiz from './js/pages/Quiz'
import { Route } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <Route path='/' exact component={StartMenu} />
        <Route path='/quiz' exact component={Quiz} />
      </div>
    )
  }
}

export default App
