import { Formik, Form } from 'formik'
import Calendar, { Props } from './Calendar'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Form/Atoms/Calendar',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    height: '90vh',
                    marginTop: '40px'
                }}
            >
                <Formik
                    initialValues={{
                        date: ''
                    }}
                    onSubmit={(fields) => {}}
                >
                    <Form>
                        <Story/>
                    </Form>
                </Formik>
            </div>
        )
    ]
}

export const Default = (args: Props) => <Calendar {...args}/>

Default.args = {
    fieldName: 'date'
}
