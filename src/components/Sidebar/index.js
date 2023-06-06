import React from 'react'
import { MdOutlineLogout } from 'react-icons/md'
import { RiContactsBook2Fill } from 'react-icons/ri'

const Sidebar = () => {
    return (
        <div className='lg:w-[100px] w-full h-full flex flex-row lg:flex-col items-center justify-between px-4 lg:px-0 py-4 lg:py-0 lg:pt-16'>
            <RiContactsBook2Fill className='text-[#6EED9E] text-3xl'/>
            <div className='lg:border-t lg:h-[100px] lg:w-full flex items-center justify-center'>
                <MdOutlineLogout className='text-[#C1121F] text-2xl lg:text-3xl'/>
            </div>
        </div>  
    )
}

export default Sidebar