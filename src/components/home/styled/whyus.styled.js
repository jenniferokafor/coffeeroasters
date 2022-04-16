import styled from 'styled-components';

export const StyledWhyUs = styled.div`
    background-color: ${({theme}) => theme.color.lightCream};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.5rem;

    .main-div {
        background-color: ${({theme}) => theme.color.bgBlue};
        color: ${({theme}) => theme.color.lightCream};
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
        width: 23.688rem;
        height: 53.375rem;
        border-radius: 10px;
        padding: 4rem 1.5rem 0 1.5rem;

        h3 {
            font-size: 1.75rem;
        }

        p {
            opacity: 0.8;
        }

        @media only screen and (max-width: ${({theme}) => theme.screen.smallMobile}) {
            width: 18rem;
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
            width: 43rem;
            height: 31.25rem;
        }

        @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
            width: 80rem;
            height: 32.25rem;
            gap: 2rem;
            padding-top: 6.25rem;

            h3 {
                font-size: 2.5rem;
            }

            p {
                max-width: 33.75rem;
            }
        }

    }

    .benefits-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
        margin-top: -37rem;

        @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
                margin-top: -19rem;
            }

        @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
            flex-direction: row;
            margin-top: -13rem;
        }

        .benefit {
            background-color: ${({theme}) => theme.color.cyan};
            color: ${({theme}) => theme.color.lightCream};
            width: 17.438rem;
            height: 23.875rem;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 2rem;
            gap: 3.5rem;

            .text-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;

                h4 {
                    font-size: 1.5rem;
                }
            }

            @media only screen and (max-width: ${({theme}) => theme.screen.smallMobile}) {
                width: 12rem;
            }

            @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
                width: 35.813rem;
                height: 11.25rem;
                flex-direction: row;
                align-items: center;
                text-align: left;
                gap: 3.469rem;

                .text-wrapper {
                    align-items: flex-start;
                }

                .svg {
                    width: 4.5rem;
                }
            }

            @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
                flex-direction: column;
                width: 21.875rem;
                height: 23.875rem;
                text-align: center;

                .text-wrapper {
                    align-items: center;

                }
            }
        }
    }

`