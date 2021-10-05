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

export const Arrow = (args: Props) => {
    return (
        <div
            style={{
                width: '20px',
                height: '20px'
            }}
        >
            <Icon
                {...args}
            />
        </div>
    )
}

Arrow.args = {
    image: 'icon-arrow',
}

export const ArrowMedium = (args: Props) => {
    return (
        <div
            style={{
                width: '30px',
                height: '30px'
            }}
        >
            <Icon
                {...args}
            />
        </div>
    )
}

ArrowMedium.args = {
    image: 'icon-arrow-medium'
}
