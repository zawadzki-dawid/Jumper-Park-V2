import * as Yup from 'yup'
import { useCallback } from 'react'
import { Form, Formik } from 'formik'
import styled from 'styled-components'

// Components
import FormWrapper from '../FormWrapper'
import Select from '../../input/select/Select'

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
    topic: Yup.string().oneOf(topics),
    email: Yup.string().email().required(),
    name: Yup.string().max(100).required(),
    message: Yup.string().max(1000).required()
})

// Main

const Wrapper = styled.div`
    gap: 20px;
    z-index: 10;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 700px) {
        flex-direction: row;
    }
`

const MessageWrapper = styled.div`
    height: 200px;
    margin-top: 20px;

    @media only screen and (min-width: 700px) {
        height: 300px;
        margin-top: 40px;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 20px;

    > button {
        border: 4px solid var(--yellow-darker);
        display: flex;
        height: 45px;
        width: 140px;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.6rem;
        margin: auto;

        &:hover {
            background-color: var(--yellow-darker);
        }
    }

    @media only screen and (min-width: 700px) {
        margin-top: 40px;
    }
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
                validateOnBlur={false}
                validateOnMount={false}
                validateOnChange={false}
                validationSchema={validation}
            >
                <Form>
                    <Wrapper>

                    </Wrapper>
                    <MessageWrapper>

                    </MessageWrapper>
                    <ButtonWrapper>
                        <button
                            type={'submit'}
                        >
                            Wyślij
                        </button>
                    </ButtonWrapper>
                </Form>
            </Formik>
        </FormWrapper>
    )
}