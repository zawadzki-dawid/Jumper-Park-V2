import { StyledComponent } from 'styled-components'
import { Statue, Agreement, PropsStatue, PropsAgreement } from './DownloadLink'
import { BrowserRouter as Router } from 'react-router-dom'

// Assets
import File from '../../assets/documents/Oswiadczenie-opiekuna-grupy.pdf'

export default {
    title: 'Components/DownloadLink',
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

// Agreement

export const AgreementLink = (args: PropsAgreement) => {
    return (
        <div
            style={{
                height: '100px'
            }}
        >
            <Agreement
                {...args}
            />
        </div>
    )
}

AgreementLink.args = {
    text: 'Pobierz',
    agreement: File,
    filename: 'example file'
}

// Statue

export const StatueLink = (args: PropsStatue) => {
    return (
        <div
            style={{
                height: '100px'
            }}
        >
            <Statue
                {...args}
            />
        </div>
    )
}

StatueLink.args = {
    statue: File,
    text: 'Przeczytaj regulamin'
}