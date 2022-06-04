import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import Baner from '../../components/baner/Baner'
import DownloadSection from './download-section/DownloadSection'
import GallerySection, { Props as PropsGallery } from './gallery-section/GallerySection'

// Main

type Props = PropsGallery

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const { data, error } = useFetchContent<Props>('0e1UtavmTxxXTwem5BJb')

    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (entered) {
            setEntered(false)
        }
    }, [entered])

    return (
        <>
            <Baner
                content={'Bezpieczeństwo'}
            />
            <Wrapper>
                <DownloadSection/>
                <FormMain/>
                {
                    !error && data && (
                        <GallerySection
                            gallery={data.gallery}
                        />
                    )
                }
            </Wrapper>
        </>
    )
}