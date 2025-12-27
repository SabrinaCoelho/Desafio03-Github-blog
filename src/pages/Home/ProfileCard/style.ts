import styled from "styled-components";

export const MainCardBase = styled.div`
    position: relative;
    padding: 2rem;
    background: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    max-width: 54rem;

    
`;
export const ProfileCardContainer = styled(MainCardBase)`
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
    ${props => {
        if(props.imageUrl){
            return `background-image: url(${props.imageUrl});
                    background-size: cover;
                    background-repeat: no-repeat;
            `
        }
    }}
    background-color: ${props => props.theme["base-text"]};
    flex-shrink: 0;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1{
        margin-top: 0.5rem;
    }
    p{
        flex-grow: 1;
    }
`;

export const UserInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;

    span{
        margin-top: .3125rem;
        flex-shrink: 0;
    }
`;

export const UserLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    span{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
`;