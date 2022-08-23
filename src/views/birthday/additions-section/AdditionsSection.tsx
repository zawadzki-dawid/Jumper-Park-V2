import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

type Option = {
    price?: string
    option: string
}

type Entry = {
    entry: string
    price?: string
    options?: Option[]
}

type Addition = {
    title: string
    entries?: Entry[]
}

export interface Props {
    additions?: Addition[]
}

interface PropsEntry {
    entries?: Entry[]
}

interface PropsInfo {
    addition: Addition
}

// Additions

const EntriesStyled = styled.ul`
    gap: 20px;
    margin: auto;
    display: grid;
    width: fit-content;

    > li {
        font-weight: 500;
        font-size: 1.6rem;

        span {
            font-weight: 400;
            font-size: 1.6rem;
        }

        span::before {
            content: ' - ';
            font-weight: 500;
            font-size: 1.6rem;
        }
    }

    .options__list {
        gap: 12px;
        display: grid;
        margin-top: 12px;

        > li {
            font-weight: 400;
            font-size: 1.6rem;

            span {
                font-weight: 400;
                font-size: 1.6rem;
            }
        }
    }

    li {
        max-width: max-content;
    }
`

const Entries = ({
    entries
}: PropsEntry) => {
    return (
        <EntriesStyled>
        {
            entries?.map((entry, infoIndex) =>
                <li
                    key={infoIndex}
                >
                    {entry.entry}
                    {
                        entry.price && (
                            <span>
                                {entry.price}
                            </span>
                        )
                    }
                    {
                        entry.options && (
                            <ul
                                className={'options__list'}
                            >
                            {
                                entry.options.map((option, optionIndex) =>
                                    <li
                                        key={optionIndex}
                                    >
                                        {option.option}
                                        {
                                            option.price && (
                                                <span>
                                                    {option.price}
                                                </span>
                                            )
                                        }
                                    </li>
                                )
                            }
                            </ul>
                        )
                    }
                </li>
            )
        }
        </EntriesStyled>
    )
}

const InfoStyled = styled.div`
    width: 100%;

    h4 {
        padding: 12px 0;
        font-weight: 700;
        font-size: 2.0rem;
        text-align: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid var(--black);
        background-color: var(--yellow-darker);
    }

    > div {
        padding: 20px;
        border: 1px solid var(--grey);
        background-color: var(--white);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`

const Info = ({
    addition
}: PropsInfo) => {
    return (
        <InfoStyled>
            <h4>
                { addition.title }
            </h4>
            <div>
                <Entries
                    entries={addition.entries}
                />
            </div>
        </InfoStyled>
    )
}

// Main

const Wrapper = styled.div`
    margin: auto;
    row-gap: 30px;
    display: grid;
    max-width: 550px;
    grid-template-rows: auto auto;
`

export default ({
    additions
}: Props) => {
    return (
        <Section>
            <Wrapper>
            {
                additions?.map((addition, index) => {
                    return (
                        <Info
                            key={index}
                            addition={addition}
                        />
                    )
                })
            }
            </Wrapper>
        </Section>
    )
}