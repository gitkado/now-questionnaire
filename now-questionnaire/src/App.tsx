import React from 'react'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import {AmplifyAuthenticator, AmplifySignIn, AmplifySignUp} from "@aws-amplify/ui-react";
import QuestionnaireHome from "./pages/QuestionnaireHome";

Amplify.configure(awsconfig);

function App() {
    return (
        <>
            <AmplifyAuthenticator>
                <AmplifySignUp
                    slot="sign-up"
                    formFields={[
                        {type: "username"},
                        {type: "password"},
                        {type: "email"},
                    ]}
                />

                <AmplifySignIn
                    slot="sign-in"
                    headerText="Sign in to your account"
                />

                <div className="App">
                    <QuestionnaireHome/>
                </div>

            </AmplifyAuthenticator>
        </>
    )
}

export default App
