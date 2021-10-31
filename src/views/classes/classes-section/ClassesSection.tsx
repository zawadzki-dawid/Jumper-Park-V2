import styled from 'styled-components'

// Components
import { Button } from '../../../components/link/Link'
import SectionRouter from '../../../components/section-router/SectionRouter'

type Entry = {
    entry: string
    description: string
}

type Subsection = {
    title: string
    entries: Entry[]
}

type Section = {
    name: string
    path: string
    title: string
    linkText: string
    linkPath: string
    description: string
    sections: Subsection[]
}

export interface Props {
    sections: Section[]
}

type PropsChild = Omit<Section, 'name' | 'path'>

// Data
const DEFAULT_LOCATION = 'zajecia'

// Section component

const SectionStyled = styled.div`
    margin-top: 20px;

    h4 {
        font-size: var(--default-font-size);
    }

    li {
        margin-top: 5px;

        p:first-of-type {
            font-size: var(--default-font-size);
        }

        p:nth-of-type(2) {
            margin-top: 5px;
            font-size: var(--small-font-size);
        }
    }
`

const Section = ({
    title,
    entries
}: Subsection) => {
    return (
        <SectionStyled>
            <h4>
                {title}
            </h4>
            <ul>
            {
                entries.map((entry) =>
                    <li>
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
            </ul>
        </SectionStyled>
    )
}

// Child component

const ChildStyled = styled.div`
    padding: 15px;
`

const Content = styled.div`
    h3 {
        font-size: var(--default-font-size);
    }

    p {
        margin-top: 8px;
        font-size: var(--default-font-size);
    }
`

const LinkStyled = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
`

const Child = ({
    title,
    linkText,
    linkPath,
    sections,
    description
}: PropsChild) => {
    return (
        <ChildStyled>
            <div>
                <Content>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </Content>
                {
                    sections.map((section) => 
                        <Section
                            title={section.title}
                            entries={section.entries}
                        />
                    )
                }
            </div>
            {
                linkText && (
                    <LinkStyled>
                        <Button
                            to={linkPath}
                            text={linkText}
                            color={'black'}
                        />
                    </LinkStyled>
                )
            }
        </ChildStyled>
    )
}

// Main component

const Wrapper = styled.div`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
`

export default ({
    sections
}: Props) => {
    return (
        <Wrapper>
            <SectionRouter
                Child={Child}
                sections={sections}
                location={DEFAULT_LOCATION}
            />
        </Wrapper>
    )
}