import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.color.lightCream};
    padding: 0 1.5rem 2.5rem 1.5rem;

    .footer-content {
        background-color: ${({theme}) => theme.color.greyBlue};
        padding: 3.375rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.035rem;

        .social-icon-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1.5rem;

            .social-icon {
                cursor: pointer;

                &:hover {
                    filter: brightness(0) saturate(100%) invert(81%) sepia(9%) saturate(1122%) hue-rotate(332deg) brightness(108%) contrast(98%);
                }
            }
        }
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
        padding: 0 5rem 6rem 5rem;

        .footer-content {
            padding: 2.5rem 5.313rem;
            flex-direction: row;
            gap: 6.375rem;

            .social-icon-wrapper {
                margin-left: auto;
            }
        }
    }
`