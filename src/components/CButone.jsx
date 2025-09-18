import React from 'react'

function CButone(
    {
        childern,
        type="button",
        className = "",
        bgColor = "bg-blue-500",
        textColor ="text-white",
        ...props
    }
) {
  return (
   <button className={`inline-block py-2 ${bgColor} ${textColor} ${className} rounded `}
    type={type}
    {...props}
   >
    {childern}
   </button>
  )
}

export default CButone
