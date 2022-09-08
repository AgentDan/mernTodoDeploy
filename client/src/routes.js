import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import SignUp from "./pages/AuthPage/SignUp"
import SignIn from "./pages/AuthPage/SignIn"

export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/login" element={<SignUp/>}/>
                <Route path="/registration" element={<SignIn/>}/>
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        </>
    )
}