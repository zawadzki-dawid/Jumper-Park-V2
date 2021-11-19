import styled from 'styled-components'

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'

// Data
const firstScenario = ['Przywitanie gości.', 'Rozdanie skarpetek.', 'Film instruktażowy.']
const secondScenario = ['Aktywność na trampolinach.']
const thirdScenario = ['Poczęstunek.', 'Wspólne sto lat.', 'Tort.']

// Scenario

interface PropsEntry {
    entry: string
}

const ScenarioEntryStyled = styled.li`
    display: flex;
    position: relative;
    align-items: center;

    > div {
        right: 100%;
        position: absolute;
        transform: rotate(-90deg);
    }
`

const ScenarioEntry = ({
    entry
}: PropsEntry) => {
    return (
        <ScenarioEntryStyled>
            <div>
                <Icon
                    image={'arrow'}
                />
            </div>
            {entry}
        </ScenarioEntryStyled>
    )
}

const ScenarioStyled = styled.div`
    width: 100%;
    height: 100%;
    max-width: 400px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 3px 8px var(--shadow-color);

    > div {
        padding: 12px 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid var(--black);
        background-color: var(--yellow-main);
    }

    h4 {
        font-weight: 700;
        font-size: 1.8rem;
        text-align: center;
    }

    ul {
        gap: 20px;
        display: grid;
        padding: 20px 40px;
        width: fit-content;
        grid-template-columns: auto;

        @media only screen and (min-width: 1000px) {
            margin: auto;
        }
    }
`

const ArrowStyled = styled.div`
    width: fit-content;
    height: fit-content;
    transform: rotateZ(90deg);

    @media only screen and (min-width: 1000px) {
        transform: none;
    }
`

const Arrow = () => {
    return (
        <ArrowStyled>
            <Icon
                image={'east'}
            />
        </ArrowStyled>
    )
}

interface PropsScenario {
    title: string
    entries: string[]
}

const Scenario = ({
    title,
    entries
}: PropsScenario) => {
    return (
        <ScenarioStyled>
            <div>
                <h4>
                    {title}
                </h4>
            </div>
            <ul>
            {
                entries.map((entry, index) =>
                    <ScenarioEntry
                        key={index}
                        entry={entry}
                    />
                )
            }
            </ul>
        </ScenarioStyled>
    )
}

// Main

const Wrapper = styled.div`
    gap: 25px;
    margin: auto;
    display: grid;
    max-width: 1100px;
    align-items: center;
    justify-items: center;
    grid-template-rows: auto 25px auto 25px auto;

    @media only screen and (min-width: 1000px) {
        grid-template-rows: auto;
        grid-template-columns: 1fr 25px 1fr 25px 1fr;
    }
`

export default () => {
    return (
        <Section
            text={'Scenariusz urodzin'}
        >
            <Wrapper>
                <Scenario
                    entries={firstScenario}
                    title={'Pierwsze 10 minut'}
                />
                <Arrow/>
                <Scenario
                    entries={secondScenario}
                    title={'Kolejne 90 minut'}
                />
                <Arrow/>
                <Scenario
                    entries={thirdScenario}
                    title={'Ostatnie 20 minut'}
                />
            </Wrapper>
        </Section>
    )
}