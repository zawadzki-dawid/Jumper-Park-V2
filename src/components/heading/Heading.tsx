import styled from 'styled-components'

export interface Props {
    text: string
}

const Heading = styled.header`
    border-left: 5px solid var(--yellow-main);

    h2 {
        font-weight: 700;
        font-size: 2.0rem;
        padding-left: 7px;
    }
`

export default ({
    text
}: Props) => {
    return (
        <Heading>
                <h2>
                    { text }
                </h2>
        </Heading>
    )
}