import React from 'react'
import { authService } from '../appwrite/auth';

const Signout = () => {
    const logoutFunc = async () => {
        const logout = await authService.logout()
        console.log(logout);


        if (!logout) {
            window.location.href = '/'
        }

    }
    logoutFunc()
    return (
        <>
        </>
    )
}

export default Signout