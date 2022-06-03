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
    margin: 0 20px;
    height: fit-content;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: var(--heading-font-size);

    > div {
        max-width: 1280px;
        width: calc(100vw - 40px - var(--scrollbar-width));
    }

    .heading__wrapper {
        margin-bottom: 25px;
    }

    @media only screen and (min-width: 1000px) {
        margin: 0 60px;

        > div {
            width: calc(100vw - 120px - var(--scrollbar-width));
        }

        .heading__wrapper {
            margin-bottom: 40px;
        }
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
                    <div
                        className={'heading__wrapper'}
                    >
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