import {Routes, Route} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import "./AuthPage.scss"

const AuthPage = () => {
    return (
        <>
            <div className="container">
                <div className="auth-page">
                    <Routes>
                        <Route path="/login" element={<SignUp/>}/>
                        <Route path="/registration" element={<SignIn/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default AuthPage