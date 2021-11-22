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

const PricesStyled = styled.div`
    .prices__header {
        display: flex;
        border: 1px solid var(--black);
        background-color: var(--yellow-darker);

        h5 {
            flex: 1;
            padding: 12px 0;
            font-weight: 700;
            font-size: 1.8rem;
            text-align: center;
        }

        h5:not(:first-child) {
            border-left: 1px solid var(--black);
        }
    }

    .prices__price {
        display: flex;
        overflow: hidden;
        border: 1px solid var(--grey);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        div {
            flex: 1;
            padding: 20px 0;
            background-color: var(--white);
        }

        div:not(:first-child) {
            border-left: 1px solid var(--grey);
        }

        p {
            width: 80%;
            margin: auto;
            font-weight: 500;
            font-size: 1.6rem;
        }
    }
`

const Prices = ({
    pricelist
}: Pick<BundleType, 'pricelist'>) => {
    return (
        <PricesStyled>
            <div
                className={'prices__header'}
            >
            {
                pricelist.map((price, index) =>
                    <h5
                        key={index}
                    >
                        {price.days}
                    </h5>
                )
            }
            </div>
            <div
                className={'prices__price'}
            >
            {
                pricelist.map((price, index) =>
                    <div
                        key={index}
                    >
                        <p>
                            {price.price}
                        </p>
                    </div>
                )
            }
            </div>
        </PricesStyled>
    )
}

const BundleStyled = styled.div`
    width: 100%;
    display: grid;
    max-width: 550px;
    grid-template-rows: 1fr auto;
`

const Bundle = ({
    name,
    entries,
    pricelist
}: BundleType) => {
    return (
        <BundleStyled>
            <Offer
                name={name}
                entries={entries}
            />
            <Prices
                pricelist={pricelist}
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