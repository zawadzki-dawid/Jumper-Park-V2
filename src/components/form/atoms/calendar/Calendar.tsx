import Calendar from 'react-calendar'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { useState, useEffect } from 'react'
// Components
import Icon from '../../../icon/Icon'

// Prev

const PrevStyled = styled.div`
    height: 25px;
    transform: rotateZ(90deg);
`

const Prev = () => {
    return (
        <PrevStyled>
            <Icon
                image={'arrowYellow'}
            />
        </PrevStyled>
    )
}

// Next

const NextStyled = styled.div`
    height: 25px;
    transform: rotateZ(270deg);
`

const Next = () => {
    return (
        <NextStyled>
            <Icon
                image={'arrowYellow'}
            />
        </NextStyled>
    )
}

// CalendarWrapper

export interface Props {
    fieldName: string
}

const CalendarWrapper = styled.div`
    margin: auto;
    max-width: 400px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 30px 10px 50px 10px;
    border: 1px solid var(--yellow-darker);

    .calendar {
        width: 100%;
        margin: auto;
        max-width: 330px;
    }

    .react-calendar__navigation {
        display: flex;
        margin-bottom: 30px;
        justify-content: space-between;
    }

    .react-calendar__navigation__label__labelText--from {
        font-weight: 700;
        color: #F9C41F;
        font-size: 2.0rem;
        text-transform: uppercase;
    }

    .react-calendar__month-view__weekdays__weekday {
        display: none;
    }

    .react-calendar__month-view__days {
        row-gap: 20px;
        column-gap: 5px;
        justify-items: center;
        display: grid !important;
        justify-content: space-between;
        grid-template-columns: repeat(7, 1fr);
    }

    .calendar-tile {
        width: 100%;
        height: 30px;
        font-size: 1.6rem;
        max-width: 30px !important;

        &:disabled {
            color: #6A6A6A;
            cursor: not-allowed;
            background-color: #F7F7F7;
        }

        &:not(:disabled):hover {
            background-color: #F9C41F;
        }
    }

    .selected {
        background-color: #F9C41F;
    }

    @media only screen and (min-width: 400px) {
        .react-calendar__month-view__days {
            column-gap: 20px;
        }
    }
`

export default ({
    fieldName
}: Props) => {
    // State
    const [value, setValue] = useState<string>('')

    // Formik
    const formikProps = useFormikContext()

    // Effect
    useEffect(() => {
        formikProps.setFieldValue(fieldName, value)
    }, [value])

    return (
        <CalendarWrapper>
            <Calendar
                view={'month'}
                locale={'pl-PL'}
                prev2Label={null}
                next2Label={null}
                prevLabel={<Prev/>}
                nextLabel={<Next/>}
                minDate={new Date()}
                className={'calendar'}
                onClickDay={(date) => setValue(date.toLocaleDateString())}
                tileClassName={({ date }) => `calendar-tile ${value === date.toLocaleDateString() ? 'selected' : ''}`}
            />
        </CalendarWrapper>
    )
}