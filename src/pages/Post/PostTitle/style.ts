import styled from "styled-components";
import { MainCardBase } from "../../Home/ProfileCard/style";

export const PostTitleContainer = styled(MainCardBase)`
    width: 100%;
`;
export const PostTitleInfo = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 54rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;

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

export const TitleBackButton = styled.span`
    font-size: .75rem;
    font-weight: bold;
    line-height: 160%;
    color: ${props => props.theme["blue"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;