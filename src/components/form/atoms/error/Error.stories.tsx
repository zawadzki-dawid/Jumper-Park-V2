import { StyledComponent } from 'styled-components'
import Error, { Props } from './Error'

export default {
    title: 'Components/Form/Atoms/Error',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
                <div
                    style={{
                        height: '90vh',
                        marginTop: '30px'
                    }}
                >
                    <Story/>
                </div>
        )
    ]
}

export const Default = (args: Props) => <Error {...args}/>

Default.args = {
    message: 'Nie uzupełniono danych'
}