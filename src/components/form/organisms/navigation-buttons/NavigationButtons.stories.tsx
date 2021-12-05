import { StyledComponent } from 'styled-components'
import NavigationButtons, { Props } from './NavigationButtons'

export default {
    title: 'Components/Form/Organisms/NavigationButtons',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
                <div
                    style={{
                        height: '90vh',
                        padding: '30px 30px'
                    }}
                >
                    <Story/>
                </div>
        )
    ]
}

export const FirstStep = (args: Props) => <NavigationButtons {...args}/>

FirstStep.args = {
    currentStep: 1,
    numberOfSteps: 4
}

export const SecondStep = (args: Props) => <NavigationButtons {...args}/>

SecondStep.args = {
    currentStep: 2,
    numberOfSteps: 4
}


export const LastStep = (args: Props) => <NavigationButtons {...args}/>

LastStep.args = {
    currentStep: 4,
    numberOfSteps: 4
}
