import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'
import QuestionDropdown from '../../../components/question-dropdown/QuestionDropdown'

type Question = {
    answer: string
    question: string
}

export type PropsSection = {
    title: string
    questions: Question[]
}

interface Props {
    questions: PropsSection[]
}

// Questions components

const QuestionsStyled = styled.div`
    row-gap: 15px;
    display: grid;
`

const Questions = ({
    questions
}: Props) => {
    return (
        <QuestionsStyled>
        {
            questions.map((question) => 
                <QuestionDropdown
                    section={question.title}
                    questions={question.questions}
                /> 
            )
        }
        </QuestionsStyled>
    )
}

// Main component

export default ({
    questions
}: Props) => {
    return (
        <Section
            text={'Pytania i odpowiedzi'}
        >
            <Questions
                questions={questions}
            />
        </Section>
    )
}