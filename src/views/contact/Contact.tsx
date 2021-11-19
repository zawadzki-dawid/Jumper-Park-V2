import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import FormMain from '../../components/form/form-main/FormMain'

// Sections
import InfoSection, { Schedule as InfoType } from './info-section/InfoSection'
import QuestionsSection, { Section as QuestionsType } from './questions-section/QuestionsSection'

interface State {
    schedule: InfoType[]
    questions: QuestionsType[]
}

// Main component

const Wrapper = styled.div`
    padding: 25px 0;
`

export default () => {
    // Data
    const { data, error } = useFetchContent<State>('R56NvX4zjDW3VQF3s0SD')

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