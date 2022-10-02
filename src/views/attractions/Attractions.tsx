import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import AttractionsSection, { Props as AttractionsProps } from './attractions-section/AttractionsSection'

// Main

type State = AttractionsProps

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const { data, error } = useFetchContent<State['attractions']>({ 
        schemaKey: 'attractions',
        fields: ['name', 'path', 'image']
    })

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
            <Baner
                content={'Atrakcje'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <AttractionsSection
                            attractions={data ?? {}}
                        />
                        <FormMain/>
                    </Wrapper>
                )
            }
        </>
    )
}