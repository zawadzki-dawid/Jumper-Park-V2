import styled from 'styled-components'

export type IconName = 
| 'icon-arrow' 
| 'icon-arrow-medium' 
| 'icon-arrow-big'
| 'icon-hamburger'

export interface Props {
    image: IconName
}

const iconsPath = '/assets/icons'

const Icon = styled.span<Props>`
    width: 100%;
    height: 100%;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${ props => `${iconsPath}/${props.image}.svg` });
`

export default ({
    image
}: Props) => {
    return (
        <Icon
            image={image}
        />
    )
}