import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.color.lightCream};
    

    // max width set here is tablet screen. So basically mobile devices only

    @media only screen and (max-width: ${({theme}) => theme.screen.tablet}) {
        padding: 2rem 1.5rem 2.5rem 1.5rem;
        display: grid;
        grid-template-columns: 1fr, 1fr;
        grid-template-rows: 1fr, 3fr;
        grid-template-areas: 
        "a b"
        "c c";
        align-items: center;

        .logo {
            grid-area: a;
        }

        .toggle {
            grid-area: b;
            margin-left: auto;
        }

        .header-nav {
            grid-area: c;
        }
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
        padding: 2.5rem 2.5rem 3.313rem 2.438rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .toggle {
            display: none;
        }

        .header-nav {
            display: block !important;
        }
    }

    @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
        padding: 2.723rem 5rem 3rem 5.006rem;
    }
`