import { StyledComponent } from 'styled-components'
import { LinkType } from '../link/Link'
import Navbar, { Props } from './Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'Components/Navbar',
    args: {
        links: [
            {
                to: '/exmaple',
                text: 'Wycieczka szkolna',
                type: LinkType.Default
            },
            {
                to: '/exmaple',
                text: 'Wycieczka szkolna',
                type: LinkType.Default
            },
            {
                to: '/exmaple',
                text: 'Kup bilet',
                type: LinkType.Button
            }
        ]
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <Router>
                <div
                    style={{
                        height: '150vh',
                        position: 'relative'
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
        <Navbar
            {...args}
        />
    )
}
