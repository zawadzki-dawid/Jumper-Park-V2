import styled from 'styled-components'

// Components
import LazyImage from '../lazy-image/LazyImage'

// Main

export interface Props {
    alt: string
    name: string
    image: string
}

const Attraction = styled.button`
    width: 100%;
    display: block;
    max-width: 400px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 2px 50px #00000029;

    > div {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 80px;
    }

    .image__wrapper {
        top: 50%;
        width: 100%;
        overflow-y: hidden;
        position: relative;
        transform: translate(0%, -50%);

        > div {
            width: 100%;
            height: auto;
            position: absolute;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    .name__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h4 {
        padding: 0 20px;
        font-weight: 700;
        font-size: 2.0rem;
        text-align: center;
    }
    
    cursor: default;
`

export default ({
    alt,
    name,
    image
}: Props) => {
    return (
        <Attraction
            type={'button'}
        >
            <div>
                <div
                    className={'image__wrapper'}
                >
                    <LazyImage
                        alt={alt}
                        image={image}
                    />
                </div>
                <div
                    className={'name__wrapper'}
                >
                    <h4>
                        {name}
                    </h4>
                </div>
            </div>
        </Attraction>
    )
}