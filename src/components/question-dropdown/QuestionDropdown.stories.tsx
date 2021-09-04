import { StyledComponent } from 'styled-components'
import QuestionDropdown, { Props } from './QuestionDropdown'

export default {
    title: 'Components/QuestionDropdown',
    args: {
        section: 'Pierwsza Wizyta W Jumperze',
        questions: [
            {
                question: 'Jak przygotować się do skakania?',
                answer: `Weź przewiewne, wygodne ubranie 
                         - najlepiej takie jak na WF. Na miejscu 
                         są przebieralnie damskie i męskie z łazienkami i
                          prysznicami. Pamiętaj, że najbezpieczniej
                           skakać przed, a nie po jedzeniu.`
            },
            {
                question: 'Czy skakanie na trampolinach jest bezpieczne?',
                answer: `Pamiętaj, że to jest sport - działają tu te same zasady,
                         co przy każdej innej aktywności fzycznej. Należy 
                         przestrzegać zasad skakania, słuchać uwag trenerów, 
                         uważać na innych skaczących i nie szarżować.`
            },
            {
                question: 'Po co mi skarpety antypoślizgowe? Czy mogę skakać bez nich?',
                answer: `Skarpety zwiększają bezpieczeństwo skakania - zapobiegają poślizgom.`
            }
        ]
    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    height: '90vh',
                    width: '90%',
                    margin: 'auto'
                }}
            >
                <Story/>
            </div>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <QuestionDropdown
            {...args}
        />
    )
}
