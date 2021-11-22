import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import { Props as CardProps } from '../../components/card/Card'

// Sections
import FeedSection from './feed-section/FeedSection'
import SafetySection from './safety-section/SafetySection'
import ShortcutsSection from './shortcuts-section/ShortcutsSection'
import AttractionsSection from './attractions-section/AttractionsSection'

// Main

interface State {
    feed: CardProps[]
}

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const { data, error } = useFetchContent<State>('aY9ZXtrIZ9yYS78Rl6ne')

    // Context
    const { setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (!data) {
            return
        }
        setEntered(false)
    }, [data])

    return (
        <>
        {
            !error && data && (
                <Wrapper>
                    <FeedSection
                        feed={data.feed}
                    />
                    <ShortcutsSection/>
                    <AttractionsSection/>
                </Wrapper>
            )
        }
        </>
    )
}