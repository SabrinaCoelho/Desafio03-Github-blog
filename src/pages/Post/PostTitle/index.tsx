import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostTitleContainer, PostTitleInfo, PostTitleLinks, TitleBackButton } from "./style";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { TitleL } from "../../../components/Typography/style";
import { ExternalLink } from "../../../components/ExternalLink";
import { RepoContext } from "../../../Contexts/RepoContext";
import { useContext } from "react";
import {formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { useNavigate } from "react-router-dom";

export function PostTitle(){
    const {actualIssue} = useContext(RepoContext);
    
    const navigate = useNavigate();
    return(
        <PostTitleContainer>
            <PostTitleLinks>
                <TitleBackButton onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                    VOLTAR
                </TitleBackButton>
                <ExternalLink githubAccountUrl={actualIssue.url}>
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
                    {
                        formatDistanceToNow(new Date(actualIssue.created_at), { 
                            locale: ptBR,
                            addSuffix: true
                        })
                    }
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} />
                    {actualIssue.comments}
                    {
                        actualIssue.comments > 0 ? " comentários" : " comentário"
                    }
                </span>
            </PostTitleInfo>
        </PostTitleContainer>
    );
}