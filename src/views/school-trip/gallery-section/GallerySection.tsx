import Section from '../../../components/section/Section'
import Gallery, { Props as GalleryProps } from '../../../components/gallery/Gallery'

// Main

export type Props = {
    gallery: GalleryProps['gallery']
}

export default ({
    gallery
}: Props) => {
    return (
        <Section
            text={'Galeria'}
        >
            <Gallery
                gallery={gallery}
                options={{}}
            />
        </Section>
    )
}