import Navbar from './Footer'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Footer',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
                <div
                    style={{
                        height: '80px'
                    }}
                >
                    <Story/>
                </div>
        )
    ]
}

export const Default = () => {
    return (
        <Navbar/>
    )
}
