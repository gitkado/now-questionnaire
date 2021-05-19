import {Auth} from "aws-amplify";
import React from "react";
import Sidebar from "../components/Sidebar";

function QuestionnaireHome() {
    // TODO: any使いたくないよな
    const [user, setUserState] = React.useState<any>()

    // TODO: たぶん書き方ミスってる
    // React Hook React.useEffect has a missing dependency: 'user'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    React.useEffect(() => {
        const currentUser = Auth.currentAuthenticatedUser()
        console.log(currentUser)
        setUserState(currentUser)
        // TODO: 同じ値(Promise)だと思ってたけどundefinedになってる
        console.log(user)
    }, [])

    return (
        <>
            {/* TODO: Sidebarでuser表示する */}
            <Sidebar/>
            <h1>QuestionnaireHome</h1>
            {/* TODO: user.username */}
            <div>Hello, {}</div>
        </>
    )
}

export default QuestionnaireHome;