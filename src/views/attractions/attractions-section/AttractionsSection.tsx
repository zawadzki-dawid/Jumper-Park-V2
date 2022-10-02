import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useFetchURL } from '../../../utils/hooks/fetchUrl'
import DefaultImage from '../../../assets/logo/logo-text.png'
import { FlamelinkImage } from '../../../utils/types/FlamelinkImage'
import { extractImageId } from '../../../utils/functions/extractImageId'

// Components
import Icon from '../../../components/icon/Icon'
import Section from '../../../components/section/Section'
import LazyImage from '../../../components/lazy-image/LazyImage'

// Attraction

interface PropsAttraction {
    name: string
    path: string
    image: FlamelinkImage[]
}

const AttractionStyled = styled(Link)`
  width: 100%;
  display: grid;
  font-size: 1.6rem;
  max-width: 300px;
  overflow: hidden;
  color: var(--black);
  border-radius: 10px;
  text-decoration: none;
  grid-template-rows: 200px 60px;
  box-shadow: 0 7px 30px #00000029;

  .image__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
  
  .text {
    display: flex;
    font-weight: 500;
    align-items: center;
    justify-content: center;
  }
  
  &:hover {
    transform: scale(1.03);
  }
`

const Attraction = ({
    name,
    path,
    image
}: PropsAttraction) => {
    // Method
    const flamelinkImage = useMemo<string>(() => {
        return extractImageId([{ image }]) ?? ''
    }, [image])

    // State
    const { url, isFetching } = useFetchURL(flamelinkImage, {
        width: 375,
        height: 9999,
        quality: 0.99
    })

    return (
        <AttractionStyled
            to={`/atrakcje/${path}`}
        >
            <div className={'image__wrapper'}>
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
                            <LazyImage
                                alt={name}
                                image={url ?? DefaultImage}
                            />
                        </div>
                    )
                }
            </div>
            <div
                className={'text'}
            >
                { name }
            </div>
        </AttractionStyled>
    )
}

// Main

export type Props = {
    attractions: Record<string, PropsAttraction>
}
const Wrapper = styled.div`
  display: grid;
  row-gap: 40px;
  column-gap: 60px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
`

export default ({
    attractions
}: Props) => {
    return (
        <Section>
            <Wrapper>
            {
                Object.values(attractions).map((attraction, index) =>
                    <Attraction
                        key={index}
                        path={attraction.path}
                        name={attraction.name}
                        image={attraction.image}
                    />
                )
            }
            </Wrapper>
        </Section>
    )
}