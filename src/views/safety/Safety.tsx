import styled from 'styled-components'

// Sections
import Baner from '../../components/baner/Baner'
import DownloadSection from './download-section/DownloadSection'

const Wrapper = styled.div`
    margin: 25px 0;
`

export default () => {
    return (
        <>
            <Baner
                content={'Bezpieczeństwo'}
            />
            <Wrapper>
                <DownloadSection/>
            </Wrapper>
        </>
    )
}