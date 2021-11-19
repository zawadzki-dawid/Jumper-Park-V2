import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'
import SectionRouter from '../../../components/section-router/SectionRouter'

type Entry = {
    entry: string
    description: string
}

type Subsection = {
    title: string
    entries: Entry[]
}

export type SectionData = {
    name: string
    path: string
    title: string
    linkName: string
    linkPath: string
    description: string
    subsections: Subsection[]
}

interface Props {
    subpath: string
    sections: SectionData[]
}

// Description 

type PropsDescription = Pick<SectionData, 'title' | 'description'>

const DescriptionStyled = styled.div`
    
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

// Info

type PropsInfo = Pick<SectionData, 'subsections'>

const SubsectionStyled = styled.ul`
    
`

type PropsSubsection = Pick<Subsection, 'entries'>

const Subsection = ({
    entries
}: PropsSubsection) => {
    return (
        <SubsectionStyled>
        {
            entries.map((entry, index) =>
                <li
                    key={index}
                >
                    <p>
                        {entry.entry}
                    </p>
                    {
                        entry.description && (
                            <p>
                                {entry.description}
                            </p>
                        )
                    }
                </li>
            )
        }
        </SubsectionStyled>
    )
}

const InfoStyled = styled.div`
    
`

const Info = ({
    subsections
}: PropsInfo) => {
    return (
        <InfoStyled>
        {
            subsections.map((subsection, index) =>
                <div
                    key={index}
                >
                    <h4>
                        {subsection.title}
                    </h4>
                    <Subsection
                        entries={subsection.entries}
                    />
                </div>
            )
        }
        </InfoStyled>
    )
}

// Child

const ChildStyled = styled.div`
    padding: 20px;
`

const Child = ({
    title,
    description,
    subsections
}: SectionData) => {
    return (
        <ChildStyled>
            <Description
                title={title}
                description={description}
            />
            <Info
                subsections={subsections}
            />
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