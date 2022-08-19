import styled from 'styled-components'
import { useEffect, useContext } from 'react'
import { useFetchContent } from '../../utils/hooks/fetchDoc'
import { LoaderContext } from '../../components/loader/Loader'

// Components
import Baner from '../../components/baner/Baner'
import TextSection from '../../components/text-section/TextSection'
import FormBirthday, { Props as PropsForm } from '../../components/form/form-birthday/FormBirthday'

// Sections
import ScenarioSection from './scenario-section/ScenarioSection'
import GallerySection, { Props as PropsGallery } from './gallery-section/GallerySection'
import PricelistSection, { Props as PropsPricelist } from './pricelist-section/PricelistSection'
import AdditionsSection, { Props as PropsAdditions } from './additions-section/AdditionsSection'
import AsterixesSection, { Props as PropsAsterixes } from './asterixes-section/AsterixesSection'

// Main component

type State = PropsPricelist & PropsAdditions & PropsAsterixes & PropsGallery & PropsForm

const Wrapper = styled.div`
    display: grid;
    gap: var(--section-default-gap);
    margin: var(--section-default-gap) 0;
`

const CardsWrapper = styled.div`
    gap: 40px; 
    display: grid;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: rgba(235, 233, 233, 0.25);
`

export default () => {
    // State
    const {data, error} = useFetchContent<State>('NvSWotCmtbNUEEeKpVvq')

    // Context
    const { entered, setEntered } = useContext(LoaderContext)

    // Effect
    useEffect(() => {
        if (data && entered) {
            setEntered(false)
        }
    }, [data, entered])

    return (
        <>
            <Baner
                content={'Urodziny'}
            />
            {
                !error && data && (
                    <Wrapper>
                        <TextSection>
                            Przykładamy wielkich starań, by organizować dla Was niezapomniane przyjęcia urodzinowe. Nasza wyszkolona i uśmiechnięta kadra przekaże wszystkim gościom mnóstwo pozytywnej energii oraz miłości do ruchu.
                        </TextSection>
                        <ScenarioSection/>
                        <CardsWrapper>
                            <PricelistSection
                                bundles={data.bundles}
                            />
                            <AdditionsSection
                                additionals={data.additionals}
                            />
                        </CardsWrapper>
                        <AsterixesSection
                            asterixes={data?.asterixes ?? []}
                        />
                        <FormBirthday
                            form={data.form}
                        />
                        <GallerySection
                            gallery={data.gallery}
                        />
                    </Wrapper>
                )
            }
        </>
    )
}