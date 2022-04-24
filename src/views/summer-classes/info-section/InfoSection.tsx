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

export interface Props {
    info: Infos[]
    legalties: Legalty[]
    provision: Provision[]
}

interface PropsInfo {
    heading: string
    isGrey?: boolean
    elements: Infos[] | Legalty[] | Provision[]
}

// Main

interface PropsInfoStyled {
    isGrey: boolean
}

const InfoStyled = styled.div<PropsInfoStyled>`
    padding: 100px 0 80px;

    ul {
        row-gap: 30px;
        display: grid;
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

const Info = ({
    heading,
    elements,
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
                    <ul>
                    {
                        elements.map((element, index) =>
                            <li 
                                key={index}
                            >
                                <Icon
                                    image={'doneBlack'}
                                />
                                <div
                                    className={'text__wrapper'} 
                                    dangerouslySetInnerHTML={{__html: element.text}}
                                />
                            </li>
                        )
                    }
                    </ul>
                </div>
            </Section>
        </InfoStyled>
    )
}

export default ({
    info,
    legalties,
    provision
}: Props) => {
    return (
        <>
            <Info
                isGrey={true}
                elements={info}
                heading={'Dodatkowe informacje'}
            />
            <Info
                elements={provision}
                heading={'Co zapewniamy'}
            />
            <Info
                isGrey={true}
                elements={legalties}
                heading={'Dodatkowe informacje'}
            />
        </>
    )
}