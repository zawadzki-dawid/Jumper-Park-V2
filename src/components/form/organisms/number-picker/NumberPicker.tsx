import { useEffect } from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { useState, ButtonHTMLAttributes, KeyboardEvent } from 'react'

// Components
import Icon from '../../../icon/Icon'
import { Input } from "../../atoms/input/Input"

// Button

const ButtonStyled = styled.button`
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9C41F;

    > div {
        width: 15px;
        height: 15px;
    }

    &:disabled {
        background-color: #E3E3E3;
    }
`

const Button = ({
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <ButtonStyled
            {...rest}
        >
            <div>
                <Icon
                    image={'add'}
                />
            </div>
        </ButtonStyled>
    )
}

// NumberPicker

export interface Props {
    fieldName: string
}

const lowerLimit = '1'
const enabledKeys = ['Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']

const Wrapper = styled.div`
    margin: auto;
    display: flex;
    column-gap: 10px;
    width: fit-content;
    align-items: center;

    > div {
        width: 57px;
        height: 57px;
    }

    input {
        text-align: center;
    }
`

export default ({
    fieldName
}: Props) => {
    // State
    const [value, setValue] = useState<string>(lowerLimit)

    // Formik
    const formikProps = useFormikContext()

    // Effect
    useEffect(() => {
        formikProps.setFieldValue(fieldName, Number(value))
    }, [value])

    // Method
    const decreaseValue = () => {
        const decreased = Number(value) - 1
        setValue(String(decreased))
    }

    const increaseValue = () => {
        const increased = Number(value) + 1
        setValue(String(increased))
    }

    const onBlur = () => {
        if (value.length > 0) {
            return
        }
        setValue(lowerLimit)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (/[0-9]/.test(event.key)) {
            setValue(value + event.key)
            return
        }
        if (event.key === 'Backspace') {
            setValue(value.slice(0, -1))
            return
        }
        if (enabledKeys.includes(event.key)) {
            return
        }
        event.preventDefault()
    }

    return (
        <Wrapper>
            <Button
                type={'button'}
                onClick={decreaseValue}
                disabled={value === lowerLimit || value.length === 0}
            />
            <div>
                <Input
                    value={value}
                    onBlur={onBlur}
                    fieldName={fieldName}
                    onKeyDown={onKeyDown}
                />
            </div>
            <Button
                type={'button'}
                onClick={increaseValue}
            />
        </Wrapper>
    )
}