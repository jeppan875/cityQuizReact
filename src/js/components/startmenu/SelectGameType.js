import React from 'react'
import { Redirect } from 'react-router'
import * as QuizAction from '../../actions/QuizActions'

export default class SelectGameType extends React.Component {
  constructor () {
    super()
    this.state = {
      clickedstart: false
    }
  }
  clickStart (e) {
    e.preventDefault()
    let value = e.target
    console.log(value.gametype.value)
    QuizAction.gameType(value.gametype.value)
    this.setState({clickedstart: true})
  }

  render () {
    if (this.state.clickedstart) {
      return <Redirect to='/load-quiz' />
    }
    return (
      <form onSubmit={this.clickStart.bind(this)}>
        <div id='gameoption'>
          <div>
            <input type='radio' className='option-input radio' id='five-questions' name='gametype' value='5 10000' defaultChecked />
            <label htmlFor='five-questions'>Small</label>
          </div>
          <div>
            <input type='radio' className='option-input radio' id='ten-questions' name='gametype' value='10' />
            <label htmlFor='ten-questions'>Medium</label>
          </div>
          <div>
            <input type='radio' className='option-input radio' id='twenty-questions' name='gametype' value='20' />
            <label htmlFor='twenty-questions'>Grand</label>
          </div>
          <div>
            <input type='radio' className='option-input radio' id='hundred-points' name='gametype' value='30 100' />
            <label htmlFor='hundred-points'>100 points</label>
          </div>
          <div>
            <input type='radio' className='option-input radio' id='twohundred-points' name='gametype' value='30 200' />
            <label htmlFor='twohundred-points'>200 points</label>
          </div>
          <div>
            <input type='radio' className='option-input radio' id='threehundred-points' name='gametype' value='30 300' />
            <label htmlFor='threehundred-points'>300 points</label>
          </div>
        </div>
        <div id='btn'>
          <button type='submit' value='submit' id='start' className='StandardButton'>Start</button>
        </div>
      </form>
    )
  }
}
