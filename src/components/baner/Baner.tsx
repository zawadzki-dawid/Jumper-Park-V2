import styled from 'styled-components'

export interface Props {
    content: string
}

const Baner = styled.header`
    height: 70px;
    display: flex;
    padding-left: 20px;
    align-items: center;
    background: var(--gradient-main);

    h1 {
        width: 100%;
        margin: auto;
        padding: 0 20px;
        font-weight: 700;
        font-size: 2.5rem;
        max-width: 1280px;

        @media only screen and (min-width: 1000px) {
            padding: 0 60px;
        }
    }
`

export default ({
    content
}: Props) => {
    return (
        <Baner>
            <h1>
                { content }
            </h1>
        </Baner>
    )
}