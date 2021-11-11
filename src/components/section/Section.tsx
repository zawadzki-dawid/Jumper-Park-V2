import { ReactElement } from 'react'
import styled from 'styled-components'

// Components
import Heading from '../heading/Heading'

interface Props {
    text?: string
    children: ReactElement
}

const Section = styled.section`
    display: flex;
    height: fit-content;
    margin: 30px 20px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: var(--heading-font-size);

    > div {
        width: 100%;
        max-width: 1280px;
    }

    > div:not(:last-of-type) {
        margin-bottom: 15px;
    }

    @media only screen and (min-width: 900px) {
        margin: 60px 60px;

        > div:not(:last-of-type) {
            margin-bottom: 20px;
        }
    }

    &:not(:last-child) {
        margin-bottom: 0px;
    }
`

export default ({
    text = '',
    children
}: Props) => {
    return (
        <Section>
            {
                text.length !== 0 && (
                    <div>
                        <Heading
                            text={text}
                        />
                    </div>
                )
            }
            <div>
                { children }
            </div>
        </Section>
    )
}