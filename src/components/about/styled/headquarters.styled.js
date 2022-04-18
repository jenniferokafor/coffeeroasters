import styled from 'styled-components';

export const StyledHeadquarters = styled.div`
    background-color: ${({theme}) => theme.color.lightCream};
    padding: 0 1.5rem 7.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4.5rem;

    h2 {
        font-size: 1.5rem;
        color: ${({theme}) => theme.color.grey};
    }

    .location-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        color: ${({theme}) => theme.color.greyBlue};

        .location {
            display: flex;
            flex-direction: column;
            align-items: center;

            h3 {
                font-size: 2.25rem;
                margin: 2.996rem 0 1.375rem 0;
            }

            p {
                font-size: 1rem;
                line-height: 1.625rem;
                
            }
        }
    }

    @media only screen and (min-width: ${({theme})=> theme.screen.tablet}) {
        padding: 0 2.5rem 9rem 2.5rem;
        align-items: flex-start;
        text-align: left;

        .location-wrapper {
            flex-direction: row;
            gap: 4rem;

            .location {
                align-items: flex-start;
            }
        }
    }

    @media only screen and (min-width: ${({theme})=> theme.screen.desktop}) {
        padding: 0 10.313rem 10.5rem 10.313rem;

        .location {

            h3 {
                font-size: 2rem;
                margin: 3.003rem 0 1.5rem 0;
            }
        }
    }
`