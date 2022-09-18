import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Components
import Section from '../../../components/section/Section'

// Attraction

interface PropsAttraction {
    name: string
}

const AttractionStyled = styled(Link)`
    
`

const Attraction = ({
    name
}: PropsAttraction) => {
    return (
        <AttractionStyled
            to={'/atrakcje/xd'}
        >
            { name }
        </AttractionStyled>
    )
}

// Main

interface Props {
    attractions: PropsAttraction[]
}

const Wrapper = styled.div`
    
`

export default ({
    attractions
}: Props) => {
    return (
        <Section>
            <Wrapper>
            {
                attractions.map((attraction, index) =>
                    <Attraction
                        key={index}
                        name={attraction.name}
                    />
                )
            }
            </Wrapper>
        </Section>
    )
}