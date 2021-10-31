import Phone from './Phone'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Phone',
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

// Default

export const Default = () => {
    return (
        <Phone/>
    )
}