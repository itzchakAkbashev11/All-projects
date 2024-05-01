import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { productValidation } from '../../validations/productValidation';
import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const EditProduct = ({ defaultValues, closeEditMode, updateProduct }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues,
        resolver: zodResolver(productValidation),
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });
    const onVclick =()=>{
        handleSubmit(updateValues)()
    }
    const updateValues=(data)=>{
        updateProduct(data);
        closeEditMode()
    }
    return (
        <form  className="flex gap-1 w-full justify-between items-center">
            <input className='w-16 outline-none border px-2 py-1' {...register("amount", { valueAsNumber: true })} type='number' />
            <input placeholder={errors.product_name && errors.product_name.message} className='outline-none border px-2 py-1' {...register("product_name")} type='text' />
            <div className='flex gap-3'>
                <MdCancel onClick={closeEditMode} color='red' cursor="pointer" size={28} />
                <FaCircleCheck onClick={onVclick} color='green' cursor="pointer" className='mt-0.5' size={24} />
            </div>
        </form>
    )
}

export default EditProduct