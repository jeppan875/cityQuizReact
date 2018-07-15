import React from 'react'
import Question from '../components/singlePlayer/quiz/Question'
// import ReturnToMain from '../components/quiz/ReturnToMain'

export default class Quiz extends React.Component {
  constructor () {
    super()
    window.history.replaceState(null, null, '/')
  }
  render () {
    return (
      <Question />
    )
  }
}
