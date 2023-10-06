import styled from 'styled-components'
import {useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import BannerSection from './banner-section/BannerSection'
import OfferSection from '../school-trip/offer-section/OfferSection'

type JumpingSchoolOffer = {
    title: string
    columns: Array<{
        offer: string
        price: string
    }>
}

// Main
type State = {
    jumpingSchoolDesc: string
    jumpingSchoolOffers: JumpingSchoolOffer[]
    jumpingSchoolBanner: Array<{ url: string }>
    jumpingSchoolStatute: Array<{ url: string }>
}

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
                content={'Skoczna szkoła'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <BannerSection statute={data.jumpingSchoolStatute[0]?.url ?? ''} image={data.jumpingSchoolBanner[0]?.url ?? ''} content={data.jumpingSchoolDesc}/>
                        <OfferWrapper>
                            <OfferSection
                                offers={data.jumpingSchoolOffers}
                            />
                        </OfferWrapper>
                        <FormMain/>
                    </Wrapper>
                )
            }
        </>
    )
}