import styled from 'styled-components';

export const StyledCollectionWrapper = styled.div`
    background-color: ${({theme}) => theme.color.lightCream};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 7.5rem 2.813rem;

    h2 {
        font-size: 2.5rem;
        background: #FEFCF7;
        background: -webkit-linear-gradient(to top, #FEFCF7 0%, #696866 86%);
        background: -moz-linear-gradient(to top, #FEFCF7 0%, #696866 86%);
        background: linear-gradient(to top, #FEFCF7 0%, #696866 86%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        

    }

    .products-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
        padding: 14.5rem 6.125rem 9rem 6.125rem;

        h2 {
            font-size: 6rem;
        }

        .products-wrapper {
            margin-top: -3.2rem;
        }
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
        h2 {
            font-size: 9.375rem;
        }

        .products-wrapper {
            flex-direction: row;
            margin-top: -5.6rem;
        }
    }

    /* product boxes */

    .product {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${({theme}) => theme.color.darkGrey};
        text-align: center;

        img {
            max-width: 12.518rem;
        }

        div {
            h4 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
            flex-direction: row;
            gap: 7.5rem;
            align-items: flex-start;
            text-align: left;

            img {
                max-width: 15.938rem;
            }

            div {
                max-width: 17.625rem;

                h4 {
                    margin-top: 3rem;
                }
            }
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
            flex-direction: column;
            gap: 4.438rem;
            text-align: center;

            div {
                h4 {
                    margin: 0 0 1.5rem 0;
                }
            }
        }
    }
`