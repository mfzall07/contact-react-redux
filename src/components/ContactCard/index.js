import React from 'react'
import { FaUserAlt, FaCalendar, FaTrash, FaEye } from 'react-icons/fa'

const ContactCard = ({image, name, age, onClickDelete, onClickDetail}) => {

    return (
        <div className='flex items-center justify-between gap-5 border-b py-4 relative'>
            <div className='flex items-center'>
                <img src={image} className='bg-cover rounded-lg w-16 h-16 border'/>
                <div className='px-3 py-1 flex flex-col gap-1'>
                    <div className='flex items-center gap-3'>
                        <FaUserAlt className='text-[#6EED9E]'/>
                        <h1 className='text-[#1C2C2B]'>{name}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCalendar className='text-[#C1121F]'/>
                        <h1 className='text-[#1C2C2B]'>{age} Years Old</h1>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button className='' onClick={onClickDetail}>
                    <FaEye className='text-teal-400 shadow-sm text-xl'/>
                </button>
                <button className='' onClick={onClickDelete}>
                    <FaTrash className='text-[#C1121F] shadow-sm'/>
                </button>
            </div>
        </div>
    )
}

export default ContactCard