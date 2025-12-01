import styled from "styled-components";

export const LayoutContainer = styled.div`
    background-color: ${props => props.theme["base-background"]};
    margin: -2rem auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 14.625rem;
`;