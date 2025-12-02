import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'
import { TextM, TitleL } from "../../../components/Typography/style";
import { ProfileCardContainer, UserLinks, UserPicture, UserInfoContainer, UserInfoHeader } from "./style";
import { ExternalLink } from "../../../components/ExternalLink";



export function ProfileCard(){
    return(
        <ProfileCardContainer>
            <UserPicture />
            <UserInfoContainer>
                <UserInfoHeader>
                    <TitleL>
                        Cameron Williamson
                    </TitleL>
                    <ExternalLink>
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </ExternalLink>
                </UserInfoHeader>
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
                </UserLinks>
            </UserInfoContainer>
        </ProfileCardContainer>
    );
}