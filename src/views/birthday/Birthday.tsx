import styled from 'styled-components'
import { useFetchContent } from '../../utils/hooks/fetch'

// Components
import Baner from '../../components/baner/Baner'
import ScenarioSection from './scenario-section/ScenarioSection'
import PricelistSection from './pricelist-section/PricelistSection'

// Main component

const Wrapper = styled.div`

`

export default () => {
    // State
    const {data, error, loading} = useFetchContent('NvSWotCmtbNUEEeKpVvq')

    return (
        <>
            <Baner
                content={'Urodziny'}
            />
            {
                !error && !loading && (
                    <Wrapper>
                        <p>
                            Przykładamy wielkich starań, by organizować dla Was niezapomniane przyjęcia urodzinowe. 
                            Nasza wyszkolona i uśmiechnięta kadra przekaże wszystkim gościom mnóstwo pozytywnej energii oraz miłości do ruchu.
                        </p>
                        <ScenarioSection/>
                        <PricelistSection/>
                    </Wrapper>
                )
            }
        </>
    )
}