import { StyledComponent } from 'styled-components'
import Button, { Props } from './Button'

export default {
    title: 'Components/Form/Atoms/Button',
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
                    <div
                        style={{
                            height: '50px',
                            width: '144px'
                        }}
                    >
                        <Story/>
                    </div>
                </div>
        )
    ]
}

export const Default = (args: Props) => <Button {...args}/>

Default.args = {
    text: 'Wstecz'
}

export const Picked = (args: Props) => <Button {...args}/>

Picked.args = {
    picked: true,
    text: 'Wstecz'
}

export const Rounded = (args: Props) => <Button {...args}/>

Rounded.args = {
    rounded: true,
    text: 'Wstecz'
}

export const FilledRounded = (args: Props) => <Button {...args}/>

FilledRounded.args = {
    picked: true,
    rounded: true,
    text: 'Wstecz'
}