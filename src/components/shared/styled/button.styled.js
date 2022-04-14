import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${({theme}) => theme.color.cyan};
    color: ${({theme}) => theme.color.lightCream};
    font-family: 'Fraunces', serif;
    font-size: 1.125rem;
    font-weight: 900;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: rgba(102, 210, 207, 1);
    }

    &:disabled {
        background-color: rgba(226, 222, 219, 1);
    }
`

// home hero button 
export const CtaButton = styled(StyledButton)`
    width: 13.563rem;
    height: 3.5rem;
`