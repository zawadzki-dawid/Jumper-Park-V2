import styled from 'styled-components'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

// Components
import Section from '../../../components/section/Section'
import LazyImage from '../../../components/lazy-image/LazyImage'

// Assets
import Image1 from '../../../assets/images/safety/1.jpg'
import Image2 from '../../../assets/images/safety/2.jpg'
import Image3 from '../../../assets/images/safety/3.jpg'
import Image4 from '../../../assets/images/safety/4.jpg'
import Image5 from '../../../assets/images/safety/5.jpg'
import Image6 from '../../../assets/images/safety/6.jpg'
import Image7 from '../../../assets/images/safety/7.jpg'

// Data

const slides = [
    {
        image: Image1
    }
]

// Image

interface PropsImage {
    index: number,
    image: string
}

const ImageStyled = styled.div`
height: 400px;
width: 200px;
    background-color: red;
`

const Image = ({
    index,
    image
}: PropsImage) => {
    return (
        <Slide
            index={index}
        >
            <ImageStyled>
                
            </ImageStyled>
        </Slide>
    )
}

// Main

const Wrapper = styled.div`
    // width: fit-content;
    height: fit-content;
`

export default () => {
    return (
        <Section
            text={'Bezpieczeństwo'}
        >
            <Wrapper>
                <CarouselProvider
                    totalSlides={slides.length}
                    naturalSlideHeight={400}
                    naturalSlideWidth={200}
                >
                    <Slider>
                    {
                        slides.map((slide, index) =>
                            <Image
                                {...slide}
                                index={index}
                            />
                        )
                    }
                    </Slider>
                </CarouselProvider>
            </Wrapper>
        </Section>
    )
}