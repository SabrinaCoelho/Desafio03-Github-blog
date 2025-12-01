import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { TextM, TitleL } from "../../../components/Typography/style";
import { ProfileCardContainer, UserInfo, UserLinks, UserPicture } from "./style";



export function ProfileCard(){
    library.add(fas);
    return(
        <ProfileCardContainer>
            <UserPicture />
            <UserInfo>
                <TitleL>
                    Teste
                </TitleL>
                <TextM>
                    Description
                </TextM>
            </UserInfo>
            <UserLinks>
                <span>
                    <FontAwesomeIcon icon="fa-solid fa-github" />
                    <FontAwesomeIcon icon="fa-solid fa-dog" />
                    teste
                </span>
            </UserLinks>
        </ProfileCardContainer>
    );
}