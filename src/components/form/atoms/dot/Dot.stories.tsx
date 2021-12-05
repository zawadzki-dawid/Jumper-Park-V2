import { StyledComponent } from 'styled-components'
import Dot, { Props } from './Dot'

export default {
    title: 'Components/Form/Atoms/Dot',
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

export const Default = (args: Props) => <Dot {...args}/>

Default.args = {
    dotIndex: 2,
    currentIndex: 1
}

export const Active = (args: Props) => <Dot {...args}/>

Active.args = {
    dotIndex: 2,
    currentIndex: 2
}

export const Passed = (args: Props) => <Dot {...args}/>

Passed.args = {
    dotIndex: 2,
    currentIndex: 3
}
