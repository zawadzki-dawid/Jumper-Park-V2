import styled from 'styled-components'

// Assets
import Add from '../../assets/icons/icon-add.svg'
import Call from '../../assets/icons/icon-call.svg'
import Mail from '../../assets/icons/icon-mail.svg'
import Done from '../../assets/icons/icon-done.svg'
import East from '../../assets/icons/icon-east.svg'
import Cake from '../../assets/icons/icon-cake.svg'
import Group from '../../assets/icons/icon-group.svg'
import Error from '../../assets/icons/icon-error.svg'
import Arrow from '../../assets/icons/icon-arrow.svg'
import Close from '../../assets/icons/icon-close.svg'
import Scroll from '../../assets/icons/icon-scroll.svg'
import Loader from '../../assets/icons/icon-loader.svg'
import Folder from '../../assets/icons/icon-folder.svg'
import Success from '../../assets/icons/icon-success.svg'
import Youtube from '../../assets/icons/icon-youtube.svg'
import Document from '../../assets/icons/icon-document.svg'
import Download from '../../assets/icons/icon-download.svg'
import Facebook from '../../assets/icons/icon-facebook.svg'
import Instagram from '../../assets/icons/icon-instagram.svg'
import Hamburger from '../../assets/icons/icon-hamburger.svg'
import DoneBlack from '../../assets/icons/icon-done-black.svg'
import Acrobatics from '../../assets/icons/icon-acrobatics.svg'
import ArrowYellow from '../../assets/icons/icon-arrow-yellow.svg'
import DownloadGrey from '../../assets/icons/icon-download-grey.svg'
import FolderOrange from '../../assets/icons/icon-folder-orange.svg'

export const icon = {
    add: Add,
    call: Call,
    mail: Mail,
    done: Done,
    east: East,
    cake: Cake,
    group: Group,
    error: Error,
    arrow: Arrow,
    close: Close,
    scroll: Scroll,
    loader: Loader,
    folder: Folder,
    success: Success,
    youtube: Youtube,
    document: Document,
    download: Download,
    facebook: Facebook,
    doneBlack: DoneBlack,
    instagram: Instagram,
    hamburger: Hamburger,
    acrobatics: Acrobatics,
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