import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

// Atoms
import Dot from './atoms/dot/Dot'
import Scenario from './atoms/scenario/Scenario'

// Data

const scenariosData = [
    {
        title: 'Pierwsze 10 minut',
        entries: ['Przywitanie gości.', 'Rozdanie skarpetek.', 'Film instruktażowy.']
    },
    {
        title: 'Kolejne 90 minut',
        entries: ['Aktywność na trampolinach.']
    },
    {
        title: 'Ostatnie 20 minut',
        entries: ['Poczęstunek.', 'Wspólne sto lat.', 'Tort.']
    }
]

// Main

const ScenarioWrapper = styled.div`
    width: 100%;
    row-gap: 17px;
    display: grid;
    max-width: 300px;
    justify-items: center;
    grid-template-rows: auto 1fr;
`

const Wrapper = styled.div`
    margin: auto;
    display: grid;
    row-gap: 25px;
    width: fit-content;
    grid-rows-auto: auto;
    justify-items: center;

    @media only screen and (min-width: 1160px) {
        column-gap: 70px;
        grid-auto-flow: column;
        grid-auto-columns: 300px;
    }
`

export default () => {
    return (
        <Section
            text={'Scenariusz urodzin'}
        >
            <Wrapper>
            {
                scenariosData.map((scenario, index) =>
                    <ScenarioWrapper
                        key={index}
                    >
                        <Dot
                            index={index + 1}
                        />
                        <Scenario
                            key={index}
                            title={scenario.title}
                            entries={scenario.entries}
                        />
                    </ScenarioWrapper>
                )
            }
            </Wrapper>
        </Section>
    )
}