import React from 'react'
import { MdOutlineLogout } from 'react-icons/md'
import { RiContactsBook2Fill } from 'react-icons/ri'

const Sidebar = () => {
    return (
        <div className='w-[100px] h-full flex flex-col items-center justify-between pt-16'>
            <RiContactsBook2Fill className='text-[#6EED9E] text-3xl'/>
            <div className='border-t h-[100px] w-full flex items-center justify-center'>
                <MdOutlineLogout className='text-[#C1121F] text-3xl'/>
            </div>
        </div>  
    )
}

export default Sidebar