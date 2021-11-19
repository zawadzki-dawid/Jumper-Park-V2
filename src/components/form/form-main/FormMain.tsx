import * as Yup from 'yup'
import { useCallback } from 'react'
import { Form, Formik } from 'formik'
import styled from 'styled-components'

// Components
import FormWrapper from '../FormWrapper'
import Input from '../../input/input/Input'
import Select from '../../input/select/Select'
import TextArea from '../../input/text-area/TextArea'

// Data

const topics = [
    'Pytanie',
    'Pomoc',
    'Zajęcia',
    'Atrakcje',
    'Urodziny',
    'Zakup biletu'
]

const init = {
    name: '',
    email: '',
    message: '',
    topic: topics[0]
}

const validation = Yup.object({
    email: Yup.string().email('Wpisany adres e-mail jest niepoprawny').required('Pole jest wymagane!'),
    name: Yup.string().max(100, 'Podane imię jest za długie. (max. 100 znaków)').required('Pole jest wymagane!'),
    message: Yup.string().max(1000, 'Podana wiadomość jest za długa. (max. 1000 znaków)').required('Pole jest wymagane!'),
    topic: Yup.string().oneOf(topics)
})

// Main

const Wrapper = styled.div`
    gap: 20px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media only screen and (min-width: 700px) {
        flex-direction: row;
    }
`

const MessageWrapper = styled.div`
    height: 200px;
`

export default () => {
    // Method
    const sendForm = useCallback((fields: Object) => {
        console.log(fields)
    }, [])

    return (
        <FormWrapper
            heading={'Masz pytanie?'}
            subheading={'Napisz do nas'}
        >
            <Formik
                onSubmit={sendForm}
                initialValues={init}
                validationSchema={validation}
            >
                <Form>
                    <Wrapper>
                        <Input
                            id={'name'}
                            name={'name'}
                            label={'Imię'}
                        />
                        <Input
                            id={'email'}
                            name={'email'}
                            label={'Adres e-mail'}
                        />
                        <Select
                            id={'topic'}
                            name={'topic'}
                            label={'Temat'}
                            options={topics}
                        />
                    </Wrapper>
                    <MessageWrapper>
                        <TextArea
                            id={'message'}
                            name={'message'}
                            label={'Wiadomość'}
                        />
                    </MessageWrapper>
                    <button
                        type={'submit'}
                    >
                        xd
                    </button>
                </Form>
            </Formik>
        </FormWrapper>
    )
}