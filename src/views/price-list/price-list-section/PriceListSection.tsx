import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCallback, useMemo } from 'react'

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
    margin: 30px auto;
    width: fit-content;
    align-items: center;
    color: var(--black);
    text-decoration: none;
    box-sizing: border-box;
    border: 4px solid var(--yellow-darker);

    &:hover {
        background-color: var(--yellow-darker);
    }

    @media only screen and (min-width: 900px) {
        margin: 50px auto 30px auto;
    }

    @media only screen and (min-width: 1100px) {
        margin: 70px auto 30px auto;
    }
`

// Mobile

const MobileHeadersStyled = styled.div`
    gap: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    h4 {
        font-weight: 500;
        font-size: 1.6rem;
        align-self: center;
        white-space: pre-line;
    }

    .column__first {
        text-align: left;
    }

    .column__second {
        text-align: right;
    }
`

const MobileHeaders = ({
    headers
}: Pick<SectionData, 'headers'>) => {
    // Method
    const concatedHeaders = useMemo((): [string, string] => {
        const first = headers[0].title ?? ''
        const rest = headers.slice(1).map((header) => header.title).join('/\n') ?? ''
        return [first, rest]
    }, [headers])

    return (
        <MobileHeadersStyled>
            <h4
                className={'column__first'}
            >
                {concatedHeaders[0]}
            </h4>
            <h4
                className={'column__second'}
            >
                {concatedHeaders[1]}
            </h4>
        </MobileHeadersStyled>
    )
}

const MobileContentStyled = styled.ul`
    gap: 20px;
    display: grid;
    margin-top: 20px;

    li {
        gap: 15px;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
    }

    p {
        font-weight: 400;
        font-size: 1.6rem;
        height: fit-content;
        white-space: pre-line;
        
    }

    .column__first {
        text-align: left;
    }

    .column__second {
        text-align: right;
    }
`

const MobileContent = ({
    rows
}: Pick<SectionData, 'rows'>) => {
    // Method
    const concatEntries = useCallback((entries: Entry[]): [string, string] => {
        const first = entries[0].entry ?? ''
        const rest = entries.slice(1).map((entry) => entry.entry).join('/\n') ?? ''
        return [first, rest]
    }, [rows])

    return (
        <MobileContentStyled>
        {
            rows.map((row, index) => {
                const concatedEntries = concatEntries(row.row)
                return (
                    <li
                        key={index}
                    >
                        <p
                            className={'column__first'}
                        >
                            {concatedEntries[0]}
                        </p>
                        <p
                            className={'column__second'}
                        >
                            {concatedEntries[1]}
                        </p>
                    </li>
                )
            })
        }
        </MobileContentStyled>
    )
}

const ChildMobileStyled = styled.div`
    padding: 10px 5%;

    @media only screen and (min-width: 500px) {
        padding: 20px 8%;
    }

    @media only screen and (min-width: 800px) {
        display: none;
    }
`

const ChildMobile = ({
    rows,
    headers
}: Pick<SectionData, 'rows' | 'headers'>) => {
    return (
        <ChildMobileStyled>
            <MobileHeaders
                headers={headers}
            />
            <MobileContent
                rows={rows}
            />
        </ChildMobileStyled>
    )
}

// Desktop 

const DesktopHeadersStyled = styled.div`
    height: 60px;
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    border-bottom: 2px solid var(--black);

    h4 {
        padding: 0 15px;
        font-weight: 500;
        font-size: 1.8rem;
        text-align: center;
        height: fit-content;
    }
`

const DesktopHeaders = ({
    headers
}: Pick<SectionData, 'headers'>) => {
    return (
        <DesktopHeadersStyled>
        {
            headers.map((header, index) => 
                <h4
                    key={index}
                >
                    {header.title}
                </h4>
            )
        }
        </DesktopHeadersStyled>
    )
}

const DesktopContentStyled = styled.ul`
    gap: 30px;
    display: grid;
    margin-top: 30px;

    li {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
    }

    p {
        padding: 0 15px;
        font-weight: 400;
        font-size: 1.6rem;
        text-align: center;
    }
`

const DesktopContent = ({
    rows
}: Pick<SectionData, 'rows'>) => {
    return (
        <DesktopContentStyled>
        {
            rows.map((row, rowIndex) => 
                <li
                    key={rowIndex}
                >
                {
                    row.row.map((entry, entryIndex) => 
                        <p
                            key={entryIndex}
                        >
                            {entry.entry}
                        </p>
                    )
                }
                </li>
            )
        }
        </DesktopContentStyled>
    )
}

const ChildDesktopStyled = styled.div`
    display: none;
 
    @media only screen and (min-width: 800px) {
        display: block;
    }
`

const ChildDesktop = ({
    rows,
    headers
}: Pick<SectionData, 'rows' | 'headers'>) => {
    return (
        <ChildDesktopStyled>
            <DesktopHeaders
                headers={headers}
            />
            <DesktopContent
                rows={rows}
            />
        </ChildDesktopStyled>
    )
}

// Child

type Entry = {
    entry: string
}

type Row = {
    row: Entry[]
}

type Header = {
    title: string
}

type SectionData = {
    rows: Row[]
    name: string
    path: string
    linkName: string
    linkPath: string
    headers: Header[]
}

const ChildStyled = styled.div``

const Child = ({
    rows,
    headers,
    linkName,
    linkPath
}: SectionData) => {
    return (
        <ChildStyled>
            <ChildMobile
                rows={rows}
                headers={headers}
            />
            <ChildDesktop
                rows={rows}
                headers={headers}
            />
            <Button
                to={linkPath}
            >
                {linkName}
            </Button>
        </ChildStyled>
    )
}

// Main

export interface Props {
    subpath: string
    sections: SectionData[]
}

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