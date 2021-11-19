import styled from 'styled-components'
import { useEffect, useContext } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import ScenarioSection from './scenario-section/ScenarioSection'
import PricelistSection, { Props as PropsPricelist } from './pricelist-section/PricelistSection'

// Main component

type State = PropsPricelist

const Wrapper = styled.div`

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
                        <p>
                            Przykładamy wielkich starań, by organizować dla Was niezapomniane przyjęcia urodzinowe. 
                            Nasza wyszkolona i uśmiechnięta kadra przekaże wszystkim gościom mnóstwo pozytywnej energii oraz miłości do ruchu.
                        </p>
                        <ScenarioSection/>
                        <PricelistSection
                            bundles={data.bundles}
                            additionals={data.additionals}
                        />
                    </Wrapper>
                )
            }
        </>
    )
}