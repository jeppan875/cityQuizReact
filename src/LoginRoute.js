import React from 'react'
import { Route } from 'react-router-dom'
import Startmenu from './js/pages/StartMenu'

export default function LoginRoute ({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Startmenu />
        ) : (
          null
        )
      }
    />
  )
}
