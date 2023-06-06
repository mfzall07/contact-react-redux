import React from 'react'

const Card = ({color, title, count, colorText}) => {
  return (
    <div className={`w-full rounded-lg px-10 py-8 ${!color ? 'bg-zinc-300' : color} flex items-center justify-between h-[120px]`}>
        <h1 className={`${colorText} font-bold lg:text-xl uppercase`}>{title}</h1>
        <h1 className={`${colorText} font-bold lg:text-6xl`}>{count}</h1>
    </div>
  )
}

export default Card