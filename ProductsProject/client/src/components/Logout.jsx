import React, { useContext, useEffect } from 'react'
import Loading from '../shared/Loading'
import UserContext from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { LOGOUT_URL } from '../routes/urls'
import axios from 'axios'

const Logout = () => {
    const { setUser } = useContext(UserContext)
    const nav = useNavigate()
    const logout = async () => {
        setUser(null)
        axios.post(LOGOUT_URL);
        nav("/")
    }
    useEffect(()=>{
        logout()
    },[])
    return (
        <Loading on={true} />
    )
}

export default Logout