import { TextS, TitleL } from "../../../components/Typography/style";
import { CardContainer, CardDescription, CardHeader, RelativeDate } from "./style";
import { RepoContext, type Issue } from "../../../Contexts/RepoContext";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContextSelector } from "use-context-selector";

export function Card(){
    const issues = useContextSelector(RepoContext, context => context.issues);
    return(
        <>
            {
                issues && issues.map((issue: Issue) => {
                    return(
                        <Link to={`post/${issue.number}`} key={issue.id}> 
                            <CardContainer>
                                <CardHeader>
                                    <TitleL>
                                        {issue.title}
                                    </TitleL>
                                    <RelativeDate>
                                        <TextS>
                                            {
                                                formatDistanceToNow(new Date(issue.created_at), { 
                                                    locale: ptBR,
                                                    addSuffix: true
                                                })
                                            }
                                        </TextS>
                                    </RelativeDate>
                                </CardHeader>
                                <CardDescription>
                                    <Markdown>
                                        {issue.body && issue.body.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')}
                                    </Markdown>
                                </CardDescription>
                            </CardContainer>
                        </Link>
                    )
                })
            }
        </>
    )
}
