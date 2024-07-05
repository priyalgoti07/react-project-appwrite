import React, { useState } from 'react'
import authService from '../appwirte/auth'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../Store/authSlice'
import { Button, Logo, Input } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Signup = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const Data = await authService.getCurrentUser(userData)
                if (Data) dispatch(login(Data))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100]'>
                        <Logo width={"100%"} />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign uo to create</h2>
                <p className='mt-2 text-center text-base text-black/60 '>
                    Already have an account?&nbsp;
                    <Link to="/login"
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name:"
                            placeplaceHolder="Enter your full name"
                            {...register("name", {
                                required: true
                            })}

                        />
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
                            })}
                        />
                        <Input
                            label="Passwor:"
                            placeHolder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button type="submit" className='w-full'>Create Account</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup
