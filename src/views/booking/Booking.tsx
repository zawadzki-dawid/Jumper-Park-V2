import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'
import TextSection from '../../components/text-section/TextSection'

// Sections
import ReservationSection, { Props as PropsReservation } from './reservation-section/ReservationSection'

// Main component

type State = PropsReservation

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const [isReserviseLoaded, setIsReserviseLoaded] = useState<boolean>(false)
    const { data } = useFetchContent<State>({ entryId: '99ztlxaC8D6BI6T1acXd' })

    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (data?.isBookingInactive === true) {
            if (entered) {
                setEntered(false)
            }
        } else {
            if (entered && isReserviseLoaded) {
                setEntered(false)
            }
        }
    }, [entered, isReserviseLoaded, data])

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
                        inactiveContent={data?.inactiveContent ?? ''}
                        isBookingInactive={data?.isBookingInactive ?? false}
                    />
                    <FormMain/>
                </Wrapper>
            }
        </>
    )
}