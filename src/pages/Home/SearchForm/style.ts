import styled from "styled-components";

export const SearchFormContainer = styled.form`
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    max-width: 54rem;
    
    input{
        flex: 1;
        color: ${props => props.theme["base-text"]};
        margin-top: .75rem;
        background: ${props => props.theme["base-input"]};
        padding: .75rem 1rem;
        border: 0;
        border: 1px solid ${props => props.theme["base-border"]};
        border-radius: 6px;

        &::placeholder{
            color: ${props => props.theme["base-label"]};
        }
    }
`;

export const SearchFormHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PostCounter = styled.span`
`;