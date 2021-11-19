import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import Baner from '../../components/baner/Baner'
import DownloadSection from './download-section/DownloadSection'

// Main

const Wrapper = styled.div`
    margin: 25px 0;
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
                content={'Bezpieczeństwo'}
            />
            <Wrapper>
                <DownloadSection/>
                <FormMain/>
            </Wrapper>
        </>
    )
}