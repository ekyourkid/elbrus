import React, { ReactNode } from 'react'

interface IPropsButton {
    id: string
    children: ReactNode
    variant?: 'primary' | 'bordered' | 'ghost' | 'link'
}

const styles = {
    primary: `bg-delima-primary text-white hover:bg-blue-600`,
    bordered: `text-delima-primary bg-gray-100 border-2 border-delima-primary hover:bg-blue-50`,
    ghost: `text-delima-primary bg-gray-100 hover:bg-gray-200`,
    link: `text-delima-primary hover:text-blue-500`,
}

const Button: React.FC<IPropsButton> = ({ id, variant = 'primary', children }) => {
    return (
        <button id={id} className={`px-4 p-1.5 rounded-lg font-semibold ${styles[variant]}`}>{children}</button>
    )
}

export default Button