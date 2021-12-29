import styled from 'styled-components'
import { useEffect, useContext } from 'react'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'

// Sections
import TextSection from '../../components/text-section/TextSection'
import ReservationSection from './reminders-section/RemindersSection'

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
                content={'Dziękujemy'}
            />
            <Wrapper>
                <TextSection>
                    Zanim się u nas pojawisz, prosimy zapoznaj się z poniższymi informacjami:
                </TextSection>
                <ReservationSection/>
            </Wrapper>
        </>
    )
}