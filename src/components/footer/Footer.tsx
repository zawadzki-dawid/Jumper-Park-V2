import styled from 'styled-components'

const Footer = styled.footer`
    background-color: var(--black);
    flex: 0 1 80px;
`

const ContentWrapper = styled.div`
    h2 {
        font-weight: 700;
        font-size: 3.0rem;
    }
`

export default () => {
    return (
        <Footer>
            <ContentWrapper>
                <h2>
                    <span>
                        #
                    </span>
                    daj
                    <span>
                        się
                    </span>
                    zaskoczyć
                </h2>
            </ContentWrapper>
        </Footer>
    )
}