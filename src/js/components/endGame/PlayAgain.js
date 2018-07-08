import React from 'react'
import { Link } from 'react-router-dom'

export default class PlayAgain extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Link to='/'><button type='submit' id='play-again' className='StandardButton'>Main Menu</button></Link>
        </div>
      </div>
    )
  }
}
