import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'
import TextSection from '../../components/text-section/TextSection'

// Sections
import ReservationSection from './reservation-section/ReservationSection'

// Main component

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const [isReserviseLoaded, setIsReserviseLoaded] = useState<boolean>(false)

    // Context
    const { setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (isReserviseLoaded) {
            setEntered(false)
        }
    }, [isReserviseLoaded])

    return (
        <>
            <Baner 
                content={'Kup bilet'}
            />
            {
                <Wrapper>
                    <TextSection>
                        Pamiętaj, że skarpetki antypoślizgowe są u nas obowiązkowe, 
                        a opiekunowie z dziećmi do lat 6 wchodzą na jednym bilecie.
                    </TextSection>
                    <ReservationSection
                        setLoaded={setIsReserviseLoaded}
                    />
                    <FormMain/>
                </Wrapper>
            }
        </>
    )
}