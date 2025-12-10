import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostTitleContainer, PostTitleInfo, PostTitleLinks } from "./style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { TitleL } from "../../../components/Typography/style";
import { ExternalLink } from "../../../components/ExternalLink";
import { RepoContext } from "../../../Contexts/RepoContext";
import { useContext } from "react";

export function PostTitle(){
    const {actualIssue} = useContext(RepoContext);
    
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
                {actualIssue.title}
            </TitleL>
            <PostTitleInfo>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    {actualIssue.author}
                </span>
                <span>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 3 dias
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} />
                    {actualIssue.comments}
                    {
                        actualIssue.comments > 0 ? "comentários" : "comentário"
                    }
                </span>
            </PostTitleInfo>
        </PostTitleContainer>
    );
}