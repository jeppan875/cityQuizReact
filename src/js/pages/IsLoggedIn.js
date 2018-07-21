import React from 'react'
import fire from '../../fire'
import { Redirect } from 'react-router'

export default class StartMenu extends React.Component {
  constructor () {
    super()
    this.authListener = this.authListener.bind(this)
    this.state = {
      redirect: false
    }
  }

  componentDidMount () {
    this.authListener()
  }

  authListener () {
    fire.auth().onAuthStateChanged(() => {
      return <Redirect to='/end-game' />
    })
  }
  render () {
    if (this.state.redirect) {

    }
    return (
      <div>
        <p>loading </p>
      </div>
    )
  }
}
