import { useMemo } from 'react'
import styled from 'styled-components'
import { useFetchURL } from '../../../utils/hooks/fetchUrl'
import { FlamelinkImage } from '../../../utils/types/FlamelinkImage'
import { extractImageId } from '../../../utils/functions/extractImageId'

// Components
import Icon from '../../../components/icon/Icon'
import Image from '../../../components/image/Image'
import { Button } from '../../../components/link/Link'
import Section from '../../../components/section/Section'
import DefaultImage from '../../../assets/logo/logo-text.png'

// Main

export interface Props {
    description: string
    image: FlamelinkImage[]
}

const DescriptionStyled = styled.div`
    box-sizing: border-box;

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
        row-gap: 50px;
        display: grid;
        padding: 40px 0 60px;
    }
  
  .buttons {
    row-gap: 15px;
    display: grid;
    column-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    
    > a {
      font-weight: 700;
      font-size: 1.6rem;
      text-align: center;
      text-transform: uppercase;
    }
    
    > a:first-child {
      color: var(--black);
      border-color: rgb(249, 187, 29);

      &:hover, &:active {
        background-color: rgb(249, 187, 29);
      }
    }
    
    > a:last-child {
      border-color: rgb(249, 187, 29);
      background-color: rgb(249, 187, 29);
      
      &:hover, &:active {
        color: var(--black);
        background-color: var(--white);
      }
    }
  }

    @media only screen and (min-width: 1200px) {
        .content__wrapper {
            row-gap: 80px;
            padding: 180px 0 120px;
        }
    }
`

const Description = ({
 description
}: Pick<Props, 'description'>) => {
    return (
        <DescriptionStyled>
            <Section>
                <div className={'content__wrapper'}>
                    <p>
                        { description }
                    </p>
                    <div className={'buttons'}>
                        <Button
                            to={'/atrakcje'}
                            color={'black'}
                            text={'Wróc do atrakcji'}
                        />
                        <Button
                            to={'/kupbilet'}
                            color={'black'}
                            text={'Kup bilet'}
                        />
                    </div>
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
        display: flex;
        position: relative;
        align-items: center;
    }

  .image__inner-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.small {
      height: 50px;
    }
  }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: 8fr 10fr;

        .image__wrapper {
            width: auto;
            height: 100%;
            max-height: none;
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

            .content__wrapper {
                padding-right: 0;
                padding-left: calc((100vw - 1280px) / 2 - 62px);
            }
        }
    }
`

const Batch = ({
    image,
    description
}: Props) => {
    // Method
    const flamelinkImage = useMemo<string>(() => {
        return extractImageId([{ image }]) ?? ''
    }, [image])

    // State
    const { url, isFetching } = useFetchURL(flamelinkImage, {
        width: 1280,
        height: 9999,
        quality: 0.99
    })

    return (
        <BatchStyled>
            <div
                className={'image__wrapper'}
            >
                {
                    isFetching ? (
                        <div
                            className={'image__inner-wrapper small'}
                        >
                            <Icon
                                image={'loader'}
                            />
                        </div>
                    ) : (
                        <div
                            className={`image__inner-wrapper ${url ? '' : 'small'}`}
                        >
                            <Image
                                alt={'Zdjęcie atrakcji'}
                                src={url ?? DefaultImage}
                            />
                        </div>
                    )
                }
            </div>
            <Description
                description={description}
            />
        </BatchStyled>
    )
}

const Wrapper = styled.div`
    row-gap: 60px;
    display: grid;
`

export default ({
    image,
    description
}: Props) => {
    return (
        <Wrapper>
            <Batch
                image={image}
                description={description}
            />
        </Wrapper>
    )
}