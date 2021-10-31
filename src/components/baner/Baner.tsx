import styled from 'styled-components'

export interface Props {
    content: string
}

const Baner = styled.header`
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 80px;
    background: var(--gradient-main);
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