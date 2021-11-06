import styled from 'styled-components'

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'

// Data
const firstScenario = ['Przywitanie gości.', 'Rozdanie skarpetek.', 'Film instruktażowy.']
const secondScenario = ['Aktywność na trampolinach.']
const thirdScenario = ['Poczęstunek.', 'Wspólne sto lat.', 'Tort.']

// Icon component

const IconStyled = styled.div`
    width: fit-content;
    transform: rotateZ(90deg);
`

// Scenario component

interface Props {
    title: string
    entries: string[]
}


const ScenarioStyled = styled.div`
    width: 100%;
    box-shadow: 0 3px 8px var(--shadow-color);

    > div {
        padding: 10px 0;
        text-align: center;
        box-sizing: border-box;
        background-color: orange;
        border: 1px solid var(--black);
        border-radius: var(--border-radius);
    }

    ul {
        row-gap: 10px;
        padding: 15px;
        display: grid;
    }

    li {
        display: flex;
        column-gap: 3px;

        div {
            height: 22px;
            transform: rotateZ(-90deg);
        }
    }
`

const Scenario = ({
    title,
    entries
}: Props) => {
    return (
        <ScenarioStyled>
            <div>
                {title}
            </div>
            <ul>
            {
                entries.map((entry, index) =>
                    <li
                        key={index}
                    >
                        <div>
                            <Icon
                                image={'arrow'}
                            />
                        </div>
                        <p>
                            {entry}
                        </p>
                    </li>
                )
            }
            </ul>
        </ScenarioStyled>
    )
}

// Main component

const Wrapper = styled.div`
    gap: 15px;
    display: grid;
    margin: 0 30px;
    justify-items: center;
    grid-template-rows: auto 30px auto 30px auto;
`

export default () => {
    return (
        <Section
            text={'Scenariusz urodzin'}
        >
            <Wrapper>
                <Scenario
                    title={'Pierwsze 10 minut'}
                    entries={firstScenario}
                />
                <IconStyled>
                    <Icon
                        image={'east'}
                    />
                </IconStyled>
                <Scenario
                    title={'Kolejne 90 minut'}
                    entries={secondScenario}
                />
                <IconStyled>
                    <Icon
                        image={'east'}
                    />
                </IconStyled>
                <Scenario
                    title={'Ostatnie 20 minut'}
                    entries={thirdScenario}
                />
            </Wrapper>
        </Section>
    )
}