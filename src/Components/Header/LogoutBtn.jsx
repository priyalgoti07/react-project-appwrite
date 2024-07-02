import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwirte/auth'
import { logout } from '../../Store/authSlice'

const LogoutBtn = () => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
            .then(
                dispatch(logout())
            )
            .finally()
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
    )
}

export default LogoutBtn