import 'yup-phone'
import * as Yup from 'yup'
import { send } from 'emailjs-com'
import { Form, Formik } from 'formik'
import styled from 'styled-components'
import { useRef, useState, ElementRef } from 'react'

// Components
import FormWrapper from '../FormWrapper'
import Dots from '../organisms/dots/Dots'
import { spans } from '../organisms/age-span-picker/AgeSpanPicker'
import Modal, { errorParagraphs, successParagraph } from '../atoms/modal/Modal'
import NavigationButtons from '../organisms/navigation-buttons/NavigationButtons'

// Steps
import ThirdStep from './steps/ThirdStep'
import SecondStep, { Props as PropsSecondStep } from './steps/SecondStep'
import FourthStep from './steps/FourthStep'

export interface Props {
    form: PropsSecondStep
}

const initialValues = {
    date: '',
    name: '', 
    number: '', 
    email: '',
    ageSpan: '',
    message: '',
    additions: '',
    numberOfGuests: 0,
    birthdayPersonName: '', 
    birthdayPersonDate: '',
}

const validationSchema = [
    Yup.object({
        additions: Yup.string(),
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
    position: relative;
    padding: 20px 15px 50px 15px;
`

const Wrapper = ({
    additions
}: Props['form']) => {
    // State
    const [refresh, setRefresh] = useState<number>(0)
    const [currentStep, setCurrentStep] = useState<number>(1)

    // Ref
    const modalRef = useRef<ElementRef<typeof Modal>>(null)

    // Method
    const onSubmit = async (fields: typeof initialValues, { resetForm }: any): Promise<void> => {
        if (!modalRef.current) {
            return
        }
        try {
            await send('service_71a41c6', 'template_tzner7g', fields)
            await modalRef.current.openModal('success', successParagraph)
            setRefresh(refresh + 1)
            setCurrentStep(1)
            resetForm({})
        } catch (error) {
            await modalRef.current.openModal('error', errorParagraphs)
        }
    }

    return (
        <>
            <Modal
                ref={modalRef}
            />
            <WrapperStyled
                key={refresh}
            >
                <Dots
                    numberOfSteps={3}
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
                            <SecondStep
                                additions={additions}
                            />
                            <ThirdStep/>
                            <FourthStep/>
                        </StepsWrapper>
                        <NavigationButtons
                            numberOfSteps={3}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                    </Form>
                </Formik>
            </WrapperStyled>
        </>
    )
}

export default ({
    form
}: Props) => {
    return (
        <FormWrapper
            heading={'Wyślij zapytanie o rezerwacje urodzin!'}
        >
            <Wrapper
                additions={form.additions}
            />
        </FormWrapper>
    )
}