import { Form, Formik } from 'formik'
import { StyledComponent } from 'styled-components'
import AdditionsPicker, { Props } from './AdditionsPicker'

export default {
    title: 'Components/Form/Organisms/AdditionsPicker',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
                <div
                    style={{
                       padding: '20px 20px'
                    }}
                >
                    <Formik
                        initialValues={{
                            additions: ''
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

export const Default = (args: Props) => <AdditionsPicker {...args}/>

Default.args = {
    fieldName: 'additions',
    additions: ['Przekąski', 'Napoje']
}