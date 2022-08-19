import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { useState, useEffect } from 'react'

// Components
import Button, { Props as PropsButton } from '../../atoms/button/Button'

// AdditionsPicker

type PropsAddition = PropsButton & {
    setValue?: (isPicked: boolean, addition: string) => void
} 

export type AdditionType = {
    addition: string
}

export interface Props {
    fieldName: string,
    additions: AdditionType[]
}

const AdditionStyled = styled.div`
    width: 100%;
    height: 45px;
`

const Addition = ({
    text,
    setValue,
    ...rest
}: PropsAddition) => {
    // State
    const [isPicked, setIsPicked] = useState<boolean>(false)

    // Method
    const onButtonClick = () => {
        if (setValue) {
            setValue(isPicked, text)
        }
        setIsPicked(!isPicked)
    }

    return (
        <AdditionStyled>
            <Button
                {...rest}
                text={text}
                hover={false}
                rounded={true}
                type={'button'}
                picked={isPicked}
                onClick={onButtonClick}
            />
        </AdditionStyled>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    row-gap: 10px;
    display: flex;
    max-width: 612px;
    column-gap: 20px;
    flex-direction: column;

    @media only screen and (min-width: 712px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export default ({
    fieldName,
    additions
}: Props) => {
    // State
    const [value, setValue] = useState<string[]>([])

    // Formik
    const formikProps = useFormikContext()

    // Effect
    useEffect(() => {
        formikProps.setFieldValue(fieldName, value.join(', '))
    }, [value])

    // Method
    const onSetValue = (isPicked: boolean, addition: string) => {
        if (isPicked) {
            setValue(value.filter(el => el !== addition))
            return
        }
        setValue([...value, addition])
    }

    return (
        <Wrapper>
        {
            additions.map((addition, index) => 
                <Addition
                    key={index}
                    picked={true}
                    setValue={onSetValue}
                    text={addition.addition}
                />
            )
        }
        </Wrapper>
    )
}