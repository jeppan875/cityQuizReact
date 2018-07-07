import React from 'react'
import Question from '../components/quiz/Question'
import ReturnToMain from '../components/quiz/ReturnToMain'

export default class Quiz extends React.Component {
  render () {
    const gameOption = document.querySelector('input[name="location"]:checked')
    if (gameOption != null) {
      return (
        <Question val={gameOption.value} />
      )
    } else {
      return (
        <ReturnToMain />
      )
    }
  }
}
