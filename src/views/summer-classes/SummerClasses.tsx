import { useContext, useEffect, useState } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'

// Sections
import HeadingSection from './heading-section/HeadingSection'
import GallerySection from './gallery-section/GallerySection'
import InfoSection, { Props as PropsInfo } from './info-section/InfoSection'
import BatchSection, { Props as PropsBatch } from './batch-section/BatchSection'

type State = 
& PropsInfo
& PropsBatch

export default () => {
    // State
    const [isHeroLoaded, setIsHeroLoaded] = useState<boolean>(false)
    const { data, error } = useFetchContent<State>('GY82xHAG7eANQtHmVjpi')

    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (data && entered && isHeroLoaded) {
            setEntered(false)
        }
    }, [data, entered, isHeroLoaded])

    return (
        <>
            <Baner 
                content={'Półkolonie'}
            />
            <main>
            {
                !error && data && (
                    <>
                        <HeadingSection
                            setLoaded={setIsHeroLoaded}
                        />
                        <BatchSection
                            batches={data.batches}
                        />
                        <InfoSection
                            info={data.info}
                            legalties={data.legalties}
                            provision={data.provision}
                        />
                    </>
                )
            }
                <GallerySection/>
            </main>
        </>
    )
}