import React from 'react'
import { BsImage } from 'react-icons/bs'
import { MdModeEditOutline } from 'react-icons/md'

const InputField = ({value, placeholder, fieldTitle, fieldType, image, onChange}) => {

    return (
        <div>
            {fieldType === 'file' ?
            <div className='w-full'>
                <h1 className='text-[#737373] text-[13px] font-[500] mb-[7px]'>{fieldTitle}</h1>
                <label htmlFor='upload-image'>
                    <div className='w-[105px] h-[105px] border rounded-[12px] bg-[#C6C6C6] flex flex-col items-center justify-center bg-cover relative' style={{ backgroundImage: `url(${!image ? null : image})` }}>
                        <BsImage className='text-2xl text-[#EDEDED]'/>
                        <div className='absolute bg-[#F9F9F9] border border-[#EBEBEB] w-[38px] h-[38px] rounded-full -bottom-3 -right-4 flex items-center justify-center'>
                            <MdModeEditOutline/>
                        </div>
                    </div>
                    <input disabled type='file' id='upload-image' onChange={onChange}  className='rounded-[12px] outline-none border border-[#E3E8F1] w-full px-[20px] py-[15px] hidden' required/>
                </label>
            </div>
            :
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#737373] text-sm font-semibold'>{fieldTitle}</h1>
                <input value={value} onChange={onChange} type={fieldType} placeholder={placeholder} className='border-b w-full appearance-none px-2 py-2 outline-none'/>
            </div>
            }
        </div>
    )
}

export default InputField