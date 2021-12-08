import styled from 'styled-components'
import { useEffect, useContext } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import ScenarioSection from './scenario-section/ScenarioSection'
import TextSection from '../../components/text-section/TextSection'
import FormBirthday from '../../components/form/form-birthday/FormBirthday'
import PricelistSection, { Props as PropsPricelist } from './pricelist-section/PricelistSection'
import AdditionsSection, { Props as PropsAdditions } from './additions-section/AdditionsSection'

// Main component

type State = PropsPricelist & PropsAdditions

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

const CardsWrapper = styled.div`
    gap: 40px; 
    display: grid;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: rgba(235, 233, 233, 0.25);
`

export default () => {
    // State
    const {data, error} = useFetchContent<State>('NvSWotCmtbNUEEeKpVvq')

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
                content={'Urodziny'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <TextSection>
                            Przykładamy wielkich starań, by organizować dla Was niezapomniane przyjęcia urodzinowe. Nasza wyszkolona i uśmiechnięta kadra przekaże wszystkim gościom mnóstwo pozytywnej energii oraz miłości do ruchu.
                        </TextSection>
                        <ScenarioSection/>
                        <CardsWrapper>
                            <PricelistSection
                                bundles={data.bundles}
                            />
                            <AdditionsSection
                                additionals={data.additionals}
                            />
                        </CardsWrapper>
                        <FormBirthday/>
                    </Wrapper>
                )
            }
        </>
    )
}