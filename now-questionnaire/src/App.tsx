import React from 'react'
import Amplify from 'aws-amplify'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from './aws-exports'
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
  const [authState, setAuthState] = React.useState<AuthState | null>()
  const [user, setUserState] = React.useState<any>()

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUserState(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
        ]}
      />
    </AmplifyAuthenticator>
  )
}

export default App
