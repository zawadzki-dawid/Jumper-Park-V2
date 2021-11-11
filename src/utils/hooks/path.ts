import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'

export const useCurrentPath = () => {
    // State
    const [currentPath, setCurrentPath] = useState<string>('')

    // Location
    const location = useLocation()

    // Effect
    useEffect(() => {
        const path = location.pathname.split('/')[1]
        setCurrentPath(path)
    }, [location.pathname])

    return currentPath
}