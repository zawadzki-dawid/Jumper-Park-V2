import styled from "styled-components";
import { useContext, useEffect, useState } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'

// Sections
import HeadingSection from './heading-section/HeadingSection'
import InfoSection, { Props as PropsInfo } from './info-section/InfoSection'
import BatchSection, { Props as PropsBatch } from './batch-section/BatchSection'

type State = 
& PropsInfo
& PropsBatch

const StyledMain = styled.main`
margin-bottom: 40px;
  
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`

export default () => {
    // State
    const [isHeroLoaded, setIsHeroLoaded] = useState<boolean>(false)
    const { data, error } = useFetchContent<State>({ entryId: 'GY82xHAG7eANQtHmVjpi' })

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
            <StyledMain>
            {
                !error && data && (
                    <>
                        <HeadingSection
                            setLoaded={setIsHeroLoaded}
                        />
                        <InfoSection
                            descriptions={data.descriptions}
                        />
                        <BatchSection
                            batches={data.batches}
                        />
                    </>
                )
            }
            </StyledMain>
        </>
    )
}