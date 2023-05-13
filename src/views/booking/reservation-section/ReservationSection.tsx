import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

// Components
import Phone from '../../../components/phone/Phone'
import Section from '../../../components/section/Section'

// Main

export interface Props {
    inactiveContent: string
    isBookingInactive: boolean
    setLoaded: Dispatch<SetStateAction<boolean>>
}

const Wrapper = styled.div`
    height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
        border: var(--border-width) solid var(--black);
    
        iframe {
            border: 0;
            width: 100%;
            height: 100%;
            display: block;
        }
`

const ReservationInactive = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  .inactive__heading {
    font-weight: 600;
    margin-bottom: 16px;
  }
  
  .inactive__contact {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
`

export default ({
    setLoaded,
    inactiveContent,
    isBookingInactive
}: Props) => {
    return (
        <Section>
            <Wrapper>
                {
                    !isBookingInactive ? <iframe
                        id={'booking'}
                        title={'booking'}
                        onLoad={() => setLoaded(true)}
                        src={'https://reservise.com/online/fitness/122'}
                    /> : <ReservationInactive>
                        <p className={'inactive__heading'}>Rezerwacja online tymczasowo wyłączona</p>
                        <div className={'inactive__contact'}>
                            <p>
                                W celu rezerwacji prosimy o kontakt z recepcją: <Phone/>
                            </p>
                            <p>
                                Za utrudnienia przepraszamy
                            </p>
                        </div>
                    </ReservationInactive>
                }
            </Wrapper>
        </Section>
    )
}