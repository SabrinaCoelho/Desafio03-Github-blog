import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme["base-post"]};
    padding: 2rem;
    border-radius: 10px;
    max-width: 416px;
`;
export const RelativeDate = styled.div`
    flex-shrink: 0;
    margin-top: 0%.3125rem;
`;

export const CardHeader = styled.div`
    display: flex;
    gap: 1rem;
`;