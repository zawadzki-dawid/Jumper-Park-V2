import { StyledComponent } from 'styled-components'
import { LinkDefault, LinkButton, LinkDownload, LinkDocument, Props, PropsDownload, PropsDocument } from './Link'
import { BrowserRouter as Router } from 'react-router-dom'

// File
// import Rulebook from '/public/assets/documents/Regulamin-organizacji-imprez.pdf'
// import Agreement from '/public/assets/documents/Zgoda-rodzica-opiekuna.pdf'

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
    path: '/example',
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
    path: '/example',
    text: 'Kup bilet',
    color: 'black'
}

export const Download = (args: PropsDownload) => {
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
            <LinkDownload
                {...args}
            />
        </div>
    )
}

Download.args = {
    filename: 'xd',
    text: 'Regulamin blabla',
    color: 'black'
}

export const Document = (args: PropsDocument) => {
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
            <LinkDocument
                {...args}
            />
        </div>
    )
}

Document.args = {
    document: 'xd',
    text: 'Regulamin blabla',
    color: 'black'
}