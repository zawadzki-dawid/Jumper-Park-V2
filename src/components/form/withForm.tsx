import styled from 'styled-components'
import { ComponentType } from 'react'

const Wrapper = styled.section`
    padding: 20px 15px;
    background-color: var(--yellow-main);

    > div {
        padding: 20px 15px;
        background-color: var(--white);
    }
`

const Header = styled.header`
    span {
        color: var(--orange-main);
        
        &::before {
            content: ' - ';
        }
    }
`

const Form = styled.div`
    padding: 20px;
    margin-top: 30px;
    box-sizing: border-box;
    box-shadow: 0 3px 8px var(--shadow-color);
`

export default (
    heading: string,
    subHeading: string,
    Component: ComponentType
): JSX.Element => {
    return (
        <Wrapper>
            <Header>
                <h2>
                    { heading }
                    <span>
                        { subHeading }
                    </span>
                </h2>
            </Header>
            <Form>
                <Component/>
            </Form>
        </Wrapper>
    )
}