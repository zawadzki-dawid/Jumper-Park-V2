import { ComponentProps } from 'react'
import styled from 'styled-components'

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'
/*
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
} */

// Shortcut

type PropsSchortcut = {
    title: string
    description: string
} & ComponentProps<typeof Icon>

const ShortcutStyled = styled.div`
    flex: 1;
    gap: 8px;
    display: grid;
    max-width: 320px;
    justify-items: center;
    grid-template-rows: auto auto 1fr auto;

    > div {
        height: 40px;
        width: fit-content;
    }

    > h4 {
        text-align: center;
    }

    > p {
        text-align: center;
    }
`

const Shortcut = ({
    image,
    title,
    description
}: PropsSchortcut) => {
    return (
        <ShortcutStyled>
            <div>
                <Icon
                    image={image}
                />
            </div>
            <h4>
                {title}
            </h4>
            <p>
                {description}
            </p>
        </ShortcutStyled>
    )
}

// Shortcuts

const ShortcutsStyled = styled.div`
    gap: 30px;
    display: flex;
    padding: 30px 20px;
    align-items: center;
    flex-direction: column;
    border: var(--border-width) solid var(--black);

    @media only screen and (min-width: 750px) {
        padding: 30px;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
    }

    @media only screen and (min-width: 900px) {
        padding: 60px;
    }
`

const Shortcuts = () => {
    return (
        <ShortcutsStyled>
            <Shortcut
                image={'document'}
                title={'Zajęcia grupowe'}
                description={'Już od 13zł za 60 minut szaleństwa. Z nami spędzicie czas aktywnie i z uśmiechem.'}
            />
            <Shortcut
                image={'document'}
                title={'Imprezy Urodzinowe'}
                description={'Chciałbyś zorganizować niezapomniane i wyjątkowe urodziny? Świetnie trafiłeś!'}
            />
            <Shortcut
                image={'document'}
                title={'Zajęcia akrobatyczne'}
                description={'Pod okiem naszych trenerów zapomnisz o grawitacji. Sprawdź naszą ofertę!'}
            />
        </ShortcutsStyled>
    )
}

// Main

export default () => {
    return (
        <Section>
            <Shortcuts/>
        </Section>
    )
}