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
        <Icon
            {...args}
        />
    )
}

Arrow.args = {
    image: 'icon-arrow',
    width: 20,
    height: 20
}

export const ArrowMedium = (args: Props) => {
    return (
        <Icon
            {...args}
        />
    )
}

ArrowMedium.args = {
    image: 'icon-arrow-medium',
    width: 30,
    height: 30
}
