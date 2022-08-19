import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

type Asterix = {
    asterix: string
}

export type Props = {
    asterixes: Asterix[]
}

const AsterixWrapper = styled.div`
    row-gap: 8px;
    display: grid;
    width: fit-content;

    > p {
        font-weight: 400;
        font-size: 1.6rem;
        font-style: italic;
    }
`

export default ({
    asterixes
}: Props) => {
    return (
        <Section>
            <AsterixWrapper>
            {
                asterixes.map((asterix, key) => {
                    return (
                        <p
                            key={key}
                        >
                            { asterix.asterix }
                        </p>
                    )
                })
            }
            </AsterixWrapper>
        </Section>
    )
}