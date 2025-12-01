import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    position: relative;
    margin: -3rem auto;
    padding: 2rem;
    background: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    max-width: 54rem;

    display: flex;
    gap: 2rem;
`;

interface ProfilePictureProps{
    imageUrl?: string;
}

export const UserPicture = styled.div<ProfilePictureProps>`
    height: 9.25rem;
    width: 9.25rem;
    margin-left: .5rem;
    border-radius: 8px;
    background-image: url("https://avatars.githubusercontent.com/u/80803237?v=4");
    background-size: cover;
    background-repeat: no-repeat;
    flex-shrink: 0;
`;

export const UserInfoContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;

    h1{
        margin-top: 0.5rem;
    }
`;
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const UserLinks = styled.div`
    display: flex;
    gap: 1.5rem;

    span{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
`;