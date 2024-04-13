import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth';
import { handleErrors } from '../func/AllFunc';
import { login } from '../../data/slices/authSlice';

export const AuthUser = ({ children, authentication = true }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await authService.getCurrentUser()
                dispatch(login(userData))
                if (userData == null && authentication && authStatus !== authentication) {
                    navigate("/signup")
                }
                setLoader(false)
            } catch (error) {
                handleErrors({ message: error.message })
            }
        }
        getUser()
    }, [authStatus, authentication, dispatch, navigate])

    return (
        loader ? <h1>Loading...</h1> : <>{children}</>
    )
}

export default AuthUser