import styled, { css } from 'styled-components'

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'

interface Infos {
    text: string
}

interface Legalty {
    text: string
}

interface Provision {
    text: string
}

type Info = {
    description: string
}

export interface Props {
    descriptions: Info[]
}

interface PropsInfo {
    heading: string
    isGrey?: boolean
    descriptions: Info[]
}

// Main

interface PropsInfoStyled {
    isGrey: boolean
}

const InfoStyled = styled.div<PropsInfoStyled>`
    padding: 100px 0 80px;

    ul {
        list-style-type: circle;
    }

    li {
        display: flex;
        column-gap: 20px;
    }

    li > img {
        width: 20px;
        height: fit-content;
    }

    .text__wrapper > p {
        top: -.45rem;
        max-width: 790px; 
        font-size: 1.8rem;
        position: relative;
        line-height: 2.7rem;
    }

    .text__wrapper > strong {
        font-weight: 600;
    }

    h4 {
        font-weight: 600;
        font-size: 2.5rem;
        margin-bottom: 64px;
        text-transform: uppercase;
    }

    ${
        props => props.isGrey && css`
            background-color: #FAFAFA;
        `
    }
`

const StyledHTML = styled.div`
    * {
      font-family: 'Poppins', sans-serif !important;
      background-color: transparent !important;
    }
`

const StyledRow = styled.div`
  &:not(:first-child) {
    margin-top: 24px;
  }
`

const Info = ({
    heading,
    descriptions,
  isGrey = false
}: PropsInfo) => {
    return (
        <InfoStyled
            isGrey={isGrey}
        >
            <Section>
                <div>
                    <h4>
                        {heading}
                    </h4>
                    {
                        descriptions.map(({ description }, index) =>
                            <StyledRow key={index}>
                                <StyledHTML dangerouslySetInnerHTML={{__html: description}}/>
                            </StyledRow>
                        )
                    }
                </div>
            </Section>
        </InfoStyled>
    )
}

export default ({
    descriptions
}: Props) => {
    return (
        <>
            <Info
                isGrey={true}
                heading={'Informacje'}
                descriptions={descriptions}
            />
        </>
    )
}