import * as Yup from 'yup'

import Select from './Select'
import { Formik } from 'formik';
import { StyledComponent } from 'styled-components';

export default {
    title: 'Components/Form/Organisms/Select',
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
                            select: Yup.string().required()
                        })
                    }
                    initialValues={{
                        select: '',
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

export const Default = () => {
    return (
        <div
            style={{
                width: '100%'
            }}
        >
            <Select/>
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