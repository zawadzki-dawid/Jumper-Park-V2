import { StyledComponent } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import SectionRouter, { Props } from './SectionRouter'

interface PropsSection {
    title: string
}

const Section = ({
    title
}: PropsSection) => {
    return (
        <div
            style={{
                padding: '20px'
            }}
        >
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default {
    title: 'Components/SectionRouter',
    args: {
        sections: [
            {
                title: 'xd',
                name: 'Akrobatyka',
                path: '/akrobatyka'
            },
            {
                title: 'xdd',
                name: 'Akro kids',
                path: '/akrokids'
            },
            {
                title: 'xddd',
                name: 'Akro kidss',
                path: '/akrokidss'
            },
            {
                title: 'xdddd',
                name: 'Akro kidsss',
                path: '/akrokidsss'
            },
            {
                title: 'xdddddd',
                name: 'Akrobatykaa',
                path: '/akrobatykaa'
            },
            {
                title: 'xdddddd',
                name: 'Akrobatykaaa',
                path: '/akrobatykaaa'
            }
        ],
        Child: Section
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <Router>
                <div
                    style={{
                        width: '90%',
                        margin: 'auto',
                        height: '90vh',
                        display: 'flex',
                        marginTop: '20px',
                        flexDirection: 'column'
                    }}
                >
                    <Story/>
                </div>
            </Router>
        )
    ]
}

export const Default = (args: Props<PropsSection>) => {
    return (
        <SectionRouter
            {...args}
        />
    )
}