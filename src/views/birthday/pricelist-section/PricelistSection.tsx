import styled from 'styled-components'

// Components
import Section from '../../../components/section/Section'

// Bundle

type PricelistType = {
    days: string
    price: string
}

type EntryType = {
    entry: string
}

type BundleType = {
    name: string
    entries: EntryType[]
    pricelist: PricelistType[]

}

const OfferStyled = styled.div`
    h4 {
        padding: 12px 0;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid var(--black);
        background-color: var(--yellow-darker);
    }

    div {
        height: 100%;
        padding: 20px;
        background-color: var(--white);
        border-left: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    ul {
        gap: 20px;
        margin: auto;
        display: grid;
        width: fit-content;
    }

    li {
        font-weight: 500;
        font-size: 1.6rem;
        max-width: max-content;
    }
`

const Offer = ({
    name,
    entries
}: Omit<BundleType, 'pricelist'>) => {
    return (
        <OfferStyled>
            <h4>
                {name}
            </h4>
            <div>
                <ul>
                {
                    entries.map((entry, index) =>
                        <li
                            key={index}
                        >
                            {entry.entry}
                        </li>
                    )
                }
                </ul>
            </div>
        </OfferStyled>
    )
}

const BundleStyled = styled.div`
    width: 100%;
    max-width: 550px;
`

const Bundle = ({
    name,
    entries
}: BundleType) => {
    return (
        <BundleStyled>
            <Offer
                name={name}
                entries={entries}
            />
        </BundleStyled>
    )
}

// Main

export interface Props {
    bundles: BundleType[]
}

const BundlesWrapper = styled.div`
    gap: 30px;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(auto, 550px));
`

export default ({
    bundles
}: Props) => {
    return (
        <Section
            text={'Cennik'}
        >
            <BundlesWrapper>
            {
                bundles.map((bundle, index) =>
                    <Bundle
                        key={index}
                        {...bundle}
                    />
                )
            }
            </BundlesWrapper>
        </Section>
    )
}