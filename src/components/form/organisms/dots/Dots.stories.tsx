import Dots, { Props } from './Dots'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Form/Organisms/Dots',
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

export const FirstStep = (args: Props) => <Dots {...args}/>

FirstStep.args = {
    currentIndex: 1,
    numberOfSteps: 4
}

export const SecondStep = (args: Props) => <Dots {...args}/>

SecondStep.args = {
    currentIndex: 2,
    numberOfSteps: 4
}

export const LastStep = (args: Props) => <Dots {...args}/>

LastStep.args = {
    currentIndex: 4,
    numberOfSteps: 4
}