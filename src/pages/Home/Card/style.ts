import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${props => props.theme["base-post"]};
    padding: 2rem;
    border-radius: 10px;
    width: 26rem;
    height: 16.25rem;
    display: flex;
    flex-direction: column;
`;
export const RelativeDate = styled.div`
    flex-shrink: 0;
    margin-top: 0%.3125rem;
`;

export const CardHeader = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
`;
export const CardDescription = styled.div`
    flex: 1;
    overflow: hidden;
`;