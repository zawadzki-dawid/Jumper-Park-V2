import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import ReservationSection from './reservation-section/ReservationSection'

// Main component

const Wrapper = styled.div`

`

export default () => {
    // Context
    const { setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        setEntered(false)
    }, [])

    return (
        <>
            <Baner 
                content={'Kup bilet'}
            />
            {
                <Wrapper>
                    <ReservationSection/>
                    <FormMain/>
                </Wrapper>
            }
        </>
    )
}