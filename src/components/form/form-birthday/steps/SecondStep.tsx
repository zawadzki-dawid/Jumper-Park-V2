import styled from 'styled-components'

// Components
import Label from '../../atoms/label/Label'
import Error from '../../atoms/error/Error'
import { Input, InputDate } from '../../atoms/input/Input'
import NumberPicker from '../../organisms/number-picker/NumberPicker'
import AgeSpanPicker from '../../organisms/age-span-picker/AgeSpanPicker'
import AdditionsPicker, { Addition } from '../../organisms/additions-picker/AdditionsPicker'

export interface Props {
    additions: Addition[]
}

const TopWrapper = styled.div`
    margin: auto;
    row-gap: 10px;
    display: grid;
    max-width: 620px;
    margin-bottom: 40px;
    grid-auto-rows: 53px;

    @media only screen and (min-width: 720px) {
        column-gap: 40px;
        grid-auto-flow: column;
        grid-auto-columns: 290px;
    }
`

const MiddleWrapper = styled.div`
    display: grid;
    row-gap: 20px;
    margin-bottom: 40px;
`

export default ({
    additions
}: Props) => {
    return (
        <fieldset>
            <Label
                text={'Imię, nazwisko i data urodzenia solenizanta'}
            />
            <Error
                message={'Nie uzupełniono poprawnie danych'}
                fields={['birthdayPersonName', 'birthdayPersonDate']}
            />
            <TopWrapper>
                <Input
                    fieldName={'birthdayPersonName'}
                    placeholder={'Imię i Nazwisko'}
                />
                <InputDate
                    fieldName={'birthdayPersonDate'}
                    placeholder={'Data urodzenia'}
                />
            </TopWrapper>
            <Label
                text={'Liczba gości i ich przedział wiekowy'}
            />
            <Error
                message={'Nie wybrano przedziału'}
                fields={['ageSpan', 'numberOfGuests']}
            />
            <MiddleWrapper>
                <NumberPicker
                    fieldName={'numberOfGuests'}
                />
                <AgeSpanPicker
                    fieldName={'ageSpan'}
                />
            </MiddleWrapper>
            <Label
                text={'Dodatki'}
            />
            <AdditionsPicker
                additions={additions}
                fieldName={'additions'}
            />
        </fieldset>
    )
}