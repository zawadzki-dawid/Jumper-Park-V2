import FormMain from './form-main/FormMain'
import FormBirthday from './form-birthday/FormBirthday'

export default {
    title: 'Components/Form'
}

export const Main = () => {
    return (
        <FormMain/>
    )
}

export const Birthday = () => {
    return (
        <FormBirthday/>
    )
}