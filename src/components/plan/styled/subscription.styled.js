import styled from 'styled-components';

export const StyledSubscription = styled.div`
    background-color: ${({theme}) => theme.color.lightCream};
    padding: 0 1.5rem 7.5rem 1.5rem;

    .options-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6.875rem;
    }
`

export const StyledOptions = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;

            .options-header {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                h2 {
                    font-size: 1.5rem;
                    color: ${({theme}) => theme.color.grey};
                }
            }

            .options-selection {
                background-color: rgba(244, 241, 235, 1);
                color: ${({theme}) => theme.color.greyBlue};
                border-radius: 8px;
                padding: 1.5rem;
                

                &:hover {
                        background-color: ${({theme}) => theme.color.cyan};
                        color: ${({theme}) => theme.color.lightCream};
                    }

                h4 {
                    font-size: 1.5rem;
                    margin-bottom: 0.75rem;
                }

                p {
                    font-size: 1rem;
		            line-height: 1.625rem;
                }
            }
`