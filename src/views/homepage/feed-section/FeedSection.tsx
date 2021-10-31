import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

// Components
import Card, { Props as CardProps } from '../../../components/card/Card'

interface Props {
    feed: CardProps[]
}

const Wrapper = styled.div`
    width: 90%;
    display: grid;
    row-gap: 30px;
`

export default ({
    feed
}: Props) => {
    return (
        <Section
            text={'Aktualności'}
        >
            <Wrapper>
            {
                feed.map((card, index) =>
                    <Card
                        {...card}
                        key={index}
                    />
                )
            }
            </Wrapper>
        </Section>
    )
}