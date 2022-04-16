import styled from 'styled-components';

export const StyledProcess = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3.5rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        h2 {
            font-size: 4.5rem;
            text-align: center;
        }

        h4 {
            font-size: 1.75rem;
        }
    }

    //adding max width here so the text div width is in line with the svg sitting above it

    @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
        max-width: 48rem;

        div {
            align-items: flex-start;
        }
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
        gap: 5.938rem;
        max-width: 65.313rem;
        
        div {
            max-width: 17.813rem;

            h4 {
                font-size: 2rem;
            }
        }
    }
`

// variation for the homepage

export const StyledProcessHome = styled(StyledProcess)`
    div {
        color: ${({theme}) => theme.color.greyBlue};
    }

    h2 {
        color: ${({theme}) => theme.color.orange};
    }
`

