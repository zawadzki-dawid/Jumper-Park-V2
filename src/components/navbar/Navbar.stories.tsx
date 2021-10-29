import Navbar, { Props } from './Navbar'
import { StyledComponent } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'Components/Navbar',
    args: {
        links: [
            {
                type: 'Link',
                path: '/exmaple',
                text: 'Wycieczka szkolna'
            },
            {
                type: 'Link',
                path: '/exmaple',
                text: 'Wycieczka szkolna'
            },
            {
                type: 'Button',
                path: '/exmaple',
                text: 'Kup bilet'
            }
        ]
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <Router>
                <div
                    style={{
                        height: '150vh',
                        display: 'flex',
                        overflowX: 'hidden',
                        position: 'relative',
                        flexDirection: 'column'
                    }}
                >
                    <div
                        style={{
                            height: '80px'
                        }}
                    >
                        <Story/>
                    </div>
                </div>
            </Router>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <Navbar
            {...args}
        />
    )
}
