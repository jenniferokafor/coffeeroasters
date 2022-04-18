import styled from 'styled-components';

// desktop hero images
import mobileHeroImg from '../../../assets/home/mobile/image-hero-coffeepress.jpg';
import tabHeroImg from '../../../assets/home/tablet/image-hero-coffeepress.jpg'
import dskHeroImg from '../../../assets/home/desktop/image-hero-coffeepress.jpg'

// about hero images
import aboutMobileHeroImg from '../../../assets/about/mobile/image-hero-whitecup.jpg';
import aboutTabHeroImg from '../../../assets/about/tablet/image-hero-whitecup.jpg';
import aboutDesktopHeroImg from '../../../assets/about/desktop/image-hero-whitecup.jpg';

// 
// general hero styling

export const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.color.lightCream};

    .bg-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 20.438rem;
        height: 31.25rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 0.625rem;

        @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
            width: 43.063rem;
            align-items: flex-start;   
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
            width: 60rem;
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
            width: 80rem;
        }
    }

    .hero-content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
            max-width: 24.875rem;
            align-items: flex-start;
            text-align: left;
            padding-left: 3.625rem;
            
        }
        
        h1 {
        font-size: 2.5rem;
        font-weight: 900;
        color: ${({theme}) => theme.color.lightCream};
        }

        p {
            color: ${({theme}) => theme.color.lightCream};
            opacity: 0.8;
        }
    } 

`

// hero for the homepage

export const StyledHomeHero = styled(StyledHero)`

    .bg-box {
        background-image: url(${mobileHeroImg});

        @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
            background-image: url(${tabHeroImg});
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
            background-image: url(${dskHeroImg});
        }

        button {
            margin-top: 0.938rem;
        }
    }
`

// hero for About page
export const StyledAboutHero = styled(StyledHero)`
    .bg-box {
        height: 25rem;
        background-image: url(${aboutMobileHeroImg});

        @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
            background-image: url(${aboutTabHeroImg});
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
            height: 28.125rem;
            background-image: url(${aboutDesktopHeroImg});
        }
    }
`