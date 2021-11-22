import styled from 'styled-components'

// Components
import Section from '../section/Section'
import Attraction from '../attraction/Attraction'

// Assets
import Attraction1 from '../../assets/images/attractions/attraction.jpg'

// Data

const attractions = [
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    },
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    },
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    },
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    },
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    },
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    },
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    },
    {
        alt: 'atrakcja',
        image: Attraction1,
        name: 'Wymiatacz'
    }
]

// Main

const Wrapper = styled.div`
    padding: 0 20px;
    gap: 30px;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    justify-content: space-between;
`

export default () => {
    return (
        <Section
            text={'Atrakcje'}
        >
            <Wrapper>
            {
                attractions.map((attraction) => 
                    <Attraction
                        {...attraction}
                    />
                )
            }
            </Wrapper>
        </Section>
    )
}