import { Form, Formik } from 'formik'
import { StyledComponent } from 'styled-components'
import BundlePicker, { Props } from './BundlePicker'

export default {
    title: 'Components/Form/Organisms/BundlePicker',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
                <div
                    style={{
                       padding: '20px 20px'
                    }}
                >
                    <Formik
                        initialValues={{
                            bundle: ''
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

export const Default = (args: Props) => <BundlePicker {...args}/>

Default.args = {
    fieldName: 'bundle'
}