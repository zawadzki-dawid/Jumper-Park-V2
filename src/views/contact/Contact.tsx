import styled from 'styled-components'
import Baner from '../../components/baner/Baner'
import { useFetchContent } from '../../utils/hooks/fetch'

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
    const { data, error, loading } = useFetchContent<State>('R56NvX4zjDW3VQF3s0SD')

    return (
        <>
            <Baner 
                content={'Kontakt'}
            />
            <Wrapper>
                <InfoSection
                    schedule={data ? data.schedule : []}
                />
                <QuestionsSection
                    questions={data ? data.questions : []}
                />
            </Wrapper>
        </>
    )
}