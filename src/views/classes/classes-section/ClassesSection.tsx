import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Components
import Section from '../../../components/section/Section'
import SectionRouter from '../../../components/section-router/SectionRouter'

// Button

const Button = styled(Link)`
    height: 45px;
    display: flex;
    padding: 0 20px;
    font-weight: 500;
    font-size: 1.6rem;
    margin: 0 auto;
    width: fit-content;
    align-items: center;
    color: var(--black);
    text-decoration: none;
    box-sizing: border-box;
    border: 4px solid var(--yellow-darker);

    &:hover {
        background-color: var(--yellow-darker);
    }
`

// Child

type Entry = {
    entry: string
    description: string
}

type Subsection = {
    title: string
    entries: Entry[]
}

type SectionData = {
    name: string
    path: string
    title: string
    linkName: string
    linkPath: string
    description: string
    subsections: Subsection[]
}

export interface Props {
    subpath: string
    sections: SectionData[]
}

type PropsDescription = Pick<SectionData, 'title' | 'description'>

const DescriptionStyled = styled.div`
    gap: 7px;
    display: grid;
    align-self: flex-start;

    h4 {
        font-weight: 500;
        font-size: 1.8rem;
    }

    p {
        font-weight: 400;
        font-size: 1.6rem;
    }
`

const Description = ({
    title,
    description
}: PropsDescription) => {
    return (
        <DescriptionStyled>
            <h4>
                {title}
            </h4>
            <p>
                {description}
            </p>
        </DescriptionStyled>
    )
}

type PropsInfo = Pick<SectionData, 'subsections'>

type PropsSubsection = Pick<Subsection, 'entries'>

const InfoEntriesStyled = styled.ul`
    gap: 7px;
    display: grid;

    li, span {
        font-weight: 400;
        font-size: 1.6rem;
    }

    span {
        display: block;
    }
`

const InfoEntries = ({
    entries
}: PropsSubsection) => {
    return (
        <InfoEntriesStyled>
        {
            entries.map((entry, index) =>
                <li
                    key={index}
                >
                    {entry.entry}
                    {
                        entry.description && (
                            <span>
                                {entry.description}
                            </span>
                        )
                    }
                </li>
            )
        }
        </InfoEntriesStyled>
    )
}

const InfoSectionStyled = styled.div`
    gap: 7px;
    display: grid;
    align-self: flex-start;

    h4 {
        font-weight: 500;
        font-size: 1.8rem;
    }
`

const InfoSection = ({
    title,
    entries
}: Subsection) => {
    return (
        <InfoSectionStyled>
            <h4>
                {title}
            </h4>
            <InfoEntries
                entries={entries}
            />
        </InfoSectionStyled>
    )
}

const InfoStyled = styled.div`
    gap: 25px;
    display: grid;
`

const Info = ({
    subsections
}: PropsInfo) => {
    return (
        <InfoStyled>
        {
            subsections.map((subsection, index) =>
                <InfoSection
                    key={index}
                    title={subsection.title}
                    entries={subsection.entries}
                />
            )
        }
        </InfoStyled>
    )
}

const ChildStyled = styled.div`
    padding: 25px;

    @media only screen and (min-width: 900px) {
        padding: 40px;
    }
`

const WrapperStyled = styled.div`
    gap: 25px;
    display: grid;
    padding-bottom: 40px;

    @media only screen and (min-width: 900px) {
        padding-bottom: 50px;
        justify-content: space-between;
        grid-template-columns: 50% 35%;
    }

    @media only screen and (min-width: 1100px) {
        padding-bottom: 70px;
    }
`

const Child = ({
    title,
    linkName,
    linkPath,
    description,
    subsections
}: SectionData) => {
    return (
        <ChildStyled>
            <WrapperStyled>
                <Description
                    title={title}
                    description={description}
                />
                <Info
                    subsections={subsections}
                />
            </WrapperStyled>
            <Button
                to={linkPath}
            >
                {linkName}
            </Button>
        </ChildStyled>
    )
}

// Main

export default ({
    subpath,
    sections
}: Props) => {
    return (
        <Section>
            <SectionRouter
                Child={Child}
                subpath={subpath}
                sections={sections}
            />
        </Section>
    )
}