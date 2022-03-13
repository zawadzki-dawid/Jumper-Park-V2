import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

// Components
import Card, { PropsFeed as CardProps } from '../../../components/card/Card'

interface Props {
    feed: CardProps[]
}

const Wrapper = styled.div`
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
                        feed={card}
                        key={index}
                    />
                )
            }
            {
                feed.length === 0 && (
                    <Card
                        feed={null}
                    />
                )
            }
            </Wrapper>
        </Section>
    )
}