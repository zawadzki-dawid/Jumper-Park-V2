import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import { Props as CardProps } from '../../components/card/Card'

// Sections
import FeedSection from './feed-section/FeedSection'
import ShortcutsSection from './shortcuts-section/ShortcutsSection'

interface State {
    feed: CardProps[]
}

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
                <>
                    <FeedSection
                        feed={data.feed}
                    />
                    <ShortcutsSection/>
                </>
            )
        }
        </>
    )
}