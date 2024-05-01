import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { REGISTER_URL } from '../routes/urls'
import { getAxiosStatus } from '../utils/utils'
import { useNavigate } from 'react-router-dom'
import Loading from '../shared/Loading'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerValidation } from '../validations/authValidation'


const Signup = () => {
    const { register, handleSubmit,setError, formState: { errors,isSubmitting } } = useForm({
        resolver: zodResolver(registerValidation),
        mode: "onSubmit",
        reValidateMode:"onChange"
    });
    const nav = useNavigate()
    const signup = async (data) => {
        try {
            await axios.post(REGISTER_URL, data)
            nav("/login")
        } catch (error) {
            if (getAxiosStatus(error) == 409) {
                setError("error", { message: "email is already registered" })
            }
            else {
                setError("error", { message: "network error" })
            }
        }
    }
    return (
        <>
            <Loading on={isSubmitting} />
            <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <form  onSubmit={handleSubmit(signup)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("name")}
                        />
                        {errors.name &&
                            <span className='text-red-600'>{errors.name.message}
                            </span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("email")}
                        />
                        {errors.email &&
                            <span className='text-red-600'>{errors.email.message}
                            </span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("password")}
                        />
                        {errors.password &&
                            <span className='text-red-600'>{errors.password.message}
                            </span>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                    {errors.error && <span className='text-red-600'>{errors.error.message}</span>}
                </form>
            </div>
        </>
    )
}

export default Signup