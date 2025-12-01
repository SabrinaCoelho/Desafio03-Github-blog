import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUser, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { TextM, TitleL } from "../../../components/Typography/style";
import { ProfileCardContainer, UserLinks, UserPicture, UserInfoContainer, ExternalLink } from "./style";



export function ProfileCard(){
    return(
        <ProfileCardContainer>
            <UserPicture />
            <UserInfoContainer>
                <TitleL>
                    Cameron Williamson
                </TitleL>
                <TextM>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </TextM>
                <UserLinks>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        teste
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} />
                        teste
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUser} />
                        teste
                    </span>
                    <ExternalLink>
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </ExternalLink>
                </UserLinks>
            </UserInfoContainer>
        </ProfileCardContainer>
    );
}