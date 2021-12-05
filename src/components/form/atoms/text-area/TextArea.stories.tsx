import { Form, Formik } from 'formik'
import TextArea, { Props } from './TextArea'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Form/Atoms/TextArea',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <Formik
                initialValues={{
                    massage: ''
                }}
                onSubmit={() => {}}
            >
                <Form
                    style={{
                        width: '100%',
                        height: '90vh',
                        padding: '30px',
                        alignItems: 'center',
                        boxSizing: 'border-box'
                    }}
                >
                        <div
                            style={{
                                height: '300px'
                            }}
                        >
                            <Story/>
                        </div>
                    </Form>
            </Formik>
        )
    ]
}

export const Default = (args: Props) => <TextArea {...args}/>

Default.args = {
    fieldName: 'message'
}
