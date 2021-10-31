import styled from 'styled-components'

// Assets
import MainStatue from '../../../assets/documents/Regulamin-ogolny.pdf'
import EventsStatue from '../../../assets/documents/Regulamin-organizacji-imprez.pdf'
import GuardianAgreement from '../../../assets/documents/Zgoda-rodzica-opiekuna.pdf'
import GroupAgreement from '../../../assets/documents/Oswiadczenie-opiekuna-grupy.pdf'
import TrampolinesStatue from '../../../assets/documents/Regulamin-korzystania-z-trampolin.pdf' 

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'
import { Statue, Agreement } from '../../../components/download-link/DownloadLink'

// Agreements component

const AgreementsStyled = styled.div`
    gap: 20px;
    display: grid;
    align-content: space-between;
    grid-template-rows: 90px auto;
    grid-template-columns: auto 1fr;

    .agreement__icon {
        grid-row: 1;
        grid-column: 1;
        padding: 12px 0;
    }

    .agreement__links {
        grid-row: 1;
        display: grid;
        grid-column: 2;
        align-content: space-around;

        > div {
            height: 38px;
            display: flex;
            align-items: center;
        }

        @media only screen and (min-width: 700px) {
            gap: 25px;
            align-content: center;
        }
    }

    .agreement__asterixs {
        grid-row: 2;
        row-gap: 8px;
        display: grid;
        grid-column: 1 / 3;

        p {
            font-size: var(--small-font-size);
        }
    }

    @media only screen and (min-width: 700px) {
        grid-template-rows: 150px auto;
    }

    @media only screen and (min-width: 1000px) {
        grid-template-rows: 180px auto;
    }
`

const Agreements = () => {
    return (
        <AgreementsStyled>
            <div
                className={'agreement__icon'}
            >
                <Icon
                    image={'document'}
                />
            </div>
            <div
                className={'agreement__links'}
            >
                <div>
                    <Agreement
                        agreement={GuardianAgreement}
                        text={'Zgoda rodzica / opiekuna'}
                        filename={'Zgoda-rodzica-opiekuna.pdf'}
                    />
                </div>
                <div>
                    <Agreement
                        agreement={GroupAgreement}
                        text={'Oświadczenie opiekuna grupy'}
                        filename={'Oswiadczenie-opiekuna-grupy.pdf'}
                    />
                </div>
            </div>
            <div
                className={'agreement__asterixs'}
            >
                <p>
                    *Osoby niepełnoletnie, przy pierwszej wizycie, 
                    muszą dostarczyć nam podpisaną zgodę rodzica
                </p>
                <p>
                    *Zgodę wystarczy przynieść tylko za pierwszym razem
                </p>
                <p>
                    *Zgodę wystarczy przynieść tylko za pierwszym razem
                </p>
            </div>
        </AgreementsStyled>
    )
}

// Statues component

const StatuesStyled = styled.div`
    gap: 15px;
    display: flex;
    justify-content: space-between;

    div {
        height: 38px;

        @media only screen and (min-width: 1000px) {
            height: 50px;
        }
    }

    @media only screen and (min-width: 1000px) {
        gap: 25px;
        flex-direction: column;
    }
`

const Statues = () => {
    return (
        <StatuesStyled>
                <Statue
                    statue={MainStatue}
                    text={'Regulamin ogólny'}
                />
                <Statue
                    statue={TrampolinesStatue}
                    text={'Regulamin korzystania z trampolin'}
                />
                <Statue
                    statue={EventsStatue}
                    text={'Regulamin organizacji imprez'}
                />
        </StatuesStyled>
    )
}

// Main component

const Wrapper = styled.div`
    width: 92%;
    max-width: 1200px;
    box-shadow: 0 3px 8px var(--shadow-color);

    > div {
        gap: 20px;
        display: flex;
        padding: 15px;
        flex-direction: column;

        @media only screen and (min-width: 600px) {
            padding: 25px;
        }

        @media only screen and (min-width: 1000px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

export default () => {
    return (
        <Section
            text={'Dokumenty'}
        >
            <Wrapper>
                <div>
                    <Agreements/>
                    <Statues/>
                </div>
            </Wrapper>
        </Section>
    )
}