import { FlamelinkImage } from '../types/FlamelinkImage'

type Image = {
    image: FlamelinkImage[]
}

export function extractImageId (images: Image[]): string | null {
    const [obj] = images
    if (!obj) {
        return null
    }
    const [image] = obj.image
    if (!image) {
        return null
    }
    const { segments } = image._delegate._key.path
    return segments[segments.length - 1] ?? null
}