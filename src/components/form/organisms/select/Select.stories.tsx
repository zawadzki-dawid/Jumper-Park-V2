import * as Yup from 'yup'
import { Formik } from 'formik'
import Select, { Props } from './Select'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Form/Organisms/Select',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    height: '90vh',
                    margin: '50px 50px'
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

export const Default = (args: Props) => {
    return (
        <div
            style={{
                width: '100%',
                height: '53px'
            }}
        >
            <Select
                {...args}
            />
        </div>
    )
}

Default.args = {
    fieldName: 'topic',
    options: [
        'Urodziny',
        'Zakup biletu',
        'Pomoc',
        'Zajęcia',
        'Pytanie',
        'Atrakcje'
    ]
}