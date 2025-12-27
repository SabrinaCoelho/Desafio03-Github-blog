import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'
import { TextM, TitleL, TitleM } from "../../../components/Typography/style";
import { ProfileCardContainer, UserLinks, UserPicture, UserInfoContainer, UserInfoHeader } from "./style";
import { ExternalLink } from "../../../components/ExternalLink";
import { useContext } from "react";
import { RepoContext } from "../../../Contexts/RepoContext";

export function ProfileCard(){
    const {user, isError } = useContext(RepoContext);
    return(
        <ProfileCardContainer>
            {
                isError ? <TitleM>
                    Tivemos um problema. Tente novamente mais tarde.
                </TitleM> : <>
                    <UserPicture imageUrl={user.avatar_url}/>
                    <UserInfoContainer>
                        <UserInfoHeader>
                            <TitleL>
                                {user.name}
                            </TitleL>
                            <ExternalLink githubAccountUrl={user.html_url}>
                                GITHUB
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </ExternalLink>
                        </UserInfoHeader>
                        <TextM>
                            {user.bio}
                        </TextM>
                        <UserLinks>
                            <span>
                                <FontAwesomeIcon icon={faGithub} />
                                {user.login}
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faBuilding} />
                                {user.company ?? "-"}
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faUser} />
                                {user.followers} seguidores
                            </span>
                        </UserLinks>
                    </UserInfoContainer>
                </>
            }
            
        </ProfileCardContainer>
    );
}