import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

// Data

const remindersData = [
    {
        title: 'Wejście',
        entries: [
            `Każde wejście trwa równą godzinę, wejścia są wyłącznie o pełnych godzinach.`,
            `Przyjdź co najmniej 15 minut wcześniej, aby spokojnie mieć czas na rejestrację oraz przebranie się.`,
            `Przed wejściem zostanie pokazany film z zasadami bezpiecznego skakania oraz zostanie poprowadzona rozgrzewka.`
        ]
    },
    {
        title: 'Strój',
        entries: [
            `Weź ze sobą wygodny strój na zmianę. Pozwoli ci on na swobodne skakanie.`,
            `Jeśli nie masz, lub nie zamówisz skarpetek antypoślizgowych będziesz je musiał kupić na miejscu. Są obowiązkowe dla Twojego bezpieczeństwa, a kosztują tylko 6 zł.`
        ]
    },
    {
        title: 'Opieka',
        entries: [
            `Dzieci od 3 do 13 lat mogą wejść tylko z rodzicem/ prawnym opiekunem lub pełnoletnią osobą, posiadając pisemną zgodę rodzica/ prawnego opiekuna.`,
            `Opiekunowie z dziećmi do 6 lat wchodzą na jednym bilecie.`,
            `Osoby do 18 roku życia muszą nam dostarczyć podpisaną zgodę rodzica/prawnego opiekuna.`
        ]
    }
]

// Reminder

interface PropsReminder {
    title: string
    entries: string[]
}

const ReminderStyled = styled.div`
    display: grid;
    max-width: 290px;
    border-radius: 10px;
    grid-template-rows: 48px 1fr;

    h4 {
        z-index: 1;
        display: flex;
        font-weight: 700;
        font-size: 1.8rem;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        border-radius: 10px 10px 0 0;
        background-color: rgb(249, 196, 31);
    }

    ul {
        border-radius: 0 0 10px 10px;
        background-color: var(--white);
        box-shadow: 5px 5px 40px #00000029;
    }

    div {
        row-gap: 22px;
        display: grid;
        padding: 20px 25px 20px 34px;
    }

    li {
        font-weight: 500;
        font-size: 1.6rem;
        position: relative;
    }

    li::before {
        top: 6px;
        left: -7px;
        width: 2px;
        content: '';
        height: 1.2rem;
        display: block;
        position: absolute;
        background-color: rgb(249, 196, 31);

    }
` 

const Reminder = ({
    title,
    entries
}: PropsReminder) => {
    return (
        <ReminderStyled>
            <h4>
                {title}
            </h4>
            <ul>
                <div>
                {
                    entries.map((entry, index) => 
                        <li
                            key={index}
                        >
                            {entry}
                        </li>
                    )
                }
                </div>
            </ul>
        </ReminderStyled>
    )
}

// Main

const Wrapper = styled.div`
    padding: 38px 0 72px 0;
    background-color: rgb(235, 233, 233, 0.25);
`

const RemindersWrapper = styled.div`
    row-gap: 40px;
    display: grid;
    column-gap: 72px;
    justify-content: center;

    @media only screen and (min-width: 1140px) {
        grid-auto-flow: column;
    }
`

export default () => {
    return (
        <Wrapper>
            <Section>
                <RemindersWrapper>
                {
                    remindersData.map((data, index) => 
                        <Reminder
                            {...data}
                            key={index}
                        />
                    )
                }
                </RemindersWrapper>
            </Section>
        </Wrapper>
    )
}