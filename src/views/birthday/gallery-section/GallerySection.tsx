// Components
import Section from '../../../components/section/Section'
import Gallery from '../../../components/gallery/Gallery'

export default () => {
    return (
        <Section
            text={'Galeria'}
        >
            <Gallery options={{ folderName: 'Birthday' }}/>
        </Section>
    )
}