import { StyledComponent } from 'styled-components'
import { LinkDefault, LinkButton, Props } from './Link'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'Components/Link',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <Router>
                <div
                    style={{
                        height: '90vh'
                    }}
                >
                    <Story/>
                </div>
            </Router>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <div
            style={{
                height: '100%',
                backgroundColor: 'rgb(0, 0, 0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <LinkDefault
                {...args}
            />
        </div>
    )
}

Default.args = {
    to: '/example',
    text: 'Wycieczka szkolna',
    color: 'white'
}

export const Button = (args: Props) => {
    return (
        <div
            style={{
                height: '100%',
                backgroundColor: 'rgb(255, 255, 255)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <LinkButton
                {...args}
            />
        </div>
    )
}

Button.args = {
    to: '/example',
    text: 'Kup bilet',
    color: 'black'
}
