import styled from 'styled-components';

export const StyledProcessWrapper = styled.div`
    background-color: ${({theme}) => theme.color.lightCream};

    .process-content-wrapper {
        background-color: ${({theme}) => theme.color.greyBlue};
        border-radius: 10px;
        margin: 7.5rem 0;
        padding: 5rem 1.5rem;

    }

    @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {

        .process-content-wrapper {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            margin: 9rem 0;
            padding: 6.063rem 6.063rem 4.375rem 2.5rem;
        }
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
        .process-content-wrapper {
            margin: 10.5rem 5rem;
            padding: 6.25rem 0 6.188rem 5.313rem;
        }
    }
`