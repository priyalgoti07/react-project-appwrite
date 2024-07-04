import React, { useState } from 'react'
import { Link, matchPath, useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwirte/auth'
import { useForm } from 'react-hook-form'
import { login as authlogin } from '../Store/authSlice'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const loginSubmit = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authlogin(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <Logo width={"100%"} />
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>sign in to your account</h2>
            <p className='mt-2 text-center text-base text-black/60 '>
                Don&apos;t have any account?&nbsp;
                <Link to="/signup"
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                >
                    Sign UP
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'></p>}
            <form onSubmit={handleSubmit(loginSubmit())} className='mt-8'>
                <div>
                    <Input
                        label="Email: "
                        placeHolder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatten: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                    "Email address must be a valid address"

                            }
                        })
                        }
                    ></Input>
                    <Input
                        label="Password :"
                        type="password"
                        placeHolder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    >
                    </Input>
                    <Button type='submit' className='w-full'>Sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default Login