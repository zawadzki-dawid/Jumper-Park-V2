import styled, { css } from 'styled-components'
import { Dispatch, SetStateAction } from 'react'

// Components
import Icon, { icon } from '../../../icon/Icon'

interface Props {
    isVisible: boolean
    paragraphs: string[]
    setIsVisible: Dispatch<SetStateAction<boolean>>
    icon: keyof Pick<typeof icon, 'error' | 'success'>
}

type PropsModal = Pick<Props, 'icon'>

type PropsButton = Pick<Props, 'setIsVisible'>

const ButtonStyled = styled.button`
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    display: flex;
    position: absolute;
    align-items: center;
    margin: 10px 10px 0 0;
    justify-content: center;

    > div {
        height: 23px;
    }
`

const Button = ({
    setIsVisible
}: PropsButton) => {
    return (
        <ButtonStyled
            type={'button'}
            onClick={() => setIsVisible(false)}
        >
            <div>
                <Icon
                    image={'close'}
                />
            </div>
        </ButtonStyled>
    )
}

const IconWrapper = styled.div`
    height: 100px;
    width: fit-content;
`

const Paragraphs = styled.div<PropsModal>`
    row-gap: 15px;
    display: grid;
    padding: 0 20px;
    margin-top: 30px;

    p {
        font-size: 2.0rem;
        font-weight: bold;
        text-align: center;
    }

    ${
        props => props.icon === 'error' && css`
            p {
                color: #f85306;
            }
        `
    }

    ${
        props => props.icon === 'success' && css`
            p {
                color: #F9C41F;
            }
        ` 
    }

`

const ModalStyled = styled.div`
    width: 100%;
    z-index: 200;
    display: flex;
    height: 500px;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--white);
`

export default ({
    icon,
    isVisible,
    paragraphs,
    setIsVisible
}: Props) => {
    return (
        <>
        {
            isVisible && (
                <ModalStyled>
                    <Button
                        setIsVisible={setIsVisible}
                    />
                    <IconWrapper>
                        <Icon
                            image={icon}
                        />
                   </IconWrapper>
                   <Paragraphs
                        icon={icon}
                   >
                    {
                        paragraphs.map((paragraph, index) => 
                            <p
                                key={index}
                            >
                                {paragraph}
                            </p>
                        )
                    }
                   </Paragraphs>
                </ModalStyled>
            )
        }
        </>
    )
}
