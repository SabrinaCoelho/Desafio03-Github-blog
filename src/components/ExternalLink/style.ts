import styled from "styled-components";

export const ExternalLinkContainer = styled.span`
    font-size: .75rem;
    line-height: 160%;
    color: ${props => props.theme["blue"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;