import { useEffect } from 'react'
import styled from 'styled-components'
import { useFetchContent } from '../../utils/hooks/fetch'

// Sections
import ClassesSection, { Props as ClassesProps } from './classes-section/ClassesSection'

/* // Components
import Baner from '../../components/baner/Baner'
import { LinkButton } from '../../components/link/Link'
import SectionRouter from '../../components/section-router/SectionRouter'

// Data
const SECTION_MAIN_LOCATION = 'zajecia'

interface Props {
    title: string
    description: string
    sectionName: string
    schedule: string[]
    linkText: string
    linkPath: string
}

const StyledSection = styled.div`
    padding: 30px 40px;
    display: grid;
    row-gap: 30px;

    h3 {
        text-decoration: underline;
    }

    p, ul {
        margin-top: 10px;
    }

    li:not(:first-of-type) {
        margin-top: 5px;
    }
`

const ClassesSection = ({
    title,
    description,
    schedule,
    linkText,
    linkPath
}: Props) => {
    return (
        <StyledSection>
            <div>
                <h3>
                    { title }
                </h3>
                <p>
                    { description }
                </p>
            </div>
            <div>
                <h3>
                    Godziny zajęć
                </h3>
                    <ul>
                    {
                        schedule.map((hour, index) => 
                            <li
                                key={index}
                            >
                                { hour }
                            </li>
                        )
                    }
                    </ul>
            </div>
            {
                linkText && linkPath && (
                    <div>
                        <LinkButton
                            text={linkText}
                            path={linkPath}
                            color={'black'}
                        />
                    </div>
                )
            }
        </StyledSection>
    )
}

export default () => {
    return (
        <>
            <Baner 
                content={'Zajęcia'}
            />
            <div>

            </div>
        </>
    )
} */

interface State {
    sections: ClassesProps['sections']
}

// Main content

const Wrapper = styled.div`

`

export default () => {
    // State
    const { data, error, loading } = useFetchContent<State>('IbNVn6og6FLqTfXjgiB4')

    return (
        <>
            <Wrapper>
                <ClassesSection
                    sections={data && data.sections || []}
                />
            </Wrapper>
        </>
    )
}