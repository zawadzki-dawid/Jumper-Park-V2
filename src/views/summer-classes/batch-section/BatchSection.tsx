import romans from 'romans'
import styled from 'styled-components'
import { useFetchURL } from '../../../utils/hooks/fetchUrl'
import { extractImageId } from '../../../utils/functions/extractImageId'

// Type
import { FlamelinkImage } from '../../../utils/types/FlamelinkImage'

// Components
import Image from '../../../components/image/Image'
import Section from '../../../components/section/Section'

type PropsImage = {
    alt: string
    image: FlamelinkImage[]
}

interface PropsBatch {
    image: PropsImage[]
    batchName: string
    batchDate: string
    description: string
    batchNumber: number
}

type PropsDot = Pick<PropsBatch, 'batchDate' | 'batchNumber'>
type PropsDescription = Pick<PropsBatch, 'batchName' | 'description'>

// Dot

const DotStyled = styled.div`
    left: 50%;
    top: -14px;
    row-gap: 5px;
    width: 170px;
    height: 170px;
    display: flex;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #F9BC1D;
    transform: translate(-50%, 0);

    span {
        font-weight: 600;
        font-size: 2.4rem;
        letter-spacing: 0.24px;
    }
`

const Dot = ({
    batchDate,
    batchNumber
}: PropsDot) => {
    return (
        <DotStyled
            className={'dot'}
        >
            <span>
                { `${romans.romanize(batchNumber)} Turnus` }
            </span>
            <span>
                { batchDate }
            </span>
        </DotStyled>
    )
}

// Batch

const DescriptionStyled = styled.div`
    box-sizing: border-box;
    border: var(--border-width) solid #F9BC1D;

    h4 {
        font-size: 2.6rem;
        letter-spacing: 0.26px;
    }

    p {
        font-size: 1.8rem;
        letter-spacing: 0.26px;
    }

    section > div {
        width: 100%;
    }

    .content__wrapper {
        row-gap: 40px;
        display: grid;
        padding: 40px 0 80px;
    }

    @media only screen and (min-width: 1200px) {
        .content__wrapper {
            padding: 160px 0 220px;
        }
    }
`

const Description = ({
    batchName,
    description
}: PropsDescription) => {
    return (
        <DescriptionStyled>
            <Section>
                <div className={'content__wrapper'}>
                    <h4>
                        { batchName }
                    </h4>
                    <p>
                        { description }
                    </p>
                </div>
            </Section>
        </DescriptionStyled>
    )
}

const BatchStyled = styled.div`
    display: grid;
    flex-direction: column;

    .image__wrapper {
        width: 100%;
        height: 400px;
        position: relative;
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: 8fr 10fr;

        .image__wrapper {
            width: auto;
            height: 100%;
            max-height: none;
        }

        .dot {
            left: auto;
            right: -85px;
            transform: translate(0, 0);
        }

        .content__wrapper {
            padding-left: 0;
            padding-right: calc((100vw - 1280px) / 2 - 62px);
        }

        &:nth-child(even) {
            grid-template-columns: 10fr 8fr;

            .image__wrapper {
                order: 2;
            }

            .dot {
                right: auto;
                left: -85px;
                transform: translate(0, 0);
            }

            .content__wrapper {
                padding-right: 0;
                padding-left: calc((100vw - 1280px) / 2 - 62px);
            }
        }
    }
`

const Batch = ({
    image,
    batchName,
    batchDate,
    description,
    batchNumber
}: PropsBatch) => {
    // State
    const url = useFetchURL(extractImageId(image) ?? '')

    return (
        <BatchStyled>
            <div
                className={'image__wrapper'}
            >
                <Image
                    alt={''}
                    src={url ?? ''}
                />
                 <Dot
                    batchDate={batchDate}
                    batchNumber={batchNumber}
                />
            </div>
            <Description
                batchName={batchName}
                description={description}
            />
        </BatchStyled>
    )
}

// Main

export interface Props {
    batches: PropsBatch[]
}

const Wrapper = styled.div`
    row-gap: 60px;
    display: grid;
`

export default ({
    batches
}: Props) => {
    return (
        <Wrapper>
        {
            batches.map((batch, index) =>
                <Batch
                    {...batch}
                    key={index}
                    batchNumber={index + 1}
                />
            )
        }
        </Wrapper>
    )
}