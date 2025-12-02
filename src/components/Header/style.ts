import styled from "styled-components";
import headerBackgroundImage from "../../assets/Cover.png";

export const HeaderContainer = styled.header`
background-image: url(${headerBackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 1440 / 296;
    width: 100%;
    position: relative;

    img{
        position: absolute;

        top: 3.875rem;
        left: 50%;
        transform: translate(-50%, 0);
        height: auto;
        width: 10%;
        max-width: 9.25rem;
        height: auto;
    }
    
`;