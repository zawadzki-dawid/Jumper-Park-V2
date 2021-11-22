import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

type Option = {
    price?: string
    option: string
}

type Addition = {
    price?: string
    options?: Option[]
    additional: string
}

export interface Props {
    additionals: Addition[]
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
    additionals
}: Props) => {
    return (
        <EntriesStyled>
        {
            additionals.map((addition, additionIndex) =>
                <li
                    key={additionIndex}
                >
                    {addition.additional}
                    {
                        addition.price && (
                            <span>
                                {addition.price}
                            </span>
                        )
                    }
                    {
                        addition.options && (
                            <ul
                                className={'options__list'}
                            >
                            {
                                addition.options.map((option, optionIndex) =>
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

const AdditionsStyled = styled.div`
    margin: auto;
    max-width: 550px;

    h4 {
        padding: 12px 0;
        font-weight: 700;
        font-size: 1.8rem;
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

const Additions = ({
    additionals
}: Props) => {
    return (
        <AdditionsStyled>
            <h4>
                Opcje dodatkowe
            </h4>
            <div>
                <Entries
                    additionals={additionals}
                />
            </div>
        </AdditionsStyled>
    )
}

// Main

export default ({
    additionals
}: Props) => {
    console.log(additionals)
    return (
        <Section>
            <Additions
                additionals={additionals}
            />
        </Section>
    )
}