import * as Yup from 'yup'
import { Field, Form, Formik, ErrorMessage, FieldProps } from 'formik'
import styled from 'styled-components'

// Components
import withForm from '../withForm'
import { ComponentType } from 'react'

interface PropsInput {
    name: string
    label: string
    as?: string | ComponentType<FieldProps['field']>
}

const Wrapper = styled.div`

`

const Input = styled.div`

`

const FormMain = () => {
    return (
        <Formik
            validationSchema={{
                email: Yup.string().email('Podaj poprawny adres email!').required('Pole jest wymagane!'),
                name: Yup.string().min(1, 'Podane imię jest za krótkie').max(100, 'Podane imię jest za długie').required(),
            }}
            initialValues={{
                name: '',
                label: '',
                message: ''
            }}
            onSubmit={() => {}}
        >
            <Form>
                <Wrapper>
                    <Input>
                        <label
                            htmlFor={'name'}
                        >

                        </label>
                        <Field
                            name={'name'}
                        />
                        <ErrorMessage
                            name={'name'}
                        />
                    </Input>
                    <Input>
                        <label
                            htmlFor={'label'}
                        >
                            
                        </label>
                        <Field
                            name={'label'}
                        />
                        <ErrorMessage
                            name={'label'}
                        />
                    </Input>
                </Wrapper>
                <Input>
                    <label
                        htmlFor={'message'}
                    >

                    </label>
                    <Field
                        as={'textarea'}
                        name={'message'}
                    />
                    <ErrorMessage
                        name={'message'}
                    />
                </Input>
            </Form>
        </Formik>
    )
}

export default () => withForm('Masz pytania?', 'napisz do nas', FormMain)