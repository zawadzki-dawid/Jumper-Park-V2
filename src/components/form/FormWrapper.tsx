import { ReactNode } from 'react'
import styled from 'styled-components'

// Main

interface Props {
    heading: string
    subheading: string
    children: ReactNode
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    flex-direction: column;
    padding: 30px 20px 80px 20px;
    background-color: var(--yellow-main);
    background: transparent linear-gradient(0deg, #F9C41F 0%, #F9A91A 100%) 0% 0% no-repeat padding-box;

    @media only screen and (min-width: 900px) {
        margin-bottom: 60px;
    }
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
    padding: 20px;
    max-width: 1280px;
    box-sizing: border-box;
    background-color: var(--white);
    box-shadow: 0 3px 8px var(--shadow-color);
`

export default ({
    heading,
    children,
    subheading
}: Props) => {
    return (
        <Wrapper>
            <Header>
                <h2>
                    {heading}
                    <span>
                        {subheading}
                    </span>
                </h2>
            </Header>
            <Form>
                { children }
            </Form>
        </Wrapper>
    )
}