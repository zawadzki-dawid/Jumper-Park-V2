import flamelinkApp from '../../flamelink'
import { useMemo, useState, useEffect } from 'react'
import { FlamelinkImage } from '../../utils/types/FlamelinkImage'
import { extractImageId } from '../../utils/functions/extractImageId'

type GetURLFile = Parameters<typeof flamelinkApp.storage.getURL>[0]

export type GetFilesParams = Parameters<typeof flamelinkApp.storage.getFiles>[0]

type Image = {
    description: string
    image: FlamelinkImage[]
}

type ImageData = {
    url: string
    description: string
}

type FetchData = {
    id: string
    description: string
}

export type Props = {
    gallery: Image[]
    options: GetFilesParams,
    size: GetURLFile['size']
}

export const useFetchURLs = ({
    size,
    gallery,
    options
}: Props) => {
    // State
    const [imagesData, setImagesData] = useState<ImageData[]>([])

    // Method
    const fetchData: FetchData[] = useMemo(() => gallery.map(image => ({
        description: image.description,
        id: extractImageId([{ image: image.image }]) ?? ''
    })), [gallery])

    // Effect
    useEffect(() => {
        fetchUrls()
    }, [fetchData])

    // Method
    const getUrls = async (images: FetchData[]) => Promise.all(Object.values(images).map(image => {
        return new Promise(async (resolve) => {
            const url = await flamelinkApp.storage.getURL({ fileId: image.id, size })
            resolve({
                url: url ?? '',
                description: image.description
            })
        })
    }))

    async function fetchUrls () {
        try {
            const urls = await getUrls(fetchData) as ImageData[]
            setImagesData(urls)
        } catch (err) {
            setImagesData([])
        }
    }

    return imagesData
}