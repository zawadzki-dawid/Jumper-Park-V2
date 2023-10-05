import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

interface IProps {
    image: string
}

const Wrapper = styled.div`
  & > img {
    width: 100%;
  }
`

export default ({ image }: IProps) => {
    return <Section>
        <Wrapper>
            <img alt={'Skoczna szkoła'} src={image}/>
        </Wrapper>
    </Section>
}