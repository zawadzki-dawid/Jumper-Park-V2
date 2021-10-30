import styled, {css} from 'styled-components'

// Components
import Icon from '../../components/icon/Icon'

interface Props {
    text: string
}

const Base = css`
    height: 100%;
    display: grid;
    color: var(--black);
    font-size: var(--default-font-size);

    &:hover {
        cursor: pointer;
        color: var(--yellow-main);
    }
`

// Statue component

export interface PropsStatue extends Props {
    statue: string
}

const StatueStyled = styled.a`
    ${Base};
    row-gap: 7px;
    justify-items: center;
    text-decoration: underline;
    grid-template-rows: 1fr auto;
`

export const Statue = ({
    text,
    statue
}: Props & PropsStatue) => {
    return (
        <StatueStyled
            href={statue}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <Icon
                image={'document'}
            />
            {
                text
            }
        </StatueStyled>
    )
}

// Agreement component

export interface PropsAgreement extends Props {
    filename: string
    agreement: string
}

const AgreementStyled = styled.a`
    ${Base};
    column-gap: 8px;
    align-items: center;
    text-decoration: none;
    grid-template-columns: auto auto;
`

export const Agreement = ({
    text,
    filename,
    agreement
}: PropsAgreement) => {
    return (
        <AgreementStyled
            href={agreement}
            download={filename}
        >
            <Icon
                image={'download'}
            />
            {
                text
            }
        </AgreementStyled>
    )
}