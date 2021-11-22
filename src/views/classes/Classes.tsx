import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { LoaderContext } from '../../components/loader/Loader'
import { useFetchContents } from '../../utils/hooks/fetchSchema'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import ClassesSection, { SectionData as PropsClasses } from './classes-section/ClassesSection'

// Data

const SECTION_SUBPATH = '/zajecia'

// Main component

type State = PropsClasses

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // State
    const { data, error } = useFetchContents<State>('zajecia')

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
            <Baner
                content={'Zajęcia'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <ClassesSection
                            sections={data}
                            subpath={SECTION_SUBPATH}
                        />
                        <FormMain/>
                    </Wrapper>
                )
            }
        </>
    )
}