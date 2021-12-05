// Components
import Label from '../../atoms/label/Label'
import Error from '../../atoms/error/Error'
import BundlePicker from '../../organisms/bundle-picker/BundlePicker'

export default () => {
    return (
        <fieldset>
            <Label
                text={'Wybierz pakiet'}
            />
            <Error
                message={'Nie wybrano pakietu'}
            />
            <BundlePicker
                fieldName={'bundle'}
            />
        </fieldset>
    )
}