import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import InfoSection, { PropsSchedule as InfoType } from './info-section/InfoSection'
import QuestionsSection, { PropsSection as QuestionsType } from './questions-section/QuestionsSection'

interface State {
    schedule: InfoType[]
    questions: QuestionsType[]
}

// Main component

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

export default () => {
    // Data
    const { data, error } = useFetchContent<State>({ entryId: 'R56NvX4zjDW3VQF3s0SD' })

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
                content={'Kontakt'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <InfoSection
                            schedule={data.schedule}
                        />
                        <QuestionsSection
                            questions={data.questions}
                        />
                        <FormMain/>
                    </Wrapper>
                )
            }
        </>
    )
}