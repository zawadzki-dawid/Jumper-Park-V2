import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useMemo } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import InfoSection, { Props as PropsInfo } from './attractions-section/InfoSection'

// Main

type Params = {
    name: string
}

type Attraction = PropsInfo & {
    name: string
    path: string
}

type State = Record<string, Attraction>

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: 0 0 var(--section-default-gap);
`

export default () => {
    // Location
    const params = useParams<Params>()

    // State
    const { data, error } = useFetchContent<State>({
        limit: 1,
        schemaKey: 'attractions',
        filters: [['path', '==', params.name]]
    })

    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (data && entered) {
            setEntered(false)
        }
    }, [data, entered])

    // Methods
    const attraction = useMemo<Attraction | null>(() => {
        const [attraction] = Object.values(data ?? {})
        return attraction 
            ? attraction 
            : null
    }, [data])

    return (
        <>
            <Baner
                content={attraction?.name ?? 'Atrakcja'}
            /> 
            {
                !error && attraction && (
                    <Wrapper>
                        <InfoSection
                            image={attraction.image}
                            description={attraction.description}
                        />
                        <FormMain/>
                    </Wrapper>
                )
            }
        </>
    )
}