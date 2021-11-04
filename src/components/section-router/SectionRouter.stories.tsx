import { StyledComponent } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import SectionRouter, { Props } from './SectionRouter'

const SECTION_MAIN_LOCATION = ''

export default {
    title: 'Components/SectionRouter',
    args: {
        sections: [
            {
                name: 'Akrobatyka',
                path: 'akrobatyka'
            },
            {
                name: 'Akro kids',
                path: 'akrokids'
            },
            {
                name: 'Akro kidss',
                path: 'akrokidss'
            },
            {
                name: 'Akro kidsss',
                path: 'akrokidsss'
            }
        ],
        location: SECTION_MAIN_LOCATION
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

export const Default = (args: Props<{}>) => {
    return (
        <SectionRouter
            {...args}
        />
    )
}