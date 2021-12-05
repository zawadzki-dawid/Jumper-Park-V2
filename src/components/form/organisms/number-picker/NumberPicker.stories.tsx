import { Form, Formik } from 'formik'
import { StyledComponent } from 'styled-components'
import NumberPicker, { Props } from './NumberPicker'

export default {
    title: 'Components/Form/Organisms/NumberPicker',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
                <div
                    style={{
                        height: '90vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Formik
                        initialValues={{
                            numberOfGuests: ''
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

export const Default = (args: Props) => <NumberPicker {...args}/>

Default.args = {
    fieldName: 'numberOfGuest'
}