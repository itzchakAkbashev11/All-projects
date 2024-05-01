import axios from 'axios'
import React, { useContext, useState } from 'react'
import { LOGIN_URL } from '../routes/urls'
import { useNavigate } from 'react-router-dom'
import { getAxiosStatus } from '../utils/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidation } from '../validations/authValidation'
import Loading from '../shared/Loading'
import UserContext from '../context/userContext'

const Login = () => {
    const {setUser}=useContext(UserContext)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginValidation),
        mode: "onChange"
    });
    const nav = useNavigate()
    const login = async (data) => {
        setLoading(true)
        try {
            const resp = await axios.post(LOGIN_URL, data)
            setUser(resp.data.user)
            setLoading(false)
            nav("/")
        } catch (error) {
            setLoading(false)
            const status = getAxiosStatus(error)
            if (status == 404) setError("user not found")
            else if (status == 401) setError("wrong password")
            else setError("error")
        }
    }
    return (
        <>
            <Loading on={loading} />
            <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit(login)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("email")}
                        />
                        <div className='h-2'>
                            <span className='text-red-600'>{errors?.email?.message}
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("password")}
                        />
                        <div className='h-2'>
                            <span className='text-red-600'>{errors?.password?.message}
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
                    >
                        Login
                    </button>
                    {error && <span className='text-red-600'>{error}</span>}
                </form>
            </div>
        </>
    )
}

export default Login