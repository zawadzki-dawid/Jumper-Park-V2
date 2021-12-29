import styled from 'styled-components'

// Main

interface Props {
    index: number
}

const DotStyled = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    font-weight: 700;
    font-size: 2.0rem;
    border-radius: 50%;
    color: var(--white);
    align-items: center;
    justify-content: center;
    background-color: var(--yellow-darker);
`

export default ({
    index
}: Props) => {
    return (
        <DotStyled>
            {index}
        </DotStyled>
    )
}