import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import validator from 'email-validator';

const Form_3 = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [type_, setType] = useState("password")
    return (

        <>
            <h1 className='text-xl text-center p-4'>React-forms_3</h1>
            <div className="max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit((data) => { console.log(data); reset() })} className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center">
                    <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
                        <label className="block text-gray-700 text-sm font-bold ">Name</label>
                        <input {...register("name", {
                            required: true,
                            minLength: {
                                value: 3,
                                message: "Name Most Be At Least 3 Letters "
                            }



                        })}
                            style={{ boxShadow: "none" }}
                            type="text"
                            className="appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:border-none"
                        />
                        {errors.name && <span className='text-red-800'> {errors.name.message}</span>}
                    </div>
                    <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
                        <label className="block text-gray-700 text-sm font-bold ">Email</label>
                        <input
                            {...register("email", {

                                validate: (value) => {
                                    return validator.validate(value) ? true : 'Invalid email'
                                }

                            })}
                            style={{ boxShadow: "none" }}
                            type="email"
                            className="appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:border-none"
                        />
                        {errors.email && <span className='text-red-800'>{errors.email.message}</span>}

                    </div>
                    <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded flex justify-between">
                        <div className='w-[80%]'>
                            <label className="block text-gray-700 text-sm font-bold ">Password</label>
                            <input
                                {...register("password", {
                                    required: true, minLength: {
                                        value: 3,
                                        message: "Password Most Be At Least 3 Letters "
                                    },
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[A-Z])/,
                                        message: "Password must include at least one uppercase letter and at least one digit"
                                    }
                                })}
                                style={{ boxShadow: "none" }}
                                type={type_}
                                className="appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700"
                            />
                            {errors.password && <span className='text-red-800'>{errors.password.message}</span>}
                        </div>
                        <div className='w-[20%] items-center flex justify-center'>
                            {type_ == "text" && <IoMdEye className='size-6 mt-6 cursor-pointer' onClick={() => setType("password")} />}
                            {type_ == "password" && <IoMdEyeOff className='size-6 mt-6 cursor-pointer' onClick={() => setType("text")} />}
                        </div>
                    </div>
                    <div className="mb-4 pb-2 text-center w-full">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form_3