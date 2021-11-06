import styled from 'styled-components'
import { useFetchContent } from '../../utils/hooks/fetch'

// Components
import Baner from '../../components/baner/Baner'

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
    const { data, error, loading } = useFetchContent<State>('R56NvX4zjDW3VQF3s0SD')

    return (
        <>
            <Baner 
                content={'Kontakt'}
            />
            {
                data && (
                    <Wrapper>
                        <InfoSection
                            schedule={data.schedule}
                        />
                        <QuestionsSection
                            questions={data ? data.questions : []}
                        />
                    </Wrapper>
                )
            }
        </>
    )
}