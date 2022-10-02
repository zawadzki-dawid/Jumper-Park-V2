import flamelinkApp from '../../flamelink'
import { useEffect, useState } from 'react'

type Files = Record<string, {
    id: string
}>

type Return = {
    url: string | null
    isFetching: boolean
}

type GetURLFile = Parameters<typeof flamelinkApp.storage.getURL>[0]
export type GetFilesParams = Parameters<typeof flamelinkApp.storage.getFiles>[0]

export const useFetchURL = (id: string, size?: GetURLFile['size']): Return => {
    // State
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const [url, setUrl] = useState<string | null>(null)

    // Effect
    useEffect(() => {
        fetchUrl()
    }, [])

    const fetchUrl = async () => {
        try {
            setIsFetching(true)
            const url = await flamelinkApp.storage.getURL({ fileId: id, ...size && { size } })
            setUrl(url)
        } catch {
            setUrl(null)
        } finally {
            setIsFetching(false)
        }
    }

    return {
        url,
        isFetching
    }
}

export const useFetchURLs = (options: GetFilesParams, size: GetURLFile['size']): string[] => {
    // State
    const [urls, setUrls] = useState<string[]>([])
    
    // Effect
    useEffect(() =>{
        fetchUrls()
    }, [])

    const getUrls = async (files: Files) => Promise.all(Object.values(files).map(file => {
        return flamelinkApp.storage.getURL({ fileId: file.id, size })
    }))

    async function fetchUrls () {
        try {
            const files = await flamelinkApp.storage.getFiles(options) as Files
            const urls = await getUrls(files)
            setUrls(urls)
        } catch (err) {
            setUrls([])
        }
    }

    return urls
}
