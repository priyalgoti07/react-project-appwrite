import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'blg-blue-600',
    texColor = 'text-white',
    className = "",
    ...props
}) => {
    return (
        <button className={`px-6 py-2 rounded-lg ${bgColor} ${texColor} ${className}`} {...props}>{children}</button>
    )
}

export default Button