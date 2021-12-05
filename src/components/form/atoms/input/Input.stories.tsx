import { Form, Formik } from 'formik'
import { Input, InputDate, Props } from './Input'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Form/Atoms/Input',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <Formik
                initialValues={{
                    name: ''
                }}
                onSubmit={() => {}}
            >
                <Form
                    style={{
                        height: '90vh',
                        display: 'flex',
                        padding: '0 20px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                        <div
                            style={{
                                height: '53px'
                            }}
                        >
                            <Story/>
                        </div>
                    </Form>
            </Formik>
        )
    ]
}

export const Default = (args: Props) => <Input {...args}/>

Default.args = {
    fieldName: 'name'
}

export const Date = (args: Props) => <InputDate {...args}/>

Default.args = {
    fieldName: 'name'
}
