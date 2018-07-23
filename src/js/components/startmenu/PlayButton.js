import React from 'react'
import { Redirect } from 'react-router'

export default class PlayButton extends React.Component {
  constructor () {
    super()
    this.state = {
      clickedstart: false
    }
  }
  clickStart (e) {
    e.preventDefault()
    this.setState({clickedstart: true})
  }

  render () {
    if (this.state.clickedstart) {
      return <Redirect to='/load-quiz' />
    }
    return (
      <div id='btn'>
        <button type='submit' onClick={this.clickStart.bind(this)} id='start' className='StandardButton btn-block'>Play</button>
      </div>
    )
  }
}
