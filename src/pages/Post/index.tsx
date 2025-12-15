import { useParams } from "react-router-dom";
import { PostTitle } from "./PostTitle";
import { PostContainer, PostContent } from "./style";
import { RepoContext } from "../../Contexts/RepoContext";
import { useCallback, useContext, useEffect } from "react";
import Markdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/* import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { unified } from "unified"; */

export function Post(){
    const {getRepoIssueData, actualIssue} = useContext(RepoContext);
    const {issueId} = useParams();

    useEffect(
      () => {
        console.log(issueId)
        if(issueId){
          console.log(issueId)
          async function batata (issueId: string){
            await getRepoIssueData(issueId);
          }
          batata(issueId);
        }else{
          console.log("iride");
        }
      }, []
    );

    /* const handleLoadData = useCallback(
      async (issueId: string) => {
        await getRepoIssueData(issueId);
      }, [getRepoIssueData]
    ); */
    
    return(
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
                    const {node, ...rest} = props;
                    return <img alt="" style={{width: "100%"}} src={rest.src}/>
                  }
                }}
                />
            </PostContent>
        </PostContainer>
    );
}