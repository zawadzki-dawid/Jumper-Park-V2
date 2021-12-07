import styled, { css } from 'styled-components'
import { ButtonHTMLAttributes, Ref, forwardRef, useImperativeHandle, useState } from 'react'

// Components
import Icon, { icon } from '../../../icon/Icon'

// Data
export const errorParagraphs = ['Coś poszło nie tak :(', 'Spróbuj ponownie później']
export const successParagraph = ['Wiadomość została wysłana!', 'Skontaktujemy się z Tobą najszybciej jak to tylko będzie możliwe :)']

// Main

type IconType = keyof Pick<typeof icon, 'error' | 'success'>

interface Props {
    paragraphs: string[]
    icon: IconType
}

type ResolveType = (value: void | PromiseLike<void>) => void

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement>

type PropsModal = Pick<Props, 'icon'>

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
    ...rest
}: PropsButton) => {
    return (
        <ButtonStyled
            type={'button'}
            {...rest}
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
    height: 100%;
    z-index: 200;
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--white);
`
interface RefMethods {
    openModal: (icon: IconType, paragraphs: string[]) => Promise<void>
}

let resolveModal: ResolveType | null = null

export default forwardRef((
    _,
    ref: Ref<RefMethods>
) => {
    // State
    const [icon, setIcon] = useState<IconType>('error')
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [paragraphs, setParahraphs] = useState<string[]>([])

    //Methods
    const openModal = async (icon: IconType, paragraphs: string[]): Promise<void> => {
        return new Promise((resolve) => {
            setParahraphs(paragraphs)
            setIcon(icon)
            resolveModal = resolve
            setIsVisible(true)
        })
    }

    const closeModal = () => {
        setIsVisible(false)
        if (!resolveModal) {
            return
        }
        resolveModal()
    }

    // ImperativeHandle
    useImperativeHandle(
        ref,
        () => ({
            openModal
        })
    )

    return (
        <>
        {
            isVisible && (
                <ModalStyled>
                    <Button
                        onClick={closeModal}
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
})
