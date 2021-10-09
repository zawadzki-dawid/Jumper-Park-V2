import Heading, { Props } from './Heading'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Heading',
    args: {
      text: 'Dokumenty'
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    width: '100%',
                    height: '90vh',
                    marginTop: '20px'
                }}
            >
                <Story/>
            </div>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <Heading
            {...args}
        />
    )
}
