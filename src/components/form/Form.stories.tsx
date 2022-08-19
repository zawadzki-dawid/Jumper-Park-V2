import FormMain from './form-main/FormMain'
import FormBirthday, { Props as PropsBirthday } from './form-birthday/FormBirthday'

export default {
    title: 'Components/Form'
}

export const Main = () => {
    return (
        <FormMain/>
    )
}

export const Birthday = (args: PropsBirthday) => {
    return (
        <FormBirthday
            {...args}
        />
    )
}

Birthday.args = {
    form: {
        additions: ['Poczęstunek', 'Napoje']
    }
}