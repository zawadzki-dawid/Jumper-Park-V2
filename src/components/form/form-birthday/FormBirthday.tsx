import 'yup-phone'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useState, useContext } from 'react'
import { Form, Formik, FormikBag } from 'formik'

// Components
import Dots from '../organisms/dots/Dots'
import FormWrapper, { ModalContext } from '../FormWrapper'
import { bundles } from '../organisms/bundle-picker/BundlePicker'
import { spans } from '../organisms/age-span-picker/AgeSpanPicker'
import NavigationButtons from '../organisms/navigation-buttons/NavigationButtons'

// Steps
import ThirdStep from './steps/ThirdStep'
import FirstStep from './steps/FirstStep'
import SecondStep from './steps/SecondStep'
import FourthStep from './steps/FourthStep'

const initialValues = {
    date: '',
    name: '', 
    number: '', 
    email: '',
    bundle: '',
    ageSpan: '',
    message: '',
    numberOfGuests: 0,
    birthdayPersonName: '', 
    birthdayPersonDate: '',
}

const validationSchema = [
    Yup.object({
        bundle: Yup.string().required().oneOf(bundles)
    }),
    Yup.object({
        numberOfGuests: Yup.number().min(1),
        birthdayPersonName: Yup.string().required(),
        birthdayPersonDate: Yup.string().required(),
        ageSpan: Yup.string().required().oneOf(spans)
    }),
    Yup.object({
        date: Yup.string().required()
    }),
    Yup.object({
        message: Yup.string(),
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        number: Yup.string().phone('PL').required()
    })
]

interface PropsSteps {
    currentStep: number
}

const StepsWrapper = styled.div<PropsSteps>`
    margin-top: 50px;
    margin-bottom: 40px;

    > fieldset {
        display: none;

        &:nth-child(${ props => props.currentStep }) {
            display: block;
        }
    }
`

const WrapperStyled = styled.div`
    padding: 20px 10px 50px 10px;
`

const Wrapper = () => {
     // State
     const [currentStep, setCurrentStep] = useState<number>(1)

     // Context
     const { setIsError, setIsSuccess } = useContext(ModalContext)
 
     // Method
     const onSubmit = (fields: typeof initialValues, { resetForm }: any) => {
         setIsSuccess(true)
         setCurrentStep(1)
         console.log(fields)
         resetForm()
     }

    return (
        <WrapperStyled>
            <Dots
                numberOfSteps={4}
                currentIndex={currentStep}
            />
            <Formik
                onSubmit={onSubmit}
                validateOnBlur={false}
                validateOnMount={false}
                validateOnChange={false}
                initialValues={initialValues}
                validationSchema={validationSchema[currentStep - 1]}
            >
                <Form>
                    <StepsWrapper
                        currentStep={currentStep}
                    >
                        <FirstStep/>
                        <SecondStep/>
                        <ThirdStep/>
                        <FourthStep/>
                    </StepsWrapper>
                    <NavigationButtons
                        numberOfSteps={4}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                    />
                </Form>
            </Formik>
        </WrapperStyled>
    )
}

export default () => {
    return (
        <FormWrapper
            heading={'Wyślij zapytanie o rezerwacje urodzin!'}
        >
            <Wrapper/>
        </FormWrapper>
    )
}