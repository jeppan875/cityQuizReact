import React from 'react'

export default class ScoreRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.nr}</td>
        <td>{this.props.player}</td>
        <td>{this.props.score}</td>
      </tr>
    )
  }
}
