import { init } from 'emailjs-com'
import { ReactElement } from 'react'
import styled from 'styled-components'

// Init emailjs service
init('user_a10T3YUyii1jYWi6NEe8b')

// Main

interface Props {
    heading: string
    subheading?: string
    children: ReactElement
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px 80px 20px;
    background-color: var(--yellow-main);
    background: transparent linear-gradient(0deg, #F9C41F 0%, #F9A91A 100%) 0% 0% no-repeat padding-box;
`

const Header = styled.header`
    width: 100%;
    max-width: 1280px;
    padding-bottom: 30px;

    h2 {
        font-size: 2.0rem;
        font-weight: medium;
    }
    
    span {
        display: block;
        font-size: 2.0rem;
        font-weight: medium;
        color: var(--orange-main);
    }

    @media only screen and (min-width: 500px) {
        span {
            display: inline;
        }

        span::before {
            content: ' - ';
        }
    }
`

const Form = styled.div`
    width: 100%;
    overflow: hidden;
    max-width: 1050px;
    position: relative;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: var(--white);
    box-shadow: 9px 15px 60px #00000029;
`

export default ({
    heading,
    children,
    subheading = ''
}: Props) => {
    return (
        <Wrapper>
            <Header>
                <h2>
                    {heading}
                    {
                        subheading && (
                            <span>
                                {subheading}
                            </span>
                        )
                    }
                </h2>
            </Header>
            <Form>
                { children }
            </Form>
        </Wrapper>
    )
}