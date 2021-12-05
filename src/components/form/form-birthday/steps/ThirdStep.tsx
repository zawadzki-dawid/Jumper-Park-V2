// Components
import Error from '../../atoms/error/Error'
import Label from '../../atoms/label/Label'
import Calendar from '../../atoms/calendar/Calendar'

export default () => {
    return (
        <fieldset>
                <Label
                    text={'Wybierz datę'}
                />
                <Error
                    message={'Nie wybrano daty'}
                />
                <Calendar
                    fieldName={'date'}
                />
        </fieldset>
    )
}