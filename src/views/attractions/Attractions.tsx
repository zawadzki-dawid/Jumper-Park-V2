import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import AttractionsSection from './attractions-section/AttractionsSection'

// Main
const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
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
                content={'Atrakcje'}
            />
            <Wrapper>
                <AttractionsSection
                    attractions={[{ name: 'Zbijak' }]}
                />
                <FormMain/>
            </Wrapper>
        </>
    )
}