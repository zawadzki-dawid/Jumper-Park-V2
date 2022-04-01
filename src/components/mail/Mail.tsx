import styled from 'styled-components'

const MAIL_ADDRESS = 'jumperpark@wp.pl'

const Mail = styled.a`
    color: var(--black);
    text-decoration: underline;
    font-size: var(--default-font-size);
`

export default () => {
    return (
        <Mail
            href={`mailto:${MAIL_ADDRESS}`}
        >
            {
                MAIL_ADDRESS
            }
        </Mail>
    )
}