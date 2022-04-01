import styled from 'styled-components';

// Components
import Icon from '../../../../../components/icon/Icon'

// Main

interface PropsEntry {
    entry: string
}

const ScenarioEntryStyled = styled.li`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.25;
    position: relative;

    > img {
        right: 100%;
        height: 1.9rem;
        position: absolute;
        transform: rotate(-90deg);
    }
`

const ScenarioEntry = ({
    entry
}: PropsEntry) => {
    return (
        <ScenarioEntryStyled>
            <Icon
                image={'arrow'}
            />
            {entry}
        </ScenarioEntryStyled>
    )
}

const ScenarioStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 48px 1fr;

    h4 {
        display: flex;
        font-weight: 700;
        font-size: 1.8rem;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 0 0;
        border: 1px solid var(--black);
        background-color: var(--yellow-darker);
    }

    > div {
        border-radius: 0 0 10px 10px;
        box-shadow: 5px 5px 40px #00000029;
    }

    ul {
        gap: 20px;
        display: grid;
        padding: 20px 50px;
        width: fit-content;
        grid-template-columns: auto;
    }
`

interface Props {
    title: string
    entries: string[]
}

export default ({
    title,
    entries
}: Props) => {
    return (
        <ScenarioStyled>
            <h4>
                {title}
            </h4>
            <div>
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
            </div>
        </ScenarioStyled>
    )
}