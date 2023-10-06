import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

interface IProps {
    image: string
    content: string
    statute: string
}

const Wrapper = styled.div`
  gap: 32px;
  display: grid;
  font-size: 16px;

  & a {
    color: black;
    display: block;
    width: fit-content;
    padding: 12px 0;
    margin-top: 12px;
  }

  @media only screen and (min-width: 1024px) {
    gap: 50px;
    font-size: 18px;
    grid-template-columns: 1fr 1fr;
  }
`

const ImageWrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  
  & > img {
    width: 100%;
  }
`

export default ({ image, statute, content }: IProps) => {
    return <Section>
        <Wrapper>
            <div>
                <div dangerouslySetInnerHTML={{ __html: content }}/>
                <a target={'_blank'} rel={'noopener'} href={statute}>Pobierz regulamin</a>
            </div>
            <ImageWrapper>
                <img alt={'Skoczna szkoła'} src={image}/>
            </ImageWrapper>
        </Wrapper>
    </Section>
}