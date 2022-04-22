import styled from 'styled-components';

// generic nav styling
export const StyledNav = styled.nav`
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
`

// nav styling for header 

export const StyledHeaderNav = styled(StyledNav)`
    @media only screen and (max-width: ${({theme}) => theme.screen.tablet}) {
        background: linear-gradient(180deg, rgba(254, 252, 247, 0.504981) 0%, #FEFCF7 55.94%);
        position: fixed;
        top: 80px;
        width: 100vw;
        height: 100vh;
        
        ul {
            margin-top: 5rem;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            
            li {
                color: ${({theme}) => theme.color.greyBlue};
                text-transform: capitalize;
                font-family: 'Fraunces', serif;
                font-size: 1.5rem;
                font-weight: 900;
            }
        }
    }

`

// nav styling for footer

export const StyledFooterNav = styled(StyledNav)`

            li:hover {
                cursor: pointer;
                color: white;
            }
            
    @media only screen and (max-width: ${({theme}) => theme.screen.tablet}) {
        ul {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
        }

    }
`