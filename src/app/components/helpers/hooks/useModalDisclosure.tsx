import { useState } from 'react'

const useModalDisclosure = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const open = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }

    return { isOpen, open, close }

}

export default useModalDisclosure