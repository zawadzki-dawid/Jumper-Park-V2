import { StyledComponent } from 'styled-components'
import Label, { Props } from './Label'

export default {
    title: 'Components/Form/Atoms/Label',
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
                    <Story/>
                </div>
        )
    ]
}

export const Default = (args: Props) => <Label {...args}/>

Default.args = {
    text: 'Twoje dane'
}
