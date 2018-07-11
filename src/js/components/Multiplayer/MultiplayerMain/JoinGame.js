import React from 'react'

export default class JoinGame extends React.Component {
  render () {
    return (
      <div>
        <div>
          <p>Enter game key:</p>
          <input type='text' id='gameid' name='answer' />
        </div>
        <div id='join'>
          <button type='submit' id='joinBtn' className='StandardButton'>Join game</button>
        </div>
        <p id='joinError' />
      </div>
    )
  }
}
