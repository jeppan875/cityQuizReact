import React from 'react'

import SelectGameType from '../components/SelectGameType'
import Header from '../components/Header'

export default class StartMenu extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <SelectGameType />
      </div>
    )
  }
}
