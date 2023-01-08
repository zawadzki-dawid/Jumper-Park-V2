import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

export interface Props {
    description: string
}


const DescriptionStyled = styled.div`
  display: grid;
  row-gap: 40px;
  max-width: 850px;
  font-weight: 700;
  font-size: 2.0rem;
  
  ul {
    display: grid;
    row-gap: 15px;
    font-weight: 500;
    font-size: 1.8rem;
  }
  
  * {
    
  }
`

const DescriptionSection = ({
    description
}: Props) => {
    return <Section>
        <DescriptionStyled dangerouslySetInnerHTML={{__html: description}}/>
    </Section>
}

export default DescriptionSection