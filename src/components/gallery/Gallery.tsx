import { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useFetchURLs, GetFilesParams } from '../../utils/hooks/fetchUrl'

// Main

type Props = {
    options: GetFilesParams
}

const size = {
    width: 1280,
    height: 9999,
    quality: 0.99
}

const Wrapper = styled.div`
    width: 100%;

    img {
        width: 100%;
    }

    .alice-carousel__prev-btn, .alice-carousel__next-btn {
        display: none;
    }

    .alice-carousel__dots-item:not(.__custom) {
        background-color: rgb(227, 227, 227);
    }

    .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
        background-color: var(--yellow-main);
    }
`

export default ({
    options
}: Props) => {
    // State
    const urls = useFetchURLs(options, size)

    return (
        <>
            <Wrapper>
            {
                urls.length > 0 && (
                    <Slider
                        lazyLoad={'ondemand'}
                    >
                    {
                        urls.map((url, index) =>
                            <div
                                key={index}
                            >
                                <img
                                    src={url}
                                />
                            </div>
                        )
                    }
                    </Slider>
                )
            }
            </Wrapper>
        </>
    )
}
