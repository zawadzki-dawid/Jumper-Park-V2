import { ReactNode } from 'react'
import styled from 'styled-components'

// Main

interface Props {
    children: ReactNode
}

const TextSection = styled.section`
    display: flex;
    margin: 0 20px;
    justify-content: center;

    p {
        width: 100%;
        max-width: 850px;
        font-weight: 700;
        font-size: 2.0rem;
        text-align: center;
    }

    @media only screen and (min-width: 900px) {
        margin: 0 60px;
    }
`

export default ({
    children
}: Props) => {
    return (
        <TextSection>
            <p>
                {children}
            </p>
        </TextSection>
    )
}