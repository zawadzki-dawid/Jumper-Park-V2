import styled from 'styled-components'
import Section from '../../../components/section/Section'

// Offer

type Column = {
    price: string
    offer: string
}

type Offer = {
    title: string
    columns: Column[]
}

const OfferStyled = styled.div`
    width: 100%;
    max-width: 350px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 3px 40px #00000029;

    h4 {
        font-size: 700;
        padding: 12px 0;
        font-size: 2.0rem;
        text-align: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid var(--black);
        background-color: var(--yellow-darker);
    }

    div {
        display: flex;
    }

    h5, p {
        flex: 1;
        text-align: center;
    }

    h5 {
        padding: 15px 0;
        font-weight: 700;
        font-size: 1.6rem;

        &:not(:first-child) {
            border-left: 1px solid var(--grey);
        }
    }

    p {
        padding: 20px 0;
        font-weight: 500;
        font-size: 1.6rem;

        &:not(:first-child) {
            border-left: 1px solid var(--grey);
        }
    }

    .headers__wrapper {
        border-bottom: 1px solid var(--grey);
    }
`

const Offer = ({
    title,
    columns
}: Offer) => {
    return (
        <OfferStyled>
            <h4>
                {title}
            </h4>
            <div
                className={'headers__wrapper'}
            >
            {
                columns.map((column, index) => 
                    <h5
                        key={index}
                    >
                        {column.offer}
                    </h5>
                )
            }
            </div>
            <div>
            {
                columns.map((column, index) => 
                    <p
                        key={index}
                    >
                        {column.price}
                    </p>
                )
            }
            </div>
        </OfferStyled>
    )
}

// Main

export interface Props {
    offers: Offer[]
}

const Wrapper = styled.div`
    gap: 30px;
    margin: auto;
    display: flex;
    max-width: 1100px;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 1000px) {
        gap: 50px;
        flex-direction: row;
    }
`

export default ({
    offers
}: Props) => {
    return (
        <Section
            text={'Cennik'}
        >
            <Wrapper>
            {
                offers.map((offer, index) => 
                   <Offer
                        {...offer}
                        key={index}
                   /> 
                )
            }
            </Wrapper>
        </Section>
    )
}