import styled from "styled-components";

export const ExternalLinkContainer = styled.a`
    text-decoration: none;
    font-size: .75rem;
    line-height: 160%;
    color: ${props => props.theme["blue"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;