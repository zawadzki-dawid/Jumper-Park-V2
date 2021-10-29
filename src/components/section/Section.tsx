import { ReactElement } from 'react'
import styled from 'styled-components'

// Components
import Heading from '../heading/Heading'

interface Props {
    text: string
    children: ReactElement
}

const Section = styled.section`
    margin-top: 30px;
    font-size: var(--heading-font-size);

    > div {
        display: flex;
        margin-top: 20px;
        align-items: center;
        flex-direction: column;
    }

    @media only screen and (min-width: 1000px) {
        margin-top: 50px;

        > div {
            margin-top: 35px;
        }
    }
`

export default ({
    text,
    children
}: Props) => {
    return (
        <Section>
            <Heading
                text={text}
            />
            <div>
                { children }
            </div>
        </Section>
    )
}