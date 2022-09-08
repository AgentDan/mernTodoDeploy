import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"

import "./AuthPage.scss"

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const {login} = useContext(AuthContext)

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    login(response.data.token, response.data.userId)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth-page">
            <h3>Авторизация</h3>
            <form className="form form-login" onSubmit={e => e.preventDefault()}>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            className="validate"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="input-field col s12">
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            className="validate"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="row">
                    <button
                        className="wawes-effect wawes-light btn blue"
                        onClick={loginHandler}
                    >
                        Войти
                    </button>
                    <Link to="/registration" className="btn-outline btn-reg">Нет акаунта ?</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp