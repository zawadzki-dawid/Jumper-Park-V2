import { StyledComponent } from 'styled-components'
import Baner, { Props } from './Baner'

export default {
    title: 'Components/Baner',
    args: {
        content: 'Zajęcia'
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '80vh'
                }}
            >
                <Story/>
            </div>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <Baner
            {...args}
        />
    )
}
