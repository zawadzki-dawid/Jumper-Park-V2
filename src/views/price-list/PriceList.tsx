import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import PricelistSection, { Props as PropsPriceList } from './price-list-section/PriceListSection'

// Data

const SECTION_SUBPATH = '/cennik'

// Main component

type State = PropsPriceList

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const { data, error } = useFetchContent<State>('czfcTJsmRa8oDM33ULSv')

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
                content={'Cennik'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <PricelistSection
                            sections={data.sections}
                            subpath={SECTION_SUBPATH}
                        />
                        <FormMain/>
                    </Wrapper>
                )
            }
        </>
    )
}