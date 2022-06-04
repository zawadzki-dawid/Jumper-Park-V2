import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'
import { useFetchContents } from '../../utils/hooks/fetchSchema'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import GallerySection, { Props as PropsGallery } from './gallery-section/GallerySection'
import ClassesSection, { SectionData as PropsClasses } from './classes-section/ClassesSection'

// Data

const SECTION_SUBPATH = '/zajecia'

// Main component

type State = PropsClasses

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const { data, error } = useFetchContents<State>('zajecia')
    const { data: galleryData, error: galleryError } = useFetchContent<PropsGallery>('aQagIBRfNDAW26giBiSk')

    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (data && entered) {
            setEntered(false)
        }
    }, [data, entered])

    return (
        <>
            <Baner
                content={'Zajęcia'}
            />
                <Wrapper>
                {
                    !error && data && (
                        <>
                            <ClassesSection
                                sections={data}
                                subpath={SECTION_SUBPATH}
                            />
                            <FormMain/>
                        </>
                    )
                }
                {
                    !galleryError && galleryData && (
                        <GallerySection
                            gallery={galleryData.gallery}
                        />
                    )
                }
                </Wrapper>
        </>
    )
}