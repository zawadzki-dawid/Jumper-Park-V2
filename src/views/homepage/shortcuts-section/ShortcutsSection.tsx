import styled from 'styled-components'

// Components
import { Button } from '../../../components/link/Link'
import Icon, { Props as IconProps } from '../../../components/icon/Icon'

interface Props {
    to: string
    text: string
    description: string
    icon: IconProps['image']
}

// Shortcut component

const ShortcutStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    > p {
        margin: 8px 0 15px 0;
        font-size: var(--default-font-size);
    }

    > div:first-of-type {
        height: 40px;
    }

    > div {
        width: fit-content;
    }
`

const Shortcut = ({
    to,
    text,
    icon,
    description
}: Props) => {
    return (
        <ShortcutStyled>
            <div>
                <Icon
                    image={icon}
                />
            </div>
            <p>
                {description}
            </p>
            <div>
                <Button
                    to={to}
                    text={text}
                />
            </div>
        </ShortcutStyled>
    )
}

// Section component

const Shortcuts = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 30px;
    border: var(--border-width) solid var(--black);
`

export default () => {
    return (
        <Shortcuts>
            <div>
                <Shortcut
                    to={''}
                    text={'Grupy szkolne'}
                    icon={'document'}
                    description={
                        `Już od 13 zł za 60 minut szaleństwa. 
                        Z nami spędzicie czas aktywnie i z uśmiechem.`
                    }
                />
                <Shortcut
                    to={''}
                    text={'Grupy szkolne'}
                    icon={'document'}
                    description={
                        `Chciałbyś zorganizować niezapomniane i wyjątkowe urodziny?
                        Świetnie trafiłeś!`
                    }
                />
                <Shortcut
                    to={''}
                    text={'Grupy szkolne'}
                    icon={'document'}
                    description={
                        `Myślałeś kiedyś o robieniu salt? 
                        Pod okiem naszych trenerów zapomnisz o grawitacji. 
                        Sprawdź naszą ofertę!`
                    }
                />
            </div>
        </Shortcuts>
    )
}