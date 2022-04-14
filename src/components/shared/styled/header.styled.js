import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.color.lightCream};
    padding: 2rem 1.5rem 2.5rem 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
        padding: 2.5rem 2.5rem 3.313rem 2.438rem;
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
        padding: 2.723rem 5rem 3rem 5.006rem;
    }
`

export const StyledNav = styled.nav`
    @media only screen and (max-width: ${({theme}) => theme.screen.tablet}) {
        display: none;
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
        ul {
            display: flex;
            flex-direction: row;
            gap: 2.063rem;

            li {
                text-transform: uppercase;
                font-size: 0.75rem;
                font-weight: 700;
                color: ${({theme}) => theme.color.grey};
            }
        }
    }
    
`