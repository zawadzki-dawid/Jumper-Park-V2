import styled, { css } from 'styled-components'

// Components
import Icon from '../../../icon/Icon'

// Dot

export interface Props {
    dotIndex: number
    currentIndex: number
}

const DotStyled = styled.div<Props>`
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: #E3E3E3;

    > div {
        width: 20px;
        height: 20px;
    }

    > span {
        font-size: 1.6rem;
        color: rgb(112, 112, 112);
    }

    ${
        props => props.currentIndex >= props.dotIndex && css`
            background-color: var(--yellow-darker);

            > span {
                color: var(--white);
            }
        `
    }
`

export default ({
    dotIndex,
    currentIndex
}: Props) => {
    return (
        <DotStyled
            dotIndex={dotIndex}
            currentIndex={currentIndex}
        >
            {
                currentIndex > dotIndex ? 
                    <div>
                        <Icon
                            image={'done'}
                        />
                    </div> :
                    <span>
                        {dotIndex}
                    </span>
            }
        </DotStyled>
    )
}