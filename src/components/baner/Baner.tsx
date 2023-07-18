import styled from 'styled-components'

export interface Props {
    content: string
    subContent?: string
}

const Baner = styled.header`
    min-height: 70px;
    display: flex;
    row-gap: 10px;
    padding-left: 20px;
    padding-top: 16px;
    padding-bottom: 16px;
    // align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background: var(--gradient-main);

    h1 {
        width: 100%;
        margin: auto;
        padding: 0 20px;
        font-weight: 700;
        font-size: 2.5rem;
        max-width: 1280px;

        @media only screen and (min-width: 1000px) {
            padding: 0 60px;
        }
    }
  
  span {
    font-size: 1.6rem;
    padding: 0 20px;

    @media only screen and (min-width: 1000px) {
      padding: 0 60px;
    }
  }
`

export default ({
    content,
    subContent
}: Props) => {
    return (
        <Baner>
            <h1>
                { content }
            </h1>
            {
                subContent && (
                    <span>
                        { subContent }
                    </span>
                )
            }
        </Baner>
    )
}