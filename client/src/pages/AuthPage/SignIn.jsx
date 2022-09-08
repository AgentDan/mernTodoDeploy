import React, { useState } from "react"
import {Link} from "react-router-dom"
import "./AuthPage.scss"
import axios from "axios"

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // .then(response => console.log(response))
        } catch (error){
            console.log(error)
        }
    }

    return (
        <div className="auth-page">
            <h3>Регистрация</h3>
            <form className="form form-login"  onSubmit={e => e.preventDefault()}>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Email"
                            id="email"
                            type="email"
                            className="validate"
                            name="email"
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
                        onClick={registerHandler}
                    >
                        Зарегестрироваться
                    </button>
                    <Link to="/login" className="btn-outline btn-reg">Акаунт уже есть?</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn