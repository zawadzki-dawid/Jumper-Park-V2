import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

// Main

const Wrapper = styled.div`
    height: 60vh;
    border: var(--border-width) solid var(--black);

    iframe {
        border: 0;
        width: 100%;
        height: 100%;
        display: block;
    }
`

export default () => {
    return (
        <Section>
            <Wrapper>
                <iframe
                    id={'booking'}
                    title={'booking'}
                    src={'https://reservise.com/online/fitness/122'}
                />
            </Wrapper>
        </Section>
    )
}