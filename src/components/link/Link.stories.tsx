import { StyledComponent } from 'styled-components'
import { Link, Button, Fitted, Props } from './Link'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'Components/Link',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <Router>
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
            </Router>
        )
    ]
}

// Default

export const DefaultLink = (args: Props) => {
    return (
        <Link
            {...args}
        />
    )
}

DefaultLink.args = {
    color: 'black',
    to: '/kupbilet',
    text: 'Kup bilet'
}

// Button

export const ButtonLink = (args: Props) => {
    return (
        <Button
            {...args}
        />
    )
}

ButtonLink.args = {
    color: 'black',
    to: '/kupbilet',
    text: 'Kup bilet'
}

// Fitted

export const FittedLink = (args: Props) => {
    return (
        <div
            style={{
                width: '200px',
                height: '200px'
            }}
        >
            <Fitted
                {...args}
            />
        </div>
    )
}

FittedLink.args = {
    color: 'black',
    to: '/kupbilet',
    text: 'Kup bilet'
}