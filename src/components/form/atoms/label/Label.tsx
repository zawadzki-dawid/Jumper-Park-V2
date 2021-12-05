import styled from 'styled-components'

export interface Props {
    text: string
}

const Label = styled.h4`
    font-weight: 500;
    font-size: 1.8rem;
    text-align: center;
    font-style: italic;
    margin-bottom: 30px;
`

export default ({
    text
}: Props) => {
    return (
        <Label>
            {text}
        </Label>
    )
}