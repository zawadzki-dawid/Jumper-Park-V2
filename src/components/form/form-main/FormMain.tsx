import * as Yup from 'yup'
import { send } from 'emailjs-com'
import styled from 'styled-components'
import { ElementRef, useRef, useState } from 'react'
import { Form, Formik, useFormikContext } from 'formik'

// Components
import Error from '../atoms/error/Error'
import Label from '../atoms/label/Label'
import FormWrapper from '../FormWrapper'
import Button from '../atoms/button/Button'
import { Input } from '../atoms/input/Input'
import Select from '../organisms/select/Select'
import TextArea from '../atoms/text-area/TextArea'
import Modal, { errorParagraphs, successParagraph } from '../atoms/modal/Modal'

// Data

const topics = [
    'Pytanie',
    'Pomoc',
    'Zajęcia',
    'Atrakcje',
    'Urodziny',
    'Zakup biletu'
]

const initialValues = {
    name: '',
    email: '',
    message: '',
    topic: topics[0]
}

const validationSchema = Yup.object({
    topic: Yup.string().oneOf(topics),
    email: Yup.string().email().required(),
    name: Yup.string().max(100).required(),
    message: Yup.string().max(1000).required()
})

// Main

const Wrapper = styled.div`
    margin: auto;
    max-width: 910px;
    position: relative;
    padding: 30px 15px 50px 15px;
`

const InputsWrapper = styled.div`
    gap: 10px;
    display: grid;
    margin-bottom: 10px;
    grid-auto-rows: 53px;

    @media only screen and (min-width: 1010px) {
        column-gap: 20px;
        margin-bottom: 30px;
        grid-auto-flow: column;
    }
`

const ButtonWrapperStyled = styled.div`
    height: 45px;
    margin: auto;
    max-width: 144px;
`

const ButtonWrapper = () => {
    // Formik
    const formikProps = useFormikContext()

    return (
        <ButtonWrapperStyled>
            <Button
                picked={true}
                type={'submit'}
                text={'Wyślij'}
                disabled={formikProps.isSubmitting}
            />
        </ButtonWrapperStyled>
    )
}

const TextAreaWrapper = styled.div`
    height: 280px;
    margin-bottom: 40px;
`

export default () => {
    // State
    const [refresh, setRefresh] = useState<number>(0)

    // Ref
    const modalRef = useRef<ElementRef<typeof Modal>>(null)

    // Method
    const sendForm = async (fields: typeof initialValues, { resetForm }: any) => {
        if (!modalRef.current) {
            return
        }
        try {
            await send('service_71a41c6', 'template_zwitdd6', fields)
            await modalRef.current.openModal('success', successParagraph)
            setRefresh(refresh + 1)
            resetForm({})
        } catch (error) {
            await modalRef.current.openModal('error', errorParagraphs)
        }
    }

    return (
        <FormWrapper
            heading={'Masz pytanie?'}
            subheading={'Napisz do nas'}
        >
            <Formik
                onSubmit={sendForm}
                validateOnBlur={false}
                validateOnMount={false}
                validateOnChange={false}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                <Form>
                    <Modal
                        ref={modalRef}
                    />
                    <Wrapper
                        key={refresh}
                    >
                        <Label
                            text={'Twoje dane'}
                        />
                        <Error
                            message={'Nie uzupełniono poprawnie danych'}
                        />
                        <InputsWrapper>
                            <Input
                                fieldName={'name'}
                                placeholder={'Imię'}
                            />
                            <Input
                                fieldName={'email'}
                                placeholder={'Adres e-mail'}
                            />
                            <Select
                                options={topics}
                                fieldName={'topic'}
                                placeholder={'Temat'}
                            />
                        </InputsWrapper>
                        <TextAreaWrapper>
                            <TextArea
                                fieldName={'message'}
                                placeholder={'Wiadomość'}
                            />
                        </TextAreaWrapper>
                        <ButtonWrapper/>
                    </Wrapper>
                </Form>
            </Formik>
        </FormWrapper>
    )
}