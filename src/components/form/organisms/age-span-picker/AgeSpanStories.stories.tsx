import { Form, Formik } from 'formik'
import { StyledComponent } from 'styled-components'
import AgeSpanPicker, { Props } from './AgeSpanPicker'

export default {
    title: 'Components/Form/Organisms/AgeSpanPicker',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
                <div
                    style={{
                       padding: '20px 20px'
                    }}
                >
                    <Formik
                        initialValues={{
                            ageSpan: ''
                        }}
                        onSubmit={() => {}}
                    >
                        <Form>
                            <Story/>
                        </Form>
                    </Formik>
                </div>
        )
    ]
}

export const Default = (args: Props) => <AgeSpanPicker {...args}/>

Default.args = {
    fieldName: 'ageSpan'
}