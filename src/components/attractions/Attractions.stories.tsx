import { StyledComponent } from 'styled-components'
import Attractions from './Attractions'

export default {
    title: 'Components/Attractions',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div>
                <Story/>
            </div>
        )
    ]
}

export const Default = () => {
    return (
        <Attractions/>
    )
}
