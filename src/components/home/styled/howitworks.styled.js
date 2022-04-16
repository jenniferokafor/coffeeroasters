import styled from 'styled-components';

export const StyledHowItWorks = styled.div`
    background-color: ${({theme}) => theme.color.lightCream};
    padding: 7.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    h3 {
        font-size: 1.5rem;
        color: ${({theme}) => theme.color.grey};
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
        padding: 9rem 2.5rem;
        align-items: flex-start;
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.largeDesktop}) {
        padding: 12.5rem 10.313rem 20rem 10.313rem;
    }
    
`