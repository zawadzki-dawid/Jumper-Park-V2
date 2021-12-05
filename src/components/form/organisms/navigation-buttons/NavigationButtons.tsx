import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { Dispatch, SetStateAction, useLayoutEffect } from 'react'

// Components
import Button, { Props as PropsButton } from '../../atoms/button/Button'

// NavigationButtons

export interface Props {
    currentStep: number
    numberOfSteps: number
    setCurrentStep: Dispatch<SetStateAction<number>>
}

const NavigationStyled = styled.div`
    height: 45px;
`

const Navigation = ({
    ...rest
}: PropsButton) => {
    return (
        <NavigationStyled>
            <Button
                {...rest}
            />
        </NavigationStyled>
    )
}

const Wrapper = styled.div`
    margin: auto;
    row-gap: 10px;
    display: grid;
    max-width: 308px;
    column-gap: 20px;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 408px) {
        grid-auto-flow: column;
        justify-content: center;
        grid-auto-columns: 144px;
        grid-template-columns: none;
    }
`

export default ({
    currentStep,
    numberOfSteps,
    setCurrentStep
}: Props) => {
    // Formik
    const formikProps = useFormikContext()

    // Method
    const onPrev = () => {
        formikProps.setErrors({})
        setCurrentStep(currentStep - 1)
    }

    const onNext = async () => {
        if (currentStep === numberOfSteps) {
            return
        }
        const errors = await formikProps.validateForm()
        if (Object.keys(errors).length) {
            return
        }
        setCurrentStep(currentStep + 1)
    }

    const onSubmit = () => {
        formikProps.submitForm()
    }

    return (
        <Wrapper>
        {
            currentStep !== 1 && (
                <Navigation
                    type={'button'}
                    text={'Wstecz'}
                    onClick={onPrev}
                />
            )
        }
            <Navigation
                picked={true}
                type={'button'}
                text={currentStep === numberOfSteps ? 'Wyślij' : 'Dalej'}
                onClick={currentStep === numberOfSteps ? onSubmit : onNext}
            />
        </Wrapper>
    )
}