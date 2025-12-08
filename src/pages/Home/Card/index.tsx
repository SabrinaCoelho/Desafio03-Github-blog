import { useContext } from "react";
import { TextS, TitleL } from "../../../components/Typography/style";
import { CardContainer, CardDescription, CardHeader, RelativeDate } from "./style";
import { RepoContext, type Issue } from "../../../Contexts/RepoContext";
import Markdown from "react-markdown";

export function Card(){
    const {issues} = useContext(RepoContext);
    console.log(issues)
    return(
        <>
            {
                issues && issues.map((issue: Issue) => {
                    return(
                        <CardContainer key={issue.id}>
                            <CardHeader>
                                <TitleL>
                                    {issue.title}
                                </TitleL>
                                <RelativeDate>
                                    <TextS>
                                        Há 1 dia
                                    </TextS>
                                </RelativeDate>
                            </CardHeader>
                            <CardDescription>
                                <Markdown>
                                    {issue.body}
                                </Markdown>
                            </CardDescription>
                        </CardContainer>
                    )
                })
            }
        </>
    )
}
