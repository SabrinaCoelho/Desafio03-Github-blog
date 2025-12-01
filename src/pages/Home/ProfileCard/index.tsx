import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { TextM, TitleL } from "../../../components/Typography/style";
import { ProfileCardContainer, UserInfo, UserLinks, UserPicture } from "./style";



export function ProfileCard(){
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
                    <FontAwesomeIcon icon={faGithub} />
                    teste
                </span>
            </UserLinks>
        </ProfileCardContainer>
    );
}