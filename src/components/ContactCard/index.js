import React from 'react'
import { FaUserAlt, FaCalendar, FaTrash, FaEye } from 'react-icons/fa'

const ContactCard = ({image, name, age, onClickDelete, onClickDetail}) => {

    return (
        <div className='bg-white border rounded-lg shadow-lg flex flex-col gap-2 h-72'>
            <div className='w-full h-3/4 rounded-t-lg bg-cover relative' style={{ backgroundImage : `url(${image})`}}>
                <button className='absolute right-10 top-3' onClick={onClickDetail}>
                    <FaEye className='text-teal-400 shadow-sm text-xl'/>
                </button>
                <button className='absolute right-3 top-3' onClick={onClickDelete}>
                    <FaTrash className='text-[#C1121F] shadow-sm'/>
                </button>
            </div>
            <div className='px-3 py-1 flex flex-col gap-1'>
                <div className='flex items-center gap-3'>
                    <FaUserAlt className='text-gray-700'/>
                    <h1 className='text-gray-700'>{name}</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <FaCalendar className='text-gray-700'/>
                    <h1 className='text-gray-700'>{age} Years Old</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactCard