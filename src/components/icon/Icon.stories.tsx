import { StyledComponent } from 'styled-components';
import Icon, { Props } from './Icon';

export default {
    title: 'Components/Icon',
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

export const Hamburger = (args: Props) => {
    return (
        <div
            style={{
                height: '40px',
                backgroundColor: 'black'
            }}
        >
            <Icon
                {...args}
            />
        </div>
    )
}

Hamburger.args = {
    image: 'hamburger',
}

export const Document = (args: Props) => {
    return (
        <div
            style={{
                height: '30px'
            }}
        >
            <Icon
                {...args}
            />
        </div>
    )
}

Document.args = {
    image: 'document'
}

export const Done = (args: Props) => {
    return (
        <div
            style={{
                height: '30px',
                backgroundColor: 'black'
            }}
        >
            <Icon
                {...args}
            />
        </div>
    )
}

Done.args = {
    image: 'done'
}
