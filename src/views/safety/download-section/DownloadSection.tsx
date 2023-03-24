import { AnchorHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

// Assets
import MainStatue from '../../../assets/documents/Regulamin-ogolny.pdf'
import PrivacyPolicy from '../../../assets/documents/Polityka-prywatnosci.pdf'
import EventsStatue from '../../../assets/documents/Regulamin-organizacji-imprezy-urodzinowej.pdf'
import GuardianAgreement from '../../../assets/documents/Zgoda-rodzica-do-druku.pdf'
import GroupAgreement from '../../../assets/documents/Oswiadczenie-opiekuna-grupy.pdf'
import TrampolinesStatue from '../../../assets/documents/Regulamin-korzystania-z-infastruktury.pdf'

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'

// Card

interface PropsCard extends AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string
}

const CardBase = css`

    display: grid;
    font-size: 1.6rem;
    color: var(--black);
    border-radius: 10px;
    justify-items: center;
    text-decoration: none;
    box-sizing: border-box;
    padding: 20px 15px 11px 15px;
    box-shadow: 0px 7px 30px #00000029;

    .card__title {
        text-align: center;
    }

    .card__text {
        margin-top: 5px;
        color: #F9A218;
    }

    .top-icon__wrapper > img:last-child {
        display: none;
    }

    .bottom-icon__wrapper > img:last-child {
        display: none;
    }

    &:hover {
        cursor: pointer;
        background-color: #F9A218;

        .card__text, .card__title {
            color: var(--white);
        }

        .top-icon__wrapper > img:first-child {
            display: none;
        }

        .top-icon__wrapper > img:last-child {
            display: block;
        }

        .bottom-icon__wrapper > img:last-child {
            display: block;
        }

        .bottom-icon__wrapper > img:first-child {
            display: none;
        }
    }
`

const Card = ({
    text
}: Pick<PropsCard, 'text'>) => {
    return (
        <>
            <div
                className={'top-icon__wrapper'}
            >
                <Icon
                    image={'folderOrange'}
                />
                <Icon
                    image={'folder'}
                />
            </div>
            <span
                className={'card__title'}
            >
                {text}
            </span>
            <div
                className={'bottom-icon__wrapper'}
            >
                <Icon
                    image={'downloadGrey'}
                />
                <Icon
                    image={'download'}
                />
            </div>
            <span
                className={'card__text'}
            >
                Pobierz
            </span>
        </>
    )
}

const CardAgreementStyled = styled.a`
    ${CardBase};
    width: 270px;
    height: 200px;
    grid-template-rows: auto 1fr auto auto;

    .card__title {
        margin-top: 15px;
    }
`

const CardAgreement = ({
    text,
    ...rest
}: PropsCard) => {
    return (
        <CardAgreementStyled
            {...rest}
        >
            <Card
                text={text}
            />
        </CardAgreementStyled>
    )
}

const CardStatueStyled = styled.a`
    ${CardBase};
    width: 270px;
    height: 200px;
    grid-template-rows: auto 1fr auto auto;

    .card__title {
        margin-top: 15px;
    }

    @media only screen and (min-width: 928px) {
        width: 220px;
        height: 175px;

        .top-icon__wrapper {
            height: 25px;
        }

        .card__title {
            margin-top: 10px;
        }

        .bottom-icon__wrapper {
            height: 20px;
        }
    }
`

const CardStatue = ({
    text,
    ...rest
}: PropsCard) => {
    return (
        <CardStatueStyled
            {...rest}
        >
            <Card
                text={text}
            />
        </CardStatueStyled>
    )
}

// Main

const AgreementsWrapper = styled.div`
    row-gap: 20px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    justify-content: center;
`

const StatuesWrapper = styled.div`
    row-gap: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    column-gap: 40px;
    justify-content: center;

    @media only screen and (min-width: 928px) {
        margin-top: 55px;
    }
`

const AsterixWrapper = styled.div`
    margin: auto;
    row-gap: 8px;
    display: grid;
    margin-top: 60px;
    width: fit-content;

    > p {
        font-weight: 400;
        font-size: 1.6rem;
        font-style: italic;
    }

    @media only screen and (min-width: 920px) {
        margin-left: 0;
    }
`

const Wrapper = styled.div`
    margin: auto;
    width: fit-content;
`

export default () => {
    return (
        <Section
            text={'Dokumenty'}
        >
            <Wrapper>
                <AgreementsWrapper>
                    <CardAgreement
                        href={GuardianAgreement}
                        text={'Zgoda rodzica/opiekuna'}
                        download={'Zgoda rodzica/opiekuna'}
                    />
                    <CardAgreement
                        href={GroupAgreement}
                        text={'Oświadczenie opiekuna grupy'}
                        download={'Oświadczenie opiekuna grupy'}
                    />
                </AgreementsWrapper>
                <StatuesWrapper>
                    <CardStatue
                        rel={'noopener'}
                        target={'_blank'}
                        href={MainStatue}
                        text={'Regulamin ogólny'}
                    />
                    <CardStatue
                        rel={'noopener'}
                        target={'_blank'}
                        href={TrampolinesStatue}
                        text={'Regulamin korzystania z trampolin'}
                    />
                    <CardStatue
                        rel={'noopener'}
                        target={'_blank'}
                        href={EventsStatue}
                        text={'Regulamin organizacji imprez'}
                    />
                    <CardStatue
                        rel={'noopener'}
                        target={'_blank'}
                        href={PrivacyPolicy}
                        text={'Polityka prywatności'}
                    />
                </StatuesWrapper>
                <AsterixWrapper>
                    <p>
                        *Osoby niepełnoletnie, przy pierwszej wizycie, muszą dostarczyć nam podpisaną zgodę rodzica
                    </p>
                    <p>
                        *Zgodę wystarczy przynieść tylko za pierwszym razem
                    </p>
                    <p>
                        *Wszystkich formalności można dokonać również na miejscu
                    </p>
                </AsterixWrapper>
            </Wrapper>
        </Section>
    )
}