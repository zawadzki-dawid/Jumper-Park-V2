import styled from 'styled-components'
import { ReactElement, useMemo } from 'react'

// Components
import Dot from '../../atoms/dot/Dot'

// Dots

export interface Props {
    currentIndex: number
    numberOfSteps: number
}

const DotsStyled = styled.div<Pick<Props, 'currentIndex'>>`
    gap: 6px;
    margin: auto;
    display: grid;
    width: fit-content;
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: auto;

    > span {
        width: 19px;
        height: 1px;
        display: block;
        background-color: #E3E3E3;
    }

    > span:nth-of-type(-n + ${ props => props.currentIndex - 1 }) {
        background-color: var(--yellow-darker);
    }
`

export default ({
    currentIndex,
    numberOfSteps
}: Props) => {
    // Method
    const dots = useMemo((): ReactElement[] => {
        const result: ReactElement[] = []
        for (let number = 1; number <= numberOfSteps; number++) {
            if (number !== 1) {
                result.push(
                    <span/>
                )
            }
            result.push(
                <Dot
                    dotIndex={number}
                    currentIndex={currentIndex}
                />
            )
        }
        return result
    }, [currentIndex, numberOfSteps])

    return (
        <DotsStyled
            currentIndex={currentIndex}
        >
            {dots}
        </DotsStyled>
    )
}