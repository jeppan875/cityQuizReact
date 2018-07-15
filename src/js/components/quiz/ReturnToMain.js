import React from 'react'
import { Link } from 'react-router-dom'

export default class ReturnToMain extends React.Component {
  render () {
    return (
      <div>
        <p>Not accessible anymore!</p>
        <div>
          <Link to='/'><button type='submit' id='notAccess' className='StandardButton'>Main Menu</button></Link>
        </div>
      </div>
    )
  }
}
