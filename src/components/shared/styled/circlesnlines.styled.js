import styled from 'styled-components';

export const StyledCircleNLines = styled.div`
    position: relative; 

    .circle-1, .circle-2, .circle-3 {
        width: 1.938rem;
        height: 1.938rem;
        border: 2px solid ${({theme}) => theme.color.cyan};
        border-radius: 50%;
    }

    .line-1, .line-2 {
        width: 15rem;
        height: 1px;
        background-color: ${({theme}) => theme.color.orange};
    }

    .cirle-1, .circle-2, .circle-3, .line-1, .line-2 {
        position: absolute;
    }

    .circle-1, .circle-2 {
        z-index: 10;
    }

    .line-1 {
        top: 16px;
        left: 32px;
    }

    .circle-2 {
        top: 0px;
        left: 270px;
    }

    .line-2 {
        top: 16px;
        left: 305px;
    }

    .circle-3 {
        top: 0px;
        left: 545px;
    }

    @media only screen and (max-width: ${({theme}) => theme.screen.tablet}) {
        display: none;
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
        .line-1, .line-2 {
        width: 21rem;
        }

        .circle-2 {
            left: 365px;
        }

        .line-2 {
            left: 400px;
        }

        .circle-3 {
            left: 735px;
        }
    }
`