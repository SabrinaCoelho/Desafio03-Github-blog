import { useState } from "react";
import { TextS, TitleS } from "../../../components/Typography/style";
import { PostCounter, SearchFormContainer, SearchFormHeader } from "./style";
import { RepoContext } from "../../../Contexts/RepoContext";
import { useContextSelector } from "use-context-selector";

export function SearchForm(){
    const {issues, getRepoIssues} = useContextSelector(RepoContext, context => {
        return {
            issues: context.issues,
            getRepoIssues: context.getRepoIssues
        }
    });
    const [query, setQuery] = useState("");

    async function handleQuery(query: string){
        setQuery(query);
        await getRepoIssues(query);
    }

    return(
        <SearchFormContainer>
            <SearchFormHeader>
                <TitleS>Publicações</TitleS>
                <PostCounter>
                    <TextS>{issues.length} publicações</TextS>
                </PostCounter>
            </SearchFormHeader>
            <input 
                id="searchField" 
                placeholder="Buscar conteúdo" 
                type="text" 
                name="searchField" 
                value={query}
                onChange={({target}) => handleQuery(target.value)}
            />
        </SearchFormContainer>
    );
}