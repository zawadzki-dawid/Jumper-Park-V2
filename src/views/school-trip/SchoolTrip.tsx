import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import OfferSection, { Props as PropsOffer } from './offer-section/OfferSection'
import GallerySection, { Props as PropsGallery } from './gallery-section/GallerySection'
import DescriptionSection, { Props as PropsDescription } from './description-section/DescriptionSection'

// Main

type State = PropsOffer & PropsGallery & PropsDescription

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

const OfferWrapper = styled.div`
    padding: 30px 0 50px 0;
    box-sizing: border-box;
    background-color: rgba(235, 233, 233, 0.25);
`

export default () => {
    // State
    const { data, error } = useFetchContent<State>({ entryId: 'aDK73iLRiayBvU3MudgK', populate: true })

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
                content={'Grupy zorganizowane'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <DescriptionSection description={data.description}/>
                        <OfferWrapper>
                            <OfferSection
                                offers={data.offers}
                            />
                        </OfferWrapper>
                        <FormMain/>
                        {
                            /* <GallerySection
                            gallery={data.gallery}
                        /> */
                        }
                    </Wrapper>
                )
            }
        </>
    )
}