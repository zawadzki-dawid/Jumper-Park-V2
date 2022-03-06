import { ComponentProps } from 'react'
import styled from 'styled-components'

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'

// Shortcut

type PropsShortcutStyled = {
    iconHeight?: number
}

type PropsSchortcut = {
    title: string
    description: string
} & ComponentProps<typeof Icon> & PropsShortcutStyled

const ShortcutStyled = styled.div<PropsShortcutStyled>`
    flex: 1;
    gap: 8px;
    display: grid;
    max-width: 320px;
    justify-items: center;
    grid-template-rows: auto auto 1fr auto;

    > div {
        width: fit-content;
        height: ${ props => props.iconHeight ?? 40 }px;
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
    iconHeight,
    description
}: PropsSchortcut) => {
    return (
        <ShortcutStyled
            iconHeight={iconHeight}
        >
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
                image={'group'}
                title={'Zajęcia grupowe'}
                description={'Już od 13zł za 60 minut szaleństwa. Z nami spędzicie czas aktywnie i z uśmiechem.'}
            />
            <Shortcut
                image={'cake'}
                iconHeight={50}
                title={'Imprezy Urodzinowe'}
                description={'Chciałbyś zorganizować niezapomniane i wyjątkowe urodziny? Świetnie trafiłeś!'}
            />
            <Shortcut
                iconHeight={50}
                image={'acrobatics'}
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