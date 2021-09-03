import styled from 'styled-components'

export type IconName = 'icon-arrow' | 'icon-arrow-medium' | 'icon-arrow-big'

export interface Props {
    image: IconName,
    width: number,
    height: number
}

const iconsPath = '/assets/icons'

const Icon = styled.i<Props>`
    background-image: url(${ props => `${iconsPath}/${props.image}.svg` });
    background-repeat: no-repeat;
    background-size: ${ props => `${props.width}px ${props.height}px` };
    width: ${ props => `${props.width}px` };
    height: ${ props => `${props.height}px` };
`

export default ({
    image,
    width,
    height
}: Props) => {
    return (
        <Icon
            image={image}
            width={width}
            height={height}
        />
    )
}