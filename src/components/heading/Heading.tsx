import styled from 'styled-components'

export interface Props {
    text: string
}

const Heading = styled.header`
    display: flex;
    align-items: center;

    h2 {
        padding: 6px 20px;
        width: fit-content;
        border: var(--border-width) solid var(--yellow-main);

    }

    div {
        width: fit-content;
    }

    &:before, &:after {
        width: 10%;
        content: '';
        display: block;
        height: var(--border-width);
        background-color: var(--yellow-main);
    }
`

export default ({
    text
}: Props) => {
    return (
        <Heading>
            <div>
                <h2>
                    { text }
                </h2>
            </div>
        </Heading>
    )
}