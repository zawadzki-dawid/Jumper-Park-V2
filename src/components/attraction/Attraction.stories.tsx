import { StyledComponent } from 'styled-components'
import Attraction, { Props } from './Attraction'

// Assets
import Image from '../../assets/images/attractions/attraction.jpg'

export default {
    title: 'Components/Attraction',
    args: {
        alt: 'asdfsdfs',
        name: 'Wymiatacz',
        image: Image
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    width: '380px',
                    margin: 'auto',
                    marginTop: '30px',
                }}
            >
                <Story/>
            </div>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <Attraction
            {...args}
        />
    )
}
