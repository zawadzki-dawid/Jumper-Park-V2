import styled, {css} from 'styled-components'

// Components
import Icon from '../../components/icon/Icon'

interface Props {
    text: string
}

const Base = css`
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
    display: flex;
    text-align: center;
    justify-items: center;
    flex-direction: column;
    text-decoration: underline;
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
            <div>
                <Icon
                    image={'document'}
                />
            </div>
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
    height: 100%;
    display: grid;
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