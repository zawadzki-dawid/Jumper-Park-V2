import styled from 'styled-components'

// Components
import Error from '../../atoms/error/Error'
import Label from '../../atoms/label/Label'
import { Input } from '../../atoms/input/Input'
import TextArea from '../../atoms/text-area/TextArea'

const InputsWrapper = styled.div`
    gap: 10px;
    display: grid;
    margin-bottom: 10px;
    grid-auto-rows: 53px;

    @media only screen and (min-width: 1010px) {
        column-gap: 20px;
        margin-bottom: 30px;
        grid-auto-flow: column;
    }
`

const TextAreaWrapper = styled.div`
    height: 280px;
`

const Wrapper = styled.fieldset`
    margin: auto;
    max-width: 910px;
`

export default () => {
    return (
        <Wrapper>
            <Label
                text={'Twoje dane'}
            />
            <Error
                message={'Nie uzupełniono poprawnie danych'}
            />
            <InputsWrapper>
                <Input
                    fieldName={'name'}
                    placeholder={'Imię'}
                />
                <Input
                    fieldName={'email'}
                    placeholder={'Adres e-mail'}
                />
                <Input
                    fieldName={'number'}
                    placeholder={'Numer telefonu'}
                />
            </InputsWrapper>
            <TextAreaWrapper>
                <TextArea
                    fieldName={'message'}
                    placeholder={'Wiadomość'}
                />
            </TextAreaWrapper>
        </Wrapper>
    )
}