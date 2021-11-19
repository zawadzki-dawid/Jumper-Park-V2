import * as Yup from 'yup'
import { Formik } from 'formik';
import { StyledComponent } from 'styled-components';
import Input, { Props } from './Input'

export default {
    title: 'Components/Input',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    height: '90vh',
                    display: 'flex',
                    margin: '0 50px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Formik
                    validationSchema={
                        Yup.object({
                            input: Yup.string().required()
                        })
                    }
                    initialValues={{
                        input: '',
                        select: '',
                        textarea: ''
                    }}
                    onSubmit={
                        () => {}
                    }
                >
                    <Story/>
                </Formik>
            </div>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <div
            style={{
                width: '100%'
            }}
        >
            <Input
                {...args}
            />
        </div>
    )
}

Default.args = {
    id: 'input',
    name: 'input',
    label: 'Imię i nazwisko'
}