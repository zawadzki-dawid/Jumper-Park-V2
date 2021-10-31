import styled from 'styled-components'

const PHONE_NUMBER = '+48 576 183 518'

const Phone = styled.a`
    color: var(--black);
    text-decoration: underline;
    font-size: var(--default-font-size);
`

export default () => {
    return (
        <Phone
            href={`tel:${PHONE_NUMBER}`}
        >
            {
                PHONE_NUMBER
            }
        </Phone>
    )
}