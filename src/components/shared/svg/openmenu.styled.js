import styled from 'styled-components';

export const StyledOpenMenu = styled.svg`
@media only screen and (min-width: ${({theme}) => theme.screen.tablet}) {
    display: none;
} 
`