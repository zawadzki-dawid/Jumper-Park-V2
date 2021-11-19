import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// Components
import Section from '../../../components/section/Section'
import SectionRouter from '../../../components/section-router/SectionRouter'

type Entry = {
    entry: string
}

type Column = {
    name: string
    entries: Entry[]
}

export type SectionData = {
    name: string
    path: string
    linkName: string
    linkPath: string
    columns: Column[]
}

interface Props {
    subpath: string
    sections: SectionData[]
}

// ColumnDesktop component

type ColumnsData = Pick<SectionData, 'columns'>

const HeadersDesktopStyled = styled.div`
    display: grid;
    align-content: center;
    justify-items: center;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    border-bottom: var(--border-width) solid var(--black);

    h4 {
        text-align: center;
        font-size: var(--heading-font-size);
        font-weight: var(--heading-font-weight);
    }
`

const HeadersDesktop = ({
    columns
}: ColumnsData) => {
    return (
        <HeadersDesktopStyled>
        {
            columns.map((column, index) => 
                <h4
                    key={index}
                >
                    {column.name}
                </h4>
            )
        }
        </HeadersDesktopStyled>
    )
}

const EntriesDesktopStyled = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;

    li {
        padding-top: 30px;
        text-align: center;
        font-size: var(--default-font-size);
    }
`

const EntriesDesktop = ({
    columns
}: ColumnsData) => {
    return (
        <EntriesDesktopStyled>
        {
            columns.map((column, columnId) => 
                <ul
                    key={columnId}
                >
                {
                    column.entries.map((entry, entryId) =>
                        <li
                            key={entryId}
                        >
                            {entry.entry}
                        </li>
                    )
                }
                </ul>
            )
        }
        </EntriesDesktopStyled>
    )
}

// ColumnsDesktop component

const ColumnsDesktopStyled = styled.div`
    display: grid;
    grid-template-rows: 64px auto;
`

const ColumnsDesktop = ({
    columns
}: ColumnsData) => {
    return (
        <ColumnsDesktopStyled>
            <HeadersDesktop
                columns={columns}
            />
            <EntriesDesktop
                columns={columns}
            />
        </ColumnsDesktopStyled>
    )
}

// Child component

const ChildStyled = styled.div`

`

const ButtonStyled = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: center;

    a {
        color: var(--black);
        padding: 12px;
        text-decoration: none;
        border: 3px solid var(--orange-light);
    }
`


const Child = ({
    columns,
    linkName,
    linkPath
}: SectionData) => {
    return (
        <ChildStyled>
            <ColumnsDesktop
                columns={columns}
            />
            <ButtonStyled>
                <NavLink
                    to={linkPath}
                >
                    {linkName}
                </NavLink>
            </ButtonStyled>
        </ChildStyled>
    )
}

// Main component

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