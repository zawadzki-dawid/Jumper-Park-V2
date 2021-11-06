import { StyledComponent } from 'styled-components';
import { Input, TextArea, Select, Props, PropsSelect } from './Input'

export default {
    title: 'Components/Input',
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    height: '90vh',
                    display: 'flex',
                    margin: '0 50px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Story/>
            </div>
        )
    ]
}

export const InputDefault = (args: Props) => {
    return (
        <div
            style={{
                width: '100%'
            }}
        >
            <Input
                {...args}
            />
        </div>
    )
}

InputDefault.args = {
    label: 'Imię i nazwisko'
}

export const TextAreaDefault = (args: Props) => {
    return (
        <div
            style={{
                width: '100%',
                height: '250px'
            }}
        >
            <TextArea
                {...args}
            />
        </div>
    )
}

TextAreaDefault.args = {
    label: 'Imię i nazwisko'
}

export const SelectDefault = (args: PropsSelect) => {
    return (
        <div
            style={{
                width: '100%'
            }}
        >
            <Select
                {...args}
            />
        </div>
    )
}

SelectDefault.args = {
    label: 'Imię i nazwisko',
    options: [
        'Urodziny',
        'Zakup biletu',
        'Pomoc',
        'Zajęcia',
        'Pytanie',
        'Atrakcje'
    ]
}