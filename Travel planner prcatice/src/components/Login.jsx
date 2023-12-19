import React, { useState } from 'react'
import { auth } from '../services/auth';
import {useNavigate} from "react-router-dom"



const Login = ({setIsAuthenticated}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    try {
        const response = await auth.login(email, password);

        if (response.success) {
            setIsAuthenticated(true);
            console.log(("User Logged in successfully"))
            navigate("/")
        } else {
            console.error(response.message)
        }

    } catch(error) {
        console.error("Login error: ", error)
    }
    };

    return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
    )
};

export default Login;

