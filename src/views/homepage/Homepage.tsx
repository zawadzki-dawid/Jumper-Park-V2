import { useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetch'

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
    const { data, error, loading } = useFetchContent<State>('aY9ZXtrIZ9yYS78Rl6ne')

    // Effect
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
        {
            data && <div>
                <FeedSection
                    feed={data['feed']}
                />
            </div>
        }
        <ShortcutsSection/>
        </>
    )
}