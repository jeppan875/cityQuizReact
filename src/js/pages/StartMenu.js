import React from 'react'

import SelectGameType from '../components/startmenu/SelectGameType'
import Header from '../components/startmenu/Header'

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
