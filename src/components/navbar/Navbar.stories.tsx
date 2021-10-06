import { LinkType } from '../link/Link'
import Navbar, { Props } from './Navbar'
import { StyledComponent } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: 'Components/Navbar',
    args: {
        links: [
            {
                path: '/exmaple',
                text: 'Wycieczka szkolna',
                type: LinkType.Default
            },
            {
                path: '/exmaple',
                text: 'Wycieczka szkolna',
                type: LinkType.Default
            },
            {
                path: '/exmaple',
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
