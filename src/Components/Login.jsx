import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../Store/authSlice'
import {Button, Input} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwirte/auth'
const Login = () => {
    return (
        <div>Login</div>
    )
}

export default Login