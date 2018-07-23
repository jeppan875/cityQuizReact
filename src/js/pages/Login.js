import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import * as firebase from 'firebase'

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      var isNewUser = authResult.additionalUserInfo.isNewUser
      console.log(isNewUser)
      window.history.replaceState(null, null, '/')
      window.location.reload()
      return false
    },
    uiShown: function () {
     // document.getElementById('loader').style.display = 'none'
    }
  },
  // Popup signin flow rather than redirect flow.
  signInFlow: 'redirect',
  // credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}
export default class Login extends React.Component {
  constructor () {
    super()
    console.log('render login')
  }
  render () {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
  }
}
