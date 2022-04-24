import flamelinkApp from '../../flamelink'
import { useEffect, useState } from 'react'

export const useFetchURL = (id: string): string | null => {
    // State
    const [url, setUrl] = useState<string | null>(null)

    // Effect
    useEffect(() => {
        fetchUrl()
    })

    const fetchUrl = async () => {
        try {
            const url = await flamelinkApp.storage.getURL({ fileId: id })
            setUrl(url)
        } catch {
            setUrl(null)
        }
    }

    return url
}