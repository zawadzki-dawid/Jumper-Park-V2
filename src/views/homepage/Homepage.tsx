import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import { Feed as CardProps } from '../../components/card/Card'

// Sections
import Hero from '../../components/hero/Hero'
import FeedSection from './feed-section/FeedSection'
import ShortcutsSection from './shortcuts-section/ShortcutsSection'

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
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (data && entered) {
            setEntered(false)
        }
    }, [data, entered])

    return (
        <>
            <Hero/>
            {
                !error && data && (
                    <Wrapper>
                        <FeedSection
                            feed={data.feed}
                        />
                        <ShortcutsSection/>
                    </Wrapper>
                )
            }
        </>
    )
}