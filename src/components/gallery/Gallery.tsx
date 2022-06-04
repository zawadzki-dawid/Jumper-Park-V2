import Slider from 'react-slick'
import { useState } from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useFetchURLs, GetFilesParams } from './fetchUrls'
import { FlamelinkImage } from '../../utils/types/FlamelinkImage'

// Components
import Icon from '../icon/Icon'

// Main

type Image = {
    description: string
    image: FlamelinkImage[]
}

type ImageConfig = {
    width: number,
    height: number,
    quality: number
}

export type Props = {
    gallery: Image[]
    options: GetFilesParams
}

const sizes: ImageConfig[] = [
    {
        width: 375,
        height: 9999,
        quality: 0.99
    },
    {
        width: 667,
        height: 9999,
        quality: 0.99
    },
    {
        width: 800,
        height: 9999,
        quality: 0.99
    },
    {
        width: 1080,
        height: 9999,
        quality: 0.99
    },
    {
        width: 1366,
        height: 9999,
        quality: 0.99
    }
]

const Wrapper = styled.div`
    height: 100%;

    img {
        width: 100%;
    }

    .slick-dots {
        position: static;
    }

    .alice-carousel__prev-btn, .alice-carousel__next-btn {
        display: none;
    }

    .slick-dots {

        > li.slick-active > button::before {
            color: rgb(249,187,29);;
        }
    }

    .alice-carousel__dots-item:not(.__custom) {
        background-color: rgb(227, 227, 227);
    }

    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
        background-color: var(--yellow-main);
    }

    .image__wrapper {
        height: 100%;
        position: relative;
    }

    .image__description {
        left: 50%;
        bottom: 10px;
        padding: 10px 0px;
        font-size: 1.8rem;
        text-align: center;
        position: absolute;
        color: var(--white);
        border-radius: 10px;
        width: calc(100% - 40px);
        transform: translate(-50%, 0);
        background-color: rgba(0, 0, 0, 0.6);
    }

    .image__loader {
        top: 0;
        width: 100%;
        height: 100%;
        // display: flex;
        position: absolute;
        // align-items: center;
        // justify-content: center;
        background-color: var(--yellow-main);

        img {
            width: 50px;
            height: 50px;
        }
    }
`

const NextArrowStyled = styled.div`
     &.slick-next {
        right: 0;
        z-index: 1;
        padding: 30px 5px;
        width: fit-content;
        height: fit-content;
        background-color: rgba(0, 0, 0, 0.55);

        &:hover {
            background-color: rgba(0, 0, 0, 0.55);
        }
    }

    &.slick-next::before {
        content: none;
    }

    img {
        width: 35px;
        height: 35px;
        transform: rotate(-90deg);
    }

    @media only screen and (max-width: 1000px) {
        &.slick-next {
            display: none !important;
        }
    }    
`

const PrevArrowStyled = styled.div`
    &.slick-prev {
        left: 0;
        z-index: 1;
        padding: 30px 5px;
        width: fit-content;
        height: fit-content;
        background-color: rgba(0, 0, 0, 0.55);

        &:hover {
            background-color: rgba(0, 0, 0, 0.55);
        }
    }

    &.slick-prev::before {
        content: none;
    }

    img {
        width: 35px;
        height: 35px;
        transform: rotate(90deg);
    }


    @media only screen and (max-width: 1000px) {
        &.slick-prev {
            display: none !important;
        }
    }
`

export default ({
    gallery,
    options
}: Props) => {
    // State
    const imagesURLs = useFetchURLs({ gallery, options, size: setImageSize()})
    const [loadedImages, setLoadedImages] = useState<string[]>([])

    // Method
    function setImageSize (): ImageConfig {
        return sizes.find(size => Math.min(window.innerWidth, 1280) < size.width) ?? sizes[0]
    }

    return (
        <>
            <Wrapper>
                <Slider
                    dots={true}
                    initialSlide={0}
                    lazyLoad={'ondemand'}
                    nextArrow={
                        <NextArrowStyled>
                            <Icon
                                image={'arrowWhite'}
                            />
                        </NextArrowStyled>
                    }
                    prevArrow={
                        <PrevArrowStyled>
                            <Icon
                                image={'arrowWhite'}
                            />
                        </PrevArrowStyled>
                    }           
                >
                {
                    imagesURLs.map((url, index) =>
                        <div
                            key={index}
                            className={'image__wrapper'}
                        >
                            
                            <img
                                src={url.url}
                                alt={url.description}
                                onLoad={() => {
                                    setLoadedImages([...loadedImages, url.url])
                                }}
                            />
                            {
                                url.description && (
                                    <p
                                        className={'image__description'}
                                    >
                                        { url.description }
                                    </p>
                                )
                            }
                            {
                                /* !loadedImages.includes(url.url) && (
                                    <div
                                        className={'image__loader'}
                                    >
                                        <Icon
                                            image={'loader'}
                                        />
                                    </div>
                                ) */
                            }
                        </div>
                    )
                }
                </Slider>
            </Wrapper>
        </>
    )
}
