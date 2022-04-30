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

export const StyledForm = styled.form`
        display: flex;
        flex-direction: column;
        gap: 2rem;

            .legend-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1.125rem;

                legend {
                    font-size: 1.5rem;
                    color: ${({theme}) => theme.color.grey};
                }
            }

            input[type='radio'] {
                opacity: 0;
                position: fixed;
                width: 0;
            }

            label {
                background-color: rgba(244, 241, 235, 1);
                color: ${({theme}) => theme.color.greyBlue};
                border-radius: 8px;
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
                cursor: pointer;

                &:hover {
                        background-color: ${({theme}) => theme.color.orange};
                    }

                .type {
                    font-family: 'Fraunces', serif;
                    font-weight: 900;
                    font-size: 1.5rem;
                }

                .description {
                    font-family: 'Barlow', sans-serif;
                    font-size: 1rem;
		            line-height: 1.625rem;
                }
            }

            input[type='radio']:checked + label {
                background-color: ${({theme}) => theme.color.cyan};
                color: ${({theme}) => theme.color.lightCream};
            }
`