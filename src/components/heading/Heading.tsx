import styled from 'styled-components'

export interface Props {
    text: string
}

const Heading = styled.header`
    h2 {
        padding: 8px 15%;
        width: fit-content;
        font-size: var(--default-font-size);
        border-bottom: var(--border-width) solid var(--yellow-main);
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