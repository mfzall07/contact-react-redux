import React from 'react'

const Button = ({onClick, title, color}) => {
  return (
    <button onClick={onClick} className={`${color} rounded-lg shadow-sm py-2 px-2 w-full`}>
        <h1 className='text-white font-semibold'>{title}</h1>
    </button>
  )
}

export default Button