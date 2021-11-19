import { StyledComponent } from 'styled-components';
import LazyImage, { Props } from './LazyImage';

export default {
    title: 'Components/LazyImage',
    args: {
        alt: 'PFR',
        image: 'https://firebasestorage.googleapis.com/v0/b/jumper-park.appspot.com/o/flamelink%2Fmedia%2Fpfr.svg?alt=media&token=1309a8ab-3c90-4781-8b10-0dc12004e5c0'
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    display: 'flex',
                    height: '2000px',
                    marginTop: '20px',
                    justifyContent: 'center'
                }}
            >
                <Story/>
            </div>
        )
    ]
}

export const VisibleOnRender = (args: Props) => {
    return (
        <div
            style={{
                width: 'fitContent',
                minWidth: '300px',
                height: '300px'
            }}
        >
            <LazyImage
                {...args}
            />
        </div>
    )
}

export const VisibleOnScroll = (args: Props) => {
    return (
        <div
            style={{
                width: '300px',
                height: '300px',
                marginTop: '1500px'
            }}
        >
            <LazyImage
                {...args}
            />
        </div>
    )
}