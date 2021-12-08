import styled from 'styled-components'

// Assets
import Add from '../../assets/icons/icon-add.svg'
import Done from '../../assets/icons/icon-done.svg'
import East from '../../assets/icons/icon-east.svg'
import Error from '../../assets/icons/icon-error.svg'
import Arrow from '../../assets/icons/icon-arrow.svg'
import Close from '../../assets/icons/icon-close.svg'
import Folder from '../../assets/icons/icon-folder.svg'
import Success from '../../assets/icons/icon-success.svg'
import Document from '../../assets/icons/icon-document.svg'
import Download from '../../assets/icons/icon-download.svg'
import Hamburger from '../../assets/icons/icon-hamburger.svg'
import ArrowYellow from '../../assets/icons/icon-arrow-yellow.svg'
import DownloadGrey from '../../assets/icons/icon-download-grey.svg'
import FolderOrange from '../../assets/icons/icon-folder-orange.svg'

export const icon = {
    add: Add,
    done: Done,
    east: East,
    error: Error,
    arrow: Arrow,
    close: Close,
    folder: Folder,
    success: Success,
    document: Document,
    download: Download,
    hamburger: Hamburger,
    arrowYellow: ArrowYellow,
    folderOrange: FolderOrange,
    downloadGrey: DownloadGrey
}

export interface Props {
    image: keyof typeof icon
}

const Icon = styled.img`
    height: 100%;
    display: block;
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