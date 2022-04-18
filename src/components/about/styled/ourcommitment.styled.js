import styled from 'styled-components';

export const StyledOurCommitment = styled.div`
    background-color: ${({theme})=> theme.color.lightCream};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.5rem;
    padding: 7.5rem 1.5rem;

    h2 {
        font-size: 2rem;
    }

    @media only screen and (min-width: ${({theme})=> theme.screen.tablet} ) {
        padding: 9rem 2.5rem;
    }

    @media only screen and (min-width: ${({theme})=> theme.screen.desktop} ) {
        padding: 10.5rem 10.313rem;
        gap: 10.5rem;

        h2 {
            font-size: 2.5rem;
        }
    }

    // first section with person pouring coffee

    .section-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 3rem;

        img {
            width: 20.438rem;
            border-radius: 8px;
        }

        img:nth-child(2), img:nth-child(3) {
            display: none;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.875rem;
            color: ${({theme})=> theme.color.greyBlue};
        }

        @media only screen and (min-width: ${({theme})=> theme.screen.tablet} ) {
            flex-direction: row;
            align-items: center;
            text-align: left;
            gap: 4.313rem;

            img:nth-child(1) {
                display: none;
            }

            img:nth-child(2) {
                display: block;
                width: 17.563rem;
            }

            div {
                align-items: flex-start;
                
            }
        }

        @media only screen and (min-width: ${({theme})=> theme.screen.desktop} ) {
            img:nth-child(1), img:nth-child(2) {
                display: none;
            }

            img:nth-child(3) {
                display: block;
                width: 27.813rem;
            }

            div {
                gap: 2rem;
            }
        }

    }

    // second section with coffee cup on the table

    .section-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        img {
            width: 14.188rem;
            border-radius: 8px;
            margin-bottom: -4.5rem;
            z-index: 10;
        }

        img:nth-child(2), img:nth-child(3) {
            display: none;
        }

        div {
            background-color: ${({theme})=> theme.color.greyBlue};
            color: ${({theme})=> theme.color.lightCream};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 8.875rem 1.5rem 3.813rem 1.5rem;
        }

        @media only screen and (min-width: ${({theme})=> theme.screen.tablet} ) {

            img:nth-child(1), img:nth-child(3) {
                display: none;
        }

            img:nth-child(2) {
                display: block;
                width: 35.813rem;
                margin-bottom: -10rem;
            }

            div {
                padding: 14rem 4.625rem 4rem 4.625rem;
            }
        }

        @media only screen and (min-width: ${({theme})=> theme.screen.largeDesktop} ) {
            img:nth-child(2) {
                display: none;
            }

            img:nth-child(3) {
                display: block;
                width: 27.813rem;
                margin: 0 0 -24rem 38rem;
            }

            div {
                width: 80rem;
                padding: 5.5rem 0 11rem 0;
                align-items: flex-start;
                text-align: left;
                gap: 2rem;

                h2, p {
                    margin-left: 5.313rem;
                }

                p {
                    max-width: 33.75rem;
                }
            }
        }
    
    }
`