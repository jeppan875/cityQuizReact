import React from 'react'
import { Link } from 'react-router-dom'

export default class JoinGame extends React.Component {
  render () {
    return (
      <div>
        <div>
          <p>Enter game key:</p>
          <input type='text' id='gameid' name='answer' />
        </div>
        <div id='join'>
          <Link to='/loading-multiplayer-joiner'> <button type='submit' id='joinBtn' className='StandardButton' >Join game</button></Link>
        </div>
        <p id='joinError' />
      </div>
    )
  }
}
