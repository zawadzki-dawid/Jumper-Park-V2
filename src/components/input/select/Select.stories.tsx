import * as Yup from 'yup'
import { Formik } from 'formik';
import { StyledComponent } from 'styled-components';
import Select, { Props } from './Select'

export default {
    title: 'Components/Select',
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
            <Select
                {...args}
            />
        </div>
    )
}

Default.args = {
    id: 'select',
    name: 'select',
    label: 'Imię i nazwisko',
    options: [
        'Urodziny',
        'Zakup biletu',
        'Pomoc',
        'Zajęcia',
        'Pytanie',
        'Atrakcje'
    ]
}