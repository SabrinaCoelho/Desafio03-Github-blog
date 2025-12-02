import styled from "styled-components";
import { MainCardBase } from "../../Home/ProfileCard/style";

export const PostTitleContainer = styled(MainCardBase)`
    
`;
export const PostTitleInfo = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 54rem;
    margin-top: 0.5rem;

    span{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
`;
export const PostTitleLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
`;