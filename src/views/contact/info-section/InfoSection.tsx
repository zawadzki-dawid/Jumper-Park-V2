import styled from 'styled-components'

// Components
import Phone from '../../../components/phone/Phone'
import Section from '../../../components/section/Section'

export type PropsSchedule = {
    openingDays: string
    openingHours: string
}

interface Props {
    schedule: PropsSchedule[]
}

// Map component

const MapStyled = styled.div`
    justify-self: stretch;
    border: var(--border-width) solid var(--black);

    iframe {
        border: 0;
        width: 100%;
        height: 100%;
        border-style: none;
        overflow: hidden;
    } 
`

const Map = () => {
    return (
        <MapStyled>
            <iframe
                title={'map'}
                loading={'lazy'}
                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.127772621832!2d23.144965416199422!3d53.12585187993341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc07d9ac98dd%3A0xb9822a8db78a3ffb!2sJumper%20Park%20Trampolin!5e0!3m2!1spl!2spl!4v1635632494574!5m2!1spl!2spl'}
            />
        </MapStyled>
    )
}

// Info component

const ScheduleStyled = styled.div`
    row-gap: 5px;
    display: grid;
    column-gap: 15px;
    grid-template-columns: min-content min-content;

    > p, > span {
        white-space: nowrap;
    }
`

const Schedule = ({
    schedule
}: Props) => {
    return (
        <div>
            <h4>
                Zapraszamy codziennie w godzinach:
            </h4>
            <ScheduleStyled>
            {
                schedule.map((entry) => 
                    <>
                        <p>
                        {
                            entry.openingDays
                        }
                        </p>
                        <span>
                        {
                            entry.openingHours
                        }
                        </span>
                    </>
                )
            }
            </ScheduleStyled>
        </div>
    )
}

const Address = () => {
    return (
        <div>
            <h4>
                Adres:
            </h4>
            <p>
                ul. Wiadukt 8, 15-327 Białystok
            </p>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <h4>
                Telefon kontaktowy:
            </h4>
            <Phone/>
        </div>
    )
}

const RemindersStyled = styled.div`
    row-gap: 8px;
    display: grid;
`

const Reminders = () => {
    return (
        <RemindersStyled>
            <p>
                Każde wejście zaczynamy o <span>pełnej godzinie</span>.
            </p>
            <p>
                Najlepiej przyjść <span>15 minut</span> wcześniej.
            </p>
        </RemindersStyled>
    )
}

const InfoStyled = styled.div`
    gap: 15px;
    display: grid;

    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h3, h4, p, span {
        font-size: var(--default-font-size);
    }

    h3, p {
        text-align: center;
    }

    h4 {
        margin-bottom: 8px;
    }

    span {
        color: var(--orange-main);
    }

    @media only screen and (min-width: 850px) {
        gap: 25px;

        h3, p {
            text-align: left;
        }

        > div {
            align-items: flex-start;
        }
    }
`

const Info = ({
    schedule
}: Props) => {
    return (
        <InfoStyled>
            <h3>
                Jumper Park <span>Trampolin</span>
            </h3>
            <Schedule
                schedule={schedule}
            />
            <Address/>
            <Contact/>
            <Reminders/>
        </InfoStyled>
    )
}

// Main component

/* const Wrapper = styled.div`
    gap: 20px;
    width: 90%;
    margin: auto;
    display: grid;
    max-width: 1200px;
    grid-template-rows: auto 300px;

    @media only screen and (min-width: 850px) {
        gap: 50px;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
    }

    @media only screen and (min-width: 1000px) {
        gap: 70px;
    }
` */

const Wrapper = styled.div`
    gap: 25px;
    display: grid;
    grid-template-rows: auto 400px;

    @media only screen and (min-width: 900px) {
        gap: 50px;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
    }
`

export default ({
    schedule
}: Props) => {
    return (
        <Section>
            <Wrapper>
                <Info
                    schedule={schedule}
                />
                <Map/>
            </Wrapper>
        </Section>
    )
}