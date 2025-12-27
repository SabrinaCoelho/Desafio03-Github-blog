import { useParams } from "react-router-dom";
import { PostTitle } from "./PostTitle";
import { PostContainer, PostContent } from "./style";
import { RepoContext } from "../../Contexts/RepoContext";
import {useEffect, useState } from "react";
import Markdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TitleM } from "../../components/Typography/style";
import { useContextSelector } from "use-context-selector";

export function Post(){
    const {getRepoIssueData, actualIssue, isError} = useContextSelector(RepoContext, context => {
      return{
        getRepoIssueData: context.getRepoIssueData,
        actualIssue: context.actualIssue,
        isError: context.isError
      }
    });
    const {issueId} = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(
      () => {
        if(issueId){
          async function getIssues (issueId: string){
            await getRepoIssueData(issueId);
            setLoaded(true);
          }
          getIssues(issueId);
        }else{
          console.log("iride");
        }
      }, [issueId, getRepoIssueData]
    );
    
    return !isError && loaded  ? (
      <PostContainer>
        <PostTitle />
        <PostContent className="postContainer">
          <Markdown
            children={actualIssue.body}
            components={{
            code(props) {
              const {children} = props
              return (
                <SyntaxHighlighter
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language="javascript"
                  style={coldarkDark}
                />
              ) 
            },
            img(props) {
              return <img alt="" style={{width: "100%"}} src={props.src}/>
            }
          }}
          />
        </PostContent>
      </PostContainer>
    ): isError ? (
      <TitleM style={{textAlign: "center"}}>
        Tivemos um problema. Tente novamente mais tarde.
      </TitleM>
    ) :
    (
      <TitleM style={{textAlign: "center"}}>
        Carregando...
      </TitleM>
    )
}