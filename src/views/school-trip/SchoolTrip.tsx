import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import TextSection from '../../components/text-section/TextSection'
import OfferSection, { Props as PropsOffer } from './offer-section/OfferSection'

// Main

type State = PropsOffer

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
    const { data, error } = useFetchContent<State>('aDK73iLRiayBvU3MudgK')

    // Context
    const { setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (!data) {
            return
        }
        setEntered(false)
    }, [data])

    return (
        <>
            <Baner 
                content={'Wycieczka szkolna'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <TextSection>
                            Dbamy o Wasze bezpieczeństwo! 
                            Na prośbę grupy min. 30 osób możemy udostępnić Park na wyłączność. 
                            Wystarczy, że ustalimy dogodny termin, a będziecie mieć Jumper Park tylko dla siebie!
                        </TextSection>
                        <OfferWrapper>
                            <OfferSection
                                offers={data.offers}
                            />
                        </OfferWrapper>
                        <FormMain/>
                    </Wrapper>
                )
            }
        </>
    )
}