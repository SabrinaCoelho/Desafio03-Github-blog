import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostTitleContainer, PostTitleInfo, PostTitleLinks } from "./style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { TitleL } from "../../../components/Typography/style";
import { ExternalLink } from "../../../components/ExternalLink";

export function PostTitle(){
    return(
        <PostTitleContainer>
            <PostTitleLinks>
                <ExternalLink>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    VOLTAR
                </ExternalLink>
                <ExternalLink>
                    VER NO GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </ExternalLink>
            </PostTitleLinks>
            <TitleL>
                JavaScript data types and data structures
            </TitleL>
            <PostTitleInfo>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    teste
                </span>
                <span>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 3 dias
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} />
                    5 comentários
                </span>
            </PostTitleInfo>
        </PostTitleContainer>
    );
}