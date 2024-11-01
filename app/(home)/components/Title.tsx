import React from 'react'

export default function Title({text, className}:{text:string, className?:string}) {
  return (
    <div className={className}>
        <h1 className="text-3xl font-bold pb-[10px] transition:all">
            {text}
        </h1>
        <div className="w-20 h-1 bg-purple-300 rounded-full"></div>
    </div>
  )
}
