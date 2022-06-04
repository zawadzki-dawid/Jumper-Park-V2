import styled from 'styled-components'
import { ComponentProps } from 'react'

// Components
import Icon from '../icon/Icon'
import Phone from '../phone/Phone'
import Section from '../section/Section'

// Motto

const MottoStyled = styled.h3`
    font-weight: 700;
    font-size: 2.2rem;

   span {
       color: var(--white);
   } 
`

const Motto = () => {
    return (
        <MottoStyled
            className={'motto'}
        >
            <span>
                #
            </span>
                daj
            <span>
                się
            </span>
                zaSkoczyć
        </MottoStyled>
    )
}

// SocialMedia

type IconImage = Pick<ComponentProps<typeof Icon>, 'image'>

type SocialMediaType = {
    link: string
}  & IconImage

const socialMedia: SocialMediaType[] = [
    {
        link: 'https://www.facebook.com/JumperParkTrampolin',
        image: 'facebook'
    },
    {
        link: 'https://www.instagram.com/jumperpark/',
        image: 'instagram'
    },
    {
        link: 'https://vm.tiktok.com/ZMLKh6Nmf/',
        image: 'tiktok'
    }
]

const SocialMediaStyled = styled.div`
    display: grid;
    column-gap: 20px;
    width: fit-content;
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: auto;

    img {
        height: auto;
    }
`

const SocialMedia = () => {
    return (
        <SocialMediaStyled
            className={'social-media'}
        >
        {
            socialMedia.map(({ link, image }, index) => 
                <a
                    key={index}
                    href={link}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    <Icon
                        image={image}
                    />
                </a>
            )
        }
        </SocialMediaStyled>
    )
}

// Copyright

const CopyrightStyled = styled.span`
    font-size: 1.6rem;
`

const Copyright = () => {
    return (
        <CopyrightStyled
            className={'copyright'}
        >
        {
            `Copyright JumperPark ${new Date().getFullYear()}`
        } 
        </CopyrightStyled>
    )
}

// Main

const Footer = styled.footer`
    padding: 15px 0;
    background: transparent linear-gradient(90deg, #CFD8D7 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;

    @media only screen and (min-width: 850px) {
        padding: 20px 0;
    }
`

const Wrapper = styled.div`
    display: grid;
    row-gap: 15px;
    justify-items: center;

    @media only screen and (min-width: 850px) {
        row-gap: 0;
        justify-items: normal;
        grid-auto-flow: column;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, auto);

        .motto {
            grid-row: 2;
            grid-column: 1;
            align-self: center;
        }

        .phone {
            grid-column: 2;
            justify-self: center;
        }

        .copyright {
            grid-row: 3;
            grid-column: 2;
            justify-self: center;
        }

        .social-media {
            grid-row: 2;
            grid-column: 3;
            justify-self: end;
            align-self: center;
        }
    }
`

export default () => {
    return (
        <Footer>
            <Section>
                <Wrapper>
                    <Motto/>
                    <div
                        className={'phone'}
                    >
                        <Phone/>
                    </div>
                    <SocialMedia/>
                    <Copyright/>
                </Wrapper>
            </Section>
        </Footer>
    )
}