import styled from 'styled-components'

// Assets
import Arrow from '../../assets/icons/icon-arrow.svg'
import Document from '../../assets/icons/icon-document.svg'
import Hamburger from '../../assets/icons/icon-hamburger.svg'

const icon = {
    arrow: Arrow,
    document: Document,
    hamburger: Hamburger
}

export interface Props {
    image: keyof typeof icon
}

const Icon = styled.img`
    height: 100%;
`

export default ({
    image
}: Props) => {
    return (
        <Icon
            alt={''}
            role={'img'}
            src={icon[image]}
        />
    )
}